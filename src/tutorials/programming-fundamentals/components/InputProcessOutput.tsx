import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

const ACCENT = '#00d2ff';
const BOX_BG = '#16213e';
const ARROW_COLOR = '#4a90d9';

type FlowBox = {
  label: string;
  sublabel: string;
  color: string;
  items: string[];
};

const flowBoxes: FlowBox[] = [
  {
    label: 'INPUT',
    sublabel: 'Data masuk',
    color: '#e74c3c',
    items: ['User ketik keyboard', 'Klik mouse', 'Sensor / File'],
  },
  {
    label: 'PROCESSING',
    sublabel: 'Kode program',
    color: '#f39c12',
    items: ['Baca data', 'Olah / Hitung', 'Format output'],
  },
  {
    label: 'OUTPUT',
    sublabel: 'Hasil',
    color: '#2ecc71',
    items: ['Tampilan layar', 'Bunyi / Notifikasi', 'File baru'],
  },
];

export const InputProcessOutput: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a2e',
        padding: 60,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 56,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: 8,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [-20, 0])}px)`,
        }}
      >
        Bagaimana Aplikasi Bekerja?
      </div>
      <div
        style={{
          fontSize: 26,
          color: '#888',
          textAlign: 'center',
          marginBottom: 50,
          opacity: titleProgress,
        }}
      >
        Semua aplikasi mengikuti pola yang sama
      </div>

      {/* Flow diagram */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        {flowBoxes.map((box, index) => {
          const boxDelay = 15 + index * 20;
          const boxProgress = spring({
            frame: frame - boxDelay,
            fps,
            config: { damping: 18 },
          });

          const arrowDelay = boxDelay + 12;
          const arrowProgress = spring({
            frame: frame - arrowDelay,
            fps,
            config: { damping: 20 },
          });

          return (
            <React.Fragment key={box.label}>
              {/* Box */}
              <div
                style={{
                  width: 420,
                  opacity: boxProgress,
                  transform: `scale(${interpolate(boxProgress, [0, 1], [0.8, 1])})`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    backgroundColor: box.color,
                    padding: '18px 24px',
                    borderRadius: '16px 16px 0 0',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 34, fontWeight: 'bold', color: '#fff' }}>
                    {box.label}
                  </div>
                  <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)' }}>
                    {box.sublabel}
                  </div>
                </div>

                {/* Items */}
                <div
                  style={{
                    backgroundColor: BOX_BG,
                    padding: 24,
                    borderRadius: '0 0 16px 16px',
                    flex: 1,
                  }}
                >
                  {box.items.map((item, i) => {
                    const itemProgress = spring({
                      frame: frame - boxDelay - 8 - i * 6,
                      fps,
                      config: { damping: 20 },
                    });
                    return (
                      <div
                        key={i}
                        style={{
                          fontSize: 24,
                          color: '#ddd',
                          marginBottom: i < box.items.length - 1 ? 14 : 0,
                          opacity: itemProgress,
                          transform: `translateX(${interpolate(itemProgress, [0, 1], [20, 0])}px)`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span style={{ color: box.color, fontSize: 18 }}>&#9654;</span>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Arrow between boxes */}
              {index < flowBoxes.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    opacity: arrowProgress,
                    transform: `scaleX(${arrowProgress})`,
                  }}
                >
                  <svg width="60" height="40" viewBox="0 0 60 40">
                    <path
                      d="M 0 20 L 40 20 M 32 10 L 45 20 L 32 30"
                      stroke={ARROW_COLOR}
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Variable callout */}
      {(() => {
        const varProgress = spring({
          frame: frame - 80,
          fps,
          config: { damping: 16 },
        });
        return (
          <div
            style={{
              marginTop: 40,
              textAlign: 'center',
              opacity: varProgress,
              transform: `translateY(${interpolate(varProgress, [0, 1], [20, 0])}px)`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(0, 210, 255, 0.15)',
                border: `2px solid ${ACCENT}`,
                borderRadius: 12,
                padding: '16px 40px',
              }}
            >
              <span style={{ fontSize: 28, color: ACCENT, fontWeight: 'bold' }}>
                Variable = tempat menyimpan data selama processing
              </span>
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
