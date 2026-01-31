import { VideoOutline } from "../types";

// Template for Programming Fundamentals series
// Copy this file and rename to episode-XX.ts

export const episodeTemplate: VideoOutline = {
  episodeId: "pf-00",
  seriesId: "programming-fundamentals",
  title: "Episode Title Here",
  description: "Brief description of what this episode covers",
  duration: 1800, // 30 minutes in seconds
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Greet viewers",
        "Brief overview of today's topic",
        "What viewers will learn",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "01:00",
      title: "Concept Explanation",
      talkingPoints: [
        "Explain the main concept",
        "Why it matters",
        "Real-world analogy",
      ],
      notes: "Use simple language, avoid jargon",
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Code Demo",
      talkingPoints: [
        "Show basic example",
        "Walk through each line",
        "Explain output",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "15:00",
      title: "Hands-on Practice",
      talkingPoints: [
        "Build something together",
        "Common mistakes to avoid",
        "Best practices",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "25:00",
      title: "Summary & Next Steps",
      talkingPoints: [
        "Recap key points",
        "Homework/practice suggestions",
        "Preview next episode",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "28:00",
      title: "Outro",
      talkingPoints: [
        "Thank viewers",
        "Call to action (like, subscribe)",
        "Links in description",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Episode Title",
      subtitle: "Programming Fundamentals Series",
      showAtFrame: 90, // 3 seconds at 30fps
      hideAtFrame: 270,
    },
  ],

  references: [
    {
      label: "Source Code",
      url: "github.com/artivisi/...",
    },
    {
      label: "Documentation",
      url: "docs.example.com/...",
    },
  ],

  codeSnippets: [
    {
      code: `// Example code snippet
function example() {
  console.log("Hello, World!");
}`,
      title: "example.js",
      highlightLines: [3],
      showAtFrame: 9000, // 5 minutes at 30fps
      hideAtFrame: 10800,
    },
  ],
};
