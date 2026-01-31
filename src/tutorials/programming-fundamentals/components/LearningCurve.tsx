import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Learning curve visualization - bicycle analogy
 */
export const LearningCurve: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Curve animation
  const curveProgress = interpolate(frame, [30, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stages = [
    { label: "Mulai", desc: "Bingung, sulit", y: 80, color: "#ef4444" },
    { label: "Belajar", desc: "Sering error", y: 60, color: "#f59e0b" },
    { label: "Latihan", desc: "Mulai paham", y: 35, color: "#3b82f6" },
    { label: "Mahir", desc: "Otomatis!", y: 15, color: "#22c55e" },
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
        Kurva Belajar Programming
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 40,
          opacity: spring({ frame: frame - 10, fps, config: { damping: 15 } }),
        }}
      >
        Seperti belajar naik sepeda - awalnya sulit, lama-lama otomatis 🚴
      </div>

      {/* Chart Area */}
      <div
        style={{
          position: "relative",
          width: 1200,
          height: 500,
          margin: "0 auto",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 20,
          padding: 40,
        }}
      >
        {/* Y Axis Label */}
        <div
          style={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "rotate(-90deg) translateX(-50%)",
            fontSize: 20,
            color: "#9ca3af",
            whiteSpace: "nowrap",
          }}
        >
          Tingkat Kesulitan
        </div>

        {/* X Axis Label */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 20,
            color: "#9ca3af",
          }}
        >
          Waktu & Latihan
        </div>

        {/* Curve */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 400"
          style={{ position: "absolute", top: 40, left: 60 }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 100}
              x2="900"
              y2={i * 100}
              stroke="#333"
              strokeWidth="1"
            />
          ))}

          {/* Curve path */}
          <path
            d="M 50 320 Q 200 300, 350 240 Q 500 180, 650 100 Q 800 40, 900 30"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 - curveProgress * 1000}
          />

          {/* Stage markers */}
          {stages.map((stage, i) => {
            const x = 50 + i * 280;
            const y = stage.y * 4;
            const stageSpring = spring({
              frame: frame - 60 - i * 20,
              fps,
              config: { damping: 15 },
            });

            return (
              <g key={i} opacity={stageSpring}>
                <circle cx={x} cy={y} r="12" fill={stage.color} />
                <text
                  x={x}
                  y={y + 45}
                  textAnchor="middle"
                  fill={stage.color}
                  fontSize="24"
                  fontWeight="bold"
                >
                  {stage.label}
                </text>
                <text x={x} y={y + 75} textAnchor="middle" fill="#9ca3af" fontSize="18">
                  {stage.desc}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Encouragement */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 32,
          color: "#22c55e",
          fontWeight: "bold",
          opacity: spring({ frame: frame - 140, fps, config: { damping: 15 } }),
        }}
      >
        Semua orang bisa belajar programming! 💪
      </div>
    </AbsoluteFill>
  );
};
