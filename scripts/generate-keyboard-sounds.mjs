import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate a single mechanical keyboard click sound
function generateClick(variation = 0) {
  const duration = 0.08; // 80ms click
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  // Frequency varies slightly for each click
  const baseFreq = 2500 + variation * 200;
  const clickFreq = baseFreq + Math.random() * 300;

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;

    // Fast attack, quick decay envelope
    const attack = Math.min(1, i / (SAMPLE_RATE * 0.002)); // 2ms attack
    const decay = Math.exp(-t * 60); // Quick exponential decay

    // Mix of frequencies for realistic mechanical sound
    const click =
      Math.sin(2 * Math.PI * clickFreq * t) * 0.3 +
      Math.sin(2 * Math.PI * (clickFreq * 0.5) * t) * 0.2 +
      (Math.random() * 2 - 1) * 0.15 * decay; // Noise component

    samples[i] = click * attack * decay * 0.7;
  }

  return samples;
}

// Generate keyboard typing sequence for title "NGOPI DULU" (10 chars)
// Timing: starts at frame 20, 3 frames per character = 30fps
// Each character appears every 3 frames = 0.1 seconds
async function generateTypingSequence() {
  const fps = 30;
  const titleLength = 10; // "NGOPI DULU"
  const brandLength = 8; // "artivisi"
  const framesPerChar = 3;
  const titleStartFrame = 20;
  const brandStartFrame = 55;
  const brandFramesPerChar = 4;

  // Total duration: 6 seconds to cover the video
  const totalDuration = 6;
  const totalSamples = SAMPLE_RATE * totalDuration;

  const leftChannel = new Float32Array(totalSamples);
  const rightChannel = new Float32Array(totalSamples);

  // Helper to add click at specific time
  function addClick(startTime, volumeMultiplier = 1) {
    const click = generateClick(Math.random() * 3);
    const startSample = Math.floor(startTime * SAMPLE_RATE);

    // Slight stereo variation
    const panL = 0.8 + Math.random() * 0.4;
    const panR = 0.8 + Math.random() * 0.4;

    for (let i = 0; i < click.length && startSample + i < totalSamples; i++) {
      leftChannel[startSample + i] += click[i] * volumeMultiplier * panL;
      rightChannel[startSample + i] += click[i] * volumeMultiplier * panR;
    }
  }

  // Add clicks for title typing "NGOPI DULU"
  for (let i = 0; i < titleLength; i++) {
    const frame = titleStartFrame + i * framesPerChar;
    const time = frame / fps;
    addClick(time, 0.8);
  }

  // Add clicks for brand typing "artivisi"
  for (let i = 0; i < brandLength; i++) {
    const frame = brandStartFrame + i * brandFramesPerChar;
    const time = frame / fps;
    addClick(time, 0.6); // Slightly quieter for brand
  }

  return {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };
}

async function main() {
  console.log("Generating keyboard typing sounds...");

  const audioData = await generateTypingSequence();
  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/keyboard-typing.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Keyboard typing audio saved to: ${outputPath}`);
}

main().catch(console.error);
