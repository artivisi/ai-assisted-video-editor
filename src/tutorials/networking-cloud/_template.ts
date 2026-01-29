import { VideoOutline } from "../types";

// Template for Networking and Cloud series
// Copy this file and rename to episode-XX.ts

export const episodeTemplate: VideoOutline = {
  episodeId: "nc-00",
  seriesId: "networking-cloud",
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
        "Today's networking/cloud topic",
        "Prerequisites",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "01:00",
      title: "Concept Overview",
      talkingPoints: [
        "Explain the concept",
        "Architecture diagram",
        "Use cases",
      ],
      notes: "Use diagrams/slides for visual explanation",
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Environment Setup",
      talkingPoints: [
        "Cloud console walkthrough",
        "CLI setup",
        "Required permissions",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "10:00",
      title: "Hands-on Implementation",
      talkingPoints: [
        "Step by step deployment",
        "Configuration options",
        "Verification steps",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "20:00",
      title: "Troubleshooting",
      talkingPoints: [
        "Common issues",
        "Debugging techniques",
        "Monitoring & logs",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "25:00",
      title: "Best Practices",
      talkingPoints: [
        "Security considerations",
        "Cost optimization",
        "Scaling strategies",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Outro",
      talkingPoints: [
        "Recap",
        "Clean up resources",
        "Next episode preview",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Episode Title",
      subtitle: "Networking & Cloud Series",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  references: [
    {
      label: "Documentation",
      url: "cloud.google.com/...",
    },
    {
      label: "GitHub Repo",
      url: "github.com/artivisi/...",
    },
  ],
};
