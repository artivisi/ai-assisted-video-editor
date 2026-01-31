import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type Language = {
  name: string;
  color: string;
  x: number; // 0-100 (weak to strong)
  y: number; // 0-100 (dynamic to static)
};

const languages: Language[] = [
  { name: 'Python', color: '#3776AB', x: 75, y: 20 },      // Dynamic + Strong
  { name: 'JavaScript', color: '#F7DF1E', x: 25, y: 15 },  // Dynamic + Weak
  { name: 'Java', color: '#ED8B00', x: 85, y: 85 },        // Static + Strong
  { name: 'TypeScript', color: '#3178C6', x: 80, y: 75 },  // Static + Strong
  { name: 'PHP', color: '#777BB4', x: 35, y: 25 },         // Dynamic + Weak-ish
  { name: 'C', color: '#A8B9CC', x: 40, y: 90 },           // Static + Weak-ish
  { name: 'Go', color: '#00ADD8', x: 70, y: 80 },          // Static + Strong
  { name: 'Rust', color: '#DEA584', x: 90, y: 90 },        // Static + Strong
];

export const TypingSystemsDiagram: React.FC<{
  showLanguages?: string[];
  animateIn?: boolean;
}> = ({ showLanguages = ['Python', 'JavaScript', 'Java'], animateIn = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const filteredLanguages = languages.filter(l => showLanguages.includes(l.name));

  // Animation progress
  const gridProgress = animateIn ? spring({ frame, fps, config: { damping: 20 } }) : 1;
  const labelProgress = animateIn ? spring({ frame: frame - 15, fps, config: { damping: 20 } }) : 1;

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
        marginBottom: 20,
        opacity: interpolate(gridProgress, [0, 1], [0, 1]),
      }}>
        Typing Systems
      </div>

      {/* Diagram Container */}
      <div style={{
        flex: 1,
        position: 'relative',
        margin: '20px 60px',
      }}>
        {/* Grid background */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            opacity: interpolate(gridProgress, [0, 1], [0, 0.3]),
          }}
        >
          {/* Grid lines */}
          {[20, 40, 60, 80].map(pos => (
            <React.Fragment key={pos}>
              <line x1={pos} y1="0" x2={pos} y2="100" stroke="#444" strokeWidth="0.3" />
              <line x1="0" y1={pos} x2="100" y2={pos} stroke="#444" strokeWidth="0.3" />
            </React.Fragment>
          ))}
        </svg>

        {/* Axis labels */}
        <div style={{
          position: 'absolute',
          bottom: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#888',
          fontSize: 36,
          opacity: labelProgress,
        }}>
          <span style={{ color: '#ff6b6b' }}>Weak</span>
          {' ← Typing Strength → '}
          <span style={{ color: '#4ecdc4' }}>Strong</span>
        </div>

        <div style={{
          position: 'absolute',
          left: -50,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          color: '#888',
          fontSize: 36,
          whiteSpace: 'nowrap',
          opacity: labelProgress,
        }}>
          <span style={{ color: '#ffd93d' }}>Dynamic</span>
          {' ← Type Checking → '}
          <span style={{ color: '#6bcb77' }}>Static</span>
        </div>

        {/* Quadrant labels */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'rgba(255, 107, 107, 0.6)',
          fontSize: 28,
          fontWeight: 'bold',
          opacity: labelProgress,
        }}>
          Dynamic + Weak
        </div>
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: 'rgba(78, 205, 196, 0.6)',
          fontSize: 28,
          fontWeight: 'bold',
          opacity: labelProgress,
        }}>
          Dynamic + Strong
        </div>
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          color: 'rgba(255, 217, 61, 0.6)',
          fontSize: 28,
          fontWeight: 'bold',
          opacity: labelProgress,
        }}>
          Static + Weak
        </div>
        <div style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          color: 'rgba(107, 203, 119, 0.6)',
          fontSize: 28,
          fontWeight: 'bold',
          opacity: labelProgress,
        }}>
          Static + Strong
        </div>

        {/* Language dots */}
        {filteredLanguages.map((lang, index) => {
          const dotProgress = animateIn
            ? spring({ frame: frame - 30 - index * 10, fps, config: { damping: 15 } })
            : 1;

          return (
            <div
              key={lang.name}
              style={{
                position: 'absolute',
                left: `${lang.x}%`,
                top: `${100 - lang.y}%`,
                transform: `translate(-50%, -50%) scale(${dotProgress})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: dotProgress,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: lang.color,
                  boxShadow: `0 0 40px ${lang.color}80`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid white',
                }}
              />
              <div style={{
                marginTop: 12,
                color: 'white',
                fontSize: 32,
                fontWeight: 'bold',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}>
                {lang.name}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default TypingSystemsDiagram;
