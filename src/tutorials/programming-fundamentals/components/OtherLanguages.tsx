import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Shows other languages worth knowing after mastering fundamentals
 */
export const OtherLanguages: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const languages = [
    {
      name: "Go",
      icon: "🐹",
      color: "#00add8",
      desc: "Cloud-native, Kubernetes",
      category: "Backend",
    },
    {
      name: "Rust",
      icon: "🦀",
      color: "#dea584",
      desc: "Memory-safe, Systems",
      category: "Systems",
    },
    {
      name: "TypeScript",
      icon: "📘",
      color: "#3178c6",
      desc: "JavaScript + Types",
      category: "Web",
    },
    {
      name: "C/C++",
      icon: "⚙️",
      color: "#00599c",
      desc: "Game engines, Embedded",
      category: "Low-level",
    },
    {
      name: "Swift",
      icon: "🕊️",
      color: "#fa7343",
      desc: "iOS & macOS apps",
      category: "Mobile",
    },
    {
      name: "Kotlin",
      icon: "🎨",
      color: "#7f52ff",
      desc: "Android modern",
      category: "Mobile",
    },
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
          marginBottom: 15,
          opacity: spring({ frame, fps, config: { damping: 15 } }),
        }}
      >
        Bahasa Lain yang Perlu Diketahui
      </div>

      <div
        style={{
          fontSize: 26,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 50,
          opacity: spring({ frame: frame - 10, fps, config: { damping: 15 } }),
        }}
      >
        Bisa dipelajari setelah menguasai fundamentals
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {languages.map((lang, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          const delay = row * 15 + col * 8 + 20;
          const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });

          return (
            <div
              key={i}
              style={{
                background: `${lang.color}10`,
                borderRadius: 16,
                padding: 30,
                border: `2px solid ${lang.color}40`,
                opacity: s,
                transform: `scale(${interpolate(s, [0, 1], [0.8, 1])})`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 15 }}>
                <div style={{ fontSize: 44 }}>{lang.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: lang.color,
                    }}
                  >
                    {lang.name}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#6b7280",
                      background: "#ffffff10",
                      padding: "2px 8px",
                      borderRadius: 4,
                      display: "inline-block",
                    }}
                  >
                    {lang.category}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 22, color: "#9ca3af" }}>{lang.desc}</div>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 28,
          color: "#22c55e",
          opacity: spring({ frame: frame - 100, fps, config: { damping: 15 } }),
        }}
      >
        Semua bisa dipelajari setelah paham <strong>Python, Java, JavaScript</strong>!
      </div>
    </AbsoluteFill>
  );
};
