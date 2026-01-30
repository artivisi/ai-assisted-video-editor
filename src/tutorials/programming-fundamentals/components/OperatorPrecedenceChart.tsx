import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type PrecedenceLevel = {
  level: number;
  operators: string;
  example: string;
  color: string;
};

const precedenceLevels: PrecedenceLevel[] = [
  { level: 1, operators: '( )', example: '(2 + 3) * 4 = 20', color: '#e06c75' },
  { level: 2, operators: '**', example: '2 ** 3 = 8', color: '#e5c07b' },
  { level: 3, operators: '* / % //', example: '10 / 2 * 3 = 15', color: '#98c379' },
  { level: 4, operators: '+ -', example: '5 + 3 - 2 = 6', color: '#61afef' },
  { level: 5, operators: '= += -= *= /=', example: 'x += 5', color: '#c678dd' },
];

type ExampleCalc = {
  expression: string;
  steps: string[];
  result: string;
};

const examples: ExampleCalc[] = [
  {
    expression: '2 + 3 * 4',
    steps: ['3 * 4 = 12', '2 + 12 = 14'],
    result: '14',
  },
  {
    expression: '(2 + 3) * 4',
    steps: ['(2 + 3) = 5', '5 * 4 = 20'],
    result: '20',
  },
  {
    expression: '10 - 4 / 2',
    steps: ['4 / 2 = 2', '10 - 2 = 8'],
    result: '8',
  },
];

export const OperatorPrecedenceChart: React.FC<{
  showExamples?: boolean;
}> = ({ showExamples = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  if (showExamples) {
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
          Operator Precedence Examples
        </div>
        <div style={{
          fontSize: 28,
          color: '#888',
          textAlign: 'center',
          marginBottom: 40,
        }}>
          PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract
        </div>

        {/* Examples */}
        <div style={{
          flex: 1,
          display: 'flex',
          gap: 30,
          padding: '0 50px',
        }}>
          {examples.map((ex, index) => {
            const blockProgress = spring({
              frame: frame - 30 - index * 20,
              fps,
              config: { damping: 20 },
            });

            return (
              <div
                key={ex.expression}
                style={{
                  flex: 1,
                  backgroundColor: '#282c34',
                  borderRadius: '16px',
                  padding: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: blockProgress,
                  transform: `translateY(${interpolate(blockProgress, [0, 1], [30, 0])}px)`,
                }}
              >
                {/* Expression */}
                <div style={{
                  fontSize: 42,
                  fontFamily: 'monospace',
                  color: '#e5c07b',
                  textAlign: 'center',
                  marginBottom: 30,
                  padding: '15px',
                  backgroundColor: '#3a3f4b',
                  borderRadius: '10px',
                }}>
                  {ex.expression}
                </div>

                {/* Steps */}
                <div style={{ flex: 1 }}>
                  {ex.steps.map((step, i) => {
                    const stepProgress = spring({
                      frame: frame - 50 - index * 20 - i * 15,
                      fps,
                      config: { damping: 20 },
                    });

                    return (
                      <div
                        key={i}
                        style={{
                          fontSize: 32,
                          fontFamily: 'monospace',
                          color: '#abb2bf',
                          marginBottom: 15,
                          opacity: stepProgress,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 15,
                        }}
                      >
                        <span style={{ color: '#61afef' }}>{i + 1}.</span>
                        {step}
                      </div>
                    );
                  })}
                </div>

                {/* Result */}
                <div style={{
                  fontSize: 48,
                  fontFamily: 'monospace',
                  color: '#98c379',
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: '#21252b',
                  borderRadius: '10px',
                }}>
                  = {ex.result}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tip */}
        <div style={{
          textAlign: 'center',
          marginTop: 30,
          fontSize: 28,
          color: '#888',
        }}>
          Gunakan parentheses ( ) untuk kejelasan!
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
        Operator Precedence
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Urutan eksekusi operator (dari atas ke bawah)
      </div>

      {/* Precedence table */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        padding: '0 150px',
      }}>
        {precedenceLevels.map((level, index) => {
          const rowProgress = spring({
            frame: frame - 30 - index * 10,
            fps,
            config: { damping: 20 },
          });

          return (
            <div
              key={level.level}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#282c34',
                borderRadius: '12px',
                overflow: 'hidden',
                opacity: rowProgress,
                transform: `translateX(${interpolate(rowProgress, [0, 1], [-30, 0])}px)`,
              }}
            >
              {/* Priority indicator */}
              <div style={{
                width: 80,
                height: '100%',
                backgroundColor: level.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 36,
                fontWeight: 'bold',
                color: '#1a1a2e',
                padding: '20px 0',
              }}>
                {level.level}
              </div>

              {/* Operators */}
              <div style={{
                flex: 1,
                padding: '20px 30px',
                fontSize: 36,
                fontFamily: 'monospace',
                color: level.color,
              }}>
                {level.operators}
              </div>

              {/* Example */}
              <div style={{
                padding: '20px 30px',
                fontSize: 28,
                fontFamily: 'monospace',
                color: '#abb2bf',
                backgroundColor: '#21252b',
              }}>
                {level.example}
              </div>
            </div>
          );
        })}
      </div>

      {/* PEMDAS reminder */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        marginTop: 25,
        fontSize: 32,
        fontFamily: 'monospace',
      }}>
        <span style={{ color: '#e06c75' }}>P</span>
        <span style={{ color: '#e5c07b' }}>E</span>
        <span style={{ color: '#98c379' }}>MD</span>
        <span style={{ color: '#61afef' }}>AS</span>
        <span style={{ color: '#888', marginLeft: 20 }}>
          (Parentheses, Exponents, Multiply/Divide, Add/Subtract)
        </span>
      </div>
    </AbsoluteFill>
  );
};

export default OperatorPrecedenceChart;
