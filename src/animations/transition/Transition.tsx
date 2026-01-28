import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";

export const Transition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, durationInFrames } = useVideoConfig();

  const midPoint = durationInFrames / 2;

  const wipeProgress = interpolate(frame, [0, midPoint - 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const wipeExit = interpolate(frame, [midPoint + 5, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const logoExitSpring = spring({
    frame: frame - midPoint - 5,
    fps,
    config: { damping: 15, stiffness: 150 },
  });

  const logoScale = frame < midPoint ? logoSpring : 1 - logoExitSpring;
  const logoRotation = frame < midPoint
    ? interpolate(logoSpring, [0, 1], [-90, 0])
    : interpolate(logoExitSpring, [0, 1], [0, 90]);

  const barOneX = interpolate(wipeProgress, [0, 1], [-width, 0]) + interpolate(wipeExit, [0, 1], [0, width]);
  const barTwoX = interpolate(wipeProgress, [0, 1], [width, 0]) + interpolate(wipeExit, [0, 1], [0, -width]);

  return (
    <AbsoluteFill className="bg-transparent">
      <div
        style={{ transform: `translateX(${barOneX}px)` }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900 to-slate-800"
      />

      <div
        style={{ transform: `translateX(${barTwoX}px)` }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-slate-800"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
            opacity: logoScale,
          }}
        >
          <Img src={logoSrc} className="w-32 h-32" />
        </div>
      </div>

      <div
        style={{
          opacity: interpolate(wipeProgress, [0.3, 0.6], [0, 1]) * interpolate(wipeExit, [0, 0.3], [1, 0]),
        }}
        className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
    </AbsoluteFill>
  );
};
