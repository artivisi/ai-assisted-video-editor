import { VideoOutline } from "../types";

export const pf22: VideoOutline = {
  episodeId: "pf-22",
  seriesId: "programming-fundamentals",
  title: "Dictionaries/Objects - Key-Value Pairs",
  description: "Mempelajari dictionary (Python), object (JavaScript), dan HashMap (Java) untuk menyimpan data key-value.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: arrays untuk list data",
        "Bagaimana kalau perlu label?",
        "Hari ini: key-value pairs",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Dictionary/Object?",
      talkingPoints: [
        "Data dengan label (key)",
        "Analogi: kamus (kata → definisi)",
        "Analogi: phonebook (nama → nomor)",
        "Akses dengan key, bukan index",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Dictionary di Python",
      talkingPoints: [
        "Dibuat dengan curly braces {}",
        "key: value pairs",
        "Akses: dict['key'] atau dict.get('key')",
        "Keys harus unique",
      ],
      notes: "Live coding: Python dictionary",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Object di JavaScript",
      talkingPoints: [
        "Dibuat dengan {}",
        "key: value (tanpa quotes untuk key)",
        "Akses: obj.key atau obj['key']",
        "Dot notation lebih common",
      ],
      notes: "Live coding: JavaScript object",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "HashMap di Java",
      talkingPoints: [
        "HashMap<KeyType, ValueType>",
        "put(key, value) untuk add",
        "get(key) untuk akses",
        "Lebih verbose tapi type-safe",
      ],
      notes: "Live coding: Java HashMap",
      showOnScreen: "code",
    },
    {
      timestamp: "23:00",
      title: "Iterating Over Keys/Values",
      talkingPoints: [
        "Loop semua keys",
        "Loop semua values",
        "Loop key-value pairs",
        "Berbeda syntax tiap bahasa",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Buat contact book",
        "Nama → nomor telepon",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: key-value storage",
        "Next episode: Sets & Tuples",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Dictionaries & Objects",
      subtitle: "Programming Fundamentals - Episode 22",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Dictionary
person = {
    "nama": "Budi",
    "umur": 25,
    "kota": "Jakarta"
}

# Akses
print(person["nama"])      # "Budi"
print(person.get("umur"))  # 25 (safer, returns None if missing)

# Tambah/Update
person["email"] = "budi@email.com"
person["umur"] = 26

# Iterate
for key in person:
    print(f"{key}: {person[key]}")

for key, value in person.items():
    print(f"{key}: {value}")`,
      title: "dictionary.py",
      highlightLines: [2, 3, 4, 9, 10, 13, 14, 17, 20],
      showAtFrame: 9000,
      hideAtFrame: 21600,
    },
    {
      code: `// JavaScript Object
let person = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

// Akses
console.log(person.nama);      // "Budi"
console.log(person["umur"]);   // 25

// Tambah/Update
person.email = "budi@email.com";
person["umur"] = 26;

// Iterate
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Object.entries
for (let [key, value] of Object.entries(person)) {
    console.log(\`\${key}: \${value}\`);
}`,
      title: "object.js",
      highlightLines: [2, 3, 4, 9, 10, 13, 14, 17, 22],
      showAtFrame: 21600,
      hideAtFrame: 32400,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Statistik per kategori menggunakan dictionary",
    starterCode: `transaksi = [...]  # list of transactions`,
    newCode: `from decimal import Decimal

transaksi = [
    {"jenis": "keluar", "jumlah": Decimal("500000"), "kategori": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("300000"), "kategori": "Transport"},
    {"jenis": "keluar", "jumlah": Decimal("200000"), "kategori": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("150000"), "kategori": "Transport"},
    {"jenis": "keluar", "jumlah": Decimal("100000"), "kategori": "Hiburan"},
]

def hitung_per_kategori():
    """Hitung total pengeluaran per kategori"""
    per_kategori = {}  # dictionary untuk menyimpan total

    for trx in transaksi:
        if trx["jenis"] == "keluar":
            kategori = trx["kategori"]
            jumlah = trx["jumlah"]

            # Jika kategori belum ada, inisialisasi dengan 0
            if kategori not in per_kategori:
                per_kategori[kategori] = Decimal("0")

            per_kategori[kategori] += jumlah

    return per_kategori

# Tampilkan laporan
laporan = hitung_per_kategori()
print("=== Pengeluaran per Kategori ===")
for kategori, total in laporan.items():
    print(f"{kategori:15} : Rp {total:>12,.2f}")

# Cari kategori terbesar
kategori_terbesar = max(laporan, key=laporan.get)
print(f"\\nKategori terbesar: {kategori_terbesar}")`,
    explanation: [
      "Dictionary untuk aggregate data per kategori",
      "Key = nama kategori, Value = total jumlah",
      ".items() untuk iterate key-value pairs",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan dictionary/object. Minta user membuat dictionary, mengakses, dan mengiterasinya. Jangan beri jawaban.",
  },
};
