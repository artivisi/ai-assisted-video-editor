import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type CodeBlock = {
  language: string;
  color: string;
  code: string;
  filename: string;
  runCommand: string;
};

const codeBlocks: CodeBlock[] = [
  {
    language: 'Python',
    color: '#3776AB',
    code: 'print("Hello, World!")',
    filename: 'hello.py',
    runCommand: 'python hello.py',
  },
  {
    language: 'JavaScript',
    color: '#F7DF1E',
    code: 'console.log("Hello, World!");',
    filename: 'hello.js',
    runCommand: 'node hello.js',
  },
  {
    language: 'Java',
    color: '#ED8B00',
    code: `void main() {
    println("Hello, World!");
}`,
    filename: 'Hello.java',
    runCommand: 'java Hello.java',
  },
];

export const HelloWorldComparison: React.FC<{
  highlightLanguage?: string;
}> = ({ highlightLanguage }) => {
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
        Hello World in 3 Languages
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Tradisi sejak 1978 - Program pertama saat belajar bahasa baru
      </div>

      {/* Code blocks */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 30,
        padding: '0 20px',
      }}>
        {codeBlocks.map((block, index) => {
          const blockProgress = spring({
            frame: frame - 20 - index * 15,
            fps,
            config: { damping: 20 },
          });

          const isHighlighted = highlightLanguage === block.language;
          const lines = block.code.split('\n').length;

          return (
            <div
              key={block.language}
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
                backgroundColor: block.color,
                padding: '15px 20px',
                borderRadius: '12px 12px 0 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: block.language === 'JavaScript' ? '#000' : '#fff',
                }}>
                  {block.language}
                </span>
                <span style={{
                  fontSize: 20,
                  color: block.language === 'JavaScript' ? '#333' : 'rgba(255,255,255,0.8)',
                }}>
                  {lines} {lines === 1 ? 'line' : 'lines'}
                </span>
              </div>

              {/* Code block */}
              <div style={{
                flex: 1,
                backgroundColor: '#282c34',
                padding: 20,
                fontFamily: 'monospace',
                fontSize: 24,
                color: '#abb2bf',
                whiteSpace: 'pre',
                lineHeight: 1.5,
                borderLeft: isHighlighted ? `4px solid ${block.color}` : 'none',
                boxShadow: isHighlighted ? `0 0 30px ${block.color}40` : 'none',
              }}>
                {block.code}
              </div>

              {/* Filename and run command */}
              <div style={{
                backgroundColor: '#21252b',
                padding: '12px 20px',
                borderRadius: '0 0 12px 12px',
              }}>
                <div style={{
                  fontSize: 22,
                  color: '#98c379',
                  fontFamily: 'monospace',
                }}>
                  📄 {block.filename}
                </div>
                <div style={{
                  fontSize: 20,
                  color: '#61afef',
                  fontFamily: 'monospace',
                  marginTop: 4,
                }}>
                  $ {block.runCommand}
                </div>
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
        <span>🐍 Python: 1 baris</span>
        <span>🟨 JavaScript: 1 baris + semicolon</span>
        <span>☕ Java 25: Simplified syntax!</span>
      </div>
    </AbsoluteFill>
  );
};

export default HelloWorldComparison;
