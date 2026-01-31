import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Comparison between human and computer work
 */
export const HumanVsComputer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 15 } });

  const humanTraits = [
    { text: "Mudah lelah", icon: "😫" },
    { text: "Bisa bosan", icon: "😴" },
    { text: "Perlu istirahat", icon: "🛏️" },
    { text: "Bisa salah hitung", icon: "❌" },
  ];

  const computerTraits = [
    { text: "Tidak lelah", icon: "⚡" },
    { text: "Konsisten", icon: "✅" },
    { text: "24/7 nonstop", icon: "🔄" },
    { text: "Akurat", icon: "🎯" },
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
          marginBottom: 60,
          opacity: titleSpring,
        }}
      >
        Kenapa Perlu Komputer?
      </div>

      <div style={{ display: "flex", gap: 60, justifyContent: "center", alignItems: "stretch" }}>
        {/* Human Side */}
        <div
          style={{
            flex: 1,
            maxWidth: 500,
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: 24,
            padding: 40,
            border: "2px solid rgba(239, 68, 68, 0.3)",
            opacity: spring({ frame: frame - 15, fps, config: { damping: 15 } }),
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <div style={{ fontSize: 80 }}>👨</div>
            <div style={{ fontSize: 32, fontWeight: "bold", color: "#ef4444", marginTop: 10 }}>
              Manusia
            </div>
          </div>

          {humanTraits.map((trait, i) => {
            const s = spring({ frame: frame - 30 - i * 10, fps, config: { damping: 15 } });
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: 20,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [-30, 0])}px)`,
                }}
              >
                <span style={{ fontSize: 36 }}>{trait.icon}</span>
                <span style={{ fontSize: 28, color: "#fff" }}>{trait.text}</span>
              </div>
            );
          })}
        </div>

        {/* VS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 64,
            fontWeight: "bold",
            color: "#f59e0b",
            opacity: spring({ frame: frame - 20, fps, config: { damping: 15 } }),
          }}
        >
          VS
        </div>

        {/* Computer Side */}
        <div
          style={{
            flex: 1,
            maxWidth: 500,
            background: "rgba(34, 197, 94, 0.1)",
            borderRadius: 24,
            padding: 40,
            border: "2px solid rgba(34, 197, 94, 0.3)",
            opacity: spring({ frame: frame - 25, fps, config: { damping: 15 } }),
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <div style={{ fontSize: 80 }}>💻</div>
            <div style={{ fontSize: 32, fontWeight: "bold", color: "#22c55e", marginTop: 10 }}>
              Komputer
            </div>
          </div>

          {computerTraits.map((trait, i) => {
            const s = spring({ frame: frame - 40 - i * 10, fps, config: { damping: 15 } });
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: 20,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [30, 0])}px)`,
                }}
              >
                <span style={{ fontSize: 36 }}>{trait.icon}</span>
                <span style={{ fontSize: 28, color: "#fff" }}>{trait.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
