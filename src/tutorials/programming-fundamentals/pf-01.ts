import { VideoOutline } from "../types";

export const pf01: VideoOutline = {
  episodeId: "pf-01",
  seriesId: "programming-fundamentals",
  title: "Apa Itu Programming?",
  description: "Pengenalan dunia programming untuk pemula absolut. Membahas apa itu programming, kenapa perlu belajar, dan overview 3 bahasa yang akan dipelajari.",
  duration: 1800, // 30 minutes
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Salam pembuka",
        "Perkenalan series Programming Fundamentals",
        "Apa yang akan dipelajari di episode ini",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Programming?",
      talkingPoints: [
        "Programming = memberi instruksi ke komputer",
        "Analogi: resep masak (step-by-step instructions)",
        "Analogi: instruksi ke asisten (harus detail & spesifik)",
        "Komputer tidak bisa assume, harus explicit",
      ],
      notes: "Gunakan analogi yang relatable untuk audience non-teknis",
      showOnScreen: "slide",
    },
    {
      timestamp: "07:00",
      title: "Kenapa Belajar Programming?",
      talkingPoints: [
        "Otomasi pekerjaan repetitif (Excel macro, web scraping)",
        "Karir di tech industry (demand tinggi, gaji kompetitif)",
        "Problem solving skill (applicable di semua bidang)",
        "AI tidak menggantikan programmer - programmer yang pakai AI jadi lebih produktif",
        "Bisa bikin aplikasi/website sendiri",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "12:00",
      title: "Apa Itu Programming Language?",
      talkingPoints: [
        "Bahasa untuk berkomunikasi dengan komputer",
        "Analogi: bahasa manusia (Indonesia, English, Japanese)",
        "Kenapa banyak bahasa? Sejarah & use case berbeda",
        "High-level vs low-level languages",
        "Komputer hanya mengerti binary (0 dan 1)",
        "Programming language diterjemahkan ke binary",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "17:00",
      title: "Kenapa Belajar 3 Bahasa Sekaligus?",
      talkingPoints: [
        "Konsep programming itu universal",
        "Syntax berbeda, logika sama",
        "Seperti belajar grammar vs vocabulary",
        "Versatility: bisa web, mobile, backend, data science",
        "Tidak terkunci di satu ecosystem",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "22:00",
      title: "Overview 3 Bahasa",
      talkingPoints: [
        "Python: syntax paling simple, data science, AI, automation",
        "Java: enterprise apps, Android, strongly typed, verbose tapi explicit",
        "JavaScript: web development, frontend & backend (Node.js), paling banyak dipakai di web",
        "Semua 3 bahasa ini high-demand di job market",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Preview Series",
      talkingPoints: [
        "30 episode, 30 menit per episode",
        "Mulai dari nol, tidak perlu background teknis",
        "Hands-on coding setiap episode",
        "Final project: Calculator, Todo List, Guessing Game",
        "Semua code disimpan di GitHub (portfolio)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: programming = instruksi ke komputer",
        "Next episode: Setup GitHub & Codespaces",
        "Subscribe & turn on notification",
        "See you next episode!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Apa Itu Programming?",
      subtitle: "Programming Fundamentals - Episode 1",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  references: [
    {
      label: "GitHub",
      url: "github.com",
    },
    {
      label: "Python",
      url: "python.org",
    },
    {
      label: "JavaScript",
      url: "developer.mozilla.org",
    },
    {
      label: "Java",
      url: "dev.java",
    },
  ],
};
