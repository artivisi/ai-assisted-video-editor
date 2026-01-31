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
import typingSfx from "../../assets/audio/keyboard-typing.wav";
import transitionSfx from "../../assets/audio/transition-sfx.wav";
import whiteNoise from "../../assets/audio/white-noise.wav";

const SERIES_TITLE = "PROGRAMMING";
const SERIES_SUBTITLE = "FUNDAMENTALS";
const TAGLINE = "Python • Java • JavaScript";

// Language colors
const PYTHON_COLOR = "#3776ab";
const JAVA_COLOR = "#f89820";
const JAVASCRIPT_COLOR = "#f7df1e";

export const PFIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Code brackets drawing animation
  const bracketProgress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Typing animation for title
  const titleCharsToShow = Math.floor(
    interpolate(frame, [25, 25 + SERIES_TITLE.length * 2], [0, SERIES_TITLE.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Typing animation for subtitle
  const subtitleStartFrame = 25 + SERIES_TITLE.length * 2 + 5;
  const subtitleCharsToShow = Math.floor(
    interpolate(frame, [subtitleStartFrame, subtitleStartFrame + SERIES_SUBTITLE.length * 2], [0, SERIES_SUBTITLE.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Cursor blink
  const cursorVisible = Math.floor(frame / 8) % 2 === 0;
  const titleTypingDone = titleCharsToShow >= SERIES_TITLE.length;
  const subtitleTypingDone = subtitleCharsToShow >= SERIES_SUBTITLE.length;

  // Logo animation
  const logoSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Language icons animation
  const langSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Tagline animation
  const taglineSpring = spring({
    frame: frame - 90,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  // Glitch effect
  const glitchActive =
    (frame > 35 && frame < 39) ||
    (frame > 75 && frame < 78) ||
    (frame > 100 && frame < 103);

  const glitchOffset = glitchActive ? random(`glitch-${frame}`) * 10 - 5 : 0;
  const glitchOffsetY = glitchActive ? random(`glitch-y-${frame}`) * 6 - 3 : 0;
  const rgbSplit = glitchActive ? 4 : 0;

  // Floating shapes animation
  const float1 = Math.sin(frame * 0.05) * 20;
  const float2 = Math.cos(frame * 0.04) * 25;
  const float3 = Math.sin(frame * 0.06 + 1) * 15;

  return (
    <AbsoluteFill className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background ambient noise */}
      <Audio src={whiteNoise} volume={0.05} />

      {/* Swoosh sound for bracket animation */}
      <Sequence from={0}>
        <Audio src={transitionSfx} volume={0.4} />
      </Sequence>

      {/* Typing sound effect - starts when typing begins */}
      <Sequence from={20}>
        <Audio src={typingSfx} volume={0.25} />
      </Sequence>

      {/* Colorful floating shapes - more subtle for dark theme */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"
        style={{
          top: "5%",
          left: "5%",
          transform: `translateY(${float1}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl"
        style={{
          bottom: "10%",
          right: "10%",
          transform: `translateY(${float2}px)`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 blur-3xl"
        style={{
          top: "40%",
          right: "25%",
          transform: `translateY(${float3}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl"
        style={{
          bottom: "30%",
          left: "20%",
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
        className="flex flex-col items-center gap-4"
        style={{
          transform: `translate(${glitchOffset}px, ${glitchOffsetY}px)`,
        }}
      >
        {/* Code brackets animation */}
        <div className="flex items-center gap-8 mb-4">
          <CodeBracket
            type="open"
            progress={bracketProgress}
            glitchActive={glitchActive}
            rgbSplit={rgbSplit}
          />

          {/* Language icons */}
          <div
            className="flex items-center gap-6"
            style={{
              transform: `scale(${langSpring})`,
              opacity: langSpring,
            }}
          >
            <LanguageIcon name="Python" color={PYTHON_COLOR} />
            <LanguageIcon name="Java" color={JAVA_COLOR} />
            <LanguageIcon name="JS" color={JAVASCRIPT_COLOR} />
          </div>

          <CodeBracket
            type="close"
            progress={bracketProgress}
            glitchActive={glitchActive}
            rgbSplit={rgbSplit}
          />
        </div>

        {/* Main Title with typing effect */}
        <div className="relative">
          {glitchActive && (
            <>
              <h1
                className="absolute font-black tracking-tight text-cyan-500/50"
                style={{
                  fontSize: "8rem",
                  transform: `translate(${-rgbSplit}px, ${-rgbSplit / 2}px)`,
                }}
              >
                {SERIES_TITLE.slice(0, titleCharsToShow)}
              </h1>
              <h1
                className="absolute font-black tracking-tight text-pink-500/50"
                style={{
                  fontSize: "8rem",
                  transform: `translate(${rgbSplit}px, ${rgbSplit / 2}px)`,
                }}
              >
                {SERIES_TITLE.slice(0, titleCharsToShow)}
              </h1>
            </>
          )}

          <h1
            className="font-black tracking-tight"
            style={{
              fontSize: "8rem",
              lineHeight: 1,
              background: "linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 20px rgba(6, 182, 212, 0.3))",
            }}
          >
            {SERIES_TITLE.slice(0, titleCharsToShow)}
            {!titleTypingDone && cursorVisible && (
              <span style={{ WebkitTextFillColor: "#06b6d4" }}>▋</span>
            )}
          </h1>
        </div>

        {/* Subtitle with typing effect */}
        <div className="relative -mt-4">
          {glitchActive && (
            <>
              <h2
                className="absolute font-black tracking-widest text-cyan-500/50"
                style={{
                  fontSize: "5rem",
                  transform: `translate(${-rgbSplit}px, ${-rgbSplit / 2}px)`,
                }}
              >
                {SERIES_SUBTITLE.slice(0, subtitleCharsToShow)}
              </h2>
              <h2
                className="absolute font-black tracking-widest text-pink-500/50"
                style={{
                  fontSize: "5rem",
                  transform: `translate(${rgbSplit}px, ${rgbSplit / 2}px)`,
                }}
              >
                {SERIES_SUBTITLE.slice(0, subtitleCharsToShow)}
              </h2>
            </>
          )}

          <h2
            className="font-black tracking-widest"
            style={{
              fontSize: "5rem",
              lineHeight: 1,
              background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 20px rgba(236, 72, 153, 0.3))",
            }}
          >
            {SERIES_SUBTITLE.slice(0, subtitleCharsToShow)}
            {titleTypingDone && !subtitleTypingDone && cursorVisible && (
              <span style={{ WebkitTextFillColor: "#ec4899" }}>▋</span>
            )}
          </h2>
        </div>

        {/* Tagline */}
        <div
          style={{
            transform: `translateY(${(1 - taglineSpring) * 20}px)`,
            opacity: taglineSpring,
          }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <p className="text-4xl text-slate-300 tracking-wide font-mono">
            <span className="text-emerald-400">// </span>
            {TAGLINE}
          </p>

          {/* Animated underline */}
          <div className="flex gap-3">
            <div
              className="h-1.5 rounded-full"
              style={{
                width: `${taglineSpring * 100}px`,
                background: PYTHON_COLOR,
              }}
            />
            <div
              className="h-1.5 rounded-full"
              style={{
                width: `${taglineSpring * 100}px`,
                background: JAVA_COLOR,
              }}
            />
            <div
              className="h-1.5 rounded-full"
              style={{
                width: `${taglineSpring * 100}px`,
                background: JAVASCRIPT_COLOR,
              }}
            />
          </div>
        </div>
      </div>

      {/* Corner decorations - terminal style */}
      <div className="absolute top-12 left-12 font-mono text-xl text-slate-500">
        <div><span className="text-emerald-400">$</span> cd programming-fundamentals</div>
        <div style={{ opacity: langSpring }}><span className="text-emerald-400">$</span> npm start</div>
        <div style={{ opacity: taglineSpring }}><span className="text-emerald-400">$</span> ready_</div>
      </div>

      <div className="absolute bottom-12 right-12 font-mono text-xl text-right text-slate-500">
        <div className="text-cyan-400">artivisi.com</div>
      </div>

      {/* Glitch noise overlay */}
      {glitchActive && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Scanline effect */}
      {glitchActive && (
        <div
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"
          style={{ top: `${(frame * 5) % 100}%` }}
        />
      )}
    </AbsoluteFill>
  );
};

// Code bracket component with drawing animation
const CodeBracket: React.FC<{
  type: "open" | "close";
  progress: number;
  glitchActive: boolean;
  rgbSplit: number;
}> = ({ type, progress, glitchActive, rgbSplit }) => {
  const bracket = type === "open" ? "<" : "/>";

  return (
    <div className="relative">
      {glitchActive && (
        <>
          <span
            className="absolute text-cyan-500/50 font-mono font-bold"
            style={{
              fontSize: "6rem",
              transform: `translateX(${-rgbSplit}px)`,
            }}
          >
            {bracket}
          </span>
          <span
            className="absolute text-pink-500/50 font-mono font-bold"
            style={{
              fontSize: "6rem",
              transform: `translateX(${rgbSplit}px)`,
            }}
          >
            {bracket}
          </span>
        </>
      )}
      <span
        className="font-mono font-bold text-emerald-400"
        style={{
          fontSize: "6rem",
          opacity: progress,
          transform: `scale(${0.5 + progress * 0.5})`,
          display: "inline-block",
          filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))",
        }}
      >
        {bracket}
      </span>
    </div>
  );
};

// Language icon component
const LanguageIcon: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl"
      style={{
        backgroundColor: `${color}20`,
        border: `3px solid ${color}`,
        color: color,
        boxShadow: `0 0 30px ${color}40`,
      }}
    >
      {name === "Python" && "Py"}
      {name === "Java" && "Jv"}
      {name === "JS" && "JS"}
    </div>
  );
};
