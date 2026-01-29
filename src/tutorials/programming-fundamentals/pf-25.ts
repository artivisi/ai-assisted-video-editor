import { VideoOutline } from "../types";

export const pf25: VideoOutline = {
  episodeId: "pf-25",
  seriesId: "programming-fundamentals",
  title: "Regular Expressions Intro",
  description: "Pengenalan regular expressions untuk pattern matching. Basic patterns dan common use cases.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: string methods",
        "Hari ini: regular expressions (regex)",
        "Powerful tool untuk text processing",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Regex?",
      talkingPoints: [
        "Pattern untuk match text",
        "Seperti search tapi lebih powerful",
        "Bisa match pattern, bukan exact text",
        "Contoh: cari semua email dalam text",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Basic Patterns",
      talkingPoints: [
        ". (dot): match any single character",
        "* : zero or more",
        "+ : one or more",
        "? : zero or one",
        "^ : start of string",
        "$ : end of string",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "09:00",
      title: "Character Classes",
      talkingPoints: [
        "\\d : digit (0-9)",
        "\\w : word character (a-z, A-Z, 0-9, _)",
        "\\s : whitespace",
        "[abc] : a or b or c",
        "[a-z] : a to z",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "13:00",
      title: "Regex di Python",
      talkingPoints: [
        "import re",
        "re.match(): match di awal string",
        "re.search(): cari di mana saja",
        "re.findall(): cari semua",
        "Raw string: r'pattern'",
      ],
      notes: "Live coding: regex Python",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Regex di JavaScript",
      talkingPoints: [
        "Pattern: /pattern/ atau new RegExp()",
        "str.match(): cari match",
        "pattern.test(): return boolean",
        "str.replace() dengan regex",
      ],
      notes: "Live coding: regex JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Common Use Cases",
      talkingPoints: [
        "Validate email format",
        "Validate phone number",
        "Extract numbers from text",
        "Replace patterns",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Regex Tips",
      talkingPoints: [
        "Start simple, add complexity",
        "Test with regex101.com",
        "Comments dan named groups untuk readability",
        "Jangan over-use - kadang split() cukup",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Validate email format",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: regex basics",
        "Next episode: Error Handling",
        "Regex takes practice!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Regular Expressions",
      subtitle: "Programming Fundamentals - Episode 25",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Regular Expressions
import re

# Pattern untuk tanggal: YYYY-MM-DD
pattern = r"\\d{4}-\\d{2}-\\d{2}"

text = "Meeting on 2024-01-15 and 2024-02-20"

# Find all matches
dates = re.findall(pattern, text)
print(dates)  # ["2024-01-15", "2024-02-20"]

# Validate email
email_pattern = r"^[\\w.-]+@[\\w.-]+\\.\\w+$"
email = "user@example.com"

if re.match(email_pattern, email):
    print("Valid email")
else:
    print("Invalid email")`,
      title: "regex.py",
      highlightLines: [5, 10, 11, 14, 17, 18],
      showAtFrame: 23400,
      hideAtFrame: 39600,
    },
    {
      code: `// JavaScript Regular Expressions

// Pattern untuk tanggal
let pattern = /\\d{4}-\\d{2}-\\d{2}/g;

let text = "Meeting on 2024-01-15 and 2024-02-20";

// Find all matches
let dates = text.match(pattern);
console.log(dates);  // ["2024-01-15", "2024-02-20"]

// Validate email
let emailPattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
let email = "user@example.com";

if (emailPattern.test(email)) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}`,
      title: "regex.js",
      highlightLines: [4, 9, 10, 13, 16],
      showAtFrame: 32400,
      hideAtFrame: 46800,
    },
  ],

  references: [
    {
      label: "Regex101 - Test Regex",
      url: "regex101.com",
    },
  ],
};
