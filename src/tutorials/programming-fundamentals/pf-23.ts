import { VideoOutline } from "../types";

export const pf23: VideoOutline = {
  episodeId: "pf-23",
  seriesId: "programming-fundamentals",
  title: "Sets & Tuples",
  description: "Mempelajari sets untuk unique values dan tuples untuk immutable collections.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: arrays dan dictionaries",
        "Hari ini: sets dan tuples",
        "Data structures lain yang berguna",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Set?",
      talkingPoints: [
        "Kumpulan nilai UNIQUE",
        "Tidak ada duplikat",
        "Tidak ada urutan (unordered)",
        "Fast lookup: O(1)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Set di Python",
      talkingPoints: [
        "Dibuat dengan {} atau set()",
        "Otomatis hapus duplikat",
        "add(), remove(), discard()",
        "in untuk cek membership",
      ],
      notes: "Live coding: Python set",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Set di JavaScript & Java",
      talkingPoints: [
        "JS: new Set()",
        "Java: HashSet<Type>",
        "add(), delete()/remove(), has()/contains()",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "14:00",
      title: "Set Operations",
      talkingPoints: [
        "Union: gabung dua sets",
        "Intersection: irisan (ada di keduanya)",
        "Difference: ada di A tapi tidak di B",
        "Sangat berguna untuk data processing",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Tuple di Python",
      talkingPoints: [
        "Seperti list tapi IMMUTABLE",
        "Tidak bisa diubah setelah dibuat",
        "Dibuat dengan parentheses ()",
        "Bisa di-unpack",
      ],
      notes: "Live coding: Python tuple",
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "When to Use What?",
      talkingPoints: [
        "List/Array: ordered, duplicates OK, mutable",
        "Set: unique, unordered, fast lookup",
        "Tuple: fixed data, immutable, hashable",
        "Dict/Object: key-value pairs",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Remove duplicates dari list menggunakan set",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: sets dan tuples",
        "Next episode: String methods",
        "Data structures complete!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Sets & Tuples",
      subtitle: "Programming Fundamentals - Episode 23",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Set
colors = {"red", "green", "blue", "red"}  # duplikat dihapus
print(colors)  # {'red', 'green', 'blue'}

# Operations
colors.add("yellow")
colors.remove("red")
print("green" in colors)  # True

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)  # Union: {1, 2, 3, 4, 5, 6}
print(a & b)  # Intersection: {3, 4}
print(a - b)  # Difference: {1, 2}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 3, 3]
unique = list(set(numbers))  # [1, 2, 3]`,
      title: "sets.py",
      highlightLines: [2, 6, 7, 8, 14, 15, 16, 20],
      showAtFrame: 9000,
      hideAtFrame: 25200,
    },
    {
      code: `# Python Tuple
# Immutable - tidak bisa diubah
point = (10, 20)
# point[0] = 15  # ERROR! Tuple immutable

# Unpack
x, y = point
print(f"x: {x}, y: {y}")

# Function return multiple values
def get_min_max(numbers):
    return min(numbers), max(numbers)  # returns tuple

minimum, maximum = get_min_max([3, 1, 4, 1, 5])

# Tuple sebagai dictionary key (karena immutable)
locations = {
    (0, 0): "Origin",
    (10, 20): "Point A"
}`,
      title: "tuples.py",
      highlightLines: [3, 7, 8, 12, 14, 17, 18, 19],
      showAtFrame: 34200,
      hideAtFrame: 48600,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Gunakan set untuk daftar kategori unik",
    starterCode: `per_kategori = {}  # dictionary untuk aggregate`,
    newCode: `from decimal import Decimal

transaksi = [
    {"jenis": "keluar", "jumlah": Decimal("500000"), "kategori": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("300000"), "kategori": "Transport"},
    {"jenis": "keluar", "jumlah": Decimal("200000"), "kategori": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("150000"), "kategori": "Transport"},
    {"jenis": "keluar", "jumlah": Decimal("100000"), "kategori": "Hiburan"},
]

def get_kategori_unik():
    """Ambil daftar kategori unik menggunakan set"""
    kategori_set = set()
    for trx in transaksi:
        kategori_set.add(trx["kategori"])
    return kategori_set

# Atau dengan set comprehension
kategori = {trx["kategori"] for trx in transaksi}
print(f"Kategori tersedia: {kategori}")
# Output: {'Makan', 'Transport', 'Hiburan'}

# Cek apakah kategori valid
def is_kategori_valid(kategori_input):
    kategori_valid = get_kategori_unik()
    return kategori_input in kategori_valid

# O(1) lookup - sangat cepat!
print(is_kategori_valid("Makan"))     # True
print(is_kategori_valid("Shopping"))  # False`,
    explanation: [
      "Set untuk menyimpan kategori unik tanpa duplikat",
      "Fast lookup O(1) untuk validasi kategori",
      "Set comprehension untuk kode yang lebih ringkas",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan sets dan tuples. Minta user menggunakan set untuk remove duplicates dan tuple untuk fixed data. Jangan beri jawaban.",
  },
};
