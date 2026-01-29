import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type VideoLowerThirdProps = {
  title: string;
  subtitle?: string;
  link?: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  showAt?: number;
  hideAt?: number;
  accentColor?: string;
};

export const VideoLowerThird: React.FC<VideoLowerThirdProps> = ({
  title,
  subtitle,
  link,
  position = "bottom-left",
  showAt = 0,
  hideAt,
  accentColor = "#22c55e",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const effectiveHideAt = hideAt ?? durationInFrames - 30;

  const enterSpring = spring({
    frame: frame - showAt,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const exitSpring = spring({
    frame: frame - effectiveHideAt,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const progress = enterSpring - exitSpring;

  if (progress <= 0) return null;

  const slideX = interpolate(progress, [0, 1], [-100, 0]);
  const opacity = progress;

  const positionStyles: Record<string, React.CSSProperties> = {
    "bottom-left": { bottom: 80, left: 40 },
    "bottom-right": { bottom: 80, right: 40 },
    "top-left": { top: 80, left: 40 },
    "top-right": { top: 80, right: 40 },
  };

  const isRight = position.includes("right");

  return (
    <AbsoluteFill>
      <div
        className="absolute flex items-start gap-3"
        style={{
          ...positionStyles[position],
          transform: `translateX(${isRight ? -slideX : slideX}px)`,
          opacity,
          flexDirection: isRight ? "row-reverse" : "row",
        }}
      >
        {/* Accent bar */}
        <div
          className="w-2 rounded-full"
          style={{
            backgroundColor: accentColor,
            height: subtitle || link ? "100px" : "60px",
            boxShadow: `0 0 20px ${accentColor}80`,
          }}
        />

        {/* Content */}
        <div className={`flex flex-col gap-1 ${isRight ? "items-end" : "items-start"}`}>
          <h2
            className="text-4xl font-bold text-white"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-2xl text-gray-200"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              {subtitle}
            </p>
          )}
          {link && (
            <div
              className="mt-2 px-4 py-2 rounded-lg text-xl font-mono"
              style={{
                backgroundColor: `${accentColor}30`,
                border: `1px solid ${accentColor}`,
                color: accentColor,
              }}
            >
              {link}
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
