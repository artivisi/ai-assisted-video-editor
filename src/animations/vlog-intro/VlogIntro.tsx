import { AbsoluteFill, Audio, Img, interpolate, spring, useCurrentFrame, useVideoConfig, random } from "remotion";
import logoSrc from "../../assets/logos/logo-artivisi.svg";
import { EspressoCup } from "./EspressoCup";
import dialupModemSrc from "../../assets/audio/dialup-modem.wav";

const TITLE = "NGOPI DULU";
const TAGLINE = "Ngobrol Soal Teknologi";
const BRAND = "artivisi";

export const VlogIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Typing animation for title
  const titleCharsToShow = Math.floor(
    interpolate(frame, [20, 20 + TITLE.length * 3], [0, TITLE.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Typing animation for brand name
  const brandStartFrame = 55;
  const brandCharsToShow = Math.floor(
    interpolate(frame, [brandStartFrame, brandStartFrame + BRAND.length * 4], [0, BRAND.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Cursor blink
  const cursorVisible = Math.floor(frame / 8) % 2 === 0;
  const titleTypingDone = titleCharsToShow >= TITLE.length;
  const brandTypingDone = brandCharsToShow >= BRAND.length;

  // Logo animation - appears after cup is mostly drawn
  const logoSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Tagline animation
  const taglineSpring = spring({
    frame: frame - 75,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  // Glitch effect - random triggers
  const glitchActive = (
    (frame > 30 && frame < 34) ||
    (frame > 60 && frame < 63) ||
    (frame > 85 && frame < 88)
  );

  const glitchOffset = glitchActive ? random(`glitch-${frame}`) * 10 - 5 : 0;
  const glitchOffsetY = glitchActive ? random(`glitch-y-${frame}`) * 6 - 3 : 0;

  // RGB split for glitch
  const rgbSplit = glitchActive ? 4 : 0;

  // Floating shapes animation
  const float1 = Math.sin(frame * 0.05) * 20;
  const float2 = Math.cos(frame * 0.04) * 25;
  const float3 = Math.sin(frame * 0.06 + 1) * 15;

  return (
    <AbsoluteFill className="bg-gradient-to-br from-sky-100 via-white to-pink-100 flex items-center justify-center overflow-hidden">
      {/* Background audio */}
      <Audio src={dialupModemSrc} volume={0.5} />
      {/* Colorful floating shapes */}
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-400/40 blur-3xl"
        style={{
          top: "10%",
          left: "10%",
          transform: `translateY(${float1}px)`,
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-300/40 to-purple-400/40 blur-3xl"
        style={{
          bottom: "5%",
          right: "5%",
          transform: `translateY(${float2}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-emerald-300/40 to-teal-400/40 blur-3xl"
        style={{
          top: "50%",
          right: "20%",
          transform: `translateY(${float3}px)`,
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-amber-300/40 to-orange-400/40 blur-3xl"
        style={{
          bottom: "30%",
          left: "15%",
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
        className="flex flex-col items-center gap-6"
        style={{
          transform: `translate(${glitchOffset}px, ${glitchOffsetY}px)`,
        }}
      >
        {/* Logo and Cup row */}
        <div className="flex items-center gap-12">
          {/* Espresso Cup - drawing animation */}
          <div className="relative">
            {glitchActive && (
              <>
                <div className="absolute inset-0" style={{ transform: `translateX(${-rgbSplit}px)` }}>
                  <EspressoCup startFrame={0} color="#ec4899" size={220} />
                </div>
                <div className="absolute inset-0" style={{ transform: `translateX(${rgbSplit}px)` }}>
                  <EspressoCup startFrame={0} color="#06b6d4" size={220} />
                </div>
              </>
            )}
            <EspressoCup startFrame={0} color="#8b5cf6" size={220} />
          </div>

          {/* Logo */}
          <div className="relative">
            {glitchActive && (
              <>
                <div
                  className="absolute inset-0"
                  style={{ transform: `translateX(${-rgbSplit}px)` }}
                >
                  <Img src={logoSrc} className="w-80 h-80" style={{ filter: "hue-rotate(-40deg) saturate(2)", opacity: 0.6 }} />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ transform: `translateX(${rgbSplit}px)` }}
                >
                  <Img src={logoSrc} className="w-80 h-80" style={{ filter: "hue-rotate(40deg) saturate(2)", opacity: 0.6 }} />
                </div>
              </>
            )}

            <div
              style={{
                transform: `scale(${logoSpring})`,
                opacity: logoSpring,
              }}
            >
              <Img src={logoSrc} className="w-80 h-80 drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Brand name with typing effect */}
        <div
          className="font-mono text-4xl tracking-widest"
          style={{ opacity: logoSpring }}
        >
          <span className="text-pink-500">{"<"}</span>
          <span className="text-emerald-600 font-semibold">{BRAND.slice(0, brandCharsToShow)}</span>
          {!brandTypingDone && cursorVisible && (
            <span className="text-emerald-600">▋</span>
          )}
          <span className="text-pink-500">{brandTypingDone ? " />" : ""}</span>
        </div>

        {/* Main Title with typing effect */}
        <div className="relative mt-2">
          {/* Glitch RGB layers */}
          {glitchActive && (
            <>
              <h1
                className="absolute text-9xl font-black tracking-tight text-cyan-500/50"
                style={{ transform: `translate(${-rgbSplit}px, ${-rgbSplit / 2}px)`, fontSize: "10rem" }}
              >
                {TITLE.slice(0, titleCharsToShow)}
              </h1>
              <h1
                className="absolute text-9xl font-black tracking-tight text-pink-500/50"
                style={{ transform: `translate(${rgbSplit}px, ${rgbSplit / 2}px)`, fontSize: "10rem" }}
              >
                {TITLE.slice(0, titleCharsToShow)}
              </h1>
            </>
          )}

          <h1
            className="font-black tracking-tight"
            style={{
              fontSize: "10rem",
              lineHeight: 1,
              background: "linear-gradient(135deg, #06b6d4 0%, #10b981 40%, #8b5cf6 70%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          >
            {TITLE.slice(0, titleCharsToShow)}
            {!titleTypingDone && cursorVisible && (
              <span
                style={{
                  WebkitTextFillColor: "#06b6d4",
                }}
              >
                ▋
              </span>
            )}
          </h1>
        </div>

        {/* Tagline */}
        <div
          style={{
            transform: `translateY(${(1 - taglineSpring) * 20}px)`,
            opacity: taglineSpring,
          }}
          className="flex flex-col items-center gap-6 mt-4"
        >
          <p className="text-5xl text-slate-600 tracking-wide">
            <span className="text-purple-500 font-mono">// </span>
            {TAGLINE}
          </p>

          {/* Animated underline */}
          <div className="flex gap-3">
            <div
              style={{ width: `${taglineSpring * 120}px`, opacity: taglineSpring }}
              className="h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
            />
            <div
              style={{ width: `${taglineSpring * 60}px`, opacity: taglineSpring }}
              className="h-2 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"
            />
            <div
              style={{ width: `${taglineSpring * 30}px`, opacity: taglineSpring }}
              className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Corner decorations - terminal style */}
      <div className="absolute top-12 left-12 font-mono text-2xl text-slate-400">
        <div><span className="text-emerald-500">$</span> init vlog</div>
        <div style={{ opacity: logoSpring }}><span className="text-emerald-500">$</span> brewing...</div>
        <div style={{ opacity: taglineSpring }}><span className="text-emerald-500">$</span> ready_</div>
      </div>

      <div className="absolute bottom-12 right-12 font-mono text-2xl text-right">
        <div className="text-pink-400">v1.0.0</div>
        <div className="text-cyan-400">fps: 30</div>
      </div>

      {/* Glitch noise overlay */}
      {glitchActive && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};
