#!/usr/bin/env node

/**
 * Sync two video recordings using their transcripts
 *
 * This script finds matching phrases in two transcripts and calculates
 * the time offset between them.
 *
 * Usage:
 *   node scripts/sync-transcripts.mjs <camera-transcript.json> <screen-transcript.json>
 *   node scripts/sync-transcripts.mjs footage/pf-02-camera-1.json footage/pf-02-screen-1.json
 */

import fs from 'fs';
import path from 'path';

function loadTranscript(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

function extractWords(transcript) {
  const words = [];
  for (const segment of transcript.segments) {
    if (segment.words) {
      for (const word of segment.words) {
        words.push({
          word: word.word.trim().toLowerCase().replace(/[.,!?]/g, ''),
          start: word.start,
          end: word.end,
        });
      }
    }
  }
  return words;
}

function findMatchingSequences(words1, words2, minSequenceLength = 5) {
  const matches = [];

  for (let i = 0; i < words1.length - minSequenceLength; i++) {
    // Create a sequence of words from transcript 1
    const seq1 = words1.slice(i, i + minSequenceLength).map(w => w.word).join(' ');

    // Look for this sequence in transcript 2
    for (let j = 0; j < words2.length - minSequenceLength; j++) {
      const seq2 = words2.slice(j, j + minSequenceLength).map(w => w.word).join(' ');

      if (seq1 === seq2 && seq1.length > 10) { // Minimum 10 chars to avoid false matches
        const offset = words1[i].start - words2[j].start;
        matches.push({
          phrase: seq1,
          camera_time: words1[i].start,
          screen_time: words2[j].start,
          offset: offset,
        });
      }
    }
  }

  return matches;
}

function calculateBestOffset(matches) {
  if (matches.length === 0) {
    return null;
  }

  // Group offsets and find the most common one (with tolerance)
  const tolerance = 0.5; // 500ms tolerance
  const offsetGroups = {};

  for (const match of matches) {
    const roundedOffset = Math.round(match.offset * 2) / 2; // Round to nearest 0.5s
    if (!offsetGroups[roundedOffset]) {
      offsetGroups[roundedOffset] = [];
    }
    offsetGroups[roundedOffset].push(match);
  }

  // Find the group with most matches
  let bestOffset = null;
  let maxCount = 0;

  for (const [offset, group] of Object.entries(offsetGroups)) {
    if (group.length > maxCount) {
      maxCount = group.length;
      bestOffset = parseFloat(offset);
    }
  }

  // Calculate average offset from the best group
  const bestGroup = offsetGroups[bestOffset];
  const avgOffset = bestGroup.reduce((sum, m) => sum + m.offset, 0) / bestGroup.length;

  return {
    offset: avgOffset,
    confidence: maxCount / matches.length,
    matchCount: maxCount,
    totalMatches: matches.length,
    sampleMatches: bestGroup.slice(0, 5),
  };
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node sync-transcripts.mjs <camera-transcript.json> <screen-transcript.json> [--output <sync-file.ts>]');
    console.log('');
    console.log('Example:');
    console.log('  node scripts/sync-transcripts.mjs footage/pf-02-camera-1.json footage/pf-02-screen-1.json');
    process.exit(1);
  }

  const cameraFile = args[0];
  const screenFile = args[1];

  let outputFile = null;
  const outputIdx = args.indexOf('--output');
  if (outputIdx !== -1 && args[outputIdx + 1]) {
    outputFile = args[outputIdx + 1];
  }

  console.log(`Camera transcript: ${cameraFile}`);
  console.log(`Screen transcript: ${screenFile}`);
  console.log('');

  // Load transcripts
  const cameraTranscript = loadTranscript(cameraFile);
  const screenTranscript = loadTranscript(screenFile);

  // Extract words
  const cameraWords = extractWords(cameraTranscript);
  const screenWords = extractWords(screenTranscript);

  console.log(`Camera words: ${cameraWords.length}`);
  console.log(`Screen words: ${screenWords.length}`);
  console.log('');

  // Find matching sequences
  console.log('Finding matching sequences...');
  const matches = findMatchingSequences(cameraWords, screenWords, 5);
  console.log(`Found ${matches.length} matching sequences`);
  console.log('');

  // Calculate best offset
  const result = calculateBestOffset(matches);

  if (!result) {
    console.log('ERROR: Could not find matching sequences between transcripts');
    console.log('The recordings may not overlap or the audio quality is too different.');
    process.exit(1);
  }

  console.log('=== SYNC RESULT ===');
  console.log(`Offset: ${result.offset.toFixed(3)} seconds`);
  console.log(`  (Screen recording starts ${result.offset > 0 ? 'BEFORE' : 'AFTER'} camera by ${Math.abs(result.offset).toFixed(3)}s)`);
  console.log(`Confidence: ${(result.confidence * 100).toFixed(1)}% (${result.matchCount}/${result.totalMatches} matches)`);
  console.log('');
  console.log('Sample matches:');
  for (const match of result.sampleMatches) {
    console.log(`  "${match.phrase}"`);
    console.log(`    Camera: ${match.camera_time.toFixed(2)}s, Screen: ${match.screen_time.toFixed(2)}s`);
  }

  // Generate output file if requested
  if (outputFile) {
    const cameraBasename = path.basename(cameraFile, '.json').replace(/-/g, '_');
    const screenBasename = path.basename(screenFile, '.json').replace(/-/g, '_');

    const content = `// Auto-generated sync data
// Camera: ${cameraFile}
// Screen: ${screenFile}

export const ${cameraBasename}_${screenBasename}_sync = {
  // Time offset in seconds
  // Positive = screen recording started BEFORE camera
  // Negative = screen recording started AFTER camera
  offset: ${result.offset.toFixed(3)},

  // To align screen to camera timeline:
  // screenTimeInCamera = screenTime + offset

  // Confidence metrics
  confidence: ${result.confidence.toFixed(3)},
  matchCount: ${result.matchCount},

  // Sample matches used for sync
  sampleMatches: ${JSON.stringify(result.sampleMatches.slice(0, 3), null, 2)},
};

// Helper: convert screen recording time to camera timeline
export function screenToCamera(screenTime: number): number {
  return screenTime + ${result.offset.toFixed(3)};
}

// Helper: convert camera time to screen recording time
export function cameraToScreen(cameraTime: number): number {
  return cameraTime - ${result.offset.toFixed(3)};
}
`;

    fs.writeFileSync(outputFile, content);
    console.log('');
    console.log(`Sync data written to: ${outputFile}`);
  }

  console.log('');
  console.log('To use in Remotion:');
  console.log(`  Screen recording should start at frame: ${Math.round(result.offset * 30)} (at 30fps)`);
}

main();
