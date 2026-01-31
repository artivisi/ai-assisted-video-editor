import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type ListItem = {
  text: string;
  subtext?: string;
};

const dosItems: ListItem[] = [
  { text: 'Minta Penjelasan Konsep', subtext: '"Jelaskan apa itu variable..."' },
  { text: 'Generate Latihan', subtext: '"Buat 5 soal tentang loops..."' },
  { text: 'Jelaskan Error', subtext: '"Apa arti error ini?"' },
  { text: 'Minta Analogi', subtext: '"Analogikan array dengan..."' },
  { text: 'Code Review', subtext: '"Review code ini..."' },
];

const dontsItems: ListItem[] = [
  { text: 'Minta Solusi Langsung', subtext: '"Buatkan function untuk..."' },
  { text: 'Copy Tanpa Paham', subtext: 'Paste tanpa mengerti' },
  { text: 'Skip Struggle', subtext: 'Langsung tanya saat stuck' },
];

export const AIDosDonts: React.FC<{
  showDos?: boolean;
  showDonts?: boolean;
}> = ({ showDos = true, showDonts = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#1a1a2e',
      padding: 60,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 72,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 40,
        opacity: titleProgress,
      }}>
        AI sebagai Tutor Programming
      </div>

      {/* Two columns */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 40,
        padding: '0 20px',
      }}>
        {/* DO's Column */}
        {showDos && (
          <div style={{
            flex: 1,
            backgroundColor: 'rgba(107, 203, 119, 0.1)',
            borderRadius: 20,
            padding: 30,
            border: '3px solid #6bcb77',
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#6bcb77',
              textAlign: 'center',
              marginBottom: 30,
            }}>
              ✓ DO
            </div>
            {dosItems.map((item, index) => {
              const itemProgress = spring({
                frame: frame - 15 - index * 8,
                fps,
                config: { damping: 20 },
              });

              return (
                <div
                  key={item.text}
                  style={{
                    marginBottom: 20,
                    opacity: itemProgress,
                    transform: `translateX(${interpolate(itemProgress, [0, 1], [-30, 0])}px)`,
                  }}
                >
                  <div style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                    {item.text}
                  </div>
                  {item.subtext && (
                    <div style={{
                      fontSize: 22,
                      color: '#888',
                      fontStyle: 'italic',
                      marginTop: 4,
                    }}>
                      {item.subtext}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DON'T Column */}
        {showDonts && (
          <div style={{
            flex: 1,
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderRadius: 20,
            padding: 30,
            border: '3px solid #ff6b6b',
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#ff6b6b',
              textAlign: 'center',
              marginBottom: 30,
            }}>
              ✗ DON'T
            </div>
            {dontsItems.map((item, index) => {
              const itemProgress = spring({
                frame: frame - 15 - index * 8,
                fps,
                config: { damping: 20 },
              });

              return (
                <div
                  key={item.text}
                  style={{
                    marginBottom: 20,
                    opacity: itemProgress,
                    transform: `translateX(${interpolate(itemProgress, [0, 1], [30, 0])}px)`,
                  }}
                >
                  <div style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                    {item.text}
                  </div>
                  {item.subtext && (
                    <div style={{
                      fontSize: 22,
                      color: '#888',
                      fontStyle: 'italic',
                      marginTop: 4,
                    }}>
                      {item.subtext}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        fontSize: 28,
        color: '#666',
        textAlign: 'center',
        marginTop: 30,
      }}>
        AI = Tutor, bukan Cheat Sheet
      </div>
    </AbsoluteFill>
  );
};

export default AIDosDonts;
