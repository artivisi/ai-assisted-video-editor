import "./index.css";
import { Composition } from "remotion";
import { VlogIntro } from "./animations/vlog-intro/VlogIntro";
import { LowerThird } from "./animations/lower-third/LowerThird";
import { Transition } from "./animations/transition/Transition";
import { Outro } from "./animations/outro/Outro";
import { PFIntro, PFOutro } from "./animations/programming-fundamentals";
import { CLNAIntro, CLNAOutro, CLNALowerThird } from "./animations/cloud-linux-network";
import {
  HardwareComponents,
  OSLayers,
  OSComparison,
  WhyLinuxServer,
  LinuxHistory,
  WhatIsDistro,
  PopularDistros,
  DesktopVsServer,
  VMArchitecture,
  ContainerArchitecture,
  VMvsContainer,
  VirtualizationComparison,
  VirtualBoxNetworkModes,
  WhatIsISO,
  VMSettings,
  InstallationSteps,
  PostInstallChecklist,
} from "./tutorials/cloud-linux-network/components";
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
  CompilationProcess,
  WhyThreeLanguages,
  PHPPopularity,
  OtherLanguages,
  SeriesPreview,
} from "./tutorials/programming-fundamentals/components";
import { VideoLowerThird, PipFrame } from "./components";
import {
  PF01Composition,
  PF01_DURATION,
  PF02Composition,
  PF02_DURATION,
  PF03Composition,
  PF03_DURATION,
  PF04Composition,
  PF04_DURATION,
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

      <Composition
        id="PF04-Full"
        component={PF04Composition}
        durationInFrames={PF04_DURATION}
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
        id="EP01-CompilationProcess"
        component={CompilationProcess}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-WhyThreeLanguages"
        component={WhyThreeLanguages}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-PHPPopularity"
        component={PHPPopularity}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-OtherLanguages"
        component={OtherLanguages}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP01-SeriesPreview"
        component={SeriesPreview}
        durationInFrames={750}
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
        id="EP02-Outro"
        component={PFOutro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Belajar Coding dengan AI",
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
        id="EP04-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Hello World",
          subtitle: "Programming Fundamentals - Episode 4",
        }}
      />

      <Composition
        id="EP04-HelloWorldComparison"
        component={HelloWorldComparison}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      <Composition
        id="EP04-Outro"
        component={PFOutro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Komentar & Struktur Kode",
        }}
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

      {/* PIP Frame Border - for FFmpeg overlay */}
      <Composition
        id="PipFrame"
        component={PipFrame}
        durationInFrames={1}
        fps={30}
        width={320}
        height={240}
      />

      {/* Cloud & Linux Network Administration - Series */}
      <Composition
        id="CLNAIntro"
        component={CLNAIntro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNAOutro"
        component={CLNAOutro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Linux Command Line Basics",
        }}
      />

      <Composition
        id="CLNALowerThird"
        component={CLNALowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Introduction to Linux",
          subtitle: "Cloud & Linux Network Admin - Episode 1",
          command: "cat /etc/os-release",
        }}
      />

      {/* CLNA Module 1 - Episode 1: Komputer dan Sistem Operasi */}
      <Composition
        id="CLNA-HardwareComponents"
        component={HardwareComponents}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-OSLayers"
        component={OSLayers}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-OSComparison"
        component={OSComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-WhyLinuxServer"
        component={WhyLinuxServer}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* CLNA Module 1 - Episode 2: Mengenal Linux dan Ubuntu */}
      <Composition
        id="CLNA-LinuxHistory"
        component={LinuxHistory}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-WhatIsDistro"
        component={WhatIsDistro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-PopularDistros"
        component={PopularDistros}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-DesktopVsServer"
        component={DesktopVsServer}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* CLNA Module 1 - Episode 3: Virtualisasi dan Container */}
      <Composition
        id="CLNA-VMArchitecture"
        component={VMArchitecture}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-ContainerArchitecture"
        component={ContainerArchitecture}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-VMvsContainer"
        component={VMvsContainer}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-VirtualizationComparison"
        component={VirtualizationComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* CLNA Module 1 - Episode 4: Install VirtualBox */}
      <Composition
        id="CLNA-VirtualBoxNetworkModes"
        component={VirtualBoxNetworkModes}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* CLNA Module 1 - Episode 5: Install Ubuntu Desktop */}
      <Composition
        id="CLNA-WhatIsISO"
        component={WhatIsISO}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-VMSettings"
        component={VMSettings}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-InstallationSteps"
        component={InstallationSteps}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="CLNA-PostInstallChecklist"
        component={PostInstallChecklist}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
