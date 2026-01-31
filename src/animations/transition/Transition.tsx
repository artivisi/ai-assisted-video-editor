import { AbsoluteFill, Audio, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import sfxSrc from "../../assets/audio/transition-letters.wav";

const LETTERS = "artivisi".split("");
const FRAME_PER_LETTER = 4;

export const Transition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const totalLetterFrames = LETTERS.length * FRAME_PER_LETTER;
  const swooshStart = totalLetterFrames + 5;
  const exitStart = durationInFrames - 15;

  // Background wipe
  const bgProgress = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bgExit = interpolate(frame, [exitStart, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Swoosh animation
  const swooshSpring = spring({
    frame: frame - swooshStart,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  return (
    <AbsoluteFill className="flex items-center justify-center overflow-hidden">
      {/* Sound effect */}
      <Audio src={sfxSrc} volume={0.7} />

      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100"
        style={{ opacity: bgProgress * bgExit }}
      />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          opacity: bgProgress * bgExit * 0.02,
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Letters container */}
      <div
        className="flex items-center justify-center gap-2"
        style={{ opacity: bgExit }}
      >
        {LETTERS.map((letter, index) => (
          <AnimatedLetter
            key={index}
            letter={letter}
            index={index}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>

      {/* Swoosh */}
      <div
        className="absolute"
        style={{
          opacity: swooshSpring * bgExit,
          transform: `translateX(${(1 - swooshSpring) * 100}px) scaleX(${swooshSpring})`,
        }}
      >
        <svg
          width="400"
          height="80"
          viewBox="0 0 400 80"
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          style={{ marginTop: "60px" }}
        >
          <path
            d="M 20 60 Q 100 20 200 40 Q 300 60 380 20"
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))",
            }}
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};

type AnimatedLetterProps = {
  letter: string;
  index: number;
  frame: number;
  fps: number;
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letter, index, frame, fps }) => {
  const startFrame = index * FRAME_PER_LETTER;

  const letterSpring = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 8, stiffness: 150 },
  });

  // Dramatic entrance: scale from large, rotate, and drop
  const scale = interpolate(letterSpring, [0, 1], [3, 1]);
  const rotate = interpolate(letterSpring, [0, 1], [-30 + index * 10, 0]);
  const y = interpolate(letterSpring, [0, 1], [-100, 0]);
  const opacity = letterSpring;

  // Color based on position
  const colors = [
    "#0891b2", // cyan-600
    "#0d9488", // teal-600
    "#059669", // emerald-600
    "#16a34a", // green-600
    "#65a30d", // lime-600
    "#ca8a04", // yellow-600
    "#ea580c", // orange-600
    "#dc2626", // red-600
  ];

  const color = colors[index % colors.length];

  // "i" letters get special dot styling
  const isI = letter === "i";

  return (
    <div
      className="relative"
      style={{
        transform: `translateY(${y}px) scale(${scale}) rotate(${rotate}deg)`,
        opacity,
      }}
    >
      <span
        className="text-9xl font-black"
        style={{
          color,
          textShadow: `0 4px 20px ${color}40, 0 0 40px ${color}30`,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {isI ? "ı" : letter}
      </span>
      {isI && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 20px ${color}`,
          }}
        />
      )}
    </div>
  );
};
