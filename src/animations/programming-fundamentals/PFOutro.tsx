import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  random,
} from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";
import outroSfx from "../../assets/audio/outro-sfx.wav";
import outroStatic from "../../assets/audio/outro-static.wav";
import transitionSfx from "../../assets/audio/transition-sfx.wav";

const SERIES_TITLE = "Programming Fundamentals";

// Language colors
const PYTHON_COLOR = "#3776ab";
const JAVA_COLOR = "#f89820";
const JAVASCRIPT_COLOR = "#f7df1e";

type PFOutroProps = {
  nextEpisodeTitle?: string;
};

export const PFOutro: React.FC<PFOutroProps> = ({
  nextEpisodeTitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Staggered spring animations
  const logoSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const titleSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const thanksSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const nextEpSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const subscribeSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const socialSpring = spring({
    frame: frame - 90,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.03;

  // Floating shapes animation
  const float1 = Math.sin(frame * 0.05) * 20;
  const float2 = Math.cos(frame * 0.04) * 25;
  const float3 = Math.sin(frame * 0.06 + 1) * 15;

  // Glitch effect
  const glitchActive =
    (frame > 25 && frame < 29) ||
    (frame > 60 && frame < 64) ||
    (frame > 95 && frame < 99) ||
    (frame > 125 && frame < 128);

  const glitchOffset = glitchActive ? random(`glitch-${frame}`) * 12 - 6 : 0;
  const glitchOffsetY = glitchActive ? random(`glitch-y-${frame}`) * 8 - 4 : 0;
  const rgbSplit = glitchActive ? 5 : 0;

  return (
    <AbsoluteFill
      style={{ opacity: bgFade }}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Main outro sound effect */}
      <Audio src={outroSfx} volume={0.35} />

      {/* Static noise - plays during glitch moments */}
      <Sequence from={20} durationInFrames={10}>
        <Audio src={outroStatic} volume={0.15} />
      </Sequence>
      <Sequence from={55} durationInFrames={10}>
        <Audio src={outroStatic} volume={0.15} />
      </Sequence>
      <Sequence from={90} durationInFrames={10}>
        <Audio src={outroStatic} volume={0.15} />
      </Sequence>

      {/* Swoosh for subscribe button */}
      <Sequence from={65}>
        <Audio src={transitionSfx} volume={0.3} />
      </Sequence>

      {/* Colorful floating shapes */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"
        style={{
          top: "0%",
          left: "5%",
          transform: `translateY(${float1}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl"
        style={{
          bottom: "5%",
          right: "5%",
          transform: `translateY(${float2}px)`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 blur-3xl"
        style={{
          top: "35%",
          right: "20%",
          transform: `translateY(${float3}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl"
        style={{
          bottom: "25%",
          left: "15%",
          transform: `translateY(${-float2}px)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ArtiVisi Logo - Top Right */}
      <div
        className="absolute top-10 right-10"
        style={{
          transform: `scale(${logoSpring})`,
          opacity: logoSpring,
        }}
      >
        <Img src={logoSrc} className="w-32 h-32 drop-shadow-lg" />
      </div>

      {/* Main content with glitch offset */}
      <div
        className="flex flex-col items-center gap-8 z-10"
        style={{
          transform: `translate(${glitchOffset}px, ${glitchOffsetY}px)`,
        }}
      >
        {/* Series title */}
        <div
          style={{
            transform: `scale(${titleSpring})`,
            opacity: titleSpring,
          }}
          className="flex items-center gap-4"
        >
          <span
            className="font-mono text-4xl font-bold text-emerald-400"
            style={{ filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))" }}
          >
            {"<"}
          </span>
          <span className="text-4xl font-bold text-slate-300 tracking-wide">
            {SERIES_TITLE}
          </span>
          <span
            className="font-mono text-4xl font-bold text-emerald-400"
            style={{ filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))" }}
          >
            {"/>"}
          </span>
        </div>

        {/* Thank you text with glitch */}
        <div
          style={{
            transform: `translateY(${(1 - thanksSpring) * 30}px)`,
            opacity: thanksSpring,
          }}
          className="text-center relative"
        >
          {glitchActive && (
            <>
              <h1
                className="absolute text-7xl font-black text-cyan-500/50"
                style={{ transform: `translate(${-rgbSplit}px, ${-rgbSplit / 2}px)` }}
              >
                Terima Kasih!
              </h1>
              <h1
                className="absolute text-7xl font-black text-pink-500/50"
                style={{ transform: `translate(${rgbSplit}px, ${rgbSplit / 2}px)` }}
              >
                Terima Kasih!
              </h1>
            </>
          )}
          <h1
            className="text-7xl font-black"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #10b981 40%, #8b5cf6 70%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 20px rgba(6, 182, 212, 0.3))",
            }}
          >
            Terima Kasih!
          </h1>
        </div>

        {/* Next episode preview - only show if title is provided */}
        {nextEpisodeTitle && (
          <div
            style={{
              transform: `translateY(${(1 - nextEpSpring) * 20}px) scale(${nextEpSpring})`,
              opacity: nextEpSpring,
            }}
            className="flex flex-col items-center gap-3 mt-4"
          >
            <p className="text-2xl text-slate-400 font-mono">
              <span className="text-purple-400">// </span>
              Episode berikutnya
            </p>
            <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-3xl font-bold text-slate-200">
                {nextEpisodeTitle}
              </span>
            </div>
          </div>
        )}

        {/* Subscribe button with glitch */}
        <div className="relative mt-4">
          {glitchActive && (
            <>
              <div
                className="absolute inset-0 bg-cyan-600/50 px-10 py-4 rounded-full"
                style={{ transform: `translateX(${-rgbSplit}px)` }}
              />
              <div
                className="absolute inset-0 bg-pink-600/50 px-10 py-4 rounded-full"
                style={{ transform: `translateX(${rgbSplit}px)` }}
              />
            </>
          )}
          <div
            style={{
              transform: `scale(${subscribeSpring * pulseScale})`,
              opacity: subscribeSpring,
            }}
            className="bg-red-600 px-10 py-4 rounded-full flex items-center gap-4 shadow-xl shadow-red-600/30"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="text-white font-bold text-3xl">SUBSCRIBE</span>
          </div>
        </div>

        {/* Language badges */}
        <div
          style={{
            transform: `translateY(${(1 - socialSpring) * 20}px)`,
            opacity: socialSpring,
          }}
          className="flex gap-4 mt-4"
        >
          <LanguageBadge name="Python" color={PYTHON_COLOR} />
          <LanguageBadge name="Java" color={JAVA_COLOR} />
          <LanguageBadge name="JavaScript" color={JAVASCRIPT_COLOR} />
        </div>

        {/* Social links */}
        <div
          style={{
            transform: `translateY(${(1 - socialSpring) * 20}px)`,
            opacity: socialSpring,
          }}
          className="flex gap-10 mt-2"
        >
          <SocialLink icon="blog" label="software.endy.muhardin.com" />
          <SocialLink icon="web" label="artivisi.com" />
        </div>
      </div>

      {/* Glitch noise overlay */}
      {glitchActive && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Scanline effect during glitch */}
      {glitchActive && (
        <div
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"
          style={{ top: `${(frame * 7) % 100}%` }}
        />
      )}
    </AbsoluteFill>
  );
};

// Language badge component
const LanguageBadge: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  return (
    <div
      className="px-4 py-2 rounded-lg font-mono text-lg font-semibold"
      style={{
        backgroundColor: `${color}20`,
        border: `2px solid ${color}`,
        color: color,
      }}
    >
      {name}
    </div>
  );
};

// Social link component
const SocialLink: React.FC<{ icon: "blog" | "web"; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 text-slate-400">
      {icon === "blog" && (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )}
      {icon === "web" && (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )}
      <span className="text-2xl">{label}</span>
    </div>
  );
};
