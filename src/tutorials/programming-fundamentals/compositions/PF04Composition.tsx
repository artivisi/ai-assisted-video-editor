import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { Video } from "@remotion/media";
import { PFIntro, PFOutro } from "../../../animations/programming-fundamentals";
import { Subtitles, VideoLowerThird, PipFrame } from "../../../components";
import { pf_04_cameraTranscript, pf_04_cameraSubtitles } from "../pf-04-transcript";
import { pf_04_camera_pf_04_screen_sync, cameraToScreen } from "../pf-04-sync-screen";
import { HelloWorldComparison } from "../components";
import { getVideoPath } from "../video-paths";

/**
 * Episode 4: Hello World
 *
 * This episode demonstrates Hello World in Python, JavaScript, and Java.
 * It has webcam + screen recording (codespace coding demonstration).
 *
 * Footage:
 * - pf-04-camera.mov: Main camera (~24 min)
 * - pf-04-screen.mov: Screen recording (codespace)
 *
 * Sync offset: 18.445s (screen started BEFORE camera)
 * - At camera time X, screen time = X - 18.445
 *
 * Timeline:
 * - 0:00 - 0:13.5: Welcome statement (camera)
 * - 0:13.5 - 0:18.5: PF Series Intro (150 frames)
 * - 0:18.5 onwards: Main content (camera from 13.5s + screen overlay)
 */

const FPS = 30;
const INTRO_DURATION = 150; // 5 seconds
const OUTRO_DURATION = 180; // 6 seconds

// Welcome section - greeting and topic announcement
const WELCOME_END_TIME = 13.5; // seconds - after "Hello World" announcement
const WELCOME_DURATION_FRAMES = Math.round(WELCOME_END_TIME * FPS); // ~405 frames

// Calculate total camera footage duration from transcript
const cameraEndTime = pf_04_cameraTranscript.segments[pf_04_cameraTranscript.segments.length - 1].end;
const mainContentCameraTime = cameraEndTime - WELCOME_END_TIME; // Remaining camera time after welcome
const mainContentDuration = Math.ceil(mainContentCameraTime * FPS);

// Sync offset from transcript matching
const SYNC_OFFSET = pf_04_camera_pf_04_screen_sync.offset; // 18.445s

// Screen recording starts showing at camera time ~22s (after initial greeting)
// But since we cut at 13.5s, screen starts at (22 - 13.5) = 8.5s into main content
const SCREEN_START_CAMERA_TIME = 22; // original camera time
const SCREEN_START_IN_MAIN = SCREEN_START_CAMERA_TIME - WELCOME_END_TIME; // 8.5s into main content
const SCREEN_START_FRAME = Math.round(SCREEN_START_IN_MAIN * FPS);

// Calculate screen trim (how much to skip at start of screen recording)
const SCREEN_TRIM_TIME = cameraToScreen(SCREEN_START_CAMERA_TIME); // ~3.55s
const SCREEN_TRIM_FRAMES = Math.round(SCREEN_TRIM_TIME * FPS);

// Screen continues until end of main content
const SCREEN_DURATION_FRAMES = mainContentDuration - SCREEN_START_FRAME;

// B-Roll timing (adjusted for the cut)
// HelloWorldComparison: ~18:55 in original, now at (1135 - 13.5) = 1121.5s into main content
const HELLO_WORLD_COMPARISON_START = Math.round((1135 - WELCOME_END_TIME) * FPS);
const HELLO_WORLD_COMPARISON_DURATION = Math.round(45 * FPS); // 45 seconds

export const PF04Composition: React.FC = () => {
  const frame = useCurrentFrame();

  // Calculate which section we're in
  const isInWelcome = frame < WELCOME_DURATION_FRAMES;
  const isInIntro = frame >= WELCOME_DURATION_FRAMES && frame < WELCOME_DURATION_FRAMES + INTRO_DURATION;
  const mainContentFrame = frame - WELCOME_DURATION_FRAMES - INTRO_DURATION;

  // Determine if screen should be visible (in main content portion)
  const isScreenActive = !isInWelcome && !isInIntro &&
    mainContentFrame >= SCREEN_START_FRAME &&
    mainContentFrame < SCREEN_START_FRAME + SCREEN_DURATION_FRAMES;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Welcome Section - greeting and topic announcement */}
      <Sequence durationInFrames={WELCOME_DURATION_FRAMES}>
        <AbsoluteFill>
          <Video
            src={getVideoPath("pf-04-camera")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Subtitles cues={pf_04_cameraSubtitles} />
        </AbsoluteFill>
      </Sequence>

      {/* Series Intro - after welcome */}
      <Sequence from={WELCOME_DURATION_FRAMES} durationInFrames={INTRO_DURATION}>
        <PFIntro />
      </Sequence>

      {/* Main Content - continues from where welcome ended */}
      <Sequence from={WELCOME_DURATION_FRAMES + INTRO_DURATION} durationInFrames={mainContentDuration}>
        <AbsoluteFill>
          {/* Webcam (fullscreen when no screen recording) */}
          <Video
            src={getVideoPath("pf-04-camera")}
            trimBefore={WELCOME_DURATION_FRAMES} // Skip the welcome part
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isScreenActive ? 0 : 1,
            }}
          />

          {/* Screen Recording - Codespace coding (muted - audio from camera) */}
          <Sequence from={SCREEN_START_FRAME} durationInFrames={SCREEN_DURATION_FRAMES}>
            <AbsoluteFill>
              <Video
                src={getVideoPath("pf-04-screen")}
                trimBefore={SCREEN_TRIM_FRAMES}
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#1a1a2e",
                }}
              />
            </AbsoluteFill>
          </Sequence>

          {/* Webcam PIP (when screen is active) */}
          {isScreenActive && (
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 40,
                width: 320,
                height: 240,
                overflow: "hidden",
                borderRadius: 16,
              }}
            >
              <Video
                src={getVideoPath("pf-04-camera")}
                trimBefore={WELCOME_DURATION_FRAMES}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                volume={0}
              />
              <PipFrame />
            </div>
          )}

          {/* Episode title lower third - early in main content */}
          <Sequence from={60} durationInFrames={180}>
            <VideoLowerThird
              title="Hello World"
              subtitle="Programming Fundamentals - Episode 4"
            />
          </Sequence>

          {/* Subtitles - offset to match trimmed video */}
          <Subtitles cues={pf_04_cameraSubtitles} frameOffset={WELCOME_DURATION_FRAMES} />

          {/* B-Roll: Hello World Comparison - summary of all three languages */}
          <Sequence from={HELLO_WORLD_COMPARISON_START} durationInFrames={HELLO_WORLD_COMPARISON_DURATION}>
            <HelloWorldComparison />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* Series Outro */}
      <Sequence from={WELCOME_DURATION_FRAMES + INTRO_DURATION + mainContentDuration} durationInFrames={OUTRO_DURATION}>
        <PFOutro nextEpisodeTitle="Komentar & Struktur Kode" />
      </Sequence>
    </AbsoluteFill>
  );
};

// Export duration for Root.tsx
export const PF04_DURATION = WELCOME_DURATION_FRAMES + INTRO_DURATION + mainContentDuration + OUTRO_DURATION;
