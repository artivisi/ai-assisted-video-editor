// Auto-generated sync data
// Camera: footage/programming-fundamentals/pf-02-camera-1.json
// Screen: footage/programming-fundamentals/pf-02-screen-1.json

export const pf_02_camera_1_pf_02_screen_1_sync = {
  // Time offset in seconds
  // Positive = screen recording started BEFORE camera
  // Negative = screen recording started AFTER camera
  offset: 235.816,

  // To align screen to camera timeline:
  // screenTimeInCamera = screenTime + offset

  // Confidence metrics
  confidence: 0.868,
  matchCount: 1538,

  // Sample matches used for sync
  sampleMatches: [
  {
    "phrase": "ini kebetulan saya sudah punya",
    "camera_time": 243.72,
    "screen_time": 7.72,
    "offset": 236
  },
  {
    "phrase": "kebetulan saya sudah punya akun",
    "camera_time": 243.9,
    "screen_time": 8.12,
    "offset": 235.78
  },
  {
    "phrase": "saya sudah punya akun dan",
    "camera_time": 244.26,
    "screen_time": 8.5,
    "offset": 235.76
  }
],
};

// Helper: convert screen recording time to camera timeline
export function screenToCamera(screenTime: number): number {
  return screenTime + 235.816;
}

// Helper: convert camera time to screen recording time
export function cameraToScreen(cameraTime: number): number {
  return cameraTime - 235.816;
}
