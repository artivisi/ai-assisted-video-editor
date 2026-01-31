import { VideoOutline } from "../types";

export const pf14: VideoOutline = {
  episodeId: "pf-14",
  seriesId: "programming-fundamentals",
  title: "For Loop - Pengulangan Terukur",
  description: "Mempelajari for loop untuk mengulang kode dengan jumlah iterasi yang diketahui. Iterasi array dan range.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: conditionals untuk keputusan",
        "Hari ini: loops untuk pengulangan",
        "Fondasi penting dalam programming",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Loop?",
      talkingPoints: [
        "Menjalankan kode berulang kali",
        "Analogi: repetisi workout (10 push up)",
        "Tanpa loop: copy-paste 10 kali",
        "Dengan loop: tulis sekali, ulang 10 kali",
        "Sangat penting untuk proses data",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "For Loop di Python",
      talkingPoints: [
        "for item in collection:",
        "range(5) = 0, 1, 2, 3, 4",
        "range(1, 6) = 1, 2, 3, 4, 5",
        "Langsung iterate tanpa index",
        "Paling mudah dibaca",
      ],
      notes: "Live coding: berbagai for loop Python",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "For Loop di JavaScript",
      talkingPoints: [
        "Classic: for (let i = 0; i < 5; i++)",
        "3 bagian: init, condition, increment",
        "for...of untuk iterate array",
        "for...in untuk iterate object keys",
        "forEach() method juga ada",
      ],
      notes: "Live coding: berbagai for loop JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "For Loop di Java",
      talkingPoints: [
        "Classic: for (int i = 0; i < 5; i++)",
        "Sama dengan JavaScript",
        "Enhanced for: for (String item : array)",
        "Mirip Python for-in",
      ],
      notes: "Live coding: berbagai for loop Java",
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "Iterating Arrays",
      talkingPoints: [
        "Proses setiap item dalam array",
        "Sangat common dalam programming",
        "Print, transform, filter, accumulate",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Print angka 1-10",
        "Print setiap item dalam array",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: for loop untuk iterasi terukur",
        "Next episode: while loop",
        "Keep looping!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "For Loop",
      subtitle: "Programming Fundamentals - Episode 14",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python For Loop
# Loop dengan range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop dengan range custom
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# Loop array
fruits = ["apel", "jeruk", "mangga"]
for fruit in fruits:
    print(fruit)

# Dengan index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")`,
      title: "for_loop.py",
      highlightLines: [3, 7, 12, 16],
      showAtFrame: 9000,
      hideAtFrame: 21600,
    },
    {
      code: `// JavaScript For Loop
// Classic for
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// For...of (array values)
let fruits = ["apel", "jeruk", "mangga"];
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});`,
      title: "for_loop.js",
      highlightLines: [3, 9, 14],
      showAtFrame: 21600,
      hideAtFrame: 34200,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Tampilkan daftar transaksi dengan loop",
    starterCode: `saldo = Decimal("1000000")`,
    newCode: `from decimal import Decimal

# Daftar transaksi (list of dictionaries)
transaksi = [
    {"jenis": "masuk", "jumlah": Decimal("5000000"), "keterangan": "Gaji"},
    {"jenis": "keluar", "jumlah": Decimal("500000"), "keterangan": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("300000"), "keterangan": "Transport"},
    {"jenis": "masuk", "jumlah": Decimal("200000"), "keterangan": "Bonus"},
]

# Tampilkan semua transaksi dengan for loop
print("=== Daftar Transaksi ===")
for i, trx in enumerate(transaksi, 1):
    jenis = "+" if trx["jenis"] == "masuk" else "-"
    print(f"{i}. {jenis} Rp {trx['jumlah']:>12,.2f} - {trx['keterangan']}")

# Hitung saldo akhir
saldo = Decimal("0")
for trx in transaksi:
    if trx["jenis"] == "masuk":
        saldo += trx["jumlah"]
    else:
        saldo -= trx["jumlah"]

print(f"\\nSaldo: Rp {saldo:,.2f}")`,
    explanation: [
      "List untuk menyimpan multiple transaksi",
      "for loop untuk iterate setiap transaksi",
      "enumerate() untuk mendapat nomor urut",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan for loop. Minta user mengiterasi list, range, dan string. Termasuk soal dengan enumerate(). Jangan beri jawaban.",
  },
};
