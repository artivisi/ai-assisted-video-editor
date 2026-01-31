import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const UseEnglishTip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgProgress = spring({ frame, fps, config: { damping: 20 } });
  const titleProgress = spring({ frame: frame - 10, fps, config: { damping: 15 } });
  const card1Progress = spring({ frame: frame - 25, fps, config: { damping: 15 } });
  const card2Progress = spring({ frame: frame - 40, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
      padding: 60,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: bgProgress,
    }}>
      {/* Title */}
      <div style={{
        fontSize: 56,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 50,
        opacity: titleProgress,
        transform: `translateY(${interpolate(titleProgress, [0, 1], [-30, 0])}px)`,
      }}>
        💡 Tips: Gunakan Bahasa Inggris
      </div>

      {/* Two columns */}
      <div style={{
        display: 'flex',
        gap: 40,
        maxWidth: 1400,
        width: '100%',
      }}>
        {/* Why */}
        <div style={{
          flex: 1,
          padding: 40,
          borderRadius: 24,
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          border: '3px solid #3b82f6',
          opacity: card1Progress,
          transform: `translateX(${interpolate(card1Progress, [0, 1], [-30, 0])}px)`,
        }}>
          <div style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: '#3b82f6',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span>🤔</span> Kenapa?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              'Dokumentasi programming mayoritas bahasa Inggris',
              'Fitur baru selalu rilis dalam bahasa Inggris dulu',
              'Conference & tutorial internasional pakai bahasa Inggris',
              'Sekalian latihan reading & writing',
            ].map((item, i) => (
              <div key={i} style={{
                fontSize: 24,
                color: '#e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
              }}>
                <span style={{ color: '#3b82f6' }}>•</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Don't worry */}
        <div style={{
          flex: 1,
          padding: 40,
          borderRadius: 24,
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          border: '3px solid #22c55e',
          opacity: card2Progress,
          transform: `translateX(${interpolate(card2Progress, [0, 1], [30, 0])}px)`,
        }}>
          <div style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: '#22c55e',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span>😊</span> Jangan Khawatir!
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              'AI tetap ngerti walaupun grammar salah',
              'Vocabulary terbatas? No problem!',
              'Seiring waktu akan terbiasa',
              'Yang penting berani coba',
            ].map((item, i) => (
              <div key={i} style={{
                fontSize: 24,
                color: '#e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
              }}>
                <span style={{ color: '#22c55e' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 50,
        fontSize: 28,
        color: '#94a3b8',
        textAlign: 'center',
        opacity: spring({ frame: frame - 60, fps, config: { damping: 20 } }),
      }}>
        AI doesn't judge your English! 🚀
      </div>
    </AbsoluteFill>
  );
};

export default UseEnglishTip;
