#!/usr/bin/env node

/**
 * Process transcript file (from Whisper or other STT) into Remotion-compatible format
 *
 * Supported input formats:
 * - Whisper JSON output
 * - SRT subtitle files
 * - VTT subtitle files
 *
 * Usage:
 *   node scripts/process-transcript.mjs input.json output.ts --fps 30
 *   node scripts/process-transcript.mjs input.srt output.ts --fps 30
 */

import { readFileSync, writeFileSync } from "fs";
import { basename, extname } from "path";

// Parse Whisper JSON format
function parseWhisperJson(content) {
  const data = JSON.parse(content);

  const segments = (data.segments || []).map((seg, index) => ({
    id: `seg-${index}`,
    start: seg.start,
    end: seg.end,
    text: seg.text.trim(),
    words: seg.words?.map(w => ({
      word: w.word,
      start: w.start,
      end: w.end,
      confidence: w.probability,
    })),
  }));

  return {
    segments,
    language: data.language,
    duration: segments.length > 0 ? segments[segments.length - 1].end : 0,
  };
}

// Parse SRT format
function parseSrt(content) {
  const segments = [];
  const blocks = content.trim().split(/\n\n+/);

  for (const block of blocks) {
    const lines = block.split("\n");
    if (lines.length < 3) continue;

    const timeMatch = lines[1].match(
      /(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/
    );
    if (!timeMatch) continue;

    const start =
      parseInt(timeMatch[1]) * 3600 +
      parseInt(timeMatch[2]) * 60 +
      parseInt(timeMatch[3]) +
      parseInt(timeMatch[4]) / 1000;

    const end =
      parseInt(timeMatch[5]) * 3600 +
      parseInt(timeMatch[6]) * 60 +
      parseInt(timeMatch[7]) +
      parseInt(timeMatch[8]) / 1000;

    const text = lines.slice(2).join(" ").trim();

    segments.push({
      id: `seg-${segments.length}`,
      start,
      end,
      text,
    });
  }

  return {
    segments,
    duration: segments.length > 0 ? segments[segments.length - 1].end : 0,
  };
}

// Parse VTT format
function parseVtt(content) {
  const segments = [];
  const lines = content.split("\n");
  let i = 0;

  // Skip header
  while (i < lines.length && !lines[i].includes("-->")) {
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];
    const timeMatch = line.match(
      /(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/
    );

    if (timeMatch) {
      const start =
        parseInt(timeMatch[1]) * 3600 +
        parseInt(timeMatch[2]) * 60 +
        parseInt(timeMatch[3]) +
        parseInt(timeMatch[4]) / 1000;

      const end =
        parseInt(timeMatch[5]) * 3600 +
        parseInt(timeMatch[6]) * 60 +
        parseInt(timeMatch[7]) +
        parseInt(timeMatch[8]) / 1000;

      i++;
      const textLines = [];
      while (i < lines.length && lines[i].trim() && !lines[i].includes("-->")) {
        textLines.push(lines[i].trim());
        i++;
      }

      segments.push({
        id: `seg-${segments.length}`,
        start,
        end,
        text: textLines.join(" "),
      });
    } else {
      i++;
    }
  }

  return {
    segments,
    duration: segments.length > 0 ? segments[segments.length - 1].end : 0,
  };
}

// Generate TypeScript output
function generateTypeScript(transcript, fps, inputFileName) {
  const varName = basename(inputFileName, extname(inputFileName))
    .replace(/[^a-zA-Z0-9]/g, "_")
    .replace(/^(\d)/, "_$1");

  return `import { Transcript } from "../types";
import { transcriptToSubtitles } from "../transcript-types";

export const ${varName}Transcript: Transcript = ${JSON.stringify(transcript, null, 2)};

// Pre-generated subtitle cues at ${fps} fps
export const ${varName}Subtitles = transcriptToSubtitles(${varName}Transcript, ${fps});
`;
}

// Main
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: node scripts/process-transcript.mjs <input> <output.ts> [--fps 30]");
  console.log("");
  console.log("Supported input formats:");
  console.log("  - Whisper JSON (.json)");
  console.log("  - SRT subtitles (.srt)");
  console.log("  - VTT subtitles (.vtt)");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/process-transcript.mjs footage/pf-01.json src/tutorials/programming-fundamentals/pf-01-transcript.ts");
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];
const fpsIndex = args.indexOf("--fps");
const fps = fpsIndex !== -1 ? parseInt(args[fpsIndex + 1]) : 30;

try {
  const content = readFileSync(inputFile, "utf-8");
  const ext = extname(inputFile).toLowerCase();

  let transcript;

  switch (ext) {
    case ".json":
      transcript = parseWhisperJson(content);
      break;
    case ".srt":
      transcript = parseSrt(content);
      break;
    case ".vtt":
      transcript = parseVtt(content);
      break;
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }

  console.log(`Parsed ${transcript.segments.length} segments`);
  console.log(`Duration: ${Math.floor(transcript.duration / 60)}m ${Math.floor(transcript.duration % 60)}s`);

  const tsContent = generateTypeScript(transcript, fps, inputFile);
  writeFileSync(outputFile, tsContent);

  console.log(`Output written to: ${outputFile}`);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
