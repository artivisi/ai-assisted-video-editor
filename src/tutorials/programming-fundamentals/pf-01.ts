import { VideoOutline } from "../types";

export const pf01: VideoOutline = {
  episodeId: "pf-01",
  seriesId: "programming-fundamentals",
  title: "Apa Itu Programming?",
  description: "Pengenalan dunia programming untuk pemula absolut. Membahas apa itu programming, kenapa perlu belajar, dan overview 3 bahasa yang akan dipelajari.",
  duration: 2700, // 45 minutes
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
      title: "Bahasa Populer di 2026",
      talkingPoints: [
        "Berdasarkan TIOBE Index, Stack Overflow Survey, GitHub Stats",
        "Top 10: Python, JavaScript, Java, C#, C++, TypeScript, Go, Rust, PHP, Swift",
        "Python #1: AI boom, data science, beginner-friendly",
        "JavaScript: masih dominan di web (frontend wajib)",
        "Java: enterprise, Android, banking systems",
        "Rising stars: Go (cloud/DevOps), Rust (system programming)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "21:00",
      title: "Kenapa Pilih Python, Java, JavaScript?",
      talkingPoints: [
        "Ketiganya di Top 5 paling banyak dipakai",
        "Mewakili spektrum typing systems:",
        "- Python: dynamic + strong typing",
        "- JavaScript: dynamic + weak typing (banyak quirks)",
        "- Java: static + strong typing (strict)",
        "Jika paham ketiganya, bahasa lain akan mudah dipelajari",
        "Job market besar untuk ketiga bahasa",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "25:00",
      title: "Kenapa Tidak PHP?",
      talkingPoints: [
        "PHP sangat populer di Indonesia",
        "Hosting murah (shared hosting support PHP)",
        "Diajarkan di SMK, powers WordPress & Laravel",
        "Tapi: hanya untuk web (kurang versatile)",
        "Tapi: inkonsistensi naming (strpos vs str_replace)",
        "Tapi: tidak mengajarkan typing concepts dengan jelas",
        "Jika sudah paham Python/Java/JS, PHP akan sangat mudah",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Bahasa Lain yang Perlu Diketahui",
      talkingPoints: [
        "C/C++: low-level, game engines, embedded systems",
        "C#: mirip Java, game (Unity), Windows apps",
        "Go: simple syntax, cloud-native, Kubernetes",
        "Rust: memory-safe C++, systems programming",
        "TypeScript: JavaScript + static typing",
        "Swift/Kotlin: iOS dan Android native",
        "Semua bisa dipelajari setelah paham fundamentals!",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "30:00",
      title: "Kenapa Belajar 3 Bahasa Sekaligus?",
      talkingPoints: [
        "Konsep programming itu universal",
        "Syntax berbeda, logika sama",
        "Seperti belajar grammar vs vocabulary",
        "Bisa bandingkan langsung: mana yang lebih cocok",
        "Tidak terkunci di satu ecosystem",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "33:00",
      title: "Overview 3 Bahasa Kita",
      talkingPoints: [
        "Python: syntax paling simple, data science, AI, automation, scripting",
        "Java: enterprise apps, Android, strongly typed, verbose tapi explicit",
        "JavaScript: web (frontend wajib), backend (Node.js), paling fleksibel",
        "Semua 3 bahasa ini high-demand di job market Indonesia & global",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "37:00",
      title: "Preview Series",
      talkingPoints: [
        "31 episode, 30-45 menit per episode",
        "Mulai dari nol, tidak perlu background teknis",
        "Hands-on coding setiap episode",
        "Final project: Calculator, Todo List, Guessing Game",
        "Semua code disimpan di GitHub (portfolio)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "40:00",
      title: "Outro",
      talkingPoints: [
        "Recap: programming = instruksi ke komputer",
        "Python, Java, JavaScript dipilih karena mewakili spektrum typing",
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
