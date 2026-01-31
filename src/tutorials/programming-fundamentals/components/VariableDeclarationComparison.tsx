import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type LanguageVars = {
  language: string;
  color: string;
  code: string;
  features: string[];
};

const languageVars: LanguageVars[] = [
  {
    language: 'Python',
    color: '#3776AB',
    code: `nama = "Budi"
umur = 25
tinggi = 175.5
aktif = True`,
    features: ['Dynamic typing', 'No declaration keyword', 'snake_case'],
  },
  {
    language: 'JavaScript',
    color: '#F7DF1E',
    code: `let nama = "Budi";
const umur = 25;
let tinggi = 175.5;
let aktif = true;`,
    features: ['let = mutable', 'const = immutable', 'camelCase'],
  },
  {
    language: 'Java',
    color: '#ED8B00',
    code: `String nama = "Budi";
int umur = 25;
double tinggi = 175.5;
boolean aktif = true;`,
    features: ['Static typing', 'Type required', 'camelCase'],
  },
];

export const VariableDeclarationComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#1a1a2e',
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        opacity: titleProgress,
      }}>
        Variable Declaration
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Tempat menyimpan data dengan nama
      </div>

      {/* Code blocks */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 30,
        padding: '0 20px',
      }}>
        {languageVars.map((lang, index) => {
          const blockProgress = spring({
            frame: frame - 20 - index * 15,
            fps,
            config: { damping: 20 },
          });

          return (
            <div
              key={lang.language}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                opacity: blockProgress,
                transform: `translateY(${interpolate(blockProgress, [0, 1], [30, 0])}px)`,
              }}
            >
              {/* Language header */}
              <div style={{
                backgroundColor: lang.color,
                padding: '15px 20px',
                borderRadius: '12px 12px 0 0',
                textAlign: 'center',
              }}>
                <span style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: lang.language === 'JavaScript' ? '#000' : '#fff',
                }}>
                  {lang.language}
                </span>
              </div>

              {/* Code block */}
              <div style={{
                flex: 1,
                backgroundColor: '#282c34',
                padding: 25,
                fontFamily: 'monospace',
                fontSize: 26,
                color: '#abb2bf',
                whiteSpace: 'pre',
                lineHeight: 1.6,
              }}>
                {lang.code}
              </div>

              {/* Features */}
              <div style={{
                backgroundColor: '#21252b',
                padding: '15px 20px',
                borderRadius: '0 0 12px 12px',
              }}>
                {lang.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 22,
                      color: '#98c379',
                      fontFamily: 'monospace',
                      marginBottom: i < lang.features.length - 1 ? 6 : 0,
                    }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison note */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 60,
        marginTop: 30,
        fontSize: 24,
        color: '#888',
      }}>
        <span>Python: Paling ringkas</span>
        <span>JS: let/const choice</span>
        <span>Java: Tipe wajib</span>
      </div>
    </AbsoluteFill>
  );
};

export default VariableDeclarationComparison;
