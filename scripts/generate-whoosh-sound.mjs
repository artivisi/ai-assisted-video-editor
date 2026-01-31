import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate a whoosh/swoosh sound for slide-in animations
function generateWhoosh(duration = 0.3, direction = "in") {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Frequency sweep (higher to lower for "in", lower to higher for "out")
    const freqStart = direction === "in" ? 800 : 200;
    const freqEnd = direction === "in" ? 200 : 800;
    const freq = freqStart + (freqEnd - freqStart) * progress;

    // Amplitude envelope
    const attack = Math.min(1, progress * 10);
    const decay = direction === "in"
      ? Math.pow(1 - progress, 2)
      : Math.pow(progress, 0.5) * Math.pow(1 - progress, 2);

    // Mix of noise and tone for whoosh effect
    const noise = (Math.random() * 2 - 1) * 0.4;
    const tone = Math.sin(2 * Math.PI * freq * t) * 0.2;
    const lowTone = Math.sin(2 * Math.PI * (freq * 0.5) * t) * 0.1;

    samples[i] = (noise + tone + lowTone) * attack * decay * 0.6;
  }

  return samples;
}

// Generate a pop/click sound for button appearances
function generatePop() {
  const duration = 0.08;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / numSamples;

    // Quick attack, fast decay
    const envelope = Math.exp(-progress * 30);

    // Punchy mid-frequency pop
    const freq = 400 + Math.random() * 100;
    const pop = Math.sin(2 * Math.PI * freq * t) * 0.5;
    const click = (Math.random() * 2 - 1) * 0.3 * Math.exp(-progress * 50);

    samples[i] = (pop + click) * envelope * 0.7;
  }

  return samples;
}

// Generate silence
function generateSilence(duration) {
  return new Float32Array(Math.floor(SAMPLE_RATE * duration));
}

// Concatenate audio segments
function concat(...segments) {
  const totalLength = segments.reduce((sum, s) => sum + s.length, 0);
  const result = new Float32Array(totalLength);
  let offset = 0;
  for (const segment of segments) {
    result.set(segment, offset);
    offset += segment.length;
  }
  return result;
}

// Mix audio at specific time offset
function mixAt(base, overlay, offsetSeconds) {
  const offsetSamples = Math.floor(offsetSeconds * SAMPLE_RATE);
  for (let i = 0; i < overlay.length && offsetSamples + i < base.length; i++) {
    base[offsetSamples + i] += overlay[i];
  }
}

async function main() {
  console.log("Generating lower third sound effects...");

  // Create a 5 second timeline (matches LowerThird duration)
  const totalDuration = 5;
  const leftChannel = new Float32Array(SAMPLE_RATE * totalDuration);
  const rightChannel = new Float32Array(SAMPLE_RATE * totalDuration);

  // Frame timings (at 30fps):
  // - Logo appears: frame 5 = 0.17s
  // - Bar slides in: frame 0 = 0s
  // - Name appears: frame 10 = 0.33s
  // - Title appears: frame 15 = 0.5s
  // - CTA Like: frame 25 = 0.83s
  // - CTA Subscribe: frame 35 = 1.17s
  // - CTA Share: frame 45 = 1.5s
  // - Exit starts: frame 120 = 4s

  // Slide in whoosh
  const whooshIn = generateWhoosh(0.4, "in");
  mixAt(leftChannel, whooshIn, 0);
  mixAt(rightChannel, whooshIn, 0);

  // Pop sounds for CTA buttons
  const pop1 = generatePop();
  const pop2 = generatePop();
  const pop3 = generatePop();

  mixAt(leftChannel, pop1, 0.83);
  mixAt(rightChannel, pop1, 0.83);

  mixAt(leftChannel, pop2, 1.17);
  mixAt(rightChannel, pop2, 1.17);

  mixAt(leftChannel, pop3, 1.5);
  mixAt(rightChannel, pop3, 1.5);

  // Exit whoosh
  const whooshOut = generateWhoosh(0.5, "out");
  mixAt(leftChannel, whooshOut, 4.0);
  mixAt(rightChannel, whooshOut, 4.0);

  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [leftChannel, rightChannel],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/lower-third-sfx.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Lower third SFX saved to: ${outputPath}`);
}

main().catch(console.error);
