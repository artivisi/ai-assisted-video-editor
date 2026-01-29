import { AbsoluteFill, OffthreadVideo, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type WebcamOverlayProps = {
  src: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  size?: "small" | "medium" | "large";
  shape?: "circle" | "rounded" | "rectangle";
  borderColor?: string;
  showAt?: number;
  hideAt?: number;
  volume?: number;
};

export const WebcamOverlay: React.FC<WebcamOverlayProps> = ({
  src,
  position = "bottom-right",
  size = "medium",
  shape = "rounded",
  borderColor = "#22c55e",
  showAt = 0,
  hideAt,
  volume = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const effectiveHideAt = hideAt ?? durationInFrames;

  const enterSpring = spring({
    frame: frame - showAt,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const exitProgress = hideAt
    ? interpolate(frame, [effectiveHideAt - 15, effectiveHideAt], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;

  const progress = enterSpring * exitProgress;

  if (progress <= 0) return null;

  const sizeMap = {
    small: { width: 200, height: 150 },
    medium: { width: 320, height: 240 },
    large: { width: 480, height: 360 },
  };

  const { width, height } = sizeMap[size];

  const positionStyles: Record<string, React.CSSProperties> = {
    "bottom-right": { bottom: 40, right: 40 },
    "bottom-left": { bottom: 40, left: 40 },
    "top-right": { top: 40, right: 40 },
    "top-left": { top: 40, left: 40 },
  };

  const shapeStyles: Record<string, React.CSSProperties> = {
    circle: { borderRadius: "50%", width: Math.min(width, height), height: Math.min(width, height) },
    rounded: { borderRadius: 20 },
    rectangle: { borderRadius: 0 },
  };

  const scale = interpolate(progress, [0, 1], [0.5, 1]);
  const opacity = progress;

  return (
    <AbsoluteFill>
      <div
        className="absolute overflow-hidden"
        style={{
          ...positionStyles[position],
          ...shapeStyles[shape],
          width: shape === "circle" ? Math.min(width, height) : width,
          height: shape === "circle" ? Math.min(width, height) : height,
          transform: `scale(${scale})`,
          opacity,
          border: `4px solid ${borderColor}`,
          boxShadow: `0 0 30px ${borderColor}60, 0 10px 40px rgba(0,0,0,0.5)`,
        }}
      >
        <OffthreadVideo
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          volume={volume}
        />
      </div>
    </AbsoluteFill>
  );
};
