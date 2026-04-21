#!/usr/bin/env node
// Slice a transcript JSON to a specific time range and normalize timestamps to start at 0.
// Outputs word-level groups suitable for HyperFrames caption animation.
// Usage: node scripts/slice-transcript.mjs <input.json> <start-sec> <end-sec> <out.json>

import fs from "fs";
import path from "path";

const [, , inputPath, startStr, endStr, outPath] = process.argv;
if (!inputPath || !startStr || !endStr || !outPath) {
  console.error("Usage: node scripts/slice-transcript.mjs <input.json> <start> <end> <out.json>");
  process.exit(1);
}

const startSec = parseFloat(startStr);
const endSec = parseFloat(endStr);
const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const words = [];
for (const seg of data.segments) {
  if (!seg.words) continue;
  const inRange = seg.start >= startSec && seg.end <= endSec;
  if (!inRange) continue;
  const segWords = seg.words.map((w) => ({
    text: w.word.trim(),
    start: +(w.start - startSec).toFixed(3),
    end: +(w.end - startSec).toFixed(3),
    segmentEnd: false,
  }));
  if (segWords.length > 0) segWords[segWords.length - 1].segmentEnd = true;
  words.push(...segWords);
}

// Group into chunks. Break on: segment end, 150ms+ pause, or max word count.
const groups = [];
let cur = [];
const maxWords = 4;
const pauseThreshold = 0.18;

for (let i = 0; i < words.length; i++) {
  cur.push(words[i]);
  const nextPause = i + 1 < words.length ? words[i + 1].start - words[i].end : Infinity;
  const shouldBreak =
    cur.length >= maxWords || words[i].segmentEnd || nextPause >= pauseThreshold || i === words.length - 1;
  if (shouldBreak) {
    groups.push({
      start: cur[0].start,
      end: cur[cur.length - 1].end,
      text: cur.map((w) => w.text).join(" "),
      words: cur.map((w) => ({ text: w.text, start: w.start, end: w.end })),
    });
    cur = [];
  }
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ totalDuration: +(endSec - startSec).toFixed(3), groups }, null, 2));
console.log(`${words.length} words → ${groups.length} groups (${(endSec - startSec).toFixed(1)}s) → ${outPath}`);
