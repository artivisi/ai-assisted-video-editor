// Types for silence detection and removal

export type AudioSegment = {
  start: number; // seconds
  end: number; // seconds
  type: "speech" | "silence";
  avgVolume?: number; // dB
};

export type SilenceDetectionResult = {
  segments: AudioSegment[];
  totalDuration: number;
  speechDuration: number;
  silenceDuration: number;
  silencePercentage: number;
};

export type CutPoint = {
  originalStart: number; // seconds in original video
  originalEnd: number;
  newStart: number; // seconds in output video
  newEnd: number;
  type: "keep" | "remove" | "speedup";
  speedFactor?: number; // for speedup type
};

export type EditDecisionList = {
  sourceFile: string;
  cuts: CutPoint[];
  originalDuration: number;
  outputDuration: number;
  timeSaved: number;
};

// Settings for silence detection
export type SilenceDetectionConfig = {
  silenceThreshold: number; // dB, typically -40 to -30
  minSilenceDuration: number; // seconds, minimum silence to detect
  minSpeechDuration: number; // seconds, minimum speech to keep
  paddingBefore: number; // seconds, padding before speech
  paddingAfter: number; // seconds, padding after speech
};

export const DEFAULT_SILENCE_CONFIG: SilenceDetectionConfig = {
  silenceThreshold: -35, // dB
  minSilenceDuration: 0.5, // 500ms
  minSpeechDuration: 0.3, // 300ms
  paddingBefore: 0.1, // 100ms
  paddingAfter: 0.15, // 150ms
};

// Helper to calculate new timeline after cuts
export function calculateEditedTimeline(
  silenceResult: SilenceDetectionResult,
  config: Partial<SilenceDetectionConfig> = {}
): EditDecisionList {
  const cfg = { ...DEFAULT_SILENCE_CONFIG, ...config };
  const cuts: CutPoint[] = [];
  let newTime = 0;

  for (const segment of silenceResult.segments) {
    if (segment.type === "speech") {
      // Add padding
      const paddedStart = Math.max(0, segment.start - cfg.paddingBefore);
      const paddedEnd = Math.min(silenceResult.totalDuration, segment.end + cfg.paddingAfter);

      cuts.push({
        originalStart: paddedStart,
        originalEnd: paddedEnd,
        newStart: newTime,
        newEnd: newTime + (paddedEnd - paddedStart),
        type: "keep",
      });

      newTime += paddedEnd - paddedStart;
    }
    // Silence segments are implicitly removed (not added to cuts)
  }

  return {
    sourceFile: "",
    cuts,
    originalDuration: silenceResult.totalDuration,
    outputDuration: newTime,
    timeSaved: silenceResult.totalDuration - newTime,
  };
}

// Convert EDL to FFmpeg filter complex for cutting
export function edlToFfmpegFilter(edl: EditDecisionList): string {
  if (edl.cuts.length === 0) return "";

  const parts: string[] = [];

  edl.cuts.forEach((cut, i) => {
    parts.push(
      `[0:v]trim=start=${cut.originalStart}:end=${cut.originalEnd},setpts=PTS-STARTPTS[v${i}];` +
      `[0:a]atrim=start=${cut.originalStart}:end=${cut.originalEnd},asetpts=PTS-STARTPTS[a${i}]`
    );
  });

  const videoConcat = edl.cuts.map((_, i) => `[v${i}]`).join("");
  const audioConcat = edl.cuts.map((_, i) => `[a${i}]`).join("");

  parts.push(`${videoConcat}concat=n=${edl.cuts.length}:v=1:a=0[outv]`);
  parts.push(`${audioConcat}concat=n=${edl.cuts.length}:v=0:a=1[outa]`);

  return parts.join("; ");
}

// Convert seconds to frame number
export function secondsToFrame(seconds: number, fps: number): number {
  return Math.round(seconds * fps);
}

// Convert EDL to Remotion Series sequences
export function edlToRemotionSequences(edl: EditDecisionList, fps: number) {
  return edl.cuts.map((cut, index) => ({
    id: `cut-${index}`,
    from: secondsToFrame(cut.newStart, fps),
    durationInFrames: secondsToFrame(cut.newEnd - cut.newStart, fps),
    originalFrom: secondsToFrame(cut.originalStart, fps),
    originalDuration: secondsToFrame(cut.originalEnd - cut.originalStart, fps),
  }));
}
