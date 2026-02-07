import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { Video } from "@remotion/media";
import {
  TransitionSeries,
  linearTiming,
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { PFIntro, PFOutro } from "../../../animations/programming-fundamentals";
import { Subtitles, VideoLowerThird, PipFrame } from "../../../components";
import { pf_06_camera_1Subtitles } from "../pf-06-camera-1-transcript";
import { pf_06_camera_2Subtitles } from "../pf-06-camera-2-transcript";
import { pf_06_camera_3Subtitles } from "../pf-06-camera-3-transcript";
import { getVideoPath } from "../video-paths";
import { VariableDeclarationComparison, InputProcessOutput, InputTypesOverview, VariableStorageModel } from "../components";
import transitionSfx from "../../../assets/audio/transition-sfx.wav";
import transitionSfxLow from "../../../assets/audio/transition-sfx-low.wav";
import transitionSfxReverse from "../../../assets/audio/transition-sfx-reverse.wav";

/**
 * Episode 6: Variables - Menyimpan Data
 *
 * Footage:
 * - pf-06-camera-1: Welcome/intro (~26s)
 * - pf-06-camera-2: Main content (~19:53, FAT32 split)
 * - pf-06-camera-3: Continuation + outro (~5:17)
 * - pf-06-screen-1: Screen recording part 1 (~19:54)
 * - pf-06-screen-2: Screen recording part 2 (~4:07)
 *
 * Sync offsets:
 * - Camera-2 ↔ Screen-1: 2.681s (screenTime = cameraTime - 2.681)
 * - Camera-3 ↔ Screen-2: 16.466s (screen2Time = camera3Time - 16.466)
 *
 * Timeline (7 sections, 3 transitions):
 * - Welcome (camera-1, 26s)
 * - PF Series Intro (150 frames)
 * - Camera-only + lower third (5s of camera-2)
 * --wipe--> Screen with PIP part 1 (camera-2 5s-1192.56s synced with screen-1)
 * --fade--> Screen with PIP part 2 (camera-3 17s-263s synced with screen-2)
 * --slide-> Outro talking head (camera-3 264s-315s)
 * - PF Outro bumper (6s)
 */

const FPS = 30;
const INTRO_DURATION = 150; // 5 seconds
const OUTRO_DURATION = 180; // 6 seconds
const TRANSITION_DURATION = 20; // ~0.67s transition overlap
const NUM_TRANSITIONS = 3;

// Welcome section - from camera-1
const WELCOME_END_TIME = 26; // seconds
const WELCOME_DURATION_FRAMES = Math.round(WELCOME_END_TIME * FPS);

// Camera-2 sections
const CAMERA_ONLY_DURATION = 5; // First 5s of camera-2 is camera-only
const CAMERA_ONLY_DURATION_FRAMES = Math.round(CAMERA_ONLY_DURATION * FPS);

// Sync offset for screen-1
// screenTime = cameraTime - 2.681
const SYNC_OFFSET_1 = 2.681;

// Screen-1 starts at camera-2 time 5s
const SCREEN1_START_CAMERA_TIME = 5;
const SCREEN1_START_TIME = SCREEN1_START_CAMERA_TIME - SYNC_OFFSET_1; // 2.319s
const SCREEN1_START_FRAME = Math.round(SCREEN1_START_TIME * FPS);

// Part 1: camera-2 from 5s to end (1192.56s)
const CAMERA2_END_TIME = 1192.56;
const PART1_CAMERA_DURATION = CAMERA2_END_TIME - CAMERA_ONLY_DURATION; // 1187.56s
const PART1_DURATION_FRAMES = Math.round(PART1_CAMERA_DURATION * FPS);
const PART1_CAMERA_START_FRAME = CAMERA_ONLY_DURATION_FRAMES;

// Sync offset for screen-2
// screen2Time = camera3Time - 16.466
const SYNC_OFFSET_2 = 16.466;

// Part 2: camera-3 from 17s synced with screen-2 (skip silent gap 0-17s)
const CAMERA3_SCREEN_START = 17; // camera-3 time when screen-2 becomes relevant
const SCREEN2_START_TIME = CAMERA3_SCREEN_START - SYNC_OFFSET_2; // 0.534s
const SCREEN2_START_FRAME = Math.round(SCREEN2_START_TIME * FPS);
const SCREEN2_DURATION = 246; // screen-2 is 246.75s
const PART2_DURATION_FRAMES = Math.round(SCREEN2_DURATION * FPS);
const PART2_CAMERA3_START_FRAME = Math.round(CAMERA3_SCREEN_START * FPS);

// B-Roll timings (relative to Part 1 start, camera-2 offset by 5s)
// InputProcessOutput: camera-2 5-60s → 0s into Part 1, 55s duration
const INPUT_PROCESS_OUTPUT_START = 0;
const INPUT_PROCESS_OUTPUT_DURATION = Math.round(55 * FPS);
// InputTypesOverview: camera-2 67-152s → 62s into Part 1, 85s duration
const INPUT_TYPES_START = Math.round(62 * FPS);
const INPUT_TYPES_DURATION = Math.round(85 * FPS);
// VariableStorageModel: camera-2 261-298s → 256s into Part 1, 37s duration
const VAR_STORAGE_START = Math.round(256 * FPS);
const VAR_STORAGE_DURATION = Math.round(37 * FPS);

// VariableDeclarationComparison
// 1) Camera-2 ~817s: "mendeklarasikan, menginisialisasikan" summary → 812s into Part 1
const VAR_COMPARISON_PART1_START = Math.round(812 * FPS);
const VAR_COMPARISON_DURATION = Math.round(30 * FPS);
// 2) Camera-3 ~115s: naming conventions (camelCase/snake_case) → 98s into Part 2
const VAR_COMPARISON_PART2_START = Math.round(98 * FPS);

// Outro talking head (camera-3 from 264s to 315s)
const OUTRO_CAMERA_START = 264;
const OUTRO_CAMERA_END = 315;
const OUTRO_CAMERA_DURATION = OUTRO_CAMERA_END - OUTRO_CAMERA_START;
const OUTRO_CAMERA_DURATION_FRAMES = Math.round(OUTRO_CAMERA_DURATION * FPS);
const OUTRO_CAMERA_START_FRAME = Math.round(OUTRO_CAMERA_START * FPS);

/**
 * Wrap a transition presentation with an audio SFX.
 * Sound plays only on the entering side to avoid double-play.
 */
function addSound<T extends Record<string, unknown>>(
  transition: TransitionPresentation<T>,
  src: string,
  volume = 0.3,
): TransitionPresentation<T> {
  const { component: Component, ...other } = transition;
  const C = Component as React.FC<TransitionPresentationComponentProps<T>>;
  const WithSound: React.FC<TransitionPresentationComponentProps<T>> = (p) => (
    <>
      {p.presentationDirection === "entering" ? <Audio src={src} volume={volume} /> : null}
      <C {...p} />
    </>
  );
  return { component: WithSound, ...other };
}

export const PF06Composition: React.FC = () => {
  return (
    <TransitionSeries>
      {/* Welcome Section - from camera-1 */}
      <TransitionSeries.Sequence durationInFrames={WELCOME_DURATION_FRAMES}>
        <AbsoluteFill style={{ backgroundColor: "#000" }}>
          <Video
            src={getVideoPath("pf-06-camera-1")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Subtitles cues={pf_06_camera_1Subtitles} />
        </AbsoluteFill>
      </TransitionSeries.Sequence>

      {/* Series Intro (hard cut - PFIntro has its own enter/exit animation) */}
      <TransitionSeries.Sequence durationInFrames={INTRO_DURATION}>
        <PFIntro />
      </TransitionSeries.Sequence>

      {/* Camera-only section (first 5s of camera-2 with lower third) */}
      <TransitionSeries.Sequence durationInFrames={CAMERA_ONLY_DURATION_FRAMES}>
        <AbsoluteFill style={{ backgroundColor: "#000" }}>
          <Video
            src={getVideoPath("pf-06-camera-2")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Sequence from={60} durationInFrames={180}>
            <VideoLowerThird
              title="Variables - Menyimpan Data"
              subtitle="Programming Fundamentals - Episode 6"
            />
          </Sequence>
          <Subtitles cues={pf_06_camera_2Subtitles} />
        </AbsoluteFill>
      </TransitionSeries.Sequence>

      {/* Wipe transition: camera-only → screen+PIP */}
      <TransitionSeries.Transition
        presentation={addSound(wipe({ direction: "from-left" }), transitionSfxLow)}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />

      {/* Part 1: Screen-1 with Camera-2 PIP (5s to end of camera-2) */}
      <TransitionSeries.Sequence durationInFrames={PART1_DURATION_FRAMES}>
        <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
          <Video
            src={getVideoPath("pf-06-screen-1")}
            trimBefore={SCREEN1_START_FRAME}
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#1a1a2e",
            }}
          />

          {/* Camera PIP */}
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
              src={getVideoPath("pf-06-camera-2")}
              trimBefore={CAMERA_ONLY_DURATION_FRAMES}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <PipFrame />
          </div>

          <Subtitles cues={pf_06_camera_2Subtitles} frameOffset={PART1_CAMERA_START_FRAME} />

          {/* B-Roll: Input → Processing → Output diagram */}
          <Sequence from={INPUT_PROCESS_OUTPUT_START} durationInFrames={INPUT_PROCESS_OUTPUT_DURATION}>
            <InputProcessOutput />
          </Sequence>

          {/* B-Roll: Input & Output types overview */}
          <Sequence from={INPUT_TYPES_START} durationInFrames={INPUT_TYPES_DURATION}>
            <InputTypesOverview />
          </Sequence>

          {/* B-Roll: Variable as memory storage model */}
          <Sequence from={VAR_STORAGE_START} durationInFrames={VAR_STORAGE_DURATION}>
            <VariableStorageModel />
          </Sequence>

          {/* B-Roll: Variable Declaration Comparison at declaration summary */}
          <Sequence from={VAR_COMPARISON_PART1_START} durationInFrames={VAR_COMPARISON_DURATION}>
            <VariableDeclarationComparison />
          </Sequence>
        </AbsoluteFill>
      </TransitionSeries.Sequence>

      {/* Fade transition: part 1 → part 2 */}
      <TransitionSeries.Transition
        presentation={addSound(fade(), transitionSfx)}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />

      {/* Part 2: Screen-2 with Camera-3 PIP (skip silent gap, start at camera-3 17s) */}
      <TransitionSeries.Sequence durationInFrames={PART2_DURATION_FRAMES}>
        <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
          <Video
            src={getVideoPath("pf-06-screen-2")}
            trimBefore={SCREEN2_START_FRAME}
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#1a1a2e",
            }}
          />

          {/* Camera PIP */}
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
              src={getVideoPath("pf-06-camera-3")}
              trimBefore={PART2_CAMERA3_START_FRAME}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <PipFrame />
          </div>

          <Subtitles
            cues={pf_06_camera_3Subtitles}
            frameOffset={PART2_CAMERA3_START_FRAME}
          />

          {/* B-Roll: Variable Declaration Comparison at naming conventions section */}
          <Sequence from={VAR_COMPARISON_PART2_START} durationInFrames={VAR_COMPARISON_DURATION}>
            <VariableDeclarationComparison />
          </Sequence>
        </AbsoluteFill>
      </TransitionSeries.Sequence>

      {/* Slide transition: screen+PIP → outro talking head */}
      <TransitionSeries.Transition
        presentation={addSound(slide({ direction: "from-right" }), transitionSfxReverse)}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />

      {/* Outro talking head (camera-3, closing words) */}
      <TransitionSeries.Sequence durationInFrames={OUTRO_CAMERA_DURATION_FRAMES}>
        <AbsoluteFill style={{ backgroundColor: "#000" }}>
          <Video
            src={getVideoPath("pf-06-camera-3")}
            trimBefore={OUTRO_CAMERA_START_FRAME}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Subtitles
            cues={pf_06_camera_3Subtitles}
            frameOffset={OUTRO_CAMERA_START_FRAME}
          />
        </AbsoluteFill>
      </TransitionSeries.Sequence>

      {/* Series Outro (hard cut - PFOutro has its own enter animation) */}
      <TransitionSeries.Sequence durationInFrames={OUTRO_DURATION}>
        <PFOutro nextEpisodeTitle="Tipe Data" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

// Export duration for Root.tsx
// TransitionSeries overlaps adjacent sequences during transitions,
// so total = sum of sequences - sum of transition overlaps
export const PF06_DURATION =
  WELCOME_DURATION_FRAMES +
  INTRO_DURATION +
  CAMERA_ONLY_DURATION_FRAMES +
  PART1_DURATION_FRAMES +
  PART2_DURATION_FRAMES +
  OUTRO_CAMERA_DURATION_FRAMES +
  OUTRO_DURATION -
  NUM_TRANSITIONS * TRANSITION_DURATION;
