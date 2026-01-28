import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";

type LowerThirdProps = {
  name: string;
  title: string;
};

export const LowerThird: React.FC<LowerThirdProps> = ({ name, title }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const exitStart = durationInFrames - 30;

  const barSlide = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const barExit = frame > exitStart
    ? interpolate(frame, [exitStart, durationInFrames], [0, 400], {
        extrapolateRight: "clamp",
      })
    : 0;

  const logoScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const logoExit = frame > exitStart
    ? interpolate(frame, [exitStart, durationInFrames], [1, 0], {
        extrapolateRight: "clamp",
      })
    : 1;

  const nameSlide = spring({
    frame: frame - 10,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const titleSlide = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const textExit = frame > exitStart
    ? interpolate(frame, [exitStart, durationInFrames], [1, 0], {
        extrapolateRight: "clamp",
      })
    : 1;

  return (
    <AbsoluteFill>
      <div className="absolute bottom-24 left-16 flex items-end gap-4">
        <div
          style={{
            transform: `scale(${logoScale * logoExit})`,
            opacity: logoScale * logoExit,
          }}
          className="bg-white rounded-lg p-2 shadow-xl"
        >
          <Img src={logoSrc} className="w-16 h-16" />
        </div>

        <div className="flex flex-col">
          <div
            style={{
              transform: `translateX(${(1 - barSlide) * -400 - barExit}px)`,
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 rounded-tr-lg"
          >
            <span
              style={{
                opacity: nameSlide * textExit,
                transform: `translateX(${(1 - nameSlide) * 20}px)`,
              }}
              className="text-2xl font-bold text-white inline-block"
            >
              {name}
            </span>
          </div>

          <div
            style={{
              transform: `translateX(${(1 - barSlide) * -400 - barExit}px)`,
            }}
            className="bg-slate-800 px-6 py-1 rounded-br-lg"
          >
            <span
              style={{
                opacity: titleSlide * textExit,
                transform: `translateX(${(1 - titleSlide) * 20}px)`,
              }}
              className="text-lg text-slate-300 inline-block"
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
