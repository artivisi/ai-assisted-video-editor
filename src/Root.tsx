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
  HelloWorldComparison,
  CommentSyntaxComparison,
  VariableDeclarationComparison,
  InputProcessOutput,
  InputTypesOverview,
  VariableStorageModel,
  NumberSystemsChart,
  OperatorPrecedenceChart,
} from "./tutorials/programming-fundamentals/components";
import { VideoLowerThird, PipFrame } from "./components";
import {
  TechStackOverview,
  BackendStack,
  DevToolsStack,
  ArchitectureDiagram,
} from "./tutorials/vlog/components";
import {
  PF04Composition,
  PF04_DURATION,
  PF05Composition,
  PF05_DURATION,
  PF06Composition,
  PF06_DURATION,
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

      {/* Vlog: ArtiVisi Tech Stack 2026 */}
      <Composition
        id="Vlog-TechStackOverview"
        component={TechStackOverview}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Vlog-BackendStack"
        component={BackendStack}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Vlog-DevToolsStack"
        component={DevToolsStack}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Vlog-ArchitectureDiagram"
        component={ArchitectureDiagram}
        durationInFrames={600}
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
        id="PF04-Full"
        component={PF04Composition}
        durationInFrames={PF04_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="PF05-Full"
        component={PF05Composition}
        durationInFrames={PF05_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="PF06-Full"
        component={PF06Composition}
        durationInFrames={PF06_DURATION}
        fps={30}
        width={1920}
        height={1080}
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
        id="EP05-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Statement & Komentar",
          subtitle: "Programming Fundamentals - Episode 5",
        }}
      />

      <Composition
        id="EP05-CommentSyntaxComparison"
        component={CommentSyntaxComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP05-Outro"
        component={PFOutro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Variable & Tipe Data",
        }}
      />

      {/* Episode 6: Variables */}
      <Composition
        id="EP06-InputProcessOutput"
        component={InputProcessOutput}
        durationInFrames={1650}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP06-InputTypesOverview"
        component={InputTypesOverview}
        durationInFrames={2550}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP06-VariableStorageModel"
        component={VariableStorageModel}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP06-LowerThird"
        component={VideoLowerThird}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Variables - Menyimpan Data",
          subtitle: "Programming Fundamentals - Episode 6",
        }}
      />

      <Composition
        id="EP06-VariableDeclarationComparison"
        component={VariableDeclarationComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="EP06-Outro"
        component={PFOutro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          nextEpisodeTitle: "Tipe Data",
        }}
      />

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
