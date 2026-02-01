#!/usr/bin/env node
/**
 * YouTube OAuth Authentication Setup
 *
 * Usage:
 *   node scripts/youtube-auth.mjs
 *
 * Prerequisites:
 *   1. Create project at https://console.cloud.google.com/
 *   2. Enable YouTube Data API v3
 *   3. Create OAuth 2.0 credentials (Desktop app)
 *   4. Download client_secret.json to project root
 *
 * This script will:
 *   1. Read client_secret.json
 *   2. Open browser for OAuth consent
 *   3. Save tokens to .youtube-credentials.json
 */

import { google } from "googleapis";
import http from "http";
import open from "open";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");

const CLIENT_SECRET_PATH = path.join(PROJECT_ROOT, "client_secret.json");
const CREDENTIALS_PATH = path.join(PROJECT_ROOT, ".youtube-credentials.json");

const SCOPES = [
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.force-ssl",
];

async function authenticate() {
  // Check for client_secret.json
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error("ERROR: client_secret.json not found in project root");
    console.error("");
    console.error("Setup steps:");
    console.error("1. Go to https://console.cloud.google.com/");
    console.error("2. Create a new project (or select existing)");
    console.error("3. Enable YouTube Data API v3:");
    console.error("   APIs & Services > Library > YouTube Data API v3 > Enable");
    console.error("4. Create OAuth credentials:");
    console.error("   APIs & Services > Credentials > Create Credentials > OAuth client ID");
    console.error("   Application type: Desktop app");
    console.error("5. Download the JSON and save as 'client_secret.json' in project root");
    process.exit(1);
  }

  const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, "utf8"));
  const { client_id, client_secret, redirect_uris } = clientSecret.installed || clientSecret.web;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    "http://localhost:3000/oauth2callback"
  );

  // Check for existing credentials
  if (fs.existsSync(CREDENTIALS_PATH)) {
    const tokens = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
    oauth2Client.setCredentials(tokens);

    // Test if tokens are still valid
    try {
      const youtube = google.youtube({ version: "v3", auth: oauth2Client });
      await youtube.channels.list({ part: "snippet", mine: true });
      console.log("Existing credentials are valid.");
      console.log("Credentials saved at:", CREDENTIALS_PATH);
      return;
    } catch (error) {
      console.log("Existing credentials expired, re-authenticating...");
    }
  }

  // Generate auth URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // Force to get refresh token
  });

  console.log("Opening browser for authentication...");
  console.log("");
  console.log("If browser doesn't open, visit this URL:");
  console.log(authUrl);
  console.log("");

  // Start local server to receive callback
  const code = await new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      const url = new URL(req.url, "http://localhost:3000");

      if (url.pathname === "/oauth2callback") {
        const code = url.searchParams.get("code");
        const error = url.searchParams.get("error");

        if (error) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end(`<h1>Authentication failed</h1><p>${error}</p>`);
          reject(new Error(error));
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`
            <h1>Authentication successful!</h1>
            <p>You can close this window and return to the terminal.</p>
            <script>window.close();</script>
          `);
          resolve(code);
        }

        server.close();
      }
    });

    server.listen(3000, () => {
      open(authUrl);
    });

    server.on("error", reject);
  });

  // Exchange code for tokens
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Save tokens
  fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(tokens, null, 2));
  console.log("");
  console.log("Authentication successful!");
  console.log("Credentials saved to:", CREDENTIALS_PATH);
  console.log("");
  console.log("IMPORTANT: Add these files to .gitignore:");
  console.log("  - client_secret.json");
  console.log("  - .youtube-credentials.json");

  // Verify by getting channel info
  const youtube = google.youtube({ version: "v3", auth: oauth2Client });
  const response = await youtube.channels.list({ part: "snippet", mine: true });
  const channel = response.data.items[0];
  console.log("");
  console.log(`Authenticated as: ${channel.snippet.title}`);
}

authenticate().catch((error) => {
  console.error("Authentication failed:", error.message);
  process.exit(1);
});
