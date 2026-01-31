#!/usr/bin/env node

/**
 * Generate zoom keyframes from cursor positions or activity data
 *
 * Usage:
 *   node scripts/generate-zoom-keyframes.mjs footage/pf-01-main.cursor.json
 *   node scripts/generate-zoom-keyframes.mjs footage/pf-01-main.cursor.json --output src/tutorials/programming-fundamentals/pf-01-zoom.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { basename, dirname, extname } from "path";

// Default configuration
const DEFAULT_CONFIG = {
  fps: 30,
  minZoomDuration: 90, // frames (3 seconds)
  maxZoomScale: 2.0,
  defaultScale: 1,
  transitionFrames: 15, // 0.5 seconds
  cursorPadding: 0.15,
  dwellThreshold: 0.08, // max movement to consider "dwelling"
  minConfidence: 0.5,
};

function findDwellPeriods(positions, config) {
  const dwells = [];
  let dwellStart = null;
  let dwellPositions = [];

  for (let i = 0; i < positions.length; i++) {
    const pos = positions[i];

    // Skip low confidence positions
    if (pos.confidence < config.minConfidence) continue;

    if (!dwellStart) {
      dwellStart = pos;
      dwellPositions = [pos];
      continue;
    }

    // Calculate distance from dwell center
    const avgX = dwellPositions.reduce((s, p) => s + p.x, 0) / dwellPositions.length;
    const avgY = dwellPositions.reduce((s, p) => s + p.y, 0) / dwellPositions.length;
    const distance = Math.sqrt(Math.pow(pos.x - avgX, 2) + Math.pow(pos.y - avgY, 2));

    if (distance < config.dwellThreshold) {
      // Still dwelling
      dwellPositions.push(pos);
    } else {
      // Moved away - check if dwell was long enough
      const dwellDuration = dwellPositions[dwellPositions.length - 1].frame - dwellStart.frame;

      if (dwellDuration >= config.minZoomDuration) {
        dwells.push({
          startFrame: dwellStart.frame,
          endFrame: dwellPositions[dwellPositions.length - 1].frame,
          x: avgX,
          y: avgY,
          duration: dwellDuration,
        });
      }

      // Start new potential dwell
      dwellStart = pos;
      dwellPositions = [pos];
    }
  }

  // Check final dwell
  if (dwellPositions.length > 0) {
    const dwellDuration = dwellPositions[dwellPositions.length - 1].frame - dwellStart.frame;
    if (dwellDuration >= config.minZoomDuration) {
      const avgX = dwellPositions.reduce((s, p) => s + p.x, 0) / dwellPositions.length;
      const avgY = dwellPositions.reduce((s, p) => s + p.y, 0) / dwellPositions.length;
      dwells.push({
        startFrame: dwellStart.frame,
        endFrame: dwellPositions[dwellPositions.length - 1].frame,
        x: avgX,
        y: avgY,
        duration: dwellDuration,
      });
    }
  }

  return dwells;
}

function dwellsToKeyframes(dwells, totalFrames, config) {
  const keyframes = [];

  // Start at default zoom
  keyframes.push({
    frame: 0,
    x: 0.5,
    y: 0.5,
    scale: config.defaultScale,
  });

  for (const dwell of dwells) {
    // Zoom in
    keyframes.push({
      frame: dwell.startFrame,
      x: dwell.x,
      y: dwell.y,
      scale: config.maxZoomScale,
    });

    // Stay zoomed
    keyframes.push({
      frame: dwell.endFrame - config.transitionFrames,
      x: dwell.x,
      y: dwell.y,
      scale: config.maxZoomScale,
    });

    // Zoom out
    keyframes.push({
      frame: dwell.endFrame,
      x: 0.5,
      y: 0.5,
      scale: config.defaultScale,
    });
  }

  // Ensure we end at default
  if (keyframes[keyframes.length - 1].frame < totalFrames) {
    keyframes.push({
      frame: totalFrames,
      x: 0.5,
      y: 0.5,
      scale: config.defaultScale,
    });
  }

  return keyframes;
}

function mergeCloseKeyframes(keyframes, minGap = 30) {
  if (keyframes.length <= 2) return keyframes;

  const merged = [keyframes[0]];

  for (let i = 1; i < keyframes.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = keyframes[i];

    if (curr.frame - prev.frame >= minGap) {
      merged.push(curr);
    } else {
      // Merge with previous - keep the one with larger scale change
      if (Math.abs(curr.scale - 1) > Math.abs(prev.scale - 1)) {
        merged[merged.length - 1] = curr;
      }
    }
  }

  return merged;
}

function generateTypeScript(keyframes, inputFileName, config) {
  const varName = basename(inputFileName)
    .replace(/\.cursor\.json$/, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .replace(/^(\d)/, "_$1");

  return `import { ZoomPoint } from "../../components";

// Auto-generated zoom keyframes from cursor tracking
// Source: ${inputFileName}
// Config: maxZoom=${config.maxZoomScale}, minDwell=${config.minZoomDuration}frames

export const ${varName}ZoomKeyframes: ZoomPoint[] = ${JSON.stringify(
    keyframes.map((k) => ({
      frame: k.frame,
      x: Math.round(k.x * 1000) / 1000,
      y: Math.round(k.y * 1000) / 1000,
      scale: k.scale,
    })),
    null,
    2
  )};

// Usage in composition:
// <ZoomPan keyframes={${varName}ZoomKeyframes}>
//   <OffthreadVideo src={videoSrc} />
// </ZoomPan>
`;
}

// Main
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: node scripts/generate-zoom-keyframes.mjs <cursor.json> [options]");
  console.log("");
  console.log("Options:");
  console.log("  --output <file.ts>      Output TypeScript file");
  console.log("  --max-zoom <number>     Maximum zoom scale (default: 2.0)");
  console.log("  --min-dwell <frames>    Minimum dwell duration (default: 90)");
  console.log("  --transition <frames>   Transition duration (default: 15)");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/generate-zoom-keyframes.mjs footage/pf-01-main.cursor.json");
  process.exit(1);
}

const inputFile = args[0];

// Parse options
const getArg = (name, defaultValue) => {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : defaultValue;
};

const config = {
  ...DEFAULT_CONFIG,
  maxZoomScale: parseFloat(getArg("--max-zoom", DEFAULT_CONFIG.maxZoomScale)),
  minZoomDuration: parseInt(getArg("--min-dwell", DEFAULT_CONFIG.minZoomDuration)),
  transitionFrames: parseInt(getArg("--transition", DEFAULT_CONFIG.transitionFrames)),
};

const outputFile = getArg("--output", inputFile.replace(/\.cursor\.json$/, "-zoom.ts"));

try {
  const data = JSON.parse(readFileSync(inputFile, "utf-8"));

  console.log(`Processing: ${inputFile}`);
  console.log(`Video: ${data.width}x${data.height} @ ${data.fps}fps`);
  console.log(`Cursor positions: ${data.positions.length}`);

  config.fps = data.fps;

  // Find dwell periods
  const dwells = findDwellPeriods(data.positions, config);
  console.log(`Found ${dwells.length} dwell periods (cursor stayed in place)`);

  // Convert to keyframes
  let keyframes = dwellsToKeyframes(dwells, data.totalFrames, config);
  console.log(`Generated ${keyframes.length} raw keyframes`);

  // Merge close keyframes
  keyframes = mergeCloseKeyframes(keyframes, config.transitionFrames * 2);
  console.log(`After merging: ${keyframes.length} keyframes`);

  // Generate TypeScript
  const tsContent = generateTypeScript(keyframes, inputFile, config);
  writeFileSync(outputFile, tsContent);

  console.log(`\nOutput saved to: ${outputFile}`);

  // Summary
  const zoomCount = keyframes.filter((k) => k.scale > 1).length;
  console.log(`\nSummary:`);
  console.log(`  Zoom-in points: ${zoomCount}`);
  console.log(`  Total keyframes: ${keyframes.length}`);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
