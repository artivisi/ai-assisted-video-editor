// Types for transcript and subtitle data

export type TranscriptWord = {
  word: string;
  start: number; // seconds
  end: number; // seconds
  confidence?: number;
};

export type TranscriptSegment = {
  id: string;
  start: number; // seconds
  end: number; // seconds
  text: string;
  words?: TranscriptWord[];
  speaker?: string;
};

export type Transcript = {
  segments: TranscriptSegment[];
  language?: string;
  duration: number; // total duration in seconds
};

// Subtitle cue for display
export type SubtitleCue = {
  id: string;
  startFrame: number;
  endFrame: number;
  text: string;
  speaker?: string;
};

// Infographic/slide cue triggered by transcript content
export type InfographicCue = {
  id: string;
  type: "slide" | "diagram" | "bullet-list" | "code" | "image" | "callout";
  triggerWord?: string; // word in transcript that triggers this
  triggerSegmentId?: string; // or trigger by segment ID
  startFrame: number;
  endFrame: number;
  content: InfographicContent;
};

export type InfographicContent =
  | SlideContent
  | DiagramContent
  | BulletListContent
  | CodeContent
  | ImageContent
  | CalloutContent;

export type SlideContent = {
  type: "slide";
  title: string;
  subtitle?: string;
  body?: string;
};

export type DiagramContent = {
  type: "diagram";
  title?: string;
  svgPath?: string; // path to SVG file
  svgContent?: string; // or inline SVG
};

export type BulletListContent = {
  type: "bullet-list";
  title?: string;
  items: string[];
  highlightIndex?: number; // which item to highlight
};

export type CodeContent = {
  type: "code";
  code: string;
  language?: string;
  title?: string;
  highlightLines?: number[];
};

export type ImageContent = {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
};

export type CalloutContent = {
  type: "callout";
  text: string;
  icon?: "info" | "warning" | "tip" | "important";
};

// Combined episode data with transcript
export type EpisodeWithTranscript = {
  episodeId: string;
  seriesId: string;
  title: string;
  transcript: Transcript;
  subtitles: SubtitleCue[];
  infographics: InfographicCue[];
};

// Helper to convert seconds to frames
export function secondsToFrames(seconds: number, fps: number): number {
  return Math.round(seconds * fps);
}

// Helper to convert transcript segments to subtitle cues
export function transcriptToSubtitles(
  transcript: Transcript,
  fps: number,
  maxCharsPerLine: number = 42
): SubtitleCue[] {
  const cues: SubtitleCue[] = [];

  for (const segment of transcript.segments) {
    // Split long segments into multiple cues
    const words = segment.text.split(" ");
    let currentLine = "";
    let lineStartTime = segment.start;
    let wordIndex = 0;

    for (const word of words) {
      if ((currentLine + " " + word).trim().length > maxCharsPerLine && currentLine) {
        // Calculate end time proportionally
        const progress = wordIndex / words.length;
        const lineEndTime = segment.start + (segment.end - segment.start) * progress;

        cues.push({
          id: `${segment.id}-${cues.length}`,
          startFrame: secondsToFrames(lineStartTime, fps),
          endFrame: secondsToFrames(lineEndTime, fps),
          text: currentLine.trim(),
          speaker: segment.speaker,
        });

        currentLine = word;
        lineStartTime = lineEndTime;
      } else {
        currentLine = (currentLine + " " + word).trim();
      }
      wordIndex++;
    }

    // Add remaining text
    if (currentLine) {
      cues.push({
        id: `${segment.id}-${cues.length}`,
        startFrame: secondsToFrames(lineStartTime, fps),
        endFrame: secondsToFrames(segment.end, fps),
        text: currentLine.trim(),
        speaker: segment.speaker,
      });
    }
  }

  return cues;
}
