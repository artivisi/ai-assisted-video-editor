import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type PromptType = 'explain' | 'exercise' | 'error' | 'hint' | 'dont';

const prompts: Record<PromptType, {
  title: string;
  emoji: string;
  prompt: string;
  note?: string;
  color: string;
  isGood: boolean;
}> = {
  explain: {
    title: 'Minta Penjelasan',
    emoji: '💡',
    prompt: '"Jelaskan apa itu variable dalam programming. Gunakan analogi yang mudah dipahami."',
    note: 'Minta penjelasan dengan bahasa yang kamu pahami',
    color: '#3b82f6',
    isGood: true,
  },
  exercise: {
    title: 'Generate Latihan',
    emoji: '📝',
    prompt: '"Buatkan 5 soal latihan tentang if-else di Python. Jangan berikan jawabannya, saya mau coba sendiri dulu."',
    note: 'Selalu bilang jangan kasih jawaban!',
    color: '#10b981',
    isGood: true,
  },
  error: {
    title: 'Jelaskan Error',
    emoji: '🐛',
    prompt: '"Saya dapat error ini: [paste error]. Apa artinya? Kenapa bisa terjadi?"',
    note: 'Minta penjelasan, bukan langsung fix',
    color: '#f59e0b',
    isGood: true,
  },
  hint: {
    title: 'Minta Petunjuk',
    emoji: '🔍',
    prompt: '"Saya stuck di soal ini. Tolong kasih petunjuk, tapi jangan kasih solusi akhir."',
    note: 'Petunjuk, bukan jawaban langsung',
    color: '#8b5cf6',
    isGood: true,
  },
  dont: {
    title: 'JANGAN Seperti Ini',
    emoji: '❌',
    prompt: '"Buatkan function Python untuk menghitung faktorial"',
    note: 'AI yang kerja, kamu tidak belajar!',
    color: '#ef4444',
    isGood: false,
  },
};

export const PromptExampleCard: React.FC<{
  type: PromptType;
}> = ({ type }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const p = prompts[type];

  const cardProgress = spring({ frame, fps, config: { damping: 15 } });
  const textProgress = spring({ frame: frame - 15, fps, config: { damping: 20 } });
  const noteProgress = spring({ frame: frame - 30, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 80,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1400,
        padding: 60,
        borderRadius: 32,
        backgroundColor: `${p.color}15`,
        border: `4px solid ${p.color}`,
        boxShadow: `0 0 40px ${p.color}40`,
        opacity: cardProgress,
        transform: `scale(${interpolate(cardProgress, [0, 1], [0.8, 1])})`,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          marginBottom: 40,
        }}>
          <div style={{
            fontSize: 72,
            filter: `drop-shadow(0 0 15px ${p.color})`,
          }}>
            {p.emoji}
          </div>
          <div>
            <div style={{
              fontSize: 20,
              color: p.isGood ? '#22c55e' : '#ef4444',
              fontWeight: 'bold',
              marginBottom: 8,
            }}>
              {p.isGood ? '✓ DO' : '✗ DON\'T'}
            </div>
            <div style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
            }}>
              {p.title}
            </div>
          </div>
        </div>

        {/* Prompt box */}
        <div style={{
          backgroundColor: '#0f172a',
          borderRadius: 20,
          padding: 40,
          marginBottom: 30,
          border: '2px solid #334155',
          opacity: textProgress,
          transform: `translateY(${interpolate(textProgress, [0, 1], [20, 0])}px)`,
        }}>
          <div style={{
            fontSize: 18,
            color: '#64748b',
            marginBottom: 12,
            fontFamily: 'monospace',
          }}>
            Prompt:
          </div>
          <div style={{
            fontSize: 32,
            color: '#e2e8f0',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}>
            {p.prompt}
          </div>
        </div>

        {/* Note */}
        {p.note && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '20px 30px',
            backgroundColor: `${p.isGood ? '#22c55e' : '#ef4444'}20`,
            borderRadius: 16,
            border: `2px solid ${p.isGood ? '#22c55e' : '#ef4444'}`,
            opacity: noteProgress,
            transform: `translateY(${interpolate(noteProgress, [0, 1], [10, 0])}px)`,
          }}>
            <div style={{ fontSize: 32 }}>
              {p.isGood ? '💡' : '⚠️'}
            </div>
            <div style={{
              fontSize: 26,
              color: p.isGood ? '#22c55e' : '#ef4444',
              fontWeight: 600,
            }}>
              {p.note}
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default PromptExampleCard;
