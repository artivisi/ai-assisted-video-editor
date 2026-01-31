import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Shows why PHP is popular in Indonesia but why we're not teaching it
 */
export const PHPPopularity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pros = [
    { icon: "💰", text: "Hosting murah (shared hosting)" },
    { icon: "🏫", text: "Diajarkan di SMK" },
    { icon: "📝", text: "WordPress & Laravel populer" },
    { icon: "👥", text: "Komunitas besar di Indonesia" },
  ];

  const cons = [
    { icon: "🌐", text: "Hanya untuk web (kurang versatile)" },
    { icon: "🔤", text: "Inkonsistensi naming function" },
    { icon: "📚", text: "Tidak mengajarkan typing dengan jelas" },
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
        <span style={{ fontSize: 56 }}>🐘</span> Kenapa Tidak PHP?
      </div>

      <div
        style={{
          fontSize: 26,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 40,
          opacity: spring({ frame: frame - 10, fps, config: { damping: 15 } }),
        }}
      >
        PHP sangat populer di Indonesia, tapi...
      </div>

      <div style={{ display: "flex", gap: 60, padding: "0 40px" }}>
        {/* Pros */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#22c55e",
              marginBottom: 25,
              opacity: spring({ frame: frame - 20, fps, config: { damping: 15 } }),
            }}
          >
            ✓ Kelebihan PHP
          </div>
          {pros.map((item, i) => {
            const delay = 30 + i * 12;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  marginBottom: 20,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [-20, 0])}px)`,
                }}
              >
                <div style={{ fontSize: 36 }}>{item.icon}</div>
                <div style={{ fontSize: 26, color: "#fff" }}>{item.text}</div>
              </div>
            );
          })}
        </div>

        {/* Cons */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#ef4444",
              marginBottom: 25,
              opacity: spring({ frame: frame - 70, fps, config: { damping: 15 } }),
            }}
          >
            ✗ Kenapa Tidak di Seri Ini
          </div>
          {cons.map((item, i) => {
            const delay = 80 + i * 12;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  marginBottom: 20,
                  opacity: s,
                  transform: `translateX(${interpolate(s, [0, 1], [20, 0])}px)`,
                }}
              >
                <div style={{ fontSize: 36 }}>{item.icon}</div>
                <div style={{ fontSize: 26, color: "#fff" }}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 28,
          color: "#60a5fa",
          opacity: spring({ frame: frame - 120, fps, config: { damping: 15 } }),
        }}
      >
        Jika sudah paham Python/Java/JS, PHP akan <strong>sangat mudah</strong> dipelajari!
      </div>
    </AbsoluteFill>
  );
};
