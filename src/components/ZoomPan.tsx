import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export type ZoomPoint = {
  frame: number;
  x: number; // 0-1, center of zoom
  y: number; // 0-1, center of zoom
  scale: number; // 1 = normal, 2 = 2x zoom
};

export type ZoomPanProps = {
  children: React.ReactNode;
  keyframes: ZoomPoint[];
  easing?: "linear" | "smooth";
};

export const ZoomPan: React.FC<ZoomPanProps> = ({
  children,
  keyframes,
  easing = "smooth",
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  if (keyframes.length === 0) {
    return <AbsoluteFill>{children}</AbsoluteFill>;
  }

  // Sort keyframes by frame number
  const sortedKeyframes = [...keyframes].sort((a, b) => a.frame - b.frame);

  // Find current keyframe pair
  let fromKeyframe = sortedKeyframes[0];
  let toKeyframe = sortedKeyframes[0];

  for (let i = 0; i < sortedKeyframes.length - 1; i++) {
    if (frame >= sortedKeyframes[i].frame && frame < sortedKeyframes[i + 1].frame) {
      fromKeyframe = sortedKeyframes[i];
      toKeyframe = sortedKeyframes[i + 1];
      break;
    }
    if (frame >= sortedKeyframes[sortedKeyframes.length - 1].frame) {
      fromKeyframe = sortedKeyframes[sortedKeyframes.length - 1];
      toKeyframe = sortedKeyframes[sortedKeyframes.length - 1];
    }
  }

  // Interpolate between keyframes
  const progress = fromKeyframe === toKeyframe
    ? 1
    : interpolate(
        frame,
        [fromKeyframe.frame, toKeyframe.frame],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );

  // Apply easing
  const easedProgress = easing === "smooth"
    ? progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2
    : progress;

  const currentX = fromKeyframe.x + (toKeyframe.x - fromKeyframe.x) * easedProgress;
  const currentY = fromKeyframe.y + (toKeyframe.y - fromKeyframe.y) * easedProgress;
  const currentScale = fromKeyframe.scale + (toKeyframe.scale - fromKeyframe.scale) * easedProgress;

  // Calculate transform
  // When zoomed, we need to offset to keep the focus point centered
  const offsetX = (currentX - 0.5) * width * (currentScale - 1);
  const offsetY = (currentY - 0.5) * height * (currentScale - 1);

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${currentScale}) translate(${-offsetX / currentScale}px, ${-offsetY / currentScale}px)`,
        transformOrigin: `${currentX * 100}% ${currentY * 100}%`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
