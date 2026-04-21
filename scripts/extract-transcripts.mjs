#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src/tutorials/programming-fundamentals");
const OUT_DIR = path.join(PROJECT_ROOT, "shared/transcripts");

function extractObjectLiteral(source) {
  const marker = "= {";
  const start = source.indexOf(marker);
  if (start === -1) throw new Error("No object literal found");

  let depth = 0;
  let i = start + 2;
  let inString = false;
  let stringChar = null;
  let escaped = false;

  for (; i < source.length; i++) {
    const ch = source[i];
    if (escaped) { escaped = false; continue; }
    if (ch === "\\" && inString) { escaped = true; continue; }
    if (inString) {
      if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") { inString = true; stringChar = ch; continue; }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return source.slice(start + 2, i + 1);
    }
  }
  throw new Error("Unbalanced braces");
}

const files = fs.readdirSync(SRC_DIR).filter((f) => /-transcript\.ts$/.test(f));
if (files.length === 0) {
  console.error(`No transcript files found in ${SRC_DIR}`);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const file of files) {
  const src = fs.readFileSync(path.join(SRC_DIR, file), "utf8");
  const literal = extractObjectLiteral(src);
  const data = JSON.parse(literal);
  const outName = file.replace(/\.ts$/, ".json");
  fs.writeFileSync(path.join(OUT_DIR, outName), JSON.stringify(data, null, 2));
  console.log(`${file} -> ${outName} (${data.segments.length} segments)`);
}
