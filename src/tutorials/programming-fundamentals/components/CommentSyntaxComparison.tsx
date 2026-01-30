import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type CommentType = {
  language: string;
  color: string;
  singleLine: string;
  multiLine: string;
  docComment: string;
};

const commentTypes: CommentType[] = [
  {
    language: 'Python',
    color: '#3776AB',
    singleLine: '# Ini komentar',
    multiLine: `"""
Ini komentar
multi-line
"""`,
    docComment: `def greet():
    """Dokumentasi function"""
    pass`,
  },
  {
    language: 'JavaScript',
    color: '#F7DF1E',
    singleLine: '// Ini komentar',
    multiLine: `/*
 * Ini komentar
 * multi-line
 */`,
    docComment: `/**
 * Dokumentasi function
 * @param {string} name
 */`,
  },
  {
    language: 'Java',
    color: '#ED8B00',
    singleLine: '// Ini komentar',
    multiLine: `/*
 * Ini komentar
 * multi-line
 */`,
    docComment: `/**
 * Dokumentasi method
 * @param name nama user
 */`,
  },
];

export const CommentSyntaxComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#1a1a2e',
      padding: 40,
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
        Comment Syntax Comparison
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
      }}>
        Komentar diabaikan komputer, tapi penting untuk manusia
      </div>

      {/* Comment types grid */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 25,
        padding: '0 10px',
      }}>
        {commentTypes.map((type, index) => {
          const blockProgress = spring({
            frame: frame - 20 - index * 15,
            fps,
            config: { damping: 20 },
          });

          return (
            <div
              key={type.language}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 15,
                opacity: blockProgress,
                transform: `translateY(${interpolate(blockProgress, [0, 1], [30, 0])}px)`,
              }}
            >
              {/* Language header */}
              <div style={{
                backgroundColor: type.color,
                padding: '12px 16px',
                borderRadius: '10px',
                textAlign: 'center',
              }}>
                <span style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: type.language === 'JavaScript' ? '#000' : '#fff',
                }}>
                  {type.language}
                </span>
              </div>

              {/* Single line comment */}
              <div style={{
                backgroundColor: '#282c34',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  backgroundColor: '#3a3f4b',
                  padding: '8px 12px',
                  fontSize: 20,
                  color: '#98c379',
                  fontWeight: 'bold',
                }}>
                  Single Line
                </div>
                <div style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: 22,
                  color: '#6a9955',
                  whiteSpace: 'pre',
                }}>
                  {type.singleLine}
                </div>
              </div>

              {/* Multi-line comment */}
              <div style={{
                backgroundColor: '#282c34',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{
                  backgroundColor: '#3a3f4b',
                  padding: '8px 12px',
                  fontSize: 20,
                  color: '#98c379',
                  fontWeight: 'bold',
                }}>
                  Multi-Line
                </div>
                <div style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: 20,
                  color: '#6a9955',
                  whiteSpace: 'pre',
                  lineHeight: 1.3,
                }}>
                  {type.multiLine}
                </div>
              </div>

              {/* Doc comment */}
              <div style={{
                backgroundColor: '#282c34',
                borderRadius: '8px',
                overflow: 'hidden',
                flex: 1,
              }}>
                <div style={{
                  backgroundColor: '#3a3f4b',
                  padding: '8px 12px',
                  fontSize: 20,
                  color: '#61afef',
                  fontWeight: 'bold',
                }}>
                  Documentation
                </div>
                <div style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: 18,
                  color: '#6a9955',
                  whiteSpace: 'pre',
                  lineHeight: 1.3,
                }}>
                  {type.docComment}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 50,
        marginTop: 20,
        fontSize: 24,
        color: '#888',
      }}>
        <span>Python: # dan """</span>
        <span>JS/Java: // dan /* */</span>
        <span>Doc: """ / /** */</span>
      </div>
    </AbsoluteFill>
  );
};

export default CommentSyntaxComparison;
