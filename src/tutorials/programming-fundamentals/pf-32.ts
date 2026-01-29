import { VideoOutline } from "../types";

export const pf32: VideoOutline = {
  episodeId: "pf-32",
  seriesId: "programming-fundamentals",
  title: "Series Wrap-Up & Next Steps",
  description: "Recap semua yang dipelajari, portfolio review, dan panduan untuk langkah selanjutnya.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Episode terakhir!",
        "30 episodes complete",
        "Congratulations!",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa yang Sudah Dipelajari",
      talkingPoints: [
        "3 programming languages",
        "Core concepts yang universal",
        "Typing systems, data types",
        "Control flow, loops, functions",
        "Data structures",
        "Error handling, debugging",
        "File I/O",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "08:00",
      title: "Projects yang Sudah Dibuat",
      talkingPoints: [
        "Calculator App",
        "Todo List App",
        "Number Guessing Game",
        "Semua ada di GitHub portfolio kamu",
        "Ini bukti skill kamu!",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "12:00",
      title: "Review GitHub Profile",
      talkingPoints: [
        "Buka github.com/[username]",
        "4 repositories: belajar-programming, 3 projects",
        "Green contribution graph",
        "Ini adalah portfolio kamu",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "16:00",
      title: "Next Steps: Python Path",
      talkingPoints: [
        "Web Development: Django, Flask, FastAPI",
        "Data Science: Pandas, NumPy, Matplotlib",
        "Machine Learning: scikit-learn, TensorFlow",
        "Automation: scripting, web scraping",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "19:00",
      title: "Next Steps: JavaScript Path",
      talkingPoints: [
        "Frontend: React, Vue, Angular",
        "Backend: Node.js, Express, NestJS",
        "Mobile: React Native, Expo",
        "Full-stack: Next.js, Remix",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "22:00",
      title: "Next Steps: Java Path",
      talkingPoints: [
        "Backend: Spring Boot, Jakarta EE",
        "Android: Android SDK, Kotlin",
        "Enterprise: Microservices, Cloud",
        "Big Data: Hadoop, Spark",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "25:00",
      title: "Learning Resources",
      talkingPoints: [
        "Documentation official tiap bahasa",
        "freeCodeCamp, The Odin Project",
        "YouTube channels untuk programming",
        "Build projects - best way to learn!",
        "Join communities: Discord, Reddit",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Tips for Continuous Learning",
      talkingPoints: [
        "Code every day, even 30 minutes",
        "Build projects, not just tutorials",
        "Read other people's code",
        "Contribute to open source",
        "Teach others - solidifies knowledge",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "29:00",
      title: "Closing",
      talkingPoints: [
        "Terima kasih sudah mengikuti series ini!",
        "You're now a programmer!",
        "Keep coding, keep learning",
        "Subscribe untuk series selanjutnya",
        "Good luck on your journey!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Series Wrap-Up",
      subtitle: "Programming Fundamentals - Episode 32",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "Congratulations!",
      subtitle: "You completed 30 episodes!",
      showAtFrame: 3600,
      hideAtFrame: 5400,
    },
  ],

  references: [
    {
      label: "Python Docs",
      url: "docs.python.org",
    },
    {
      label: "MDN Web Docs (JavaScript)",
      url: "developer.mozilla.org",
    },
    {
      label: "Java Tutorials",
      url: "dev.java/learn",
    },
    {
      label: "freeCodeCamp",
      url: "freecodecamp.org",
    },
    {
      label: "The Odin Project",
      url: "theodinproject.com",
    },
  ],
};
