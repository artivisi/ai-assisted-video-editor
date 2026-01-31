import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Shows benefits of learning Python, Java, JavaScript together
 */
export const WhyThreeLanguages: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const languages = [
    {
      name: "Python",
      icon: "🐍",
      color: "#3776ab",
      typing: "Dynamic + Strong",
      useCase: "AI, Data Science, Automation",
    },
    {
      name: "Java",
      icon: "☕",
      color: "#ed8b00",
      typing: "Static + Strong",
      useCase: "Enterprise, Android, Banking",
    },
    {
      name: "JavaScript",
      icon: "📜",
      color: "#f7df1e",
      typing: "Dynamic + Weak",
      useCase: "Web, Frontend, Node.js",
    },
  ];

  const benefits = [
    "Konsep programming itu universal",
    "Bisa bandingkan syntax langsung",
    "Tidak terkunci di satu ecosystem",
    "Job market besar untuk ketiganya",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        padding: 60,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          marginBottom: 50,
          opacity: spring({ frame, fps, config: { damping: 15 } }),
        }}
      >
        Kenapa Belajar 3 Bahasa Sekaligus?
      </div>

      <div style={{ display: "flex", gap: 60, height: "70%" }}>
        {/* Left: Language cards */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 25,
          }}
        >
          {languages.map((lang, i) => {
            const delay = i * 15;
            const s = spring({ frame: frame - delay - 15, fps, config: { damping: 15 } });

            return (
              <div
                key={i}
                style={{
                  background: `${lang.color}15`,
                  borderRadius: 16,
                  padding: 25,
                  border: `2px solid ${lang.color}50`,
                  display: "flex",
                  alignItems: "center",
                  gap: 25,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [-30, 0])}px)`,
                }}
              >
                <div style={{ fontSize: 50 }}>{lang.icon}</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      color: lang.color,
                      marginBottom: 5,
                    }}
                  >
                    {lang.name}
                  </div>
                  <div style={{ fontSize: 22, color: "#9ca3af" }}>
                    {lang.typing}
                  </div>
                  <div style={{ fontSize: 20, color: "#6b7280", marginTop: 5 }}>
                    {lang.useCase}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Benefits */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 25,
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#22c55e",
              marginBottom: 10,
              opacity: spring({ frame: frame - 60, fps, config: { damping: 15 } }),
            }}
          >
            Keuntungan:
          </div>
          {benefits.map((benefit, i) => {
            const delay = 70 + i * 12;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [20, 0])}px)`,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
                <div style={{ fontSize: 28, color: "#fff" }}>{benefit}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 26,
          color: "#f59e0b",
          opacity: spring({ frame: frame - 120, fps, config: { damping: 15 } }),
        }}
      >
        Mewakili spektrum <strong>typing systems</strong> yang berbeda
      </div>
    </AbsoluteFill>
  );
};
