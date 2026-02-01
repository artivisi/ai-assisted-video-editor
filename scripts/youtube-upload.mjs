#!/usr/bin/env node
/**
 * YouTube Video Upload Script
 *
 * Usage:
 *   node scripts/youtube-upload.mjs <metadata-json> <video-file>
 *   node scripts/youtube-upload.mjs scripts/youtube-metadata/ep01.json /path/to/video.mp4
 *
 * Features:
 *   - Upload video with title, description, tags
 *   - Set custom thumbnail
 *   - Schedule publish time
 *   - Add to playlist
 */

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");

const CLIENT_SECRET_PATH = path.join(PROJECT_ROOT, "client_secret.json");
const CREDENTIALS_PATH = path.join(PROJECT_ROOT, ".youtube-credentials.json");

// Playlist cache to avoid repeated API calls
const playlistCache = new Map();

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

  // Handle token refresh
  oauth2Client.on("tokens", (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(updated, null, 2));
    console.log("Tokens refreshed and saved.");
  });

  return oauth2Client;
}

async function getOrCreatePlaylist(youtube, playlistTitle) {
  // Check cache first
  if (playlistCache.has(playlistTitle)) {
    return playlistCache.get(playlistTitle);
  }

  // Search for existing playlist
  const response = await youtube.playlists.list({
    part: "snippet",
    mine: true,
    maxResults: 50,
  });

  const existing = response.data.items.find(
    (p) => p.snippet.title === playlistTitle
  );

  if (existing) {
    playlistCache.set(playlistTitle, existing.id);
    return existing.id;
  }

  // Create new playlist
  console.log(`Creating playlist: ${playlistTitle}`);
  const createResponse = await youtube.playlists.insert({
    part: "snippet,status",
    requestBody: {
      snippet: {
        title: playlistTitle,
        description: `Video series: ${playlistTitle}`,
      },
      status: {
        privacyStatus: "public",
      },
    },
  });

  const playlistId = createResponse.data.id;
  playlistCache.set(playlistTitle, playlistId);
  return playlistId;
}

async function addToPlaylist(youtube, playlistId, videoId) {
  await youtube.playlistItems.insert({
    part: "snippet",
    requestBody: {
      snippet: {
        playlistId,
        resourceId: {
          kind: "youtube#video",
          videoId,
        },
      },
    },
  });
}

async function setThumbnail(youtube, videoId, thumbnailPath) {
  if (!fs.existsSync(thumbnailPath)) {
    console.warn(`Thumbnail not found: ${thumbnailPath}`);
    return false;
  }

  await youtube.thumbnails.set({
    videoId,
    media: {
      mimeType: "image/png",
      body: fs.createReadStream(thumbnailPath),
    },
  });

  return true;
}

async function uploadVideo(metadataPath, videoPath) {
  // Validate inputs
  if (!fs.existsSync(metadataPath)) {
    console.error(`Metadata file not found: ${metadataPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(videoPath)) {
    console.error(`Video file not found: ${videoPath}`);
    process.exit(1);
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  const videoSize = fs.statSync(videoPath).size;

  console.log("=== YouTube Upload ===");
  console.log(`Title: ${metadata.title}`);
  console.log(`Video: ${videoPath} (${(videoSize / 1024 / 1024).toFixed(1)} MB)`);

  if (metadata.scheduledPublishAt) {
    console.log(`Scheduled: ${metadata.scheduledPublishAt}`);
  }

  const auth = getAuthClient();
  const youtube = google.youtube({ version: "v3", auth });

  // Prepare video resource
  const videoResource = {
    snippet: {
      title: metadata.title,
      description: metadata.description,
      tags: metadata.tags || [],
      categoryId: metadata.categoryId || "27", // Education
      defaultLanguage: metadata.language || "id",
      defaultAudioLanguage: metadata.language || "id",
    },
    status: {
      privacyStatus: metadata.scheduledPublishAt ? "private" : "public",
      selfDeclaredMadeForKids: false,
    },
  };

  // Add scheduled publish time
  if (metadata.scheduledPublishAt) {
    videoResource.status.publishAt = new Date(metadata.scheduledPublishAt).toISOString();
    videoResource.status.privacyStatus = "private";
  }

  console.log("");
  console.log("Uploading video...");

  // Upload with progress
  const fileSize = fs.statSync(videoPath).size;
  let lastProgress = 0;

  const response = await youtube.videos.insert(
    {
      part: "snippet,status",
      requestBody: videoResource,
      media: {
        body: fs.createReadStream(videoPath),
      },
    },
    {
      onUploadProgress: (evt) => {
        const progress = Math.round((evt.bytesRead / fileSize) * 100);
        if (progress !== lastProgress && progress % 10 === 0) {
          console.log(`  Upload progress: ${progress}%`);
          lastProgress = progress;
        }
      },
    }
  );

  const videoId = response.data.id;
  console.log(`Upload complete! Video ID: ${videoId}`);
  console.log(`URL: https://youtube.com/watch?v=${videoId}`);

  // Set thumbnail
  if (metadata.thumbnail) {
    const thumbnailPath = path.isAbsolute(metadata.thumbnail)
      ? metadata.thumbnail
      : path.join(PROJECT_ROOT, metadata.thumbnail);

    console.log("");
    console.log("Setting thumbnail...");
    const success = await setThumbnail(youtube, videoId, thumbnailPath);
    if (success) {
      console.log("Thumbnail set successfully.");
    }
  }

  // Add to playlist
  if (metadata.playlist) {
    console.log("");
    console.log(`Adding to playlist: ${metadata.playlist}`);
    const playlistId = await getOrCreatePlaylist(youtube, metadata.playlist);
    await addToPlaylist(youtube, playlistId, videoId);
    console.log("Added to playlist.");
  }

  console.log("");
  console.log("=== Upload Complete ===");
  console.log(`Video ID: ${videoId}`);
  console.log(`URL: https://youtube.com/watch?v=${videoId}`);

  if (metadata.scheduledPublishAt) {
    console.log(`Status: Scheduled for ${metadata.scheduledPublishAt}`);
  } else {
    console.log("Status: Public");
  }

  return videoId;
}

// CLI
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: node scripts/youtube-upload.mjs <metadata-json> <video-file>");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/youtube-upload.mjs scripts/youtube-metadata/ep01.json out/ep01.mp4");
  process.exit(1);
}

const [metadataPath, videoPath] = args;

uploadVideo(metadataPath, videoPath).catch((error) => {
  console.error("Upload failed:", error.message);
  if (error.response?.data) {
    console.error("API Error:", JSON.stringify(error.response.data, null, 2));
  }
  process.exit(1);
});
