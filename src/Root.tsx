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
} from "./tutorials/programming-fundamentals/components";

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

      {/* Episode 3: AI untuk Belajar */}
      <Composition
        id="EP03-AIDosDonts"
        component={AIDosDonts}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          showDos: true,
          showDonts: true,
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
