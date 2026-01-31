import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate static/white noise with 3D surround panning effect
function generateStatic(duration) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  // Panning frequencies for different movement patterns
  const panFreq1 = 0.5;  // Slow pan (2 second cycle)
  const panFreq2 = 1.5;  // Medium pan
  const panFreq3 = 3.0;  // Fast pan for intensity

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Fade in and out
    const fadeIn = Math.min(1, progress * 3);
    const fadeOut = Math.min(1, (1 - progress) * 4);
    const envelope = fadeIn * fadeOut;

    // Multi-layer panning for 3D effect
    // Layer 1: Slow sweeping pan
    const pan1 = Math.sin(2 * Math.PI * panFreq1 * t);
    // Layer 2: Medium movement
    const pan2 = Math.sin(2 * Math.PI * panFreq2 * t + Math.PI / 3);
    // Layer 3: Fast subtle movement
    const pan3 = Math.sin(2 * Math.PI * panFreq3 * t) * 0.3;

    // Combined pan value (-1 = full left, 1 = full right)
    const combinedPan = (pan1 * 0.5 + pan2 * 0.3 + pan3 * 0.2);

    // Convert pan to left/right volumes (equal power panning)
    const leftVol = Math.cos((combinedPan + 1) * Math.PI / 4);
    const rightVol = Math.sin((combinedPan + 1) * Math.PI / 4);

    // Add some variation - occasional louder bursts
    const burstChance = Math.sin(t * 8) > 0.7 ? 1.5 : 1;

    // Crackle effect - random pops that also pan
    const crackle = Math.random() > 0.995 ? (Math.random() * 2 - 1) * 0.5 : 0;
    const cracklePan = Math.random() * 2 - 1;

    // Base static noise (different noise for each channel for width)
    const noiseL = (Math.random() * 2 - 1) * 0.25 * burstChance;
    const noiseR = (Math.random() * 2 - 1) * 0.25 * burstChance;

    // Add some low frequency rumble that also moves
    const rumblePan = Math.sin(2 * Math.PI * 0.25 * t);
    const rumble = Math.sin(2 * Math.PI * 60 * t) * 0.05;

    // High frequency hiss layer with opposite pan for width
    const hissL = (Math.random() * 2 - 1) * 0.1;
    const hissR = (Math.random() * 2 - 1) * 0.1;

    // Mix everything with panning
    leftChannel[i] = (
      noiseL * leftVol +
      noiseR * (1 - leftVol) * 0.3 + // Subtle crossfeed
      rumble * (1 - rumblePan) * 0.5 +
      crackle * (1 - cracklePan) * 0.5 +
      hissL * 0.7
    ) * envelope;

    rightChannel[i] = (
      noiseR * rightVol +
      noiseL * (1 - rightVol) * 0.3 + // Subtle crossfeed
      rumble * (1 + rumblePan) * 0.5 +
      crackle * (1 + cracklePan) * 0.5 +
      hissR * 0.7
    ) * envelope;
  }

  return { leftChannel, rightChannel };
}

async function main() {
  console.log("Generating outro static noise with 3D surround effect...");

  const duration = 5;
  const { leftChannel, rightChannel } = generateStatic(duration);

  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/outro-static.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Outro static with 3D surround saved to: ${outputPath}`);
}

main().catch(console.error);
