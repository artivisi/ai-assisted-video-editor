import { VideoOutline } from "../types";

export const pf06: VideoOutline = {
  episodeId: "pf-06",
  seriesId: "programming-fundamentals",
  title: "Variables - Menyimpan Data",
  description: "Memahami konsep variables sebagai tempat menyimpan data. Belajar cara membuat variables di Python, JavaScript, dan Java dengan perbedaan masing-masing.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: komentar dan struktur code",
        "Hari ini: variables!",
        "Fondasi penting dalam programming",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Variable?",
      talkingPoints: [
        "Tempat menyimpan data",
        "Analogi: kotak penyimpanan dengan label",
        "Kotak = memory komputer",
        "Label = nama variable",
        "Isi kotak = nilai/value",
        "Bisa diambil, diganti, dipakai berkali-kali",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Variables di Python",
      talkingPoints: [
        "Langsung tulis: nama = nilai",
        "Tidak perlu deklarasi tipe",
        "Dynamic typing: tipe ditentukan otomatis",
        "Contoh: nama, umur, tinggi, sudah_menikah",
        "snake_case convention",
      ],
      notes: "Live coding: buat berbagai variable Python",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Variables di JavaScript",
      talkingPoints: [
        "let: variable yang bisa diubah",
        "const: konstanta, tidak bisa diubah",
        "var: cara lama, hindari!",
        "Kenapa const lebih disukai?",
        "camelCase convention",
        "Contoh penggunaan let vs const",
      ],
      notes: "Live coding: buat variable dengan let dan const",
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Variables di Java",
      talkingPoints: [
        "HARUS deklarasi tipe data",
        "String nama = \"Budi\";",
        "int umur = 25;",
        "double tinggi = 175.5;",
        "boolean sudahMenikah = false;",
        "Static typing: error kalau tipe salah",
        "Kenapa ini berguna? Error lebih awal!",
      ],
      notes: "Live coding: buat variable dengan berbagai tipe",
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Perbandingan & Naming",
      talkingPoints: [
        "Python: paling fleksibel",
        "JavaScript: let/const choice",
        "Java: paling strict (harus tipe)",
        "Naming conventions recap",
        "Deskriptif: userAge bukan ua",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Buat variables untuk profil kamu",
        "nama, umur, kota, hobi",
        "Di ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: variable = tempat simpan data",
        "Next episode: Data Types",
        "Keep practicing!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Variables - Menyimpan Data",
      subtitle: "Programming Fundamentals - Episode 6",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "Dynamic vs Static Typing",
      showAtFrame: 46800, // 26:00
      hideAtFrame: 48600,
    },
  ],

  codeSnippets: [
    {
      code: `# Variables di Python
nama = "Budi"
umur = 25
tinggi = 175.5
sudah_menikah = False

# Print semua
print(f"Nama: {nama}")
print(f"Umur: {umur} tahun")
print(f"Tinggi: {tinggi} cm")
print(f"Sudah menikah: {sudah_menikah}")`,
      title: "variables.py",
      highlightLines: [2, 3, 4, 5],
      showAtFrame: 9000,
      hideAtFrame: 18000,
    },
    {
      code: `// Variables di JavaScript
let nama = "Budi";        // bisa diubah
const umur = 25;          // tidak bisa diubah
let tinggi = 175.5;
let sudahMenikah = false;

// const untuk nilai yang fixed
const PI = 3.14159;

// let untuk nilai yang berubah
let score = 0;
score = score + 10;  // OK
// umur = 26;        // ERROR! const

console.log(\`Nama: \${nama}\`);`,
      title: "variables.js",
      highlightLines: [2, 3, 8, 11, 12],
      showAtFrame: 21600,
      hideAtFrame: 32400,
    },
    {
      code: `// Variables di Java
public class Variables {
    public static void main(String[] args) {
        String nama = "Budi";
        int umur = 25;
        double tinggi = 175.5;
        boolean sudahMenikah = false;

        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur);
    }
}`,
      title: "Variables.java",
      highlightLines: [4, 5, 6, 7],
      showAtFrame: 34200,
      hideAtFrame: 46800,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Tambahkan variables untuk menyimpan saldo dan transaksi",
    starterCode: `# Finance Tracker App
print("Welcome to Finance Tracker!")`,
    newCode: `# Finance Tracker App
print("Welcome to Finance Tracker!")

# Variables untuk data keuangan
saldo = 0
pemasukan = 0
pengeluaran = 0

# Info user (untuk personalisasi)
nama_user = "Budi"

print(f"Halo, {nama_user}!")
print(f"Saldo saat ini: Rp {saldo}")`,
    explanation: [
      "saldo, pemasukan, pengeluaran = integer untuk uang",
      "nama_user = string untuk personalisasi",
      "f-string untuk menampilkan variable dalam output",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan tentang variables. Minta user membuat variables dengan tipe yang tepat (int untuk angka, string untuk teks, boolean untuk status). Jangan beri jawaban.",
  },
};
