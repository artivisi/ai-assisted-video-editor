/**
 * Video file paths for Programming Fundamentals series.
 *
 * Footage is stored in public/footage/ within the project.
 * For preview: uses staticFile() to serve from public/
 * For render: uses HTTP URLs from local server to avoid copying large files
 *
 * Set REMOTION_FOOTAGE_URL environment variable to use HTTP server:
 *   REMOTION_FOOTAGE_URL=http://localhost:3333
 */

import { staticFile } from "remotion";

// Check if we should use HTTP URLs for footage
// This is set by the render script to avoid copying large files
const FOOTAGE_BASE_URL = typeof process !== 'undefined'
  ? process.env.REMOTION_FOOTAGE_URL
  : undefined;

// Relative paths within footage folder
const FOOTAGE_PATHS = {
  // Episode 4
  "pf-04-camera": "ep-04/camera/DSC_8017.MOV",
  "pf-04-screen": "ep-04/screen/Screen Recording 2026-02-04 at 08.52.25.mov",

  // Episode 5
  "pf-05-camera-1": "ep-05/camera/DSC_8022.MOV",
  "pf-05-camera-2": "ep-05/camera/camera-2-fixed.mp4",
  "pf-05-screen": "ep-05/screen/screen-fixed.mp4",

  // Episode 6
  "pf-06-camera-1": "ep-06/camera/camera-1-fixed.mp4",
  "pf-06-camera-2": "ep-06/camera/camera-2-fixed.mp4",
  "pf-06-camera-3": "ep-06/camera/camera-3-fixed.mp4",
  "pf-06-screen-1": "ep-06/screen/screen-1-fixed.mp4",
  "pf-06-screen-2": "ep-06/screen/screen-2-fixed.mp4",
} as const;

export type VideoKey = keyof typeof FOOTAGE_PATHS;

export function getVideoPath(key: VideoKey): string {
  const relativePath = FOOTAGE_PATHS[key];

  // If HTTP base URL is set (render mode), use HTTP URL
  if (FOOTAGE_BASE_URL) {
    // URL encode the path for special characters and spaces
    const encodedPath = relativePath.split('/').map(encodeURIComponent).join('/');
    return `${FOOTAGE_BASE_URL}/${encodedPath}`;
  }

  // Otherwise use staticFile for preview
  return staticFile(`footage/${relativePath}`);
}

// Legacy export for backward compatibility
export const VIDEO_PATHS = Object.fromEntries(
  Object.keys(FOOTAGE_PATHS).map(key => [key, getVideoPath(key as VideoKey)])
) as Record<VideoKey, string>;
