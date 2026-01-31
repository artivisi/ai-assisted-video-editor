import { VideoOutline } from "../types";

export const pf08: VideoOutline = {
  episodeId: "pf-08",
  seriesId: "programming-fundamentals",
  title: "Number Systems: Binary, Octal, Decimal, Hexadecimal",
  description: "Memahami sistem bilangan yang digunakan dalam komputer: binary (base 2), octal (base 8), decimal (base 10), dan hexadecimal (base 16).",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: data types dan typing systems",
        "Hari ini: number systems",
        "Kenapa programmer perlu tahu ini?",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Decimal (Base 10)",
      talkingPoints: [
        "Yang kita pakai sehari-hari",
        "10 digits: 0-9",
        "Positional notation: 123 = 1×100 + 2×10 + 3×1",
        "Kenapa base 10? Karena 10 jari",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Binary (Base 2)",
      talkingPoints: [
        "Bahasa komputer: hanya 0 dan 1",
        "2 digits: 0, 1",
        "1011 binary = 1×8 + 0×4 + 1×2 + 1×1 = 11 decimal",
        "Kenapa binary? Elektronik: on/off, high/low voltage",
        "1 bit = 1 binary digit",
        "8 bits = 1 byte = 256 kemungkinan (0-255)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "10:00",
      title: "Binary dan Integer Limits",
      talkingPoints: [
        "8-bit unsigned: 0 sampai 255 (2^8 - 1)",
        "8-bit signed: -128 sampai 127",
        "32-bit signed int: -2,147,483,648 sampai 2,147,483,647",
        "64-bit long: jauh lebih besar",
        "Ini kenapa integer ada batasnya!",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "13:00",
      title: "Hexadecimal (Base 16)",
      talkingPoints: [
        "16 digits: 0-9, A-F",
        "A=10, B=11, C=12, D=13, E=14, F=15",
        "FF hex = 15×16 + 15 = 255 decimal",
        "Compact way untuk represent binary",
        "1 hex digit = 4 bits (nibble)",
        "2 hex digits = 1 byte",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "16:00",
      title: "Hexadecimal dalam Programming",
      talkingPoints: [
        "Color codes: #FF0000 = Red (255,0,0)",
        "#00FF00 = Green, #0000FF = Blue",
        "Memory addresses: 0x7fff5fbff8c0",
        "Character codes: Unicode \\u0041 = 'A'",
        "Prefix 0x untuk hex di code",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Octal (Base 8)",
      talkingPoints: [
        "8 digits: 0-7",
        "Jarang dipakai, tapi penting di Unix",
        "File permissions: chmod 755",
        "7 = rwx (read+write+execute)",
        "5 = r-x (read+execute)",
        "Prefix 0o di Python, 0 di Java/JS (hati-hati!)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "22:00",
      title: "Konversi di Code",
      talkingPoints: [
        "Python: bin(), oct(), hex(), int('1010', 2)",
        "JavaScript: toString(2), parseInt('1010', 2)",
        "Java: Integer.toBinaryString(), Integer.parseInt('1010', 2)",
        "Literal notation di code",
      ],
      notes: "Live coding: konversi antar base",
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Practice & Git",
      talkingPoints: [
        "Convert beberapa angka manual",
        "Coba di code ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: 4 number systems",
        "Binary untuk komputer, hex untuk programmer",
        "Next: Type Conversion",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Number Systems",
      subtitle: "Programming Fundamentals - Episode 8",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "Binary = Base 2",
      subtitle: "The language of computers",
      showAtFrame: 9000,
      hideAtFrame: 10800,
    },
    {
      title: "Hexadecimal = Base 16",
      subtitle: "Compact binary representation",
      showAtFrame: 23400,
      hideAtFrame: 25200,
    },
  ],

  codeSnippets: [
    {
      code: `# Number Systems in Python

# Decimal (normal)
decimal_num = 255

# Binary - prefix 0b
binary_num = 0b11111111  # = 255

# Hexadecimal - prefix 0x
hex_num = 0xFF  # = 255

# Octal - prefix 0o
octal_num = 0o377  # = 255

print(f"All equal: {decimal_num == binary_num == hex_num == octal_num}")
# Output: All equal: True

# Converting decimal to other bases
num = 255
print(bin(num))   # '0b11111111'
print(hex(num))   # '0xff'
print(oct(num))   # '0o377'

# Converting string to decimal
print(int('11111111', 2))   # 255 (from binary)
print(int('FF', 16))        # 255 (from hex)
print(int('377', 8))        # 255 (from octal)`,
      title: "number_systems.py",
      highlightLines: [5, 8, 11, 17, 18, 19, 22, 23, 24],
      showAtFrame: 39600,
      hideAtFrame: 48600,
    },
    {
      code: `// Number Systems in JavaScript

// Decimal (normal)
const decimalNum = 255;

// Binary - prefix 0b
const binaryNum = 0b11111111;  // = 255

// Hexadecimal - prefix 0x
const hexNum = 0xFF;  // = 255

// Octal - prefix 0o (ES6+)
const octalNum = 0o377;  // = 255

console.log(decimalNum === binaryNum);  // true
console.log(decimalNum === hexNum);     // true

// Converting to other bases
const num = 255;
console.log(num.toString(2));   // '11111111'
console.log(num.toString(16));  // 'ff'
console.log(num.toString(8));   // '377'

// Parsing from string
console.log(parseInt('11111111', 2));  // 255
console.log(parseInt('FF', 16));       // 255
console.log(parseInt('377', 8));       // 255`,
      title: "numberSystems.js",
      highlightLines: [7, 10, 13, 20, 21, 22, 25, 26, 27],
      showAtFrame: 48600,
      hideAtFrame: 54000,
    },
    {
      code: `// Number Systems in Java
public class NumberSystems {
    public static void main(String[] args) {
        // Decimal (normal)
        int decimalNum = 255;

        // Binary - prefix 0b (Java 7+)
        int binaryNum = 0b11111111;  // = 255

        // Hexadecimal - prefix 0x
        int hexNum = 0xFF;  // = 255

        // Octal - prefix 0 (careful!)
        int octalNum = 0377;  // = 255

        // Converting to strings
        System.out.println(Integer.toBinaryString(255));  // 11111111
        System.out.println(Integer.toHexString(255));     // ff
        System.out.println(Integer.toOctalString(255));   // 377

        // Parsing from string
        System.out.println(Integer.parseInt("11111111", 2));  // 255
        System.out.println(Integer.parseInt("FF", 16));       // 255
        System.out.println(Integer.parseInt("377", 8));       // 255
    }
}`,
      title: "NumberSystems.java",
      highlightLines: [8, 11, 14, 17, 18, 19, 22, 23, 24],
      showAtFrame: 54000,
      hideAtFrame: 64800,
    },
    {
      code: `# Hexadecimal Colors

# RGB Color Format: #RRGGBB
# Each pair is 00-FF (0-255)

red = "#FF0000"      # RGB(255, 0, 0)
green = "#00FF00"    # RGB(0, 255, 0)
blue = "#0000FF"     # RGB(0, 0, 255)
white = "#FFFFFF"    # RGB(255, 255, 255)
black = "#000000"    # RGB(0, 0, 0)
yellow = "#FFFF00"   # RGB(255, 255, 0)
cyan = "#00FFFF"     # RGB(0, 255, 255)
magenta = "#FF00FF"  # RGB(255, 0, 255)

# With alpha (transparency): #RRGGBBAA
semi_transparent_red = "#FF000080"  # 50% transparent red

# Parsing hex color
hex_color = "FF8C00"  # Dark Orange
r = int(hex_color[0:2], 16)  # 255
g = int(hex_color[2:4], 16)  # 140
b = int(hex_color[4:6], 16)  # 0
print(f"RGB: ({r}, {g}, {b})")`,
      title: "hex_colors.py",
      highlightLines: [6, 7, 8, 9, 10, 19, 20, 21],
      showAtFrame: 28800,
      hideAtFrame: 39600,
    },
  ],

  references: [
    {
      label: "Binary Number System",
      url: "en.wikipedia.org/wiki/Binary_number",
    },
    {
      label: "Hexadecimal",
      url: "en.wikipedia.org/wiki/Hexadecimal",
    },
    {
      label: "Unix File Permissions",
      url: "en.wikipedia.org/wiki/File-system_permissions#Numeric_notation",
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Memahami representasi angka dalam berbagai base (untuk debugging dan low-level understanding)",
    starterCode: `saldo = Decimal("0.00")`,
    newCode: `# Finance Tracker - Number representation
from decimal import Decimal

saldo = Decimal("0.00")

# Memahami bagaimana angka disimpan
# Decimal 100 dalam berbagai base:
print(f"Decimal: 100")
print(f"Binary:  {bin(100)}")   # 0b1100100
print(f"Hex:     {hex(100)}")   # 0x64
print(f"Octal:   {oct(100)}")   # 0o144

# Berguna untuk debugging memory issues
# dan understanding computer storage`,
    explanation: [
      "Memahami number systems membantu debugging",
      "Hex sering muncul di error messages dan memory addresses",
      "Tidak langsung dipakai di app, tapi penting untuk understanding",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal konversi antar number systems (binary, decimal, hex). Minta user mengkonversi manual tanpa calculator. Jangan beri jawaban.",
  },
};
