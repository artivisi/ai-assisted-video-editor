import { interpolate, useCurrentFrame } from "remotion";

type EspressoCupProps = {
  startFrame?: number;
  color?: string;
  size?: number;
};

export const EspressoCup: React.FC<EspressoCupProps> = ({
  startFrame = 0,
  color = "#06b6d4",
  size = 200,
}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = Math.max(0, frame - startFrame);

  // Path lengths (approximate)
  const pathLengths = {
    saucer: 220,
    cupBottom: 145,
    cupLeft: 90,
    cupRight: 90,
    cupRim: 130,
    handle: 100,
    steam1: 80,
    steam2: 80,
    steam3: 80,
  };

  // Animation timing (frames after startFrame)
  const drawPath = (length: number, start: number, duration: number) => {
    const progress = interpolate(adjustedFrame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return {
      strokeDasharray: length,
      strokeDashoffset: length * (1 - progress),
      opacity: adjustedFrame >= start ? 1 : 0,
    };
  };

  // Draw sequence timing
  const saucerStyle = drawPath(pathLengths.saucer, 0, 15);
  const cupBottomStyle = drawPath(pathLengths.cupBottom, 10, 12);
  const cupLeftStyle = drawPath(pathLengths.cupLeft, 18, 10);
  const cupRightStyle = drawPath(pathLengths.cupRight, 18, 10);
  const cupRimStyle = drawPath(pathLengths.cupRim, 28, 12);
  const handleStyle = drawPath(pathLengths.handle, 35, 10);
  const steam1Style = drawPath(pathLengths.steam1, 45, 12);
  const steam2Style = drawPath(pathLengths.steam2, 48, 12);
  const steam3Style = drawPath(pathLengths.steam3, 51, 12);

  // Steam floating animation (after drawing completes)
  const steamFloat = adjustedFrame > 60 ? Math.sin((adjustedFrame - 60) * 0.15) * 3 : 0;
  const steamOpacity = interpolate(adjustedFrame, [45, 55, 90], [0, 1, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: size, height: size }}
    >
      {/* Saucer */}
      <ellipse
        cx="100"
        cy="170"
        rx="70"
        ry="12"
        style={saucerStyle}
      />

      {/* Cup bottom */}
      <ellipse
        cx="100"
        cy="155"
        rx="45"
        ry="10"
        style={cupBottomStyle}
      />

      {/* Cup body left */}
      <path
        d="M55 155 Q45 130 50 100 Q52 85 60 75"
        style={cupLeftStyle}
      />

      {/* Cup body right */}
      <path
        d="M145 155 Q155 130 150 100 Q148 85 140 75"
        style={cupRightStyle}
      />

      {/* Cup rim */}
      <ellipse
        cx="100"
        cy="75"
        rx="40"
        ry="8"
        style={cupRimStyle}
      />

      {/* Handle */}
      <path
        d="M145 95 Q175 95 175 120 Q175 145 145 145"
        style={handleStyle}
      />

      {/* Steam group with floating animation */}
      <g
        style={{
          transform: `translateY(${steamFloat}px)`,
          opacity: steamOpacity,
        }}
      >
        {/* Steam 1 - left */}
        <path
          d="M80 65 Q75 50 80 35 Q85 20 80 5"
          style={steam1Style}
        />

        {/* Steam 2 - center */}
        <path
          d="M100 60 Q105 45 100 30 Q95 15 100 0"
          style={steam2Style}
        />

        {/* Steam 3 - right */}
        <path
          d="M120 65 Q125 50 120 35 Q115 20 120 5"
          style={steam3Style}
        />
      </g>
    </svg>
  );
};
