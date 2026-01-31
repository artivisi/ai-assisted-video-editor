import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type AITool = {
  name: string;
  company: string;
  color: string;
  icon: string; // SVG path or emoji
};

const aiTools: AITool[] = [
  {
    name: 'ChatGPT',
    company: 'OpenAI',
    color: '#10a37f',
    icon: '🤖',
  },
  {
    name: 'Claude',
    company: 'Anthropic',
    color: '#d97706',
    icon: '🧠',
  },
  {
    name: 'Gemini',
    company: 'Google',
    color: '#4285f4',
    icon: '✨',
  },
  {
    name: 'Copilot',
    company: 'GitHub',
    color: '#6e40c9',
    icon: '👨‍✈️',
  },
];

export const AIToolsShowcase: React.FC<{
  highlightTool?: string;
}> = ({ highlightTool }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      padding: 60,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 60,
        opacity: titleProgress,
        transform: `translateY(${interpolate(titleProgress, [0, 1], [-30, 0])}px)`,
      }}>
        AI Tools untuk Programming
      </div>

      {/* Tools Grid */}
      <div style={{
        display: 'flex',
        gap: 40,
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 1400,
      }}>
        {aiTools.map((tool, index) => {
          const cardProgress = spring({
            frame: frame - 10 - index * 8,
            fps,
            config: { damping: 15, stiffness: 100 },
          });

          const isHighlighted = highlightTool === tool.name;
          const scale = isHighlighted ? 1.1 : 1;
          const glowIntensity = isHighlighted ? 0.6 : 0.2;

          return (
            <div
              key={tool.name}
              style={{
                width: 280,
                padding: 30,
                borderRadius: 24,
                backgroundColor: `${tool.color}15`,
                border: `3px solid ${tool.color}`,
                boxShadow: `0 0 ${isHighlighted ? 40 : 20}px ${tool.color}${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')}`,
                opacity: cardProgress,
                transform: `scale(${cardProgress * scale}) translateY(${interpolate(cardProgress, [0, 1], [50, 0])}px)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: 72,
                filter: `drop-shadow(0 0 10px ${tool.color})`,
              }}>
                {tool.icon}
              </div>

              {/* Name */}
              <div style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: 'white',
              }}>
                {tool.name}
              </div>

              {/* Company */}
              <div style={{
                fontSize: 22,
                color: tool.color,
                fontWeight: 500,
              }}>
                {tool.company}
              </div>

              {/* Free badge */}
              <div style={{
                fontSize: 16,
                color: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                padding: '6px 16px',
                borderRadius: 20,
                border: '1px solid #10b981',
              }}>
                Gratis
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        fontSize: 28,
        color: '#94a3b8',
        textAlign: 'center',
        marginTop: 50,
        opacity: spring({ frame: frame - 50, fps, config: { damping: 20 } }),
      }}>
        Pilih salah satu, konsep penggunaannya sama
      </div>
    </AbsoluteFill>
  );
};

export default AIToolsShowcase;
