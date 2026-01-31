import React from "react";
import { AbsoluteFill, Sequence, Video } from "remotion";
import { PFIntro, PFOutro } from "../../../animations/programming-fundamentals";
import { Subtitles, VideoLowerThird } from "../../../components";
import { pf_01_cameraTranscript, pf_01_cameraSubtitles } from "../pf-01-transcript";
import {
  LanguageComparisonChart,
  TypingSystemsDiagram,
  ProgrammingDefinition,
  ProgrammingApplications,
  HumanVsComputer,
  ProgrammingLanguageLogos,
  LearningCurve,
  CompilationProcess,
  WhyThreeLanguages,
  PHPPopularity,
  OtherLanguages,
  SeriesPreview,
} from "../components";
import { getVideoPath } from "../video-paths";

/**
 * Episode 1: Apa Itu Programming?
 *
 * Timeline (aligned with transcript):
 * - 0:00 - 0:05: PF Series Intro (150 frames)
 * - 0:05 - 29:28: Main content with B-roll:
 *   - 0:02 (6s): Lower third - episode title
 *   - 1:47 (20s): ProgrammingDefinition - "apa itu programming?"
 *   - 2:12 (20s): ProgrammingApplications - "aplikasi bisnis, game..."
 *   - 2:48 (15s): HumanVsComputer - "komputer tidak bosan, konsisten"
 *   - 6:31 (30s): LearningCurve - "naik sepeda/motor" analogy
 *   - 8:41 (20s): ProgrammingLanguageLogos - "Golang, PHP, Python..."
 *   - 12:00 (25s): CompilationProcess - "high-level ke binary"
 *   - 15:43 (6s): LanguageComparisonChart - Stack Overflow survey
 *   - 18:30 (25s): WhyThreeLanguages - "kenapa belajar 3 bahasa"
 *   - 22:10 (25s): PHPPopularity - "PHP di Indonesia"
 *   - 23:55 (6s): TypingSystemsDiagram - typing systems (3 languages)
 *   - 24:30 (20s): TypingSystemsDiagramAll - typing systems (8 languages)
 *   - 26:00 (25s): OtherLanguages - "Go, Rust, TypeScript..."
 *   - 27:30 (25s): SeriesPreview - "31 episode, final projects"
 */

const FPS = 30;
const INTRO_DURATION = 150; // 5 seconds
const OUTRO_DURATION = 180; // 6 seconds

// Calculate main content duration from transcript
const mainContentDuration = Math.ceil(
  pf_01_cameraTranscript.segments[pf_01_cameraTranscript.segments.length - 1].end * FPS
);

// B-Roll timing (aligned with transcript content)
// ProgrammingDefinition: 1:47 - "Apa itu programming?"
const PROG_DEF_START = Math.round(107 * FPS);
const PROG_DEF_DURATION = Math.round(20 * FPS);

// ProgrammingApplications: 2:12 - "aplikasi bisnis, menjalankan perangkat"
const PROG_APPS_START = Math.round(132 * FPS);
const PROG_APPS_DURATION = Math.round(20 * FPS);

// HumanVsComputer: 2:48 - "manusia bosan, komputer tidak bosan"
const HUMAN_VS_START = Math.round(168 * FPS);
const HUMAN_VS_DURATION = Math.round(15 * FPS);

// LearningCurve: 6:31 - "naik sepeda, berenang, naik motor"
const LEARN_CURVE_START = Math.round(391 * FPS);
const LEARN_CURVE_DURATION = Math.round(30 * FPS);

// ProgrammingLanguageLogos: 8:41 - "Golang, PHP, Rust, Python, Ruby"
const LANG_LOGOS_START = Math.round(521 * FPS);
const LANG_LOGOS_DURATION = Math.round(20 * FPS);

// LanguageComparisonChart: 15:43 - Stack Overflow survey
const LANGUAGE_CHART_START = Math.round(943 * FPS);
const LANGUAGE_CHART_DURATION = 180;

// TypingSystemsDiagram: 23:55 - "strong typing, dynamic typing"
const TYPING_DIAGRAM_START = Math.round(1435 * FPS);
const TYPING_DIAGRAM_DURATION = 180;

// TypingSystemsDiagramAll: 24:30 - expanded view with more languages
const TYPING_DIAGRAM_ALL_START = Math.round(1470 * FPS);
const TYPING_DIAGRAM_ALL_DURATION = Math.round(20 * FPS);

// NEW B-ROLL for latter half gaps:

// CompilationProcess: ~12:00 - "bahasa high-level, diterjemahkan ke binary"
const COMPILATION_START = Math.round(720 * FPS);
const COMPILATION_DURATION = Math.round(25 * FPS);

// WhyThreeLanguages: ~18:30 - "kenapa pilih 3 bahasa"
const WHY_THREE_START = Math.round(1110 * FPS);
const WHY_THREE_DURATION = Math.round(25 * FPS);

// PHPPopularity: ~22:10 - "PHP sangat populer di Indonesia"
const PHP_START = Math.round(1330 * FPS);
const PHP_DURATION = Math.round(25 * FPS);

