import React from 'react';
import { AbsoluteFill, Audio, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import transitionSfx from '../assets/audio/transition-sfx.wav';

export type FadeTransitionProps = {
  /** Total duration in frames for the fade (fade-out + fade-in) */
  durationInFrames?: number;
  /** Color of the fade overlay */
  color?: string;
  /** Volume of the transition SFX (0-1) */
  sfxVolume?: number;
  /** Whether to play the transition SFX */
  playSfx?: boolean;
  /** Custom SFX audio source (defaults to transition-sfx.wav) */
  sfxSrc?: string;
};

/**
 * Place this as a Sequence overlapping the boundary between two sections.
 * First half fades to black, second half fades from black.
 */
export const FadeTransition: React.FC<FadeTransitionProps> = ({
  durationInFrames: duration,
  color = '#000',
  sfxVolume = 0.3,
  playSfx = true,
  sfxSrc,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const totalFrames = duration ?? durationInFrames;
  const mid = totalFrames / 2;

  const opacity = frame < mid
    ? interpolate(frame, [0, mid], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    : interpolate(frame, [mid, totalFrames], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ zIndex: 999 }}>
      <AbsoluteFill
        style={{
          backgroundColor: color,
          opacity,
        }}
      />
      {playSfx && <Audio src={sfxSrc ?? transitionSfx} volume={sfxVolume} />}
    </AbsoluteFill>
  );
};
