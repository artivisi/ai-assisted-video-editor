import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;
const DURATION_SECONDS = 6; // Slightly longer than 5s video
const CHANNELS = 2; // Stereo

// Generate white noise with fade in/out
function generateWhiteNoise() {
  const numSamples = SAMPLE_RATE * DURATION_SECONDS;
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  const fadeInSamples = SAMPLE_RATE * 0.5; // 0.5s fade in
  const fadeOutSamples = SAMPLE_RATE * 1.0; // 1s fade out
  const fadeOutStart = numSamples - fadeOutSamples;

  for (let i = 0; i < numSamples; i++) {
    // Generate white noise (random values between -1 and 1)
    // Reduced amplitude for subtle background effect
    const noiseL = (Math.random() * 2 - 1) * 0.15;
    const noiseR = (Math.random() * 2 - 1) * 0.15;

    // Apply fade in
    let amplitude = 1;
    if (i < fadeInSamples) {
      amplitude = i / fadeInSamples;
    }
    // Apply fade out
    if (i > fadeOutStart) {
      amplitude = (numSamples - i) / fadeOutSamples;
    }

    leftChannel[i] = noiseL * amplitude;
    rightChannel[i] = noiseR * amplitude;
  }

  return {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };
}

async function main() {
  console.log("Generating white noise audio...");

  const audioData = generateWhiteNoise();
  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/white-noise.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`White noise audio saved to: ${outputPath}`);
}

main().catch(console.error);
