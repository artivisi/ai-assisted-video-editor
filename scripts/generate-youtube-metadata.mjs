#!/usr/bin/env node
/**
 * Generate YouTube Metadata from Episode Outlines
 *
 * Usage:
 *   node scripts/generate-youtube-metadata.mjs <episode> [options]
 *   node scripts/generate-youtube-metadata.mjs ep01
 *   node scripts/generate-youtube-metadata.mjs ep01 --schedule "2026-02-08T14:00:00+07:00"
 *   node scripts/generate-youtube-metadata.mjs all --start-date "2026-02-08" --interval 7
 *
 * Options:
 *   --schedule <datetime>   Set publish time for single episode
 *   --start-date <date>     Start date for batch scheduling (YYYY-MM-DD)
 *   --interval <days>       Days between episodes (default: 7)
 *   --time <HH:MM>          Publish time (default: 14:00)
 *   --timezone <tz>         Timezone offset (default: +07:00)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const OUTLINES_DIR = path.join(PROJECT_ROOT, "src/tutorials/programming-fundamentals");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "scripts/youtube-metadata");
const THUMBNAILS_DIR = path.join(PROJECT_ROOT, "thumbnails");

// Series constants
const SERIES_NAME = "Programming Fundamentals";
const CHANNEL_NAME = "ArtiVisi";
const PLAYLIST_NAME = "Programming Fundamentals - Belajar Python, Java, JavaScript";

const COMMON_TAGS = [
  "programming",
  "coding",
  "tutorial",
  "pemula",
  "belajar programming",
  "python",
  "javascript",
  "java",
  "programming fundamentals",
  "artivisi",
];

const EPISODE_TAGS = {
  "ep01": ["apa itu programming", "pengenalan programming", "bahasa pemrograman"],
  "ep02": ["github", "codespaces", "setup coding", "vs code online"],
  "ep03": ["ai coding", "chatgpt programming", "claude ai", "copilot"],
  "ep04": ["hello world", "program pertama", "print"],
  "ep05": ["komentar", "comments", "struktur kode"],
  "ep06": ["variables", "variabel", "tipe data"],
  "ep07": ["data types", "typing systems", "static dynamic"],
  "ep08": ["binary", "hexadecimal", "number systems"],
  "ep09": ["type conversion", "string operations"],
  "ep10": ["operators", "arithmetic", "assignment"],
  "ep11": ["comparison", "logical operators", "boolean"],
  "ep12": ["if else", "conditional", "percabangan"],
  "ep13": ["else if", "switch case", "nested conditions"],
  "ep14": ["for loop", "pengulangan", "iteration"],
  "ep15": ["while loop", "break continue"],
  "ep16": ["nested loops", "loop patterns"],
  "ep17": ["functions", "fungsi", "reusable code"],
  "ep18": ["parameters", "arguments", "default values"],
  "ep19": ["scope", "return values", "local global"],
  "ep20": ["arrays", "lists", "collections"],
  "ep21": ["array methods", "list operations"],
  "ep22": ["dictionaries", "objects", "key value"],
  "ep23": ["sets", "tuples", "data structures"],
  "ep24": ["string methods", "text manipulation"],
  "ep25": ["regex", "regular expressions", "pattern matching"],
  "ep26": ["exceptions", "try catch", "error handling"],
  "ep27": ["debugging", "troubleshooting", "fix bugs"],
  "ep28": ["file io", "read write files", "json"],
  "ep29": ["calculator project", "final project"],
  "ep30": ["todo list project", "crud app"],
  "ep31": ["guessing game", "game project"],
  "ep32": ["wrap up", "next steps", "learning path"],
};

function parseArgs(args) {
  const result = { episode: null, options: {} };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2).replace(/-/g, "_");
      result.options[key] = args[++i];
    } else if (!result.episode) {
      result.episode = arg;
    }
  }

  return result;
}

async function loadEpisodeOutline(episodeId) {
  // Convert ep01 -> pf-01
  const fileId = episodeId.replace("ep", "pf-");
  const outlinePath = path.join(OUTLINES_DIR, `${fileId}.ts`);

  if (!fs.existsSync(outlinePath)) {
    console.error(`Episode outline not found: ${outlinePath}`);
    return null;
  }

  // Read and parse TypeScript file
  const content = fs.readFileSync(outlinePath, "utf8");

  // Extract outline object using regex (simple parser)
  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const descMatch = content.match(/description:\s*["'](.+?)["']/);
  const outlineMatch = content.match(/outline:\s*\[([\s\S]*?)\],\s*\n\s*(?:lowerThirds|codeSnippets|references|};)/);

  if (!titleMatch) {
    console.error(`Could not parse title from ${outlinePath}`);
    return null;
  }

  // Parse outline sections for timeline
  const timeline = [];
  if (outlineMatch) {
    const outlineContent = outlineMatch[1];
    const sectionMatches = outlineContent.matchAll(
      /timestamp:\s*["'](\d+:\d+)["'][\s\S]*?title:\s*["'](.+?)["']/g
    );

    for (const match of sectionMatches) {
      timeline.push({ time: match[1], title: match[2] });
    }
  }

  return {
    title: titleMatch[1],
    description: descMatch ? descMatch[1] : "",
    timeline,
  };
}

function formatTimeline(timeline) {
  if (!timeline || timeline.length === 0) return "";

  const lines = timeline.map((t) => `${t.time} ${t.title}`);
  return "\n\n⏱️ Timeline:\n" + lines.join("\n");
}

function generateDescription(episode, outline) {
  const epNum = parseInt(episode.replace("ep", ""), 10);

  let desc = `${outline.description}\n`;
  desc += `\n${SERIES_NAME} Episode ${epNum}: ${outline.title}`;
  desc += `\n\nDi episode ini kita belajar tentang ${outline.title.toLowerCase()}.`;
  desc += formatTimeline(outline.timeline);

  desc += `\n\n📚 Series: ${PLAYLIST_NAME}`;
  desc += `\nEpisode ini adalah bagian dari seri ${SERIES_NAME} yang mengajarkan Python, Java, dan JavaScript secara bersamaan.`;

  desc += `\n\n🔗 Links:`;
  desc += `\n- GitHub: https://github.com/artivisi`;
  desc += `\n- Website: https://artivisi.com`;

  desc += `\n\n#programming #python #javascript #java #tutorial #pemula`;

  return desc;
}

function generateMetadata(episode, outline, options = {}) {
  const epNum = parseInt(episode.replace("ep", ""), 10);
  const epNumPadded = String(epNum).padStart(2, "0");

  const tags = [
    ...COMMON_TAGS,
    ...(EPISODE_TAGS[episode] || []),
    outline.title.toLowerCase(),
  ];

  const metadata = {
    episodeId: episode,
    title: `${outline.title} | ${SERIES_NAME} #${epNum}`,
    description: generateDescription(episode, outline),
    tags: [...new Set(tags)], // Remove duplicates
    categoryId: "27", // Education
    language: "id",
    playlist: PLAYLIST_NAME,
    thumbnail: `thumbnails/ep${epNumPadded}.png`,
  };

  if (options.schedule) {
    metadata.scheduledPublishAt = options.schedule;
  }

  return metadata;
}

function calculateSchedule(startDate, episodeIndex, interval, time, timezone) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + episodeIndex * interval);

  const [hours, minutes] = time.split(":").map(Number);
  const dateStr = date.toISOString().split("T")[0];

  return `${dateStr}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00${timezone}`;
}

async function generateSingle(episode, options) {
  const outline = await loadEpisodeOutline(episode);
  if (!outline) return null;

  const metadata = generateMetadata(episode, outline, options);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const outputPath = path.join(OUTPUT_DIR, `${episode}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));

  console.log(`Generated: ${outputPath}`);
  return metadata;
}

async function generateAll(options) {
  const startDate = options.start_date || new Date().toISOString().split("T")[0];
  const interval = parseInt(options.interval || "7", 10);
  const time = options.time || "14:00";
  const timezone = options.timezone || "+07:00";

  // Find all episode files
  const files = fs.readdirSync(OUTLINES_DIR)
    .filter((f) => f.match(/^pf-\d{2}\.ts$/))
    .sort();

  console.log(`Found ${files.length} episodes`);
  console.log(`Start date: ${startDate}, Interval: ${interval} days, Time: ${time} ${timezone}`);
  console.log("");

  for (let i = 0; i < files.length; i++) {
    const epNum = files[i].match(/pf-(\d{2})/)[1];
    const episode = `ep${epNum}`;

    const schedule = calculateSchedule(startDate, i, interval, time, timezone);

    await generateSingle(episode, { schedule });
  }

  console.log("");
  console.log(`Generated ${files.length} metadata files in ${OUTPUT_DIR}`);
}

// Main
const { episode, options } = parseArgs(process.argv.slice(2));

if (!episode) {
  console.log("Usage: node scripts/generate-youtube-metadata.mjs <episode> [options]");
  console.log("");
  console.log("Single episode:");
  console.log("  node scripts/generate-youtube-metadata.mjs ep01");
  console.log("  node scripts/generate-youtube-metadata.mjs ep01 --schedule '2026-02-08T14:00:00+07:00'");
  console.log("");
  console.log("All episodes with scheduling:");
  console.log("  node scripts/generate-youtube-metadata.mjs all --start-date 2026-02-08 --interval 7");
  console.log("");
  console.log("Options:");
  console.log("  --schedule <datetime>   Set publish time for single episode");
  console.log("  --start-date <date>     Start date for batch scheduling (YYYY-MM-DD)");
  console.log("  --interval <days>       Days between episodes (default: 7)");
  console.log("  --time <HH:MM>          Publish time (default: 14:00)");
  console.log("  --timezone <tz>         Timezone offset (default: +07:00)");
  process.exit(1);
}

if (episode === "all") {
  generateAll(options).catch(console.error);
} else {
  generateSingle(episode, options).catch(console.error);
}
