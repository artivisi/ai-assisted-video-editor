import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type InputCategory = {
  icon: string;
  label: string;
  color: string;
  examples: string[];
};

const inputCategories: InputCategory[] = [
  {
    icon: '👤',
    label: 'User',
    color: '#3498db',
    examples: ['Ketik keyboard', 'Klik mouse', 'Touch screen'],
  },
  {
    icon: '📡',
    label: 'Sensor',
    color: '#e67e22',
    examples: ['Fingerprint', 'Sensor cahaya', 'GPS / Lokasi'],
  },
  {
    icon: '📁',
    label: 'File & Network',
    color: '#9b59b6',
    examples: ['Baca file', 'API / Internet', 'Database'],
  },
];

type OutputCategory = {
  icon: string;
  label: string;
  color: string;
  examples: string[];
};

const outputCategories: OutputCategory[] = [
  {
    icon: '🖥️',
    label: 'Tampilan',
    color: '#2ecc71',
    examples: ['Text di layar', 'Grafik / Chart'],
  },
  {
    icon: '🔔',
    label: 'Notifikasi',
    color: '#e74c3c',
    examples: ['Bunyi / Alarm', 'Push notification'],
  },
  {
    icon: '📄',
    label: 'Action',
    color: '#1abc9c',
    examples: ['Buat file baru', 'Kirim email'],
  },
];

export const InputTypesOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a2e',
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: 40,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [-20, 0])}px)`,
        }}
      >
        Input & Output Aplikasi
      </div>

      <div style={{ flex: 1, display: 'flex', gap: 60 }}>
        {/* Input section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#3498db',
              marginBottom: 20,
              textAlign: 'center',
              opacity: spring({ frame: frame - 10, fps, config: { damping: 20 } }),
            }}
          >
            INPUT
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
            {inputCategories.map((cat, index) => {
              const catProgress = spring({
                frame: frame - 20 - index * 12,
                fps,
                config: { damping: 18 },
              });

              return (
                <div
                  key={cat.label}
                  style={{
                    backgroundColor: '#16213e',
                    borderRadius: 14,
                    borderLeft: `5px solid ${cat.color}`,
                    padding: '18px 24px',
                    opacity: catProgress,
                    transform: `translateX(${interpolate(catProgress, [0, 1], [-30, 0])}px)`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                  }}
                >
                  <span style={{ fontSize: 40 }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontSize: 26, fontWeight: 'bold', color: cat.color, marginBottom: 4 }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: 20, color: '#aaa' }}>
                      {cat.examples.join(' \u2022 ')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center arrow */}
        {(() => {
          const arrowProgress = spring({
            frame: frame - 60,
            fps,
            config: { damping: 16 },
          });
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: arrowProgress,
              }}
            >
              <div
                style={{
                  backgroundColor: '#f39c12',
                  borderRadius: 16,
                  padding: '20px 28px',
                  marginBottom: 16,
                  transform: `scale(${interpolate(arrowProgress, [0, 1], [0.7, 1])})`,
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
                  PROCESSING
                </div>
                <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
                  Kode Program
                </div>
              </div>
              <svg width="40" height="60" viewBox="0 0 40 60">
                <path d="M 5 20 L 20 0 L 35 20 M 20 0 L 20 60" stroke="#f39c12" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
              <div
                style={{
                  backgroundColor: 'rgba(0, 210, 255, 0.12)',
                  border: '2px solid #00d2ff',
                  borderRadius: 12,
                  padding: '12px 20px',
                  marginTop: 8,
                }}
              >
                <span style={{ fontSize: 22, color: '#00d2ff', fontWeight: 'bold' }}>
                  Variable
                </span>
              </div>
            </div>
          );
        })()}

        {/* Output section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#2ecc71',
              marginBottom: 20,
              textAlign: 'center',
              opacity: spring({ frame: frame - 10, fps, config: { damping: 20 } }),
            }}
          >
            OUTPUT
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
            {outputCategories.map((cat, index) => {
              const catProgress = spring({
                frame: frame - 45 - index * 12,
                fps,
                config: { damping: 18 },
              });

              return (
                <div
                  key={cat.label}
                  style={{
                    backgroundColor: '#16213e',
                    borderRadius: 14,
                    borderRight: `5px solid ${cat.color}`,
                    padding: '18px 24px',
                    opacity: catProgress,
                    transform: `translateX(${interpolate(catProgress, [0, 1], [30, 0])}px)`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    justifyContent: 'flex-end',
                    textAlign: 'right',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 26, fontWeight: 'bold', color: cat.color, marginBottom: 4 }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: 20, color: '#aaa' }}>
                      {cat.examples.join(' \u2022 ')}
                    </div>
                  </div>
                  <span style={{ fontSize: 40 }}>{cat.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
