// Auto-generated sync data
// Camera: footage/programming-fundamentals/pf-04-camera.json
// Screen: footage/programming-fundamentals/pf-04-screen.json

export const pf_04_camera_pf_04_screen_sync = {
  // Time offset in seconds
  // Positive = screen recording started BEFORE camera
  // Negative = screen recording started AFTER camera
  offset: 18.445,

  // To align screen to camera timeline:
  // screenTimeInCamera = screenTime + offset

  // Confidence metrics
  confidence: 0.886,
  matchCount: 1501,

  // Sample matches used for sync
  sampleMatches: [
  {
    "phrase": "di sini kita kemarin sudah",
    "camera_time": 22.58,
    "screen_time": 4.12,
    "offset": 18.459999999999997
  },
  {
    "phrase": "sini kita kemarin sudah punya",
    "camera_time": 22.82,
    "screen_time": 4.38,
    "offset": 18.44
  },
  {
    "phrase": "kita kemarin sudah punya github",
    "camera_time": 23.02,
    "screen_time": 4.58,
    "offset": 18.439999999999998
  }
],
};

// Helper: convert screen recording time to camera timeline
export function screenToCamera(screenTime: number): number {
  return screenTime + 18.445;
}

// Helper: convert camera time to screen recording time
export function cameraToScreen(cameraTime: number): number {
  return cameraTime - 18.445;
}
