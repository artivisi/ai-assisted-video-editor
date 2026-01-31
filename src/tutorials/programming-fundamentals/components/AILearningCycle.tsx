import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

type CycleStep = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

const steps: CycleStep[] = [
  {
    icon: '📺',
    title: 'Nonton Video',
    description: 'Pahami konsep',
    color: '#3b82f6',
  },
  {
    icon: '💻',
    title: 'Coba Coding',
    description: 'Praktek sendiri',
    color: '#10b981',
  },
  {
    icon: '❓',
    title: 'Stuck',
    description: 'Wajar & normal',
    color: '#f59e0b',
  },
  {
    icon: '🤖',
    title: 'Tanya AI',
    description: 'Minta penjelasan',
    color: '#8b5cf6',
  },
  {
    icon: '🔄',
    title: 'Ulangi',
    description: 'Sampai paham',
    color: '#ec4899',
  },
];

// Arrow component between steps
const Arrow: React.FC<{ color: string; progress: number }> = ({ color, progress }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    opacity: progress,
    transform: `scaleX(${progress})`,
  }}>
    <svg width="60" height="40" viewBox="0 0 60 40">
      <defs>
        <linearGradient id={`arrow-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M0 20 L40 20 M30 10 L45 20 L30 30"
        stroke={`url(#arrow-grad-${color})`}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const AILearningCycle: React.FC<{
  highlightStep?: number;
}> = ({ highlightStep }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 56,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 60,
        opacity: titleProgress,
        transform: `translateY(${interpolate(titleProgress, [0, 1], [-20, 0])}px)`,
      }}>
        Siklus Belajar dengan AI
      </div>

      {/* Steps in horizontal flow */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexWrap: 'nowrap',
      }}>
        {steps.map((step, index) => {
          const stepProgress = spring({
            frame: frame - 15 - index * 10,
            fps,
            config: { damping: 15, stiffness: 100 },
          });

          const arrowProgress = spring({
            frame: frame - 20 - index * 10,
            fps,
            config: { damping: 20 },
          });

          const isHighlighted = highlightStep === index;
          const scale = isHighlighted ? 1.1 : 1;
          const pulseScale = isHighlighted ? 1 + Math.sin(frame * 0.1) * 0.03 : 1;

          return (
            <React.Fragment key={step.title}>
              {/* Step card */}
              <div
                style={{
                  width: 180,
                  padding: '24px 16px',
                  borderRadius: 20,
                  backgroundColor: `${step.color}15`,
                  border: `3px solid ${step.color}`,
                  boxShadow: isHighlighted ? `0 0 30px ${step.color}60` : `0 0 15px ${step.color}30`,
                  opacity: stepProgress,
                  transform: `scale(${stepProgress * scale * pulseScale}) translateY(${interpolate(stepProgress, [0, 1], [30, 0])}px)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 44 }}>{step.icon}</div>
                <div style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontSize: 14,
                  color: '#94a3b8',
                  lineHeight: 1.3,
                }}>
                  {step.description}
                </div>
              </div>

              {/* Arrow (except after last step) */}
              {index < steps.length - 1 && (
                <Arrow color={steps[index + 1].color} progress={arrowProgress} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Cycle indicator - arrow from last to first */}
      <div style={{
        marginTop: 40,
        opacity: spring({ frame: frame - 70, fps, config: { damping: 20 } }),
      }}>
        <svg width="800" height="60" viewBox="0 0 800 60">
          <defs>
            <linearGradient id="cycle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            d="M750 10 Q 780 30, 750 50 L 50 50 Q 20 30, 50 10"
            stroke="url(#cycle-grad)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
            opacity="0.5"
          />
          <path
            d="M60 5 L 45 10 L 60 15"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Goal text */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginTop: 30,
        opacity: spring({ frame: frame - 80, fps, config: { damping: 20 } }),
      }}>
        <div style={{ fontSize: 48 }}>🎯</div>
        <div>
          <div style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#22c55e',
          }}>
            Tujuan: PAHAM
          </div>
          <div style={{
            fontSize: 20,
            color: '#94a3b8',
          }}>
            Bukan sekadar "jalan" atau copy-paste
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 22,
        color: '#64748b',
        opacity: spring({ frame: frame - 90, fps, config: { damping: 20 } }),
      }}>
        AI membantu di langkah 4, tapi kamu harus jalanin semua langkah sendiri
      </div>
    </AbsoluteFill>
  );
};

export default AILearningCycle;
