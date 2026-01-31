import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Shows different applications of programming
 */
export const ProgrammingApplications: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const applications = [
    { icon: "🏢", title: "Aplikasi Bisnis", desc: "ERP, CRM, Accounting", color: "#3b82f6" },
    { icon: "🎮", title: "Game Development", desc: "Mobile, PC, Console", color: "#8b5cf6" },
    { icon: "📱", title: "Mobile Apps", desc: "Android, iOS", color: "#22c55e" },
    { icon: "🌐", title: "Website", desc: "E-commerce, Social Media", color: "#f59e0b" },
    { icon: "🤖", title: "IoT & Automation", desc: "Smart Home, Sensors", color: "#ef4444" },
    { icon: "🏥", title: "Healthcare", desc: "Medical Devices, Records", color: "#06b6d4" },
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
          opacity: spring({ frame, fps, config: { damping: 15 } }),
        }}
      >
        Aplikasi Programming di Berbagai Bidang
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {applications.map((app, i) => {
          const delay = i * 10;
          const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });
          const scale = interpolate(s, [0, 1], [0.8, 1]);
          const opacity = s;

          return (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 20,
                padding: 40,
                textAlign: "center",
                border: `2px solid ${app.color}40`,
                transform: `scale(${scale})`,
                opacity,
              }}
            >
              <div style={{ fontSize: 72, marginBottom: 20 }}>{app.icon}</div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: app.color,
                  marginBottom: 10,
                }}
              >
                {app.title}
              </div>
              <div style={{ fontSize: 22, color: "#9ca3af" }}>{app.desc}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
