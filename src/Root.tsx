import "./index.css";
import { Composition } from "remotion";
import { VlogIntro } from "./animations/vlog-intro/VlogIntro";
import { LowerThird } from "./animations/lower-third/LowerThird";
import { Transition } from "./animations/transition/Transition";
import { Outro } from "./animations/outro/Outro";
import { PFIntro, PFOutro } from "./animations/programming-fundamentals";
import {
  TypingSystemsDiagram,
  LanguageComparisonChart,
  AIDosDonts,
  HelloWorldComparison,
  CommentSyntaxComparison,
  VariableDeclarationComparison,
  NumberSystemsChart,
  OperatorPrecedenceChart,
  AIToolsShowcase,
  AILearningCycle,
  PromptExampleCard,
  UseEnglishTip,
  ProgrammingDefinition,
  ProgrammingApplications,
  HumanVsComputer,
  ProgrammingLanguageLogos,
  LearningCurve,
} from "./tutorials/programming-fundamentals/components";
import { VideoLowerThird } from "./components";
import {
  PF01Composition,
  PF01_DURATION,
  PF02Composition,
  PF02_DURATION,
  PF03Composition,
  PF03_DURATION,
} from "./tutorials/programming-fundamentals/compositions";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Common */}
      <Composition
        id="VlogIntro"
        component={VlogIntro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="LowerThird"
        component={LowerThird}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          name: "Endy Muhardin",
          title: "Software Consultant",
        }}
      />

      <Composition
        id="Transition"
        component={Transition}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Outro"
        component={Outro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Programming Fundamentals - Series */}
      <Composition
        id="PFIntro"
        component={PFIntro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="PFOutro"
        component={PFOutro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Setup GitHub & Codespaces",
        }}
      />

      {/* Full Episode Compositions */}
      <Composition
        id="PF01-Full"
        component={PF01Composition}
        durationInFrames={PF01_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="PF02-Full"
        component={PF02Composition}
        durationInFrames={PF02_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="PF03-Full"
        component={PF03Composition}
        durationInFrames={PF03_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode 1: Apa Itu Programming */}
      <Composition
        id="EP01-TypingSystemsDiagram"
        component={TypingSystemsDiagram}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showLanguages: ['Python', 'JavaScript', 'Java'],
          animateIn: true,
        }}
      />

      <Composition
        id="EP01-TypingSystemsDiagramAll"
        component={TypingSystemsDiagram}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showLanguages: ['Python', 'JavaScript', 'Java', 'TypeScript', 'PHP', 'Go', 'Rust', 'C'],
          animateIn: true,
        }}
      />

      <Composition
        id="EP01-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Apa Itu Programming?",
          subtitle: "Programming Fundamentals - Episode 1",
        }}
      />

      <Composition
        id="EP01-ProgrammingDefinition"
        component={ProgrammingDefinition}
        durationInFrames={1800}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-ProgrammingApplications"
        component={ProgrammingApplications}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-HumanVsComputer"
        component={HumanVsComputer}
        durationInFrames={1950}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-ProgrammingLanguageLogos"
        component={ProgrammingLanguageLogos}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-LearningCurve"
        component={LearningCurve}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP02-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "GitHub & Codespaces",
          subtitle: "Programming Fundamentals - Episode 2",
        }}
      />

      <Composition
        id="EP01-LanguageComparisonChart"
        component={LanguageComparisonChart}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Most Popular Programming Languages 2024",
          showTop: 10,
          highlightLanguages: ['Python', 'JavaScript', 'Java'],
        }}
      />

      {/* Episode 3: AI untuk Belajar - Overlay Compositions */}
      <Composition
        id="EP03-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "AI untuk Belajar Programming",
          subtitle: "Programming Fundamentals - Episode 3",
        }}
      />

      <Composition
        id="EP03-AIToolsShowcase"
        component={AIToolsShowcase}
        durationInFrames={1530}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP03-PromptExplain"
        component={PromptExampleCard}
        durationInFrames={1170}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ type: "explain" }}
      />

      <Composition
        id="EP03-PromptExercise"
        component={PromptExampleCard}
        durationInFrames={1470}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ type: "exercise" }}
      />

      <Composition
        id="EP03-PromptHint"
        component={PromptExampleCard}
        durationInFrames={1020}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ type: "hint" }}
      />

      <Composition
        id="EP03-PromptError"
        component={PromptExampleCard}
        durationInFrames={2130}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ type: "error" }}
      />

      <Composition
        id="EP03-UseEnglishTip"
        component={UseEnglishTip}
        durationInFrames={3150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP03-AIDosDonts"
        component={AIDosDonts}
        durationInFrames={1410}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showDos: false,
          showDonts: true,
        }}
      />

      <Composition
        id="EP03-AILearningCycle"
        component={AILearningCycle}
        durationInFrames={1200}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP03-Outro"
        component={PFOutro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Hello World",
        }}
      />

      {/* Episode 4: Hello World */}
      <Composition
        id="EP04-HelloWorldComparison"
        component={HelloWorldComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* Episode 5: Komentar & Struktur Kode */}
      <Composition
        id="EP05-CommentSyntaxComparison"
        component={CommentSyntaxComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode 6: Variables */}
      <Composition
        id="EP06-VariableDeclarationComparison"
        component={VariableDeclarationComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode 7: Data Types - uses EP01-TypingSystemsDiagram */}

      {/* Episode 8: Number Systems */}
      <Composition
        id="EP08-NumberSystemsChart"
        component={NumberSystemsChart}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ showColors: false }}
      />

      <Composition
        id="EP08-HexColors"
        component={NumberSystemsChart}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ showColors: true }}
      />

      {/* Episode 9: Type Conversion - primarily code snippets */}

      {/* Episode 10: Arithmetic & Assignment Operators */}
      <Composition
        id="EP10-OperatorPrecedenceChart"
        component={OperatorPrecedenceChart}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ showExamples: false }}
      />

      <Composition
        id="EP10-OperatorExamples"
        component={OperatorPrecedenceChart}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ showExamples: true }}
      />
    </>
  );
};
