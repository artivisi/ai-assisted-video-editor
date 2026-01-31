// Types for camera switching (webcam fullscreen vs PIP vs hidden)

export type CameraMode = "fullscreen" | "pip" | "hidden";

export type CameraSwitchCue = {
  startFrame: number;
  endFrame: number;
  mode: CameraMode;
  pipPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  pipSize?: "small" | "medium" | "large";
  transition?: "cut" | "fade" | "slide";
};

export type CameraSwitchConfig = {
  defaultMode: CameraMode;
  defaultPipPosition: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  defaultPipSize: "small" | "medium" | "large";
  transitionFrames: number;
};

export const DEFAULT_CAMERA_CONFIG: CameraSwitchConfig = {
  defaultMode: "pip",
  defaultPipPosition: "bottom-right",
  defaultPipSize: "medium",
  transitionFrames: 10,
};

// Content type to camera mode mapping
export type ContentType =
  | "intro"
  | "explanation"
  | "code-demo"
  | "diagram"
  | "conclusion"
  | "transition";

export const CONTENT_TO_CAMERA: Record<ContentType, CameraMode> = {
  intro: "fullscreen",
  explanation: "fullscreen",
  "code-demo": "pip",
  diagram: "hidden",
  conclusion: "fullscreen",
  transition: "hidden",
};

// Generate camera switches from transcript segments with content tags
export function generateCameraSwitches(
  segments: { startFrame: number; endFrame: number; contentType: ContentType }[],
  config: Partial<CameraSwitchConfig> = {}
): CameraSwitchCue[] {
  const cfg = { ...DEFAULT_CAMERA_CONFIG, ...config };
  const cues: CameraSwitchCue[] = [];

  for (const segment of segments) {
    const mode = CONTENT_TO_CAMERA[segment.contentType];

    // Merge with previous if same mode
    const prev = cues[cues.length - 1];
    if (prev && prev.mode === mode && prev.endFrame === segment.startFrame) {
      prev.endFrame = segment.endFrame;
    } else {
      cues.push({
        startFrame: segment.startFrame,
        endFrame: segment.endFrame,
        mode,
        pipPosition: cfg.defaultPipPosition,
        pipSize: cfg.defaultPipSize,
        transition: "fade",
      });
    }
  }

  return cues;
}

// Helper to get current camera mode at a given frame
export function getCameraModeAtFrame(
  cues: CameraSwitchCue[],
  frame: number,
  defaultMode: CameraMode = "pip"
): { mode: CameraMode; cue: CameraSwitchCue | null } {
  for (const cue of cues) {
    if (frame >= cue.startFrame && frame < cue.endFrame) {
      return { mode: cue.mode, cue };
    }
  }
  return { mode: defaultMode, cue: null };
}
