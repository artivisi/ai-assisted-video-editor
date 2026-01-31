import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate a fast whoosh for transition
function generateWhoosh(duration, direction = "in") {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Frequency sweep
    const freqStart = direction === "in" ? 1200 : 300;
    const freqEnd = direction === "in" ? 300 : 1200;
    const freq = freqStart + (freqEnd - freqStart) * progress;

    // Amplitude envelope - fast attack, quick decay
    const envelope = direction === "in"
      ? Math.pow(1 - progress, 1.5)
      : Math.pow(progress, 0.5) * Math.pow(1 - progress, 1.5);

    // Stereo movement - pan from one side to other
    const pan = direction === "in"
      ? progress * 2 - 1  // Left to right
      : 1 - progress * 2; // Right to left

    const leftVol = Math.cos((pan + 1) * Math.PI / 4);
    const rightVol = Math.sin((pan + 1) * Math.PI / 4);

    // Mix of filtered noise and tone
    const noise = (Math.random() * 2 - 1) * 0.5;
    const tone = Math.sin(2 * Math.PI * freq * t) * 0.3;
    const lowTone = Math.sin(2 * Math.PI * (freq * 0.5) * t) * 0.15;

    const signal = (noise + tone + lowTone) * envelope * 0.6;

    leftChannel[i] = signal * leftVol;
    rightChannel[i] = signal * rightVol;
  }

  return { leftChannel, rightChannel };
}

// Generate glitch burst sound
function generateGlitch(duration = 0.1) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const progress = i / numSamples;
    const envelope = Math.exp(-progress * 20);

    // Digital noise burst
    const noise = (Math.random() > 0.5 ? 1 : -1) * 0.4;
    const signal = noise * envelope;

    // Random stereo placement
    const pan = Math.random() * 2 - 1;
    leftChannel[i] = signal * (1 - pan * 0.5);
    rightChannel[i] = signal * (1 + pan * 0.5);
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
  console.log("Generating transition sound effects...");

  // 1.5 second timeline (45 frames at 30fps)
  const totalDuration = 1.5;
  const leftChannel = new Float32Array(SAMPLE_RATE * totalDuration);
  const rightChannel = new Float32Array(SAMPLE_RATE * totalDuration);

  // Whoosh in at start
  const whooshIn = generateWhoosh(0.4, "in");
  mixAt(leftChannel, rightChannel, whooshIn.leftChannel, whooshIn.rightChannel, 0);

  // Glitch burst at midpoint
  const glitch = generateGlitch(0.15);
  mixAt(leftChannel, rightChannel, glitch.leftChannel, glitch.rightChannel, 0.65);

  // Whoosh out
  const whooshOut = generateWhoosh(0.4, "out");
  mixAt(leftChannel, rightChannel, whooshOut.leftChannel, whooshOut.rightChannel, 0.85);

  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/transition-sfx.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Transition SFX saved to: ${outputPath}`);
}

main().catch(console.error);
