import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Showcase of popular programming languages
 */
export const ProgrammingLanguageLogos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const languages = [
    { name: "Python", color: "#3776ab", icon: "🐍" },
    { name: "JavaScript", color: "#f7df1e", icon: "📜" },
    { name: "Java", color: "#ed8b00", icon: "☕" },
    { name: "C++", color: "#00599c", icon: "⚙️" },
    { name: "C#", color: "#512bd4", icon: "🎯" },
    { name: "Go", color: "#00add8", icon: "🐹" },
    { name: "Rust", color: "#dea584", icon: "🦀" },
    { name: "PHP", color: "#777bb4", icon: "🐘" },
    { name: "Ruby", color: "#cc342d", icon: "💎" },
    { name: "Swift", color: "#fa7343", icon: "🕊️" },
    { name: "Kotlin", color: "#7f52ff", icon: "🎨" },
    { name: "TypeScript", color: "#3178c6", icon: "📘" },
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
          marginBottom: 20,
          opacity: spring({ frame, fps, config: { damping: 15 } }),
        }}
      >
        Bahasa Pemrograman Populer
      </div>

      <div
        style={{
          fontSize: 24,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 50,
          opacity: spring({ frame: frame - 10, fps, config: { damping: 15 } }),
        }}
      >
        Ada banyak pilihan bahasa - masing-masing punya kelebihan
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 30,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {languages.map((lang, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const delay = row * 8 + col * 5;
          const s = spring({ frame: frame - delay - 15, fps, config: { damping: 15 } });

          return (
            <div
              key={i}
              style={{
                background: `${lang.color}15`,
                borderRadius: 16,
                padding: 25,
                textAlign: "center",
                border: `2px solid ${lang.color}40`,
                opacity: s,
                transform: `scale(${interpolate(s, [0, 1], [0.8, 1])})`,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 10 }}>{lang.icon}</div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: lang.color,
                }}
              >
                {lang.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 28,
          color: "#22c55e",
          opacity: spring({ frame: frame - 90, fps, config: { damping: 15 } }),
        }}
      >
        Kita akan fokus belajar <strong>Python</strong> di seri ini
      </div>
    </AbsoluteFill>
  );
};
