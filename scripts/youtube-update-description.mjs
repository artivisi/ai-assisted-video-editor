#!/usr/bin/env node
/**
 * YouTube Video Description Update Script
 *
 * Updates the description of already-uploaded videos using metadata JSON files.
 * Finds videos by matching title on the channel.
 *
 * Usage:
 *   node scripts/youtube-update-description.mjs ep04 ep05 ep06 ep07
 *   node scripts/youtube-update-description.mjs ep04
 */

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");

const CLIENT_SECRET_PATH = path.join(PROJECT_ROOT, "client_secret.json");
const CREDENTIALS_PATH = path.join(PROJECT_ROOT, ".youtube-credentials.json");
const METADATA_DIR = path.join(PROJECT_ROOT, "scripts/youtube-metadata");

function getAuthClient() {
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error("ERROR: client_secret.json not found");
    console.error("Run: node scripts/youtube-auth.mjs");
    process.exit(1);
  }

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error("ERROR: .youtube-credentials.json not found");
    console.error("Run: node scripts/youtube-auth.mjs");
    process.exit(1);
  }

  const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, "utf8"));
  const { client_id, client_secret } = clientSecret.installed || clientSecret.web;
  const tokens = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    "http://localhost:3000/oauth2callback"
  );
  oauth2Client.setCredentials(tokens);

  oauth2Client.on("tokens", (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(updated, null, 2));
    console.log("Tokens refreshed and saved.");
  });

  return oauth2Client;
}

async function findVideoByTitle(youtube, title) {
  // Search own channel for the video
  const response = await youtube.search.list({
    part: "snippet",
    forMine: true,
    type: "video",
    q: title,
    maxResults: 5,
  });

  const match = response.data.items.find(
    (item) => item.snippet.title === title
  );

  return match ? match.id.videoId : null;
}

async function updateVideoDescription(youtube, videoId, metadata) {
  // Get current video details to preserve fields we're not changing
  const current = await youtube.videos.list({
    part: "snippet",
    id: videoId,
  });

  if (!current.data.items || current.data.items.length === 0) {
    throw new Error(`Video ${videoId} not found`);
  }

  const snippet = current.data.items[0].snippet;

  // Update description and tags
  const response = await youtube.videos.update({
    part: "snippet",
    requestBody: {
      id: videoId,
      snippet: {
        title: metadata.title,
        description: metadata.description,
        tags: metadata.tags || snippet.tags,
        categoryId: metadata.categoryId || snippet.categoryId,
        defaultLanguage: snippet.defaultLanguage,
        defaultAudioLanguage: snippet.defaultAudioLanguage,
      },
    },
  });

  return response.data;
}

async function main() {
  const episodes = process.argv.slice(2);

  if (episodes.length === 0) {
    console.log("Usage: node scripts/youtube-update-description.mjs ep04 ep05 ep06 ep07");
    process.exit(1);
  }

  const auth = getAuthClient();
  const youtube = google.youtube({ version: "v3", auth });

  for (const ep of episodes) {
    const metadataPath = path.join(METADATA_DIR, `${ep}.json`);

    if (!fs.existsSync(metadataPath)) {
      console.error(`Metadata not found: ${metadataPath}`);
      continue;
    }

    const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    console.log(`\n=== ${ep}: ${metadata.title} ===`);

    // Find video on channel
    console.log("Searching for video...");
    const videoId = await findVideoByTitle(youtube, metadata.title);

    if (!videoId) {
      console.error(`Video not found on channel: "${metadata.title}"`);
      continue;
    }

    console.log(`Found video: ${videoId}`);

    // Update description
    console.log("Updating description...");
    await updateVideoDescription(youtube, videoId, metadata);
    console.log(`Updated: https://youtube.com/watch?v=${videoId}`);
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error("Failed:", error.message);
  if (error.response?.data) {
    console.error("API Error:", JSON.stringify(error.response.data, null, 2));
  }
  process.exit(1);
});
