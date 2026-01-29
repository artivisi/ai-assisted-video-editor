import { AbsoluteFill, Audio, Img, interpolate, spring, useCurrentFrame, useVideoConfig, random } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";
import staticSrc from "../../assets/audio/outro-static.wav";

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

  // Floating shapes animation
  const float1 = Math.sin(frame * 0.05) * 20;
  const float2 = Math.cos(frame * 0.04) * 25;
  const float3 = Math.sin(frame * 0.06 + 1) * 15;

  // Glitch effect - random triggers
  const glitchActive = (
    (frame > 20 && frame < 24) ||
    (frame > 55 && frame < 59) ||
    (frame > 90 && frame < 94) ||
    (frame > 120 && frame < 123)
  );

  const glitchOffset = glitchActive ? random(`glitch-${frame}`) * 12 - 6 : 0;
  const glitchOffsetY = glitchActive ? random(`glitch-y-${frame}`) * 8 - 4 : 0;
  const rgbSplit = glitchActive ? 5 : 0;

  return (
    <AbsoluteFill
      style={{ opacity: bgFade }}
      className="bg-gradient-to-br from-sky-100 via-white to-pink-100 flex items-center justify-center overflow-hidden"
    >
      {/* Static noise sound */}
      <Audio src={staticSrc} volume={0.4} />

      {/* Colorful floating shapes */}
      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-400/40 blur-3xl"
        style={{
          top: "5%",
          left: "10%",
          transform: `translateY(${float1}px)`,
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-300/40 to-purple-400/40 blur-3xl"
        style={{
          bottom: "10%",
          right: "5%",
          transform: `translateY(${float2}px)`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-emerald-300/40 to-teal-400/40 blur-3xl"
        style={{
          top: "40%",
          right: "15%",
          transform: `translateY(${float3}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-amber-300/40 to-orange-400/40 blur-3xl"
        style={{
          bottom: "25%",
          left: "20%",
          transform: `translateY(${-float2}px)`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content with glitch offset */}
      <div
        className="flex flex-col items-center gap-10 z-10"
        style={{
          transform: `translate(${glitchOffset}px, ${glitchOffsetY}px)`,
        }}
      >
        {/* Logo with glitch */}
        <div className="relative">
          {glitchActive && (
            <>
              <div
                className="absolute inset-0"
                style={{ transform: `translateX(${-rgbSplit}px)` }}
              >
                <Img src={logoSrc} className="w-72 h-72" style={{ filter: "hue-rotate(-40deg) saturate(2)", opacity: 0.6 }} />
              </div>
              <div
                className="absolute inset-0"
                style={{ transform: `translateX(${rgbSplit}px)` }}
              >
                <Img src={logoSrc} className="w-72 h-72" style={{ filter: "hue-rotate(40deg) saturate(2)", opacity: 0.6 }} />
              </div>
            </>
          )}
          <div
            style={{
              transform: `scale(${logoSpring})`,
              opacity: logoSpring,
            }}
          >
            <Img src={logoSrc} className="w-72 h-72 drop-shadow-xl" />
          </div>
        </div>

        {/* Thank you text with glitch */}
        <div
          style={{
            transform: `translateY(${(1 - textSpring) * 30}px)`,
            opacity: textSpring,
          }}
          className="text-center relative"
        >
          {glitchActive && (
            <>
              <h1
                className="absolute text-7xl font-black mb-4 text-cyan-500/50"
                style={{ transform: `translate(${-rgbSplit}px, ${-rgbSplit / 2}px)` }}
              >
                Terima Kasih!
              </h1>
              <h1
                className="absolute text-7xl font-black mb-4 text-pink-500/50"
                style={{ transform: `translate(${rgbSplit}px, ${rgbSplit / 2}px)` }}
              >
                Terima Kasih!
              </h1>
            </>
          )}
          <h1
            className="text-7xl font-black mb-4"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #10b981 40%, #8b5cf6 70%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Terima Kasih!
          </h1>
          <p className="text-4xl text-slate-600">
            Sampai jumpa di video berikutnya
          </p>
        </div>

        {/* Subscribe button with glitch */}
        <div className="relative">
          {glitchActive && (
            <>
              <div
                className="absolute inset-0 bg-cyan-600/50 px-12 py-5 rounded-full flex items-center gap-4"
                style={{ transform: `translateX(${-rgbSplit}px)` }}
              />
              <div
                className="absolute inset-0 bg-pink-600/50 px-12 py-5 rounded-full flex items-center gap-4"
                style={{ transform: `translateX(${rgbSplit}px)` }}
              />
            </>
          )}
          <div
            style={{
              transform: `scale(${subscribeSpring * pulseScale})`,
              opacity: subscribeSpring,
            }}
            className="bg-red-600 px-12 py-5 rounded-full flex items-center gap-4 shadow-xl shadow-red-600/30"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="text-white font-bold text-4xl">SUBSCRIBE</span>
          </div>
        </div>

        {/* Social links */}
        <div
          style={{
            transform: `translateY(${(1 - socialSpring) * 20}px)`,
            opacity: socialSpring,
          }}
          className="flex gap-12 mt-6"
        >
          <SocialLink icon="blog" label="software.endy.muhardin.com" />
          <SocialLink icon="web" label="artivisi.com" />
        </div>
      </div>

      {/* Glitch noise overlay */}
      {glitchActive && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            opacity: 0.08,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Scanline effect during glitch */}
      {glitchActive && (
        <div
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          style={{ top: `${(frame * 7) % 100}%` }}
        />
      )}
    </AbsoluteFill>
  );
};

const SocialLink: React.FC<{ icon: "blog" | "web"; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-4 text-slate-600">
      {icon === "blog" && (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )}
      {icon === "web" && (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )}
      <span className="text-3xl font-medium">{label}</span>
    </div>
  );
};
