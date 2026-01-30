import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type NumberRow = {
  decimal: number;
  binary: string;
  octal: string;
  hex: string;
};

const numberRows: NumberRow[] = [
  { decimal: 0, binary: '0000', octal: '0', hex: '0' },
  { decimal: 1, binary: '0001', octal: '1', hex: '1' },
  { decimal: 5, binary: '0101', octal: '5', hex: '5' },
  { decimal: 8, binary: '1000', octal: '10', hex: '8' },
  { decimal: 10, binary: '1010', octal: '12', hex: 'A' },
  { decimal: 15, binary: '1111', octal: '17', hex: 'F' },
  { decimal: 16, binary: '10000', octal: '20', hex: '10' },
  { decimal: 100, binary: '1100100', octal: '144', hex: '64' },
  { decimal: 255, binary: '11111111', octal: '377', hex: 'FF' },
];

const colorExamples = [
  { name: 'Red', hex: '#FF0000', rgb: '255, 0, 0' },
  { name: 'Green', hex: '#00FF00', rgb: '0, 255, 0' },
  { name: 'Blue', hex: '#0000FF', rgb: '0, 0, 255' },
  { name: 'Yellow', hex: '#FFFF00', rgb: '255, 255, 0' },
];

export const NumberSystemsChart: React.FC<{
  showColors?: boolean;
}> = ({ showColors = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  if (showColors) {
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
          Hexadecimal Colors
        </div>
        <div style={{
          fontSize: 28,
          color: '#888',
          textAlign: 'center',
          marginBottom: 40,
        }}>
          #RRGGBB - 2 hex digits per channel (0-255)
        </div>

        {/* Color grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 30,
          padding: '0 100px',
        }}>
          {colorExamples.map((color, index) => {
            const blockProgress = spring({
              frame: frame - 30 - index * 10,
              fps,
              config: { damping: 20 },
            });

            return (
              <div
                key={color.name}
                style={{
                  display: 'flex',
                  backgroundColor: '#282c34',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  opacity: blockProgress,
                  transform: `scale(${interpolate(blockProgress, [0, 1], [0.9, 1])})`,
                }}
              >
                {/* Color swatch */}
                <div style={{
                  width: 150,
                  backgroundColor: color.hex,
                }} />

                {/* Info */}
                <div style={{
                  flex: 1,
                  padding: 25,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: 36,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 10,
                  }}>
                    {color.name}
                  </div>
                  <div style={{
                    fontSize: 32,
                    fontFamily: 'monospace',
                    color: '#61afef',
                    marginBottom: 8,
                  }}>
                    {color.hex}
                  </div>
                  <div style={{
                    fontSize: 24,
                    fontFamily: 'monospace',
                    color: '#98c379',
                  }}>
                    RGB({color.rgb})
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        <div style={{
          textAlign: 'center',
          marginTop: 30,
          fontSize: 28,
          color: '#888',
        }}>
          FF = 255 (max) | 00 = 0 (min) | Each channel: 00-FF
        </div>
      </AbsoluteFill>
    );
  }

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
        Number Systems Comparison
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Decimal (10) | Binary (2) | Octal (8) | Hexadecimal (16)
      </div>

      {/* Table */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#282c34',
        borderRadius: '16px',
        overflow: 'hidden',
        margin: '0 100px',
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          backgroundColor: '#3a3f4b',
          padding: '15px 0',
        }}>
          {['Decimal (10)', 'Binary (2)', 'Octal (8)', 'Hex (16)'].map((header, i) => (
            <div
              key={header}
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
                color: ['#e5c07b', '#61afef', '#c678dd', '#98c379'][i],
              }}
            >
              {header}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {numberRows.map((row, index) => {
            const rowProgress = spring({
              frame: frame - 30 - index * 5,
              fps,
              config: { damping: 20 },
            });

            return (
              <div
                key={row.decimal}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  padding: '12px 0',
                  backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.03)',
                  opacity: rowProgress,
                }}
              >
                <div style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'monospace',
                  color: '#e5c07b',
                }}>
                  {row.decimal}
                </div>
                <div style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'monospace',
                  color: '#61afef',
                }}>
                  {row.binary}
                </div>
                <div style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'monospace',
                  color: '#c678dd',
                }}>
                  {row.octal}
                </div>
                <div style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'monospace',
                  color: '#98c379',
                }}>
                  {row.hex}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginTop: 25,
        fontSize: 24,
        color: '#888',
      }}>
        <span>0b = Binary prefix</span>
        <span>0o = Octal prefix</span>
        <span>0x = Hex prefix</span>
      </div>
    </AbsoluteFill>
  );
};

export default NumberSystemsChart;
