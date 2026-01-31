import { VideoOutline } from "../types";

export const pf16: VideoOutline = {
  episodeId: "pf-16",
  seriesId: "programming-fundamentals",
  title: "Nested Loops & Common Patterns",
  description: "Mempelajari nested loops dan pattern umum: accumulator, search, dan filter.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: for dan while loop",
        "Hari ini: loop di dalam loop",
        "Pattern yang sering dipakai",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Nested Loops",
      talkingPoints: [
        "Loop di dalam loop",
        "Outer loop dan inner loop",
        "Total iterasi: outer × inner",
        "Contoh: matrix, multiplication table",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Multiplication Table",
      talkingPoints: [
        "Classic example nested loop",
        "Outer: baris (1-10)",
        "Inner: kolom (1-10)",
        "Print: baris × kolom",
      ],
      notes: "Live coding: tabel perkalian",
      showOnScreen: "code",
    },
    {
      timestamp: "11:00",
      title: "Pattern Printing",
      talkingPoints: [
        "Print pattern dengan *",
        "Segitiga, pyramid",
        "Kontrol jumlah * per baris",
        "Good exercise untuk nested loop",
      ],
      notes: "Live coding: star patterns",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Accumulator Pattern",
      talkingPoints: [
        "Kumpulkan nilai dalam loop",
        "Sum, count, average",
        "Inisialisasi sebelum loop",
        "Update dalam loop",
        "Hasil setelah loop",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "20:00",
      title: "Search Pattern",
      talkingPoints: [
        "Cari item dalam collection",
        "Return/break saat ketemu",
        "Flag variable untuk track",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "23:00",
      title: "Filter Pattern",
      talkingPoints: [
        "Kumpulkan item yang match kondisi",
        "Start dengan empty list",
        "Append jika match",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Performance Note",
      talkingPoints: [
        "Nested loop = O(n²) complexity",
        "10 × 10 = 100 iterasi",
        "1000 × 1000 = 1 juta iterasi",
        "Hindari nested loop jika bisa",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Print multiplication table 1-10",
        "Atau: print star triangle",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: nested loops dan patterns",
        "Next episode: Functions!",
        "Almost halfway there!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Nested Loops & Patterns",
      subtitle: "Programming Fundamentals - Episode 16",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Multiplication Table
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i} x {j} = {i*j:3}", end="  ")
    print()  # new line setelah tiap baris

# Star Triangle
#     *
#    * *
#   * * *
for i in range(1, 6):
    spaces = " " * (5 - i)
    stars = "* " * i
    print(spaces + stars)`,
      title: "nested_loops.py",
      highlightLines: [2, 3, 11, 12, 13],
      showAtFrame: 9000,
      hideAtFrame: 28800,
    },
    {
      code: `# Common Loop Patterns

# 1. Accumulator - sum all numbers
numbers = [1, 2, 3, 4, 5]
total = 0  # initialize
for num in numbers:
    total += num  # accumulate
print(total)  # 15

# 2. Search - find item
fruits = ["apel", "jeruk", "mangga"]
found = False
for fruit in fruits:
    if fruit == "jeruk":
        found = True
        break

# 3. Filter - collect matching items
numbers = [1, 2, 3, 4, 5, 6]
evens = []  # empty list
for num in numbers:
    if num % 2 == 0:
        evens.append(num)
print(evens)  # [2, 4, 6]`,
      title: "loop_patterns.py",
      highlightLines: [5, 6, 7, 13, 14, 15, 20, 21, 22],
      showAtFrame: 28800,
      hideAtFrame: 46800,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Hitung total pemasukan, pengeluaran, dan filter transaksi",
    starterCode: `transaksi = [...]  # list of transactions`,
    newCode: `from decimal import Decimal

transaksi = [
    {"jenis": "masuk", "jumlah": Decimal("5000000"), "keterangan": "Gaji"},
    {"jenis": "keluar", "jumlah": Decimal("500000"), "keterangan": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("300000"), "keterangan": "Transport"},
    {"jenis": "masuk", "jumlah": Decimal("200000"), "keterangan": "Bonus"},
]

# Accumulator pattern: hitung total
total_masuk = Decimal("0")
total_keluar = Decimal("0")

for trx in transaksi:
    if trx["jenis"] == "masuk":
        total_masuk += trx["jumlah"]
    else:
        total_keluar += trx["jumlah"]

saldo = total_masuk - total_keluar

# Filter pattern: ambil pengeluaran saja
pengeluaran = []
for trx in transaksi:
    if trx["jenis"] == "keluar":
        pengeluaran.append(trx)

print(f"Total Pemasukan:   Rp {total_masuk:>12,.2f}")
print(f"Total Pengeluaran: Rp {total_keluar:>12,.2f}")
print(f"Saldo:             Rp {saldo:>12,.2f}")
print(f"\\nJumlah transaksi keluar: {len(pengeluaran)}")`,
    explanation: [
      "Accumulator pattern untuk sum transaksi",
      "Filter pattern untuk memisahkan jenis transaksi",
      "Kombinasi pattern untuk laporan keuangan",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan nested loops dan patterns. Minta user menggunakan accumulator, search, dan filter patterns. Jangan beri jawaban.",
  },
};
