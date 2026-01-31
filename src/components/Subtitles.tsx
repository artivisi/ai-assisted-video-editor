import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { SubtitleCue } from "../tutorials/transcript-types";

export type SubtitlesProps = {
  cues: SubtitleCue[];
  position?: "bottom" | "top";
  style?: "default" | "boxed" | "outline";
  fontSize?: number;
  maxWidth?: number;
  frameOffset?: number; // Add to current frame when looking up cues
};

export const Subtitles: React.FC<SubtitlesProps> = ({
  cues,
  position = "bottom",
  style = "default",
  fontSize = 48,
  maxWidth = 1400,
  frameOffset = 0,
}) => {
  const rawFrame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Apply offset to get the lookup frame (for cuts/edits)
  const frame = rawFrame + frameOffset;

  // Find current cue
  const currentCue = cues.find(
    (cue) => frame >= cue.startFrame && frame < cue.endFrame
  );

  if (!currentCue) return null;

  // Fade in/out animation
  const fadeInFrames = Math.min(6, (currentCue.endFrame - currentCue.startFrame) / 4);
  const fadeOutFrames = Math.min(6, (currentCue.endFrame - currentCue.startFrame) / 4);

  const opacity = interpolate(
    frame,
    [
      currentCue.startFrame,
      currentCue.startFrame + fadeInFrames,
      currentCue.endFrame - fadeOutFrames,
      currentCue.endFrame,
    ],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const positionStyle: React.CSSProperties = {
    bottom: position === "bottom" ? 80 : undefined,
    top: position === "top" ? 80 : undefined,
  };

  const textStyles: Record<string, React.CSSProperties> = {
    default: {
      color: "#ffffff",
      textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
    },
    boxed: {
      color: "#ffffff",
      backgroundColor: "rgba(0,0,0,0.75)",
      padding: "12px 24px",
      borderRadius: 8,
    },
    outline: {
      color: "#ffffff",
      WebkitTextStroke: "2px #000000",
      paintOrder: "stroke fill",
    },
  };

  return (
    <AbsoluteFill>
      <div
        className="absolute left-0 right-0 flex justify-center"
        style={{
          ...positionStyle,
          opacity,
        }}
      >
        <p
          className="text-center font-bold"
          style={{
            fontSize,
            maxWidth,
            lineHeight: 1.3,
            ...textStyles[style],
          }}
        >
          {currentCue.text}
        </p>
      </div>
    </AbsoluteFill>
  );
};
