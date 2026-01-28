import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const logoSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const textSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const subscribeSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const socialSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.05;

  return (
    <AbsoluteFill
      style={{ opacity: bgFade }}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        <div
          style={{
            transform: `scale(${logoSpring})`,
            opacity: logoSpring,
          }}
        >
          <Img src={logoSrc} className="w-40 h-40" />
        </div>

        <div
          style={{
            transform: `translateY(${(1 - textSpring) * 30}px)`,
            opacity: textSpring,
          }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Thanks for Watching
          </h1>
          <p className="text-xl text-slate-400">
            See you in the next video
          </p>
        </div>

        <div
          style={{
            transform: `scale(${subscribeSpring * pulseScale})`,
            opacity: subscribeSpring,
          }}
          className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full flex items-center gap-3 shadow-lg shadow-red-600/30"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <span className="text-white font-bold text-lg">SUBSCRIBE</span>
        </div>

        <div
          style={{
            transform: `translateY(${(1 - socialSpring) * 20}px)`,
            opacity: socialSpring,
          }}
          className="flex gap-6 mt-4"
        >
          <SocialLink icon="github" label="github.com/endymuhardin" />
          <SocialLink icon="web" label="artivisi.com" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const SocialLink: React.FC<{ icon: "github" | "web"; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2 text-slate-400">
      {icon === "github" && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )}
      {icon === "web" && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )}
      <span className="text-sm">{label}</span>
    </div>
  );
};
