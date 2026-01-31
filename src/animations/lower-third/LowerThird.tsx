import { AbsoluteFill, Audio, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";
import likeSrc from "../../assets/icons/like.svg";
import subscribeSrc from "../../assets/icons/subscribe.svg";
import shareSrc from "../../assets/icons/share.svg";
import sfxSrc from "../../assets/audio/lower-third-sfx.wav";

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
    ? interpolate(frame, [exitStart, durationInFrames], [0, 600], {
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

  // CTA animations - staggered entrance from right
  const ctaLikeSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const ctaSubscribeSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const ctaShareSpring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const ctaExit = frame > exitStart
    ? interpolate(frame, [exitStart, durationInFrames], [1, 0], {
        extrapolateRight: "clamp",
      })
    : 1;

  return (
    <AbsoluteFill>
      {/* Sound effects */}
      <Audio src={sfxSrc} volume={0.6} />

      {/* Name and Title - Bottom Left */}
      <div className="absolute bottom-32 left-20 flex items-end gap-6">
        <div
          style={{
            transform: `scale(${logoScale * logoExit})`,
            opacity: logoScale * logoExit,
          }}
          className="bg-white rounded-2xl p-4 shadow-2xl"
        >
          <Img src={logoSrc} className="w-28 h-28" />
        </div>

        <div className="flex flex-col">
          <div
            style={{
              transform: `translateX(${(1 - barSlide) * -600 - barExit}px)`,
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-4 rounded-tr-2xl"
          >
            <span
              style={{
                opacity: nameSlide * textExit,
                transform: `translateX(${(1 - nameSlide) * 20}px)`,
              }}
              className="text-5xl font-bold text-white inline-block"
            >
              {name}
            </span>
          </div>

          <div
            style={{
              transform: `translateX(${(1 - barSlide) * -600 - barExit}px)`,
            }}
            className="bg-slate-800 px-10 py-3 rounded-br-2xl"
          >
            <span
              style={{
                opacity: titleSlide * textExit,
                transform: `translateX(${(1 - titleSlide) * 20}px)`,
              }}
              className="text-3xl text-slate-300 inline-block"
            >
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Icons - Bottom Right */}
      <div className="absolute bottom-32 right-20 flex items-center gap-8">
        {/* Like */}
        <div
          style={{
            transform: `translateX(${(1 - ctaLikeSpring) * 100}px) scale(${ctaLikeSpring * ctaExit})`,
            opacity: ctaLikeSpring * ctaExit,
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="bg-white rounded-full p-4 shadow-xl">
            <Img src={likeSrc} className="w-12 h-12" style={{ filter: "invert(27%) sepia(94%) saturate(1800%) hue-rotate(212deg)" }} />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">LIKE</span>
        </div>

        {/* Subscribe */}
        <div
          style={{
            transform: `translateX(${(1 - ctaSubscribeSpring) * 100}px) scale(${ctaSubscribeSpring * ctaExit})`,
            opacity: ctaSubscribeSpring * ctaExit,
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="bg-red-600 rounded-full p-4 shadow-xl">
            <Img src={subscribeSrc} className="w-12 h-12" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">SUBSCRIBE</span>
        </div>

        {/* Share */}
        <div
          style={{
            transform: `translateX(${(1 - ctaShareSpring) * 100}px) scale(${ctaShareSpring * ctaExit})`,
            opacity: ctaShareSpring * ctaExit,
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="bg-white rounded-full p-4 shadow-xl">
            <Img src={shareSrc} className="w-12 h-12" style={{ filter: "invert(50%) sepia(80%) saturate(500%) hue-rotate(100deg)" }} />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">SHARE</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
