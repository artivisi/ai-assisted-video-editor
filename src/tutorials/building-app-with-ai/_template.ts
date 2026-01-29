import { VideoOutline } from "../types";

// Template for Building App with AI series
// Copy this file and rename to episode-XX.ts

export const episodeTemplate: VideoOutline = {
  episodeId: "ai-00",
  seriesId: "building-app-with-ai",
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
        "What we're building today",
        "AI tools we'll use",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "01:00",
      title: "Project Overview",
      talkingPoints: [
        "Show the end result",
        "Tech stack overview",
        "AI integration points",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "03:00",
      title: "Setting Up",
      talkingPoints: [
        "Project scaffolding",
        "Dependencies installation",
        "AI API configuration",
      ],
      notes: "Show environment variables setup",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Building with AI",
      talkingPoints: [
        "Write prompts",
        "Integrate AI responses",
        "Handle edge cases",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "22:00",
      title: "Testing & Refinement",
      talkingPoints: [
        "Test the integration",
        "Improve prompts",
        "Error handling",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "27:00",
      title: "Wrap Up",
      talkingPoints: [
        "Recap what we built",
        "Potential improvements",
        "Resources & next steps",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Episode Title",
      subtitle: "Building App with AI Series",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  references: [
    {
      label: "Source Code",
      url: "github.com/artivisi/...",
    },
    {
      label: "AI API Docs",
      url: "docs.anthropic.com/...",
    },
  ],
};
