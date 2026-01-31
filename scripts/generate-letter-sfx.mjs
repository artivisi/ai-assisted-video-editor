import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate dramatic impact sound for letter entrance
function generateImpact(pitch = 1, pan = 0) {
  const duration = 0.25;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  const baseFreq = 150 * pitch;

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Fast attack, medium decay
    const envelope = Math.exp(-progress * 12);

    // Low thump
    const thump = Math.sin(2 * Math.PI * baseFreq * t) * 0.5;
    // Mid punch
    const punch = Math.sin(2 * Math.PI * (baseFreq * 2.5) * t) * 0.3 * Math.exp(-progress * 20);
    // High click
    const click = (Math.random() * 2 - 1) * 0.2 * Math.exp(-progress * 40);

    const signal = (thump + punch + click) * envelope * 0.7;

    // Stereo panning
    const leftVol = Math.cos((pan + 1) * Math.PI / 4);
    const rightVol = Math.sin((pan + 1) * Math.PI / 4);

    leftChannel[i] = signal * leftVol;
    rightChannel[i] = signal * rightVol;
  }

  return { leftChannel, rightChannel };
}

// Generate swoosh sound
function generateSwoosh() {
  const duration = 0.5;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Frequency sweep up then down
    const freq = 200 + Math.sin(progress * Math.PI) * 800;

    const envelope = Math.sin(progress * Math.PI);

    const noise = (Math.random() * 2 - 1) * 0.4;
    const tone = Math.sin(2 * Math.PI * freq * t) * 0.2;

    const signal = (noise + tone) * envelope * 0.5;

    // Sweep from left to right
    const pan = progress * 2 - 1;
    const leftVol = Math.cos((pan + 1) * Math.PI / 4);
    const rightVol = Math.sin((pan + 1) * Math.PI / 4);

    leftChannel[i] = signal * leftVol;
    rightChannel[i] = signal * rightVol;
  }

  return { leftChannel, rightChannel };
}

// Mix audio at specific time offset
function mixAt(baseL, baseR, overlayL, overlayR, offsetSeconds) {
  const offsetSamples = Math.floor(offsetSeconds * SAMPLE_RATE);
  for (let i = 0; i < overlayL.length && offsetSamples + i < baseL.length; i++) {
    baseL[offsetSamples + i] += overlayL[i];
    baseR[offsetSamples + i] += overlayR[i];
  }
}

async function main() {
  console.log("Generating letter entrance sound effects...");

  // 2 second timeline
  const totalDuration = 2;
  const leftChannel = new Float32Array(SAMPLE_RATE * totalDuration);
  const rightChannel = new Float32Array(SAMPLE_RATE * totalDuration);

  // "artivisi" = 8 letters
  // Each letter at 4 frame intervals (at 30fps) = 0.133s
  const letters = "artivisi";
  const frameInterval = 4;
  const fps = 30;

  for (let i = 0; i < letters.length; i++) {
    const time = (i * frameInterval) / fps;
    // Vary pitch slightly for each letter
    const pitch = 0.9 + Math.random() * 0.3;
    // Pan across stereo field
    const pan = (i / (letters.length - 1)) * 1.6 - 0.8;

    const impact = generateImpact(pitch, pan);
    mixAt(leftChannel, rightChannel, impact.leftChannel, impact.rightChannel, time);
  }

  // Swoosh at the end (after last letter)
  const swooshTime = (letters.length * frameInterval + 5) / fps;
  const swoosh = generateSwoosh();
  mixAt(leftChannel, rightChannel, swoosh.leftChannel, swoosh.rightChannel, swooshTime);

  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/transition-letters.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Letter SFX saved to: ${outputPath}`);
}

main().catch(console.error);
