// Auto-generated sync data
// Camera: footage/programming-fundamentals/pf-02-camera-1.json
// Screen: footage/programming-fundamentals/pf-02-screen-2.json

export const pf_02_camera_1_pf_02_screen_2_sync = {
  // Time offset in seconds
  // Positive = screen recording started BEFORE camera
  // Negative = screen recording started AFTER camera
  offset: 1721.010,

  // To align screen to camera timeline:
  // screenTimeInCamera = screenTime + offset

  // Confidence metrics
  confidence: 0.839,
  matchCount: 94,

  // Sample matches used for sync
  sampleMatches: [
  {
    "phrase": "setelah ini sudah jadi ya",
    "camera_time": 1725.2,
    "screen_time": 4.28,
    "offset": 1720.92
  },
  {
    "phrase": "ya nah ini kita bisa",
    "camera_time": 1729.7,
    "screen_time": 8.74,
    "offset": 1720.96
  },
  {
    "phrase": "nah ini kita bisa tutup",
    "camera_time": 1730.44,
    "screen_time": 9.42,
    "offset": 1721.02
  }
],
};

// Helper: convert screen recording time to camera timeline
export function screenToCamera(screenTime: number): number {
  return screenTime + 1721.010;
}

// Helper: convert camera time to screen recording time
export function cameraToScreen(cameraTime: number): number {
  return cameraTime - 1721.010;
}
