import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Shows how high-level code becomes machine code
 * For "Apa Itu Programming Language?" section
 */
export const CompilationProcess: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stages = [
    {
      label: "High-Level Code",
      example: 'print("Hello")',
      color: "#22c55e",
      description: "Bahasa yang mudah dibaca manusia",
    },
    {
      label: "Compiler / Interpreter",
      example: "→ Translate →",
      color: "#f59e0b",
      description: "Menerjemahkan ke bahasa mesin",
    },
    {
      label: "Machine Code",
      example: "01001000 01100101",
      color: "#ef4444",
      description: "Binary yang dimengerti komputer",
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
          fontSize: 52,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          marginBottom: 20,
          opacity: spring({ frame, fps, config: { damping: 15 } }),
        }}
      >
        Bagaimana Kode Berjalan?
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 60,
          opacity: spring({ frame: frame - 10, fps, config: { damping: 15 } }),
        }}
      >
        Komputer hanya mengerti 0 dan 1 (binary)
      </div>

      {/* Process Flow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
          marginTop: 40,
        }}
      >
        {stages.map((stage, i) => {
          const delay = i * 25;
          const s = spring({ frame: frame - delay - 20, fps, config: { damping: 15 } });
          const arrowS = spring({ frame: frame - delay - 35, fps, config: { damping: 15 } });

          return (
            <React.Fragment key={i}>
              <div
                style={{
                  background: `${stage.color}15`,
                  borderRadius: 20,
                  padding: 40,
                  textAlign: "center",
                  border: `3px solid ${stage.color}50`,
                  width: 380,
                  opacity: s,
                  transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    color: stage.color,
                    marginBottom: 20,
                  }}
                >
                  {stage.label}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontFamily: "monospace",
                    color: "#fff",
                    background: "#000",
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 20,
                  }}
                >
                  {stage.example}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    color: "#9ca3af",
                  }}
                >
                  {stage.description}
                </div>
              </div>

              {/* Arrow between stages */}
              {i < stages.length - 1 && (
                <div
                  style={{
                    fontSize: 60,
                    color: "#4b5563",
                    opacity: arrowS,
                    transform: `scale(${interpolate(arrowS, [0, 1], [0.5, 1])})`,
                  }}
                >
                  →
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 26,
          color: "#60a5fa",
          opacity: spring({ frame: frame - 90, fps, config: { damping: 15 } }),
        }}
      >
        Python, Java, JavaScript = bahasa <strong>high-level</strong> (mudah dipelajari)
      </div>
    </AbsoluteFill>
  );
};
