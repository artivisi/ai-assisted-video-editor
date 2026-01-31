import WavEncoder from "wav-encoder";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SAMPLE_RATE = 44100;

// Generate dial tone (350Hz + 440Hz)
function generateDialTone(duration) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    samples[i] = (Math.sin(2 * Math.PI * 350 * t) + Math.sin(2 * Math.PI * 440 * t)) * 0.2;
  }
  return samples;
}

// Generate DTMF tone (dual-tone multi-frequency)
function generateDTMF(digit, duration) {
  const freqMap = {
    "1": [697, 1209], "2": [697, 1336], "3": [697, 1477],
    "4": [770, 1209], "5": [770, 1336], "6": [770, 1477],
    "7": [852, 1209], "8": [852, 1336], "9": [852, 1477],
    "0": [941, 1336], "*": [941, 1209], "#": [941, 1477],
  };

  const [f1, f2] = freqMap[digit] || [697, 1209];
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const envelope = Math.min(1, Math.min(i / 100, (numSamples - i) / 100));
    samples[i] = (Math.sin(2 * Math.PI * f1 * t) + Math.sin(2 * Math.PI * f2 * t)) * 0.25 * envelope;
  }
  return samples;
}

// Generate modem handshake sounds
function generateHandshake(duration) {
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;

    // Various frequency sweeps and tones characteristic of modem handshake
    let signal = 0;

    // Initial carrier tone with wobble
    if (t < 0.3) {
      const wobble = Math.sin(2 * Math.PI * 25 * t) * 200;
      signal = Math.sin(2 * Math.PI * (1650 + wobble) * t) * 0.3;
    }
    // Frequency sweep down
    else if (t < 0.6) {
      const freq = 2400 - (t - 0.3) * 3000;
      signal = Math.sin(2 * Math.PI * freq * t) * 0.25;
    }
    // Burst of noise + tone
    else if (t < 0.9) {
      const noise = (Math.random() * 2 - 1) * 0.1;
      signal = Math.sin(2 * Math.PI * 1200 * t) * 0.2 + noise;
    }
    // Alternating tones (the classic screech)
    else if (t < 1.8) {
      const phase = Math.floor((t - 0.9) * 20) % 2;
      const freq = phase === 0 ? 980 : 1180;
      const wobble = Math.sin(2 * Math.PI * 30 * t) * 50;
      signal = Math.sin(2 * Math.PI * (freq + wobble) * t) * 0.25;
    }
    // Higher frequency warble
    else if (t < 2.5) {
      const sweep = Math.sin(2 * Math.PI * 8 * t) * 400;
      signal = Math.sin(2 * Math.PI * (1800 + sweep) * t) * 0.2;
    }
    // Final negotiation tones
    else {
      const burst = Math.floor((t - 2.5) * 15) % 3;
      const freqs = [2025, 2225, 1070];
      signal = Math.sin(2 * Math.PI * freqs[burst] * t) * 0.2;
      // Add some digital-sounding noise
      if (Math.random() < 0.3) {
        signal += (Math.random() * 2 - 1) * 0.05;
      }
    }

    // Overall envelope
    const attack = Math.min(1, i / (SAMPLE_RATE * 0.01));
    const release = Math.min(1, (numSamples - i) / (SAMPLE_RATE * 0.1));

    samples[i] = signal * attack * release;
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

async function main() {
  console.log("Generating dialup modem sounds...");

  // Build the dialup sequence
  const sequence = concat(
    generateDialTone(0.3),           // Brief dial tone
    generateSilence(0.1),
    generateDTMF("5", 0.1),          // Dialing digits
    generateSilence(0.05),
    generateDTMF("5", 0.1),
    generateSilence(0.05),
    generateDTMF("5", 0.1),
    generateSilence(0.05),
    generateDTMF("1", 0.1),
    generateSilence(0.05),
    generateDTMF("2", 0.1),
    generateSilence(0.05),
    generateDTMF("3", 0.1),
    generateSilence(0.05),
    generateDTMF("4", 0.1),
    generateSilence(0.3),
    generateHandshake(3.0),          // Modem handshake
    generateSilence(0.2),
  );

  // Make it stereo
  const audioData = {
    sampleRate: SAMPLE_RATE,
    channelData: [sequence, sequence.slice()],
  };

  const wavData = await WavEncoder.encode(audioData);

  const outputPath = new URL("../src/assets/audio/dialup-modem.wav", import.meta.url).pathname;
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, Buffer.from(wavData));
  console.log(`Dialup modem audio saved to: ${outputPath}`);
  console.log(`Duration: ${(sequence.length / SAMPLE_RATE).toFixed(2)} seconds`);
}

main().catch(console.error);
