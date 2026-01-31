import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, Img, staticFile } from 'remotion';

type LanguageData = {
  name: string;
  color: string;
  percentage: number;
  logo?: string;
};

const languageRankings: LanguageData[] = [
  { name: 'JavaScript', color: '#F7DF1E', percentage: 62.3 },
  { name: 'Python', color: '#3776AB', percentage: 51.0 },
  { name: 'SQL', color: '#CC2927', percentage: 51.0 },
  { name: 'TypeScript', color: '#3178C6', percentage: 38.5 },
  { name: 'Java', color: '#ED8B00', percentage: 30.3 },
  { name: 'C#', color: '#239120', percentage: 27.1 },
  { name: 'C++', color: '#00599C', percentage: 23.0 },
  { name: 'PHP', color: '#777BB4', percentage: 18.2 },
  { name: 'Go', color: '#00ADD8', percentage: 13.5 },
  { name: 'Rust', color: '#DEA584', percentage: 12.6 },
];

export const LanguageComparisonChart: React.FC<{
  title?: string;
  showTop?: number;
  highlightLanguages?: string[];
}> = ({
  title = "Most Popular Programming Languages 2024",
  showTop = 10,
  highlightLanguages = ['Python', 'JavaScript', 'Java'],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const data = languageRankings.slice(0, showTop);

  return (
    <AbsoluteFill style={{
      backgroundColor: '#1a1a2e',
      padding: 60,
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
      }}>
        {title}
      </div>
      <div style={{
        fontSize: 28,
        color: '#888',
        textAlign: 'center',
        marginBottom: 40,
      }}>
        Source: Stack Overflow Developer Survey 2024
      </div>

      {/* Chart */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '0 40px',
      }}>
        {data.map((lang, index) => {
          const barProgress = spring({
            frame: frame - index * 5,
            fps,
            config: { damping: 20 },
          });

          const isHighlighted = highlightLanguages.includes(lang.name);
          const barWidth = interpolate(barProgress, [0, 1], [0, lang.percentage]);

          return (
            <div
              key={lang.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                opacity: interpolate(barProgress, [0, 0.5, 1], [0, 0.5, 1]),
              }}
            >
              {/* Language name */}
              <div style={{
                width: 200,
                fontSize: 32,
                fontWeight: isHighlighted ? 'bold' : 'normal',
                color: isHighlighted ? 'white' : '#aaa',
                textAlign: 'right',
              }}>
                {lang.name}
              </div>

              {/* Bar */}
              <div style={{
                flex: 1,
                height: 48,
                backgroundColor: '#333',
                borderRadius: 6,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{
                  width: `${barWidth}%`,
                  height: '100%',
                  backgroundColor: isHighlighted ? lang.color : `${lang.color}80`,
                  borderRadius: 6,
                  boxShadow: isHighlighted ? `0 0 20px ${lang.color}60` : 'none',
                }} />
              </div>

              {/* Percentage */}
              <div style={{
                width: 100,
                fontSize: 32,
                fontWeight: isHighlighted ? 'bold' : 'normal',
                color: isHighlighted ? 'white' : '#888',
              }}>
                {lang.percentage.toFixed(1)}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div style={{
        fontSize: 24,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
      }}>
        Highlighted: Languages taught in this series
      </div>
    </AbsoluteFill>
  );
};

export default LanguageComparisonChart;
