import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type VariableBox = {
  name: string;
  value: string;
  type: string;
  color: string;
};

const variables: VariableBox[] = [
  { name: 'nama', value: '"Budi"', type: 'String', color: '#e74c3c' },
  { name: 'umur', value: '25', type: 'int', color: '#3498db' },
  { name: 'tinggi', value: '175.5', type: 'double', color: '#2ecc71' },
  { name: 'aktif', value: 'true', type: 'boolean', color: '#f39c12' },
  { name: 'saldo', value: '1500000', type: 'int', color: '#9b59b6' },
];

export const VariableStorageModel: React.FC = () => {
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
          fontSize: 56,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: 6,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [-20, 0])}px)`,
        }}
      >
        Variable = Tempat Simpan Data
      </div>
      <div
        style={{
          fontSize: 26,
          color: '#888',
          textAlign: 'center',
          marginBottom: 40,
          opacity: titleProgress,
        }}
      >
        Kotak penyimpanan di memory komputer, masing-masing punya nama & isi
      </div>

      {/* Memory visualization */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {variables.map((v, index) => {
          const rowDelay = 15 + index * 12;
          const rowProgress = spring({
            frame: frame - rowDelay,
            fps,
            config: { damping: 18 },
          });

          const valueDelay = rowDelay + 10;
          const valueProgress = spring({
            frame: frame - valueDelay,
            fps,
            config: { damping: 20 },
          });

          return (
            <div
              key={v.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
                opacity: rowProgress,
                transform: `translateX(${interpolate(rowProgress, [0, 1], [-40, 0])}px)`,
              }}
            >
              {/* Label / Name */}
              <div
                style={{
                  width: 220,
                  backgroundColor: v.color,
                  borderRadius: '12px 0 0 12px',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: 'monospace',
                  }}
                >
                  {v.name}
                </span>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#16213e',
                }}
              >
                <span style={{ fontSize: 24, color: '#666' }}>=</span>
              </div>

              {/* Value box */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#16213e',
                  border: `2px solid ${v.color}40`,
                  borderRadius: '0 12px 12px 0',
                  padding: '18px 30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: valueProgress,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    color: '#e5c07b',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                  }}
                >
                  {v.value}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: '#666',
                    fontFamily: 'monospace',
                  }}
                >
                  {v.type}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom note */}
      {(() => {
        const noteProgress = spring({
          frame: frame - 85,
          fps,
          config: { damping: 16 },
        });
        return (
          <div
            style={{
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
              gap: 50,
              opacity: noteProgress,
              transform: `translateY(${interpolate(noteProgress, [0, 1], [15, 0])}px)`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  backgroundColor: '#e74c3c',
                }}
              />
              <span style={{ fontSize: 22, color: '#aaa' }}>Nama = Label kotak</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  backgroundColor: '#e5c07b',
                }}
              />
              <span style={{ fontSize: 22, color: '#aaa' }}>Value = Isi kotak</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  backgroundColor: '#666',
                }}
              />
              <span style={{ fontSize: 22, color: '#aaa' }}>Type = Jenis data</span>
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
