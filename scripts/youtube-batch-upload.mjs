#!/usr/bin/env node
/**
 * Batch Upload Episodes to YouTube
 *
 * Usage:
 *   node scripts/youtube-batch-upload.mjs <start-ep> <end-ep>
 *   node scripts/youtube-batch-upload.mjs ep01 ep05
 *
 * Prerequisites:
 *   1. Run youtube-auth.mjs to authenticate
 *   2. Run generate-youtube-metadata.mjs to create metadata files
 *   3. Ensure rendered videos exist
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const METADATA_DIR = path.join(PROJECT_ROOT, "scripts/youtube-metadata");
const RENDERED_DIR = "/Volumes/ENDY1TB/Video Production/seri-programming-fundamental/rendered";

function runUpload(metadataPath, videoPath) {
  return new Promise((resolve, reject) => {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Uploading: ${path.basename(videoPath)}`);
    console.log(`${"=".repeat(60)}\n`);

    const child = spawn("node", [
      path.join(__dirname, "youtube-upload.mjs"),
      metadataPath,
      videoPath,
    ], {
      stdio: "inherit",
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Upload failed with code ${code}`));
      }
    });

    child.on("error", reject);
  });
}

function findVideoFile(episode) {
  // Look for rendered video file
  const files = fs.readdirSync(RENDERED_DIR);
  const epNum = episode.replace("ep", "");

  // Match patterns like pf-ep01-*.mp4
  const pattern = new RegExp(`pf-ep${epNum}.*\\.mp4$`, "i");
  const match = files.find((f) => pattern.test(f));

  if (match) {
    return path.join(RENDERED_DIR, match);
  }

  return null;
}

async function batchUpload(startEp, endEp) {
  const startNum = parseInt(startEp.replace("ep", ""), 10);
  const endNum = parseInt(endEp.replace("ep", ""), 10);

  const episodes = [];
  for (let i = startNum; i <= endNum; i++) {
    episodes.push(`ep${String(i).padStart(2, "0")}`);
  }

  console.log(`Batch upload: ${episodes.join(", ")}`);
  console.log("");

  // Validate all files exist before starting
  const uploadQueue = [];
  const missing = [];

  for (const ep of episodes) {
    const metadataPath = path.join(METADATA_DIR, `${ep}.json`);
    const videoPath = findVideoFile(ep);

    if (!fs.existsSync(metadataPath)) {
      missing.push(`Metadata: ${ep}.json`);
      continue;
    }

    if (!videoPath) {
      missing.push(`Video: ${ep}`);
      continue;
    }

    uploadQueue.push({ episode: ep, metadataPath, videoPath });
  }

  if (missing.length > 0) {
    console.error("Missing files:");
    missing.forEach((m) => console.error(`  - ${m}`));
    console.error("");
    console.error("Generate metadata: node scripts/generate-youtube-metadata.mjs all");
    console.error("Render videos: ./scripts/render-from-config.sh epXX");
    process.exit(1);
  }

  console.log(`Found ${uploadQueue.length} episodes ready for upload:`);
  uploadQueue.forEach((u) => {
    console.log(`  - ${u.episode}: ${path.basename(u.videoPath)}`);
  });
  console.log("");

  // Upload sequentially
  const results = [];
  for (const item of uploadQueue) {
    try {
      await runUpload(item.metadataPath, item.videoPath);
      results.push({ episode: item.episode, success: true });

      // Small delay between uploads to avoid rate limiting
      console.log("\nWaiting 5 seconds before next upload...\n");
      await new Promise((r) => setTimeout(r, 5000));
    } catch (error) {
      results.push({ episode: item.episode, success: false, error: error.message });
      console.error(`Failed to upload ${item.episode}: ${error.message}`);
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("BATCH UPLOAD SUMMARY");
  console.log("=".repeat(60));

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log(`Successful: ${successful.length}`);
  successful.forEach((r) => console.log(`  ✓ ${r.episode}`));

  if (failed.length > 0) {
    console.log(`Failed: ${failed.length}`);
    failed.forEach((r) => console.log(`  ✗ ${r.episode}: ${r.error}`));
  }
}

// CLI
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: node scripts/youtube-batch-upload.mjs <start-ep> <end-ep>");
  console.log("");
  console.log("Examples:");
  console.log("  node scripts/youtube-batch-upload.mjs ep01 ep03  # Upload ep01-ep03");
  console.log("  node scripts/youtube-batch-upload.mjs ep01 ep32  # Upload all episodes");
  console.log("");
  console.log("Prerequisites:");
  console.log("  1. node scripts/youtube-auth.mjs           # Authenticate");
  console.log("  2. node scripts/generate-youtube-metadata.mjs all  # Generate metadata");
  console.log("  3. ./scripts/render-from-config.sh epXX    # Render videos");
  process.exit(1);
}

const [startEp, endEp] = args;
batchUpload(startEp, endEp).catch(console.error);
