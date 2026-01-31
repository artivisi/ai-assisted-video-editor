import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Preview of what's coming in the Programming Fundamentals series
 */
export const SeriesPreview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const topics = [
    { num: "01-05", title: "Setup & Hello World", icon: "👋" },
    { num: "06-10", title: "Variables & Data Types", icon: "📦" },
    { num: "11-15", title: "Operators & Expressions", icon: "🔢" },
    { num: "16-20", title: "Control Flow", icon: "🔀" },
    { num: "21-25", title: "Functions & Modules", icon: "⚡" },
    { num: "26-31", title: "Collections & Projects", icon: "🎯" },
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
        📚 Programming Fundamentals Series
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
        31 Episode • Dari Nol Sampai Bisa
      </div>

      {/* Topics Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 25,
          maxWidth: 1300,
          margin: "0 auto",
        }}
      >
        {topics.map((topic, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          const delay = row * 15 + col * 8 + 20;
          const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });

          return (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #22c55e15 0%, #22c55e05 100%)",
                borderRadius: 16,
                padding: 25,
                border: "2px solid #22c55e30",
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [20, 0])}px)`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                <div style={{ fontSize: 40 }}>{topic.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: 18,
                      color: "#22c55e",
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    Episode {topic.num}
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {topic.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study & Final Projects */}
      <div
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "center",
          gap: 80,
          opacity: spring({ frame: frame - 90, fps, config: { damping: 15 } }),
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, color: "#60a5fa", marginBottom: 10 }}>
            📊 Case Study (EP 4-28)
          </div>
          <div style={{ fontSize: 32, color: "#fff", fontWeight: "bold" }}>
            Finance Tracker
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, color: "#f59e0b", marginBottom: 10 }}>
            🏆 Final Projects (EP 29-31)
          </div>
          <div style={{ fontSize: 32, color: "#fff", fontWeight: "bold" }}>
            Calculator • Todo • Guessing Game
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 26,
          color: "#60a5fa",
          opacity: spring({ frame: frame - 110, fps, config: { damping: 15 } }),
        }}
      >
        Semua code disimpan di <strong>GitHub</strong> sebagai portfolio!
      </div>
    </AbsoluteFill>
  );
};
