// Types for auto-zoom generation

export type CursorPosition = {
  frame: number;
  x: number; // 0-1 normalized
  y: number; // 0-1 normalized
  timestamp: number; // seconds
};

export type ActivityRegion = {
  startFrame: number;
  endFrame: number;
  x: number; // center x (0-1)
  y: number; // center y (0-1)
  width: number; // 0-1
  height: number; // 0-1
  confidence: number;
};

export type ZoomKeyframe = {
  frame: number;
  x: number;
  y: number;
  scale: number;
  easing?: "linear" | "smooth";
};

export type AutoZoomConfig = {
  fps: number;
  minZoomDuration: number; // frames, minimum time to stay zoomed
  maxZoomScale: number; // maximum zoom level
  defaultScale: number; // scale when not zooming
  transitionFrames: number; // frames to transition between zoom levels
  cursorPadding: number; // 0-1, padding around cursor when zoomed
  activityThreshold: number; // 0-1, minimum activity to trigger zoom
};

export const DEFAULT_ZOOM_CONFIG: AutoZoomConfig = {
  fps: 30,
  minZoomDuration: 90, // 3 seconds
  maxZoomScale: 2.5,
  defaultScale: 1,
  transitionFrames: 15, // 0.5 seconds
  cursorPadding: 0.15,
  activityThreshold: 0.3,
};

// Generate zoom keyframes from cursor positions
export function cursorToZoomKeyframes(
  cursorPositions: CursorPosition[],
  config: Partial<AutoZoomConfig> = {}
): ZoomKeyframe[] {
  const cfg = { ...DEFAULT_ZOOM_CONFIG, ...config };
  const keyframes: ZoomKeyframe[] = [];

  if (cursorPositions.length === 0) {
    return [{ frame: 0, x: 0.5, y: 0.5, scale: 1 }];
  }

  // Start with default view
  keyframes.push({
    frame: 0,
    x: 0.5,
    y: 0.5,
    scale: cfg.defaultScale,
  });

  // Group cursor movements into "dwelling" periods
  let dwellStart = cursorPositions[0];
  let dwellPositions: CursorPosition[] = [dwellStart];

  for (let i = 1; i < cursorPositions.length; i++) {
    const pos = cursorPositions[i];
    const prevPos = cursorPositions[i - 1];

    // Calculate movement distance
    const distance = Math.sqrt(
      Math.pow(pos.x - prevPos.x, 2) + Math.pow(pos.y - prevPos.y, 2)
    );

    // If cursor moved significantly or enough time passed, start new dwell
    const timeDiff = pos.frame - dwellStart.frame;
    if (distance > 0.1 || timeDiff > cfg.minZoomDuration * 2) {
      // Process previous dwell period
      if (dwellPositions.length > 0 && timeDiff >= cfg.minZoomDuration) {
        const avgX = dwellPositions.reduce((s, p) => s + p.x, 0) / dwellPositions.length;
        const avgY = dwellPositions.reduce((s, p) => s + p.y, 0) / dwellPositions.length;

        // Add zoom-in keyframe
        keyframes.push({
          frame: dwellStart.frame + cfg.transitionFrames,
          x: avgX,
          y: avgY,
          scale: cfg.maxZoomScale,
          easing: "smooth",
        });

        // Add zoom-out keyframe
        const dwellEnd = dwellPositions[dwellPositions.length - 1];
        keyframes.push({
          frame: dwellEnd.frame,
          x: avgX,
          y: avgY,
          scale: cfg.maxZoomScale,
        });
        keyframes.push({
          frame: dwellEnd.frame + cfg.transitionFrames,
          x: 0.5,
          y: 0.5,
          scale: cfg.defaultScale,
          easing: "smooth",
        });
      }

      // Start new dwell
      dwellStart = pos;
      dwellPositions = [pos];
    } else {
      dwellPositions.push(pos);
    }
  }

  return keyframes;
}

// Merge nearby keyframes to avoid jitter
export function smoothKeyframes(
  keyframes: ZoomKeyframe[],
  minGap: number = 30
): ZoomKeyframe[] {
  if (keyframes.length <= 1) return keyframes;

  const smoothed: ZoomKeyframe[] = [keyframes[0]];

  for (let i = 1; i < keyframes.length; i++) {
    const prev = smoothed[smoothed.length - 1];
    const curr = keyframes[i];

    if (curr.frame - prev.frame >= minGap) {
      smoothed.push(curr);
    }
  }

  return smoothed;
}
