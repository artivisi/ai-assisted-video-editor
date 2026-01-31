import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Animated definition of "What is Programming?"
 * Shows the definition with animated icons
 */
export const ProgrammingDefinition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 15 } });
  const line1Spring = spring({ frame: frame - 15, fps, config: { damping: 15 } });
  const line2Spring = spring({ frame: frame - 30, fps, config: { damping: 15 } });
  const line3Spring = spring({ frame: frame - 45, fps, config: { damping: 15 } });
  const iconSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });

  const flowAnimation = interpolate(frame, [90, 180], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 80,
          fontSize: 56,
          fontWeight: "bold",
          color: "#22c55e",
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        Apa Itu Programming?
      </div>

      {/* Definition Box */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: 24,
          padding: 60,
          maxWidth: 1200,
          border: "2px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            fontSize: 42,
            color: "#fff",
            marginBottom: 30,
            opacity: line1Spring,
            transform: `translateX(${interpolate(line1Spring, [0, 1], [-50, 0])}px)`,
          }}
        >
          <span style={{ color: "#22c55e", fontWeight: "bold" }}>Programming</span> adalah
        </div>

        {/* Line 2 */}
        <div
          style={{
            fontSize: 42,
            color: "#fff",
            marginBottom: 30,
            opacity: line2Spring,
            transform: `translateX(${interpolate(line2Spring, [0, 1], [-50, 0])}px)`,
          }}
        >
          membuat <span style={{ color: "#60a5fa", fontWeight: "bold" }}>instruksi/perintah</span>
        </div>

        {/* Line 3 */}
        <div
          style={{
            fontSize: 42,
            color: "#fff",
            opacity: line3Spring,
            transform: `translateX(${interpolate(line3Spring, [0, 1], [-50, 0])}px)`,
          }}
        >
          kepada <span style={{ color: "#f59e0b", fontWeight: "bold" }}>komputer</span> untuk mengolah data
        </div>
      </div>

      {/* Flow Diagram */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          display: "flex",
          alignItems: "center",
          gap: 40,
          opacity: iconSpring,
        }}
      >
        {/* Human */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>👨‍💻</div>
          <div style={{ color: "#fff", fontSize: 24, marginTop: 10 }}>Programmer</div>
        </div>

        {/* Arrow 1 */}
        <div
          style={{
            width: 100,
            height: 4,
            background: `linear-gradient(90deg, #22c55e ${flowAnimation * 100}%, #333 ${flowAnimation * 100}%)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -10,
              top: -8,
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: `15px solid ${flowAnimation > 0.9 ? "#22c55e" : "#333"}`,
            }}
          />
        </div>

        {/* Code */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>📝</div>
          <div style={{ color: "#fff", fontSize: 24, marginTop: 10 }}>Instruksi</div>
        </div>

        {/* Arrow 2 */}
        <div
          style={{
            width: 100,
            height: 4,
            background: `linear-gradient(90deg, #60a5fa ${flowAnimation * 100}%, #333 ${flowAnimation * 100}%)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -10,
              top: -8,
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: `15px solid ${flowAnimation > 0.9 ? "#60a5fa" : "#333"}`,
            }}
          />
        </div>

        {/* Computer */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>💻</div>
          <div style={{ color: "#fff", fontSize: 24, marginTop: 10 }}>Komputer</div>
        </div>

        {/* Arrow 3 */}
        <div
          style={{
            width: 100,
            height: 4,
            background: `linear-gradient(90deg, #f59e0b ${flowAnimation * 100}%, #333 ${flowAnimation * 100}%)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -10,
              top: -8,
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: `15px solid ${flowAnimation > 0.9 ? "#f59e0b" : "#333"}`,
            }}
          />
        </div>

        {/* Result */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>✨</div>
          <div style={{ color: "#fff", fontSize: 24, marginTop: 10 }}>Hasil</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
