import { VideoOutline } from "../types";

export const pf21: VideoOutline = {
  episodeId: "pf-21",
  seriesId: "programming-fundamentals",
  title: "Array Operations & Methods",
  description: "Mempelajari operasi umum pada arrays: add, remove, find, sort, dan slice.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: membuat array/list",
        "Hari ini: memanipulasi array",
        "Operasi yang sering dipakai",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Add Operations",
      talkingPoints: [
        "Tambah di akhir: append/push/add",
        "Tambah di posisi tertentu: insert",
        "Python: append(), insert()",
        "JS: push(), splice()",
        "Java: add(), add(index, item)",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "08:00",
      title: "Remove Operations",
      talkingPoints: [
        "Hapus berdasarkan index",
        "Hapus berdasarkan value",
        "Python: pop(), remove()",
        "JS: pop(), splice()",
        "Java: remove(index), remove(object)",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "14:00",
      title: "Find Operations",
      talkingPoints: [
        "Cari apakah item ada",
        "Cari index dari item",
        "Python: in, index()",
        "JS: includes(), indexOf()",
        "Java: contains(), indexOf()",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Sort Operations",
      talkingPoints: [
        "Python: sort() (in-place), sorted() (new list)",
        "JS: sort() (in-place, warning: string comparison!)",
        "Java: Collections.sort()",
        "Reverse: reverse()",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "23:00",
      title: "Slicing",
      talkingPoints: [
        "Ambil sebagian array",
        "Python: arr[1:4] (index 1, 2, 3)",
        "JS: arr.slice(1, 4)",
        "Java: subList(1, 4)",
        "Start inclusive, end exclusive",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Todo list: add, remove, list",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: array operations",
        "Next episode: Dictionaries/Objects",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Array Operations",
      subtitle: "Programming Fundamentals - Episode 21",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python List Operations
fruits = ["apel", "jeruk"]

# Add
fruits.append("mangga")       # di akhir
fruits.insert(1, "durian")    # di index 1

# Remove
fruits.pop()                  # hapus terakhir
fruits.remove("durian")       # hapus by value

# Find
print("apel" in fruits)       # True
print(fruits.index("jeruk"))  # index of "jeruk"

# Sort
fruits.sort()                 # ascending
fruits.sort(reverse=True)     # descending

# Slice
print(fruits[1:3])            # index 1 dan 2`,
      title: "array_ops.py",
      highlightLines: [5, 6, 9, 10, 13, 14, 17, 18, 21],
      showAtFrame: 3600,
      hideAtFrame: 23400,
    },
    {
      code: `// JavaScript Array Operations
let fruits = ["apel", "jeruk"];

// Add
fruits.push("mangga");           // di akhir
fruits.splice(1, 0, "durian");   // insert di index 1

// Remove
fruits.pop();                    // hapus terakhir
fruits.splice(1, 1);             // hapus 1 item di index 1

// Find
console.log(fruits.includes("apel"));  // true
console.log(fruits.indexOf("jeruk"));  // index

// Sort (HATI-HATI dengan numbers!)
fruits.sort();
// Untuk numbers: arr.sort((a, b) => a - b);

// Slice
console.log(fruits.slice(1, 3));  // index 1 dan 2`,
      title: "array_ops.js",
      highlightLines: [5, 6, 9, 10, 13, 14, 17, 21],
      showAtFrame: 23400,
      hideAtFrame: 48600,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Operasi pada daftar transaksi: tambah, hapus, cari, sort",
    starterCode: `transaksi = [...]  # list of transaction dicts`,
    newCode: `from decimal import Decimal
from datetime import date

transaksi = [
    {"tanggal": "2024-01-15", "jenis": "masuk", "jumlah": Decimal("5000000"), "ket": "Gaji"},
    {"tanggal": "2024-01-16", "jenis": "keluar", "jumlah": Decimal("500000"), "ket": "Makan"},
    {"tanggal": "2024-01-17", "jenis": "keluar", "jumlah": Decimal("300000"), "ket": "Transport"},
]

def tambah_transaksi(tanggal, jenis, jumlah, ket=""):
    transaksi.append({
        "tanggal": tanggal,
        "jenis": jenis,
        "jumlah": Decimal(str(jumlah)),
        "ket": ket
    })

def hapus_transaksi(index):
    if 0 <= index < len(transaksi):
        removed = transaksi.pop(index)
        print(f"Dihapus: {removed['ket']}")
        return True
    return False

def cari_transaksi(keyword):
    hasil = []
    for trx in transaksi:
        if keyword.lower() in trx["ket"].lower():
            hasil.append(trx)
    return hasil

def sort_by_tanggal():
    transaksi.sort(key=lambda x: x["tanggal"])

def sort_by_jumlah(descending=True):
    transaksi.sort(key=lambda x: x["jumlah"], reverse=descending)

# Contoh penggunaan
tambah_transaksi("2024-01-18", "masuk", 200000, "Bonus")
hasil = cari_transaksi("makan")
sort_by_jumlah()`,
    explanation: [
      "append() untuk tambah transaksi baru",
      "pop() dengan index untuk hapus",
      "sort() dengan key function untuk custom sorting",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan array operations. Minta user menggunakan append, remove, find, dan sort. Jangan beri jawaban.",
  },
};
