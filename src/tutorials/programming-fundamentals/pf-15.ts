import { VideoOutline } from "../types";

export const pf15: VideoOutline = {
  episodeId: "pf-15",
  seriesId: "programming-fundamentals",
  title: "While Loop & Loop Control",
  description: "Mempelajari while loop untuk pengulangan dengan kondisi. Break dan continue untuk kontrol loop.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: for loop untuk iterasi terukur",
        "Bagaimana kalau tidak tahu jumlah iterasi?",
        "Hari ini: while loop",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "While vs For",
      talkingPoints: [
        "For: tahu berapa kali loop",
        "While: loop selama kondisi true",
        "While: tidak tahu kapan berhenti",
        "Contoh: baca input sampai user ketik 'quit'",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "While Loop di Python",
      talkingPoints: [
        "while kondisi:",
        "Loop selama kondisi True",
        "Hati-hati infinite loop!",
        "Pastikan kondisi bisa jadi False",
      ],
      notes: "Live coding: while loop Python",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "While Loop di JavaScript & Java",
      talkingPoints: [
        "while (kondisi) { }",
        "Sama strukturnya",
        "Parentheses untuk kondisi",
        "Curly braces untuk body",
      ],
      notes: "Live coding: while loop JS",
      showOnScreen: "code",
    },
    {
      timestamp: "15:00",
      title: "Infinite Loop",
      talkingPoints: [
        "while True: (Python) atau while(true)",
        "Loop yang tidak pernah berhenti",
        "Butuh break untuk keluar",
        "Use case: game loop, server",
        "Ctrl+C untuk stop jika stuck",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Break Statement",
      talkingPoints: [
        "Keluar dari loop sebelum selesai",
        "Bisa di for atau while",
        "Keluar dari loop terdalam saja",
        "Contoh: cari item, stop saat ketemu",
      ],
      notes: "Live coding: break examples",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Continue Statement",
      talkingPoints: [
        "Skip iterasi saat ini, lanjut ke berikutnya",
        "Tidak keluar dari loop",
        "Contoh: skip angka genap",
      ],
      notes: "Live coding: continue examples",
      showOnScreen: "code",
    },
    {
      timestamp: "25:00",
      title: "Do-While (Java & JavaScript)",
      talkingPoints: [
        "Loop minimal 1 kali",
        "Cek kondisi di akhir",
        "Python tidak punya do-while",
        "Jarang dipakai tapi ada",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Guess the number game",
        "Loop sampai user tebak benar",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: while, break, continue",
        "Next episode: nested loops",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "While Loop & Control",
      subtitle: "Programming Fundamentals - Episode 15",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python While Loop
count = 0
while count < 5:
    print(count)
    count += 1  # PENTING! tanpa ini = infinite loop

# Break - keluar dari loop
for i in range(10):
    if i == 5:
        break  # stop di 5
    print(i)  # 0, 1, 2, 3, 4

# Continue - skip iterasi
for i in range(5):
    if i == 2:
        continue  # skip 2
    print(i)  # 0, 1, 3, 4`,
      title: "while_loop.py",
      highlightLines: [3, 5, 10, 16],
      showAtFrame: 9000,
      hideAtFrame: 27000,
    },
    {
      code: `// Guess the Number Game
import java.util.Scanner;
import java.util.Random;

int secret = new Random().nextInt(100) + 1;
Scanner input = new Scanner(System.in);
int guess;

while (true) {
    System.out.print("Tebak (1-100): ");
    guess = input.nextInt();

    if (guess == secret) {
        System.out.println("Benar!");
        break;  // Keluar dari loop
    } else if (guess < secret) {
        System.out.println("Terlalu kecil");
    } else {
        System.out.println("Terlalu besar");
    }
}`,
      title: "GuessGame.java",
      highlightLines: [9, 15],
      showAtFrame: 50400,
      hideAtFrame: 52200,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Input transaksi berulang sampai user ketik 'selesai'",
    starterCode: `transaksi = []`,
    newCode: `from decimal import Decimal

transaksi = []
saldo = Decimal("0")

print("=== Finance Tracker ===")
print("Ketik 'selesai' untuk berhenti")
print()

while True:
    # Input jenis transaksi
    jenis = input("Jenis (masuk/keluar/selesai): ").lower()

    if jenis == "selesai":
        break  # Keluar dari loop

    if jenis not in ["masuk", "keluar"]:
        print("Jenis tidak valid! Gunakan 'masuk' atau 'keluar'")
        continue  # Skip ke iterasi berikutnya

    # Input jumlah
    jumlah_str = input("Jumlah: Rp ")
    try:
        jumlah = Decimal(jumlah_str)
        if jumlah <= 0:
            print("Jumlah harus positif!")
            continue
    except:
        print("Jumlah tidak valid!")
        continue

    # Simpan transaksi
    transaksi.append({"jenis": jenis, "jumlah": jumlah})
    print(f"Transaksi {jenis} Rp {jumlah:,.2f} tersimpan\\n")

print(f"\\nTotal {len(transaksi)} transaksi tersimpan.")`,
    explanation: [
      "while True untuk input berulang tanpa batas",
      "break untuk keluar saat user ketik 'selesai'",
      "continue untuk skip input invalid",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan while loop dengan break dan continue. Minta user membuat loop yang berhenti berdasarkan kondisi. Jangan beri jawaban.",
  },
};
