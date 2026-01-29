#!/usr/bin/env node

/**
 * Generate printable video outline from episode file
 * Usage: node scripts/generate-outline.mjs src/tutorials/programming-fundamentals/episode-01.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";

// Simple TypeScript-to-JS parser for outline extraction
function parseOutlineFile(filePath) {
  const content = readFileSync(filePath, "utf-8");

  // Extract the outline object using regex
  const outlineMatch = content.match(/export\s+const\s+\w+\s*:\s*VideoOutline\s*=\s*(\{[\s\S]*\});?\s*$/m);

  if (!outlineMatch) {
    throw new Error("Could not find VideoOutline export in file");
  }

  // Convert TypeScript object literal to JSON-ish format
  let objectStr = outlineMatch[1];

  // Remove trailing semicolon
  objectStr = objectStr.replace(/;$/, "");

  // Handle template literals and single quotes
  objectStr = objectStr.replace(/`([^`]*)`/g, (_, p1) => JSON.stringify(p1));
  objectStr = objectStr.replace(/'([^']*)'/g, '"$1"');

  // Remove trailing commas
  objectStr = objectStr.replace(/,(\s*[}\]])/g, "$1");

  // Add quotes to unquoted keys
  objectStr = objectStr.replace(/(\s)(\w+):/g, '$1"$2":');

  try {
    return JSON.parse(objectStr);
  } catch (e) {
    // If JSON parse fails, try eval (less safe but works for complex objects)
    console.warn("JSON parse failed, using eval fallback");
    return eval(`(${objectStr})`);
  }
}

function formatOutline(outline) {
  const lines = [];

  lines.push("═".repeat(60));
  lines.push(`VIDEO OUTLINE: ${outline.title}`);
  lines.push("═".repeat(60));
  lines.push("");
  lines.push(`Series: ${outline.seriesId}`);
  lines.push(`Episode: ${outline.episodeId}`);
  lines.push(`Duration: ${Math.floor(outline.duration / 60)} minutes`);
  lines.push("");
  lines.push(outline.description);
  lines.push("");
  lines.push("─".repeat(60));
  lines.push("RECORDING OUTLINE");
  lines.push("─".repeat(60));
  lines.push("");

  for (const section of outline.outline) {
    lines.push(`[${section.timestamp}] ${section.title.toUpperCase()}`);
    if (section.showOnScreen) {
      lines.push(`         Show: ${section.showOnScreen}`);
    }
    lines.push("");

    for (const point of section.talkingPoints) {
      lines.push(`  • ${point}`);
    }

    if (section.notes) {
      lines.push("");
      lines.push(`  📝 Note: ${section.notes}`);
    }

    lines.push("");
  }

  if (outline.references && outline.references.length > 0) {
    lines.push("─".repeat(60));
    lines.push("REFERENCES (for description)");
    lines.push("─".repeat(60));
    lines.push("");

    for (const ref of outline.references) {
      lines.push(`  • ${ref.label}: ${ref.url}`);
    }
    lines.push("");
  }

  lines.push("═".repeat(60));

  return lines.join("\n");
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node scripts/generate-outline.mjs <episode-file.ts>");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/generate-outline.mjs src/tutorials/programming-fundamentals/episode-01.ts");
  process.exit(1);
}

const inputFile = args[0];

try {
  const outline = parseOutlineFile(inputFile);
  const formatted = formatOutline(outline);

  // Output to console
  console.log(formatted);

  // Also save to file
  const outDir = dirname(inputFile);
  const baseName = basename(inputFile, ".ts");
  const outFile = join(outDir, `${baseName}-outline.txt`);

  writeFileSync(outFile, formatted);
  console.log(`\nOutline saved to: ${outFile}`);

} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
