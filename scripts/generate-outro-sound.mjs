import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate a soft chime/bell sound
function generateChime(frequency, duration = 0.8) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Bell-like envelope with quick attack and slow decay
    const attack = Math.min(1, progress * 50);
    const decay = Math.exp(-progress * 4);

    // Harmonic-rich bell sound
    const fundamental = Math.sin(2 * Math.PI * frequency * t);
    const harmonic2 = Math.sin(2 * Math.PI * frequency * 2 * t) * 0.5;
    const harmonic3 = Math.sin(2 * Math.PI * frequency * 3 * t) * 0.25;
    const harmonic4 = Math.sin(2 * Math.PI * frequency * 4.2 * t) * 0.15;

    samples[i] = (fundamental + harmonic2 + harmonic3 + harmonic4) * attack * decay * 0.3;
  }

  return samples;
}

// Generate a warm pad/ambient sound
function generatePad(duration = 3) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  const baseFreq = 220; // A3

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Slow fade in/out
    const fadeIn = Math.min(1, progress * 2);
    const fadeOut = Math.min(1, (1 - progress) * 3);
    const envelope = fadeIn * fadeOut;

    // Warm chord (A minor: A, C, E)
    const note1 = Math.sin(2 * Math.PI * baseFreq * t);
    const note2 = Math.sin(2 * Math.PI * (baseFreq * 1.2) * t); // C
    const note3 = Math.sin(2 * Math.PI * (baseFreq * 1.5) * t); // E

    // Subtle vibrato
    const vibrato = Math.sin(2 * Math.PI * 4 * t) * 0.02;

    samples[i] = (note1 + note2 * 0.7 + note3 * 0.5) * envelope * (1 + vibrato) * 0.15;
  }

  return samples;
}

// Generate success/completion sound
function generateSuccess() {
  const duration = 0.6;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  // Rising two-note success sound
  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    let freq;
    if (t < 0.2) {
      freq = 523; // C5
    } else {
      freq = 659; // E5
    }

    const attack = Math.min(1, (t % 0.2) * 30);
    const decay = Math.exp(-((t % 0.2)) * 8);

    samples[i] = Math.sin(2 * Math.PI * freq * t) * attack * decay * 0.4;
  }

  return samples;
}

// Mix audio at specific time offset
function mixAt(base, overlay, offsetSeconds) {
  const offsetSamples = Math.floor(offsetSeconds * SAMPLE_RATE);
  for (let i = 0; i < overlay.length && offsetSamples + i < base.length; i++) {
    base[offsetSamples + i] += overlay[i];
  }
}

async function main() {
  console.log("Generating outro sound effects...");

  // 5 second timeline
  const totalDuration = 5;
  const leftChannel = new Float32Array(SAMPLE_RATE * totalDuration);
  const rightChannel = new Float32Array(SAMPLE_RATE * totalDuration);

  // Frame timings (at 30fps):
  // - BG fade: frame 0-20 = 0-0.67s
  // - Logo: frame 10 = 0.33s
  // - Text: frame 30 = 1s
  // - Subscribe: frame 50 = 1.67s
  // - Social: frame 70 = 2.33s

  // Ambient pad throughout
  const pad = generatePad(4.5);
  mixAt(leftChannel, pad, 0.2);
  mixAt(rightChannel, pad, 0.2);

  // Chime when logo appears
  const chime1 = generateChime(880, 1); // A5
  mixAt(leftChannel, chime1, 0.33);
  mixAt(rightChannel, chime1, 0.33);

  // Success sound for subscribe button
  const success = generateSuccess();
  mixAt(leftChannel, success, 1.67);
  mixAt(rightChannel, success, 1.67);

  // Soft chime for social links
  const chime2 = generateChime(1047, 0.6); // C6
  mixAt(leftChannel, chime2, 2.33);
  mixAt(rightChannel, chime2, 2.33);

  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/outro-sfx.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Outro SFX saved to: ${outputPath}`);
}

main().catch(console.error);