// OtherLanguages: ~26:00 - "bahasa lain yang perlu diketahui"
const OTHER_LANGS_START = Math.round(1560 * FPS);
const OTHER_LANGS_DURATION = Math.round(25 * FPS);

// SeriesPreview: ~27:30 - "31 episode, final projects"
const SERIES_PREVIEW_START = Math.round(1650 * FPS);
const SERIES_PREVIEW_DURATION = Math.round(25 * FPS);

export const PF01Composition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Series Intro */}
      <Sequence durationInFrames={INTRO_DURATION}>
        <PFIntro />
      </Sequence>

      {/* Main Content - Webcam */}
      <Sequence from={INTRO_DURATION} durationInFrames={mainContentDuration}>
        <AbsoluteFill>
          {/* Webcam video */}
          <Video
            src={getVideoPath("pf-01-camera")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Episode title lower third */}
          <Sequence from={60} durationInFrames={180}>
            <VideoLowerThird
              title="Apa Itu Programming?"
              subtitle="Programming Fundamentals - Episode 1"
            />
          </Sequence>

          {/* Subtitles */}
          <Subtitles cues={pf_01_cameraSubtitles} />

          {/* B-Roll 1: Programming Definition - 1:47 */}
          <Sequence from={PROG_DEF_START} durationInFrames={PROG_DEF_DURATION}>
            <ProgrammingDefinition />
          </Sequence>

          {/* B-Roll 2: Programming Applications - 2:12 */}
          <Sequence from={PROG_APPS_START} durationInFrames={PROG_APPS_DURATION}>
            <ProgrammingApplications />
          </Sequence>

          {/* B-Roll 3: Human vs Computer - 2:48 */}
          <Sequence from={HUMAN_VS_START} durationInFrames={HUMAN_VS_DURATION}>
            <HumanVsComputer />
          </Sequence>

          {/* B-Roll 4: Learning Curve - 6:31 */}
          <Sequence from={LEARN_CURVE_START} durationInFrames={LEARN_CURVE_DURATION}>
            <LearningCurve />
          </Sequence>

          {/* B-Roll 5: Programming Language Logos - 8:41 */}
          <Sequence from={LANG_LOGOS_START} durationInFrames={LANG_LOGOS_DURATION}>
            <ProgrammingLanguageLogos />
          </Sequence>

          {/* Language Comparison Chart - 15:43 (Stack Overflow survey) */}
          <Sequence from={LANGUAGE_CHART_START} durationInFrames={LANGUAGE_CHART_DURATION}>
            <LanguageComparisonChart
              title="Most Popular Programming Languages 2024"
              showTop={10}
              highlightLanguages={["Python", "JavaScript", "Java"]}
            />
          </Sequence>

          {/* Typing Systems Diagram - 23:55 */}
          <Sequence from={TYPING_DIAGRAM_START} durationInFrames={TYPING_DIAGRAM_DURATION}>
            <TypingSystemsDiagram
              showLanguages={["Python", "JavaScript", "Java"]}
              animateIn={true}
            />
          </Sequence>

          {/* Typing Systems Diagram All - 24:30 (expanded with more languages) */}
          <Sequence from={TYPING_DIAGRAM_ALL_START} durationInFrames={TYPING_DIAGRAM_ALL_DURATION}>
            <TypingSystemsDiagram
              showLanguages={["Python", "JavaScript", "Java", "TypeScript", "PHP", "Go", "Rust", "C"]}
              animateIn={true}
            />
          </Sequence>

          {/* NEW B-ROLL: Compilation Process - 12:00 */}
          <Sequence from={COMPILATION_START} durationInFrames={COMPILATION_DURATION}>
            <CompilationProcess />
          </Sequence>

          {/* NEW B-ROLL: Why Three Languages - 18:30 */}
          <Sequence from={WHY_THREE_START} durationInFrames={WHY_THREE_DURATION}>
            <WhyThreeLanguages />
          </Sequence>

          {/* NEW B-ROLL: PHP Popularity - 22:10 */}
          <Sequence from={PHP_START} durationInFrames={PHP_DURATION}>
            <PHPPopularity />
          </Sequence>

          {/* NEW B-ROLL: Other Languages - 26:00 */}
          <Sequence from={OTHER_LANGS_START} durationInFrames={OTHER_LANGS_DURATION}>
            <OtherLanguages />
          </Sequence>

          {/* NEW B-ROLL: Series Preview - 27:30 */}
          <Sequence from={SERIES_PREVIEW_START} durationInFrames={SERIES_PREVIEW_DURATION}>
            <SeriesPreview />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* Series Outro */}
      <Sequence from={INTRO_DURATION + mainContentDuration} durationInFrames={OUTRO_DURATION}>
        <PFOutro nextEpisodeTitle="GitHub & Codespaces" />
      </Sequence>
    </AbsoluteFill>
  );
};

// Export duration for Root.tsx
export const PF01_DURATION = INTRO_DURATION + mainContentDuration + OUTRO_DURATION;
