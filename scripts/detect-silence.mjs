#!/usr/bin/env node

/**
 * Process FFmpeg silence detection output into Remotion-compatible format
 *
 * Usage:
 *   # First run silence detection:
 *   ./scripts/detect-silence.sh footage/pf-01-main.mp4
 *
 *   # Then process the output:
 *   node scripts/detect-silence.mjs footage/pf-01-main-silence.txt --fps 30 --output src/tutorials/programming-fundamentals/pf-01-edl.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { basename, dirname, extname } from "path";

// Parse FFmpeg silencedetect output
function parseSilenceOutput(content, totalDuration) {
  const lines = content.split("\n");
  const silenceRegions = [];

  let currentStart = null;

  for (const line of lines) {
    const startMatch = line.match(/silence_start:\s*([\d.]+)/);
    const endMatch = line.match(/silence_end:\s*([\d.]+)/);

    if (startMatch) {
      currentStart = parseFloat(startMatch[1]);
    }

    if (endMatch && currentStart !== null) {
      silenceRegions.push({
        start: currentStart,
        end: parseFloat(endMatch[1]),
        type: "silence",
      });
      currentStart = null;
    }
  }

  // Handle case where silence extends to end of file
  if (currentStart !== null && totalDuration) {
    silenceRegions.push({
      start: currentStart,
      end: totalDuration,
      type: "silence",
    });
  }

  return silenceRegions;
}

// Convert silence regions to speech/silence segments
function buildSegments(silenceRegions, totalDuration) {
  const segments = [];
  let lastEnd = 0;

  // Sort by start time
  silenceRegions.sort((a, b) => a.start - b.start);

  for (const silence of silenceRegions) {
    // Add speech segment before this silence
    if (silence.start > lastEnd) {
      segments.push({
        start: lastEnd,
        end: silence.start,
        type: "speech",
      });
    }

    // Add silence segment
    segments.push({
      start: silence.start,
      end: silence.end,
      type: "silence",
    });

    lastEnd = silence.end;
  }

  // Add final speech segment if needed
  if (lastEnd < totalDuration) {
    segments.push({
      start: lastEnd,
      end: totalDuration,
      type: "speech",
    });
  }

  return segments;
}

// Calculate edit decision list
function calculateEdl(segments, config, totalDuration) {
  const cuts = [];
  let newTime = 0;

  for (const segment of segments) {
    if (segment.type === "speech") {
      const paddedStart = Math.max(0, segment.start - config.paddingBefore);
      const paddedEnd = Math.min(totalDuration, segment.end + config.paddingAfter);
      const duration = paddedEnd - paddedStart;

      cuts.push({
        originalStart: paddedStart,
        originalEnd: paddedEnd,
        newStart: newTime,
        newEnd: newTime + duration,
        type: "keep",
      });

      newTime += duration;
    }
  }

  return {
    cuts,
    originalDuration: totalDuration,
    outputDuration: newTime,
    timeSaved: totalDuration - newTime,
  };
}

// Generate TypeScript output
function generateTypeScript(result, edl, inputFileName, fps) {
  const varName = basename(inputFileName, extname(inputFileName))
    .replace(/-silence$/, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .replace(/^(\d)/, "_$1");

  const speechDuration = result.segments
    .filter(s => s.type === "speech")
    .reduce((sum, s) => sum + (s.end - s.start), 0);

  const silenceDuration = result.segments
    .filter(s => s.type === "silence")
    .reduce((sum, s) => sum + (s.end - s.start), 0);

  return `import { SilenceDetectionResult, EditDecisionList, edlToRemotionSequences } from "../silence-types";

// Silence detection result for ${inputFileName}
export const ${varName}SilenceResult: SilenceDetectionResult = {
  segments: ${JSON.stringify(result.segments, null, 2)},
  totalDuration: ${result.totalDuration},
  speechDuration: ${speechDuration.toFixed(2)},
  silenceDuration: ${silenceDuration.toFixed(2)},
  silencePercentage: ${((silenceDuration / result.totalDuration) * 100).toFixed(1)},
};

// Edit decision list (what to keep/remove)
export const ${varName}Edl: EditDecisionList = {
  sourceFile: "${inputFileName}",
  cuts: ${JSON.stringify(edl.cuts, null, 2)},
  originalDuration: ${edl.originalDuration},
  outputDuration: ${edl.outputDuration.toFixed(2)},
  timeSaved: ${edl.timeSaved.toFixed(2)},
};

// Remotion sequences at ${fps} fps
export const ${varName}Sequences = edlToRemotionSequences(${varName}Edl, ${fps});

// Summary
// Original: ${formatTime(result.totalDuration)}
// After cuts: ${formatTime(edl.outputDuration)}
// Time saved: ${formatTime(edl.timeSaved)} (${((edl.timeSaved / result.totalDuration) * 100).toFixed(1)}%)
`;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s}s`;
}

// Main
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: node scripts/detect-silence.mjs <silence-file.txt> [options]");
  console.log("");
  console.log("Options:");
  console.log("  --fps <number>        Frame rate (default: 30)");
  console.log("  --duration <seconds>  Total video duration (auto-detected if possible)");
  console.log("  --output <file.ts>    Output TypeScript file");
  console.log("  --padding-before <s>  Padding before speech (default: 0.1)");
  console.log("  --padding-after <s>   Padding after speech (default: 0.15)");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/detect-silence.mjs footage/pf-01-main-silence.txt --fps 30 --output src/tutorials/programming-fundamentals/pf-01-edl.ts");
  process.exit(1);
}

const inputFile = args[0];

// Parse options
const getArg = (name, defaultValue) => {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : defaultValue;
};

const fps = parseInt(getArg("--fps", "30"));
const totalDuration = parseFloat(getArg("--duration", "0"));
const outputFile = getArg("--output", inputFile.replace(/-silence\.txt$/, "-edl.ts"));
const paddingBefore = parseFloat(getArg("--padding-before", "0.1"));
const paddingAfter = parseFloat(getArg("--padding-after", "0.15"));

try {
  const content = readFileSync(inputFile, "utf-8");
  const silenceRegions = parseSilenceOutput(content, totalDuration);

  console.log(`Found ${silenceRegions.length} silence regions`);

  // Estimate total duration from last silence end if not provided
  let duration = totalDuration;
  if (duration === 0 && silenceRegions.length > 0) {
    duration = Math.max(...silenceRegions.map(s => s.end)) + 5; // Add 5s buffer
    console.log(`Estimated duration: ${formatTime(duration)} (provide --duration for accuracy)`);
  }

  const segments = buildSegments(silenceRegions, duration);
  const result = { segments, totalDuration: duration };

  const config = { paddingBefore, paddingAfter };
  const edl = calculateEdl(segments, config, duration);

  console.log(`Speech segments: ${segments.filter(s => s.type === "speech").length}`);
  console.log(`Original duration: ${formatTime(duration)}`);
  console.log(`After silence removal: ${formatTime(edl.outputDuration)}`);
  console.log(`Time saved: ${formatTime(edl.timeSaved)} (${((edl.timeSaved / duration) * 100).toFixed(1)}%)`);

  const tsContent = generateTypeScript(result, edl, inputFile, fps);
  writeFileSync(outputFile, tsContent);

  console.log(`\nOutput written to: ${outputFile}`);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
