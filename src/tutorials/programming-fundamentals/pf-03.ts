import { VideoOutline } from "../types";

export const pf03: VideoOutline = {
  episodeId: "pf-03",
  seriesId: "programming-fundamentals",
  title: "AI untuk Belajar Programming",
  description: "Cara menggunakan AI (ChatGPT, Claude, Gemini) sebagai tutor programming. Do's and Don'ts agar AI membantu belajar, bukan menghambat.",
  duration: 2400, // 40 minutes
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: Setup GitHub & Codespaces sudah siap",
        "Sebelum mulai coding, ada tool penting: AI",
        "AI bisa jadi tutor pribadi 24/7",
        "Tapi harus tahu cara pakai yang BENAR",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "AI Tools untuk Programming",
      talkingPoints: [
        "ChatGPT (OpenAI) - paling populer",
        "Claude (Anthropic) - bagus untuk coding",
        "Gemini (Google) - terintegrasi Google",
        "GitHub Copilot - langsung di editor",
        "Semua bisa dipakai GRATIS (ada limit)",
        "Pilih satu, konsep sama saja",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "AI sebagai Tutor vs AI sebagai Cheat",
      talkingPoints: [
        "TUTOR: membantu kamu MEMAHAMI",
        "CHEAT: mengerjakan UNTUK kamu",
        "Bedanya: siapa yang belajar?",
        "Analogi: personal trainer vs steroid",
        "Trainer bikin kamu kuat, steroid bikin shortcut",
        "Kita mau BELAJAR, bukan dapat nilai",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "08:00",
      title: "DO: Minta Penjelasan Konsep",
      talkingPoints: [
        "Prompt: 'Jelaskan apa itu variable seperti aku anak SD'",
        "Prompt: 'Apa bedanya == dan === di JavaScript?'",
        "Prompt: 'Kenapa Python tidak perlu semicolon?'",
        "AI sangat bagus untuk explain WHY",
        "Boleh minta analogi yang relatable",
      ],
      notes: "Demo: tanya AI tentang konsep",
      showOnScreen: "demo",
    },
    {
      timestamp: "12:00",
      title: "DO: Generate Latihan/Exercise",
      talkingPoints: [
        "Prompt: 'Buat 5 soal latihan tentang if-else di Python'",
        "Prompt: 'Beri aku challenge tentang loops, level pemula'",
        "Minta TANPA jawaban dulu",
        "Kerjakan sendiri, baru minta review",
        "Ini cara terbaik untuk practice!",
      ],
      notes: "Demo: generate exercise dengan AI",
      showOnScreen: "demo",
    },
    {
      timestamp: "16:00",
      title: "DO: Minta Penjelasan Error",
      talkingPoints: [
        "Copy-paste error message ke AI",
        "Prompt: 'Apa arti error ini? Kenapa bisa terjadi?'",
        "JANGAN minta: 'Fix this error'",
        "Minta PENJELASAN, bukan SOLUSI",
        "Kamu yang harus fix setelah paham",
      ],
      notes: "Demo: jelaskan error message",
      showOnScreen: "demo",
    },
    {
      timestamp: "20:00",
      title: "DO: Minta Analogi & Contoh",
      talkingPoints: [
        "Prompt: 'Jelaskan recursion pakai contoh dunia nyata'",
        "Prompt: 'Analogikan array dengan benda sehari-hari'",
        "AI sangat kreatif untuk analogi",
        "Kalau analogi tidak cocok, minta yang lain",
        "Setiap orang beda cara belajarnya",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "23:00",
      title: "DO: Code Review",
      talkingPoints: [
        "Setelah kamu tulis code sendiri...",
        "Prompt: 'Review code ini, apa yang bisa diperbaiki?'",
        "Prompt: 'Apakah ada cara lebih efisien?'",
        "Prompt: 'Apakah naming variable-ku sudah bagus?'",
        "Ini membantu improve skill",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "26:00",
      title: "DON'T: Minta Solusi Langsung",
      talkingPoints: [
        "JANGAN: 'Buatkan function untuk hitung faktorial'",
        "JANGAN: 'Tulis code untuk sorting array'",
        "Kalau AI yang tulis, KAMU tidak belajar!",
        "Otot harus dilatih sendiri untuk kuat",
        "Copy-paste = illusion of learning",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "29:00",
      title: "DON'T: Copy Tanpa Paham",
      talkingPoints: [
        "Kalau harus lihat contoh code...",
        "BACA dan PAHAMI dulu",
        "Tutup contoh, tulis dari ingatan",
        "Kalau tidak bisa, berarti belum paham",
        "Ulangi sampai bisa tulis sendiri",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "32:00",
      title: "DON'T: Skip Struggle",
      talkingPoints: [
        "Bingung dan stuck itu NORMAL",
        "Struggle = otak sedang belajar",
        "Jangan langsung tanya AI saat pertama stuck",
        "Coba 15-30 menit dulu sendiri",
        "Baru kalau benar-benar buntu, tanya AI",
        "Tanya HINT, bukan ANSWER",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "35:00",
      title: "Prompt Template untuk Series Ini",
      talkingPoints: [
        "Setiap episode akan ada 'AI Prompt' untuk homework",
        "Contoh: 'Generate 5 exercise tentang [topic]'",
        "Kamu kerjakan, lalu self-review",
        "Ini cara efektif untuk reinforce learning",
        "Jangan skip homework!",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "37:00",
      title: "Practice: Generate Exercise",
      talkingPoints: [
        "Buka ChatGPT/Claude/Gemini",
        "Prompt: 'Buat 3 soal latihan tentang print statement di Python, JavaScript, dan Java. Jangan beri jawaban.'",
        "Coba kerjakan",
        "Setelah selesai, minta AI review",
      ],
      notes: "Live demo: workflow generate dan kerjakan exercise",
      showOnScreen: "demo",
    },
    {
      timestamp: "39:00",
      title: "Outro",
      talkingPoints: [
        "Recap: AI = tutor, bukan cheat sheet",
        "DO: explain, exercise, error help, review",
        "DON'T: solusi langsung, copy tanpa paham",
        "Next episode: Hello World - program pertama!",
        "Sekarang kita siap coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "AI untuk Belajar",
      subtitle: "Programming Fundamentals - Episode 3",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "DO: Gunakan AI untuk...",
      subtitle: "Penjelasan, Latihan, Debug, Review",
      showAtFrame: 14400, // 8:00
      hideAtFrame: 16200,
    },
    {
      title: "DON'T: Hindari...",
      subtitle: "Solusi langsung, Copy tanpa paham",
      showAtFrame: 46800, // 26:00
      hideAtFrame: 48600,
    },
  ],

  codeSnippets: [
    {
      code: `# Prompt untuk minta penjelasan konsep:

"Jelaskan apa itu variable dalam programming.
Gunakan analogi yang mudah dipahami anak SMA.
Beri contoh di Python."

# Prompt untuk generate exercise:

"Buat 5 soal latihan tentang if-else di Python.
Level: pemula.
Jangan berikan jawaban, saya mau coba sendiri dulu."

# Prompt untuk explain error:

"Saya dapat error ini:
TypeError: can only concatenate str (not 'int') to str

Apa artinya? Kenapa bisa terjadi?
Jangan beri solusi, jelaskan saja penyebabnya."`,
      title: "ai_prompts_do.txt",
      highlightLines: [1, 7, 13],
      showAtFrame: 21600, // 12:00
      hideAtFrame: 39600,
    },
    {
      code: `# JANGAN prompt seperti ini:

"Buatkan function Python untuk menghitung faktorial"
# ❌ AI yang kerja, kamu tidak belajar

"Fix this code: [paste code]"
# ❌ Kamu tidak paham kenapa error

"Write a program to sort an array"
# ❌ Tidak ada learning process

# GANTI dengan:

"Jelaskan algoritma untuk menghitung faktorial"
# ✓ Kamu paham konsep, lalu tulis sendiri

"Kenapa code ini error? [paste code + error]"
# ✓ Kamu paham masalah, lalu fix sendiri

"Apa langkah-langkah untuk sorting array?"
# ✓ Kamu paham proses, lalu implement sendiri`,
      title: "ai_prompts_dont.txt",
      highlightLines: [3, 6, 9, 13, 16, 19],
      showAtFrame: 46800, // 26:00
      hideAtFrame: 57600,
    },
  ],

  references: [
    {
      label: "ChatGPT",
      url: "chat.openai.com",
    },
    {
      label: "Claude",
      url: "claude.ai",
    },
    {
      label: "Gemini",
      url: "gemini.google.com",
    },
    {
      label: "GitHub Copilot",
      url: "github.com/features/copilot",
    },
  ],
};
