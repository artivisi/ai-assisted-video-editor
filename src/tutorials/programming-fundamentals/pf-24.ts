import { VideoOutline } from "../types";

export const pf24: VideoOutline = {
  episodeId: "pf-24",
  seriesId: "programming-fundamentals",
  title: "String Methods",
  description: "Mempelajari methods untuk manipulasi string: case conversion, split, join, strip, dan find.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: data structures",
        "Hari ini: string manipulation",
        "String adalah salah satu tipe paling sering dipakai",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "String = Array of Characters",
      talkingPoints: [
        "String bisa diakses per karakter",
        "s[0] = karakter pertama",
        "Bisa di-loop",
        "Immutable di semua bahasa",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Case Conversion",
      talkingPoints: [
        "upper() / toUpperCase()",
        "lower() / toLowerCase()",
        "capitalize() / title case",
        "Berguna untuk normalisasi input",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "09:00",
      title: "Split & Join",
      talkingPoints: [
        "split(): string → array",
        "join(): array → string",
        "Contoh: parse CSV, build path",
        "Sangat sering dipakai",
      ],
      notes: "Live coding: split dan join",
      showOnScreen: "code",
    },
    {
      timestamp: "15:00",
      title: "Strip/Trim",
      talkingPoints: [
        "Hapus whitespace di awal/akhir",
        "Python: strip(), lstrip(), rstrip()",
        "JS: trim(), trimStart(), trimEnd()",
        "Penting untuk user input",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Find & Replace",
      talkingPoints: [
        "find() / indexOf(): cari posisi substring",
        "replace(): ganti substring",
        "startswith() / endswith()",
        "Python: in operator untuk contains",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "String Formatting Recap",
      talkingPoints: [
        "Python: f-string f'{var}'",
        "JS: template literal `${var}`",
        "Java: String.format() atau +",
        "Best practice: gunakan formatting",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Process user input: trim, lowercase",
        "Split sentence into words",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: string methods",
        "Next episode: Regular Expressions",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "String Methods",
      subtitle: "Programming Fundamentals - Episode 24",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python String Methods
s = "  Hello World  "

# Case
print(s.upper())        # "  HELLO WORLD  "
print(s.lower())        # "  hello world  "

# Strip whitespace
print(s.strip())        # "Hello World"

# Split & Join
words = "apel,jeruk,mangga".split(",")
print(words)            # ["apel", "jeruk", "mangga"]

path = "/".join(["home", "user", "docs"])
print(path)             # "home/user/docs"

# Find & Replace
text = "Hello World"
print(text.find("World"))     # 6 (index)
print(text.replace("World", "Python"))  # "Hello Python"
print("World" in text)        # True`,
      title: "strings.py",
      highlightLines: [5, 6, 9, 12, 15, 19, 20, 21],
      showAtFrame: 7200,
      hideAtFrame: 34200,
    },
    {
      code: `// JavaScript String Methods
let s = "  Hello World  ";

// Case
console.log(s.toUpperCase());  // "  HELLO WORLD  "
console.log(s.toLowerCase());  // "  hello world  "

// Trim whitespace
console.log(s.trim());         // "Hello World"

// Split & Join
let words = "apel,jeruk,mangga".split(",");
console.log(words);            // ["apel", "jeruk", "mangga"]

let path = ["home", "user", "docs"].join("/");
console.log(path);             // "home/user/docs"

// Find & Replace
let text = "Hello World";
console.log(text.indexOf("World"));  // 6
console.log(text.replace("World", "JS"));  // "Hello JS"
console.log(text.includes("World"));  // true`,
      title: "strings.js",
      highlightLines: [5, 6, 9, 12, 15, 19, 20, 21],
      showAtFrame: 34200,
      hideAtFrame: 48600,
    },
  ],
};
