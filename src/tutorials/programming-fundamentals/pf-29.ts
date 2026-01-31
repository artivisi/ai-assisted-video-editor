import { VideoOutline } from "../types";

export const pf29: VideoOutline = {
  episodeId: "pf-29",
  seriesId: "programming-fundamentals",
  title: "Project: Calculator App",
  description: "Final project pertama: membuat calculator app dengan operasi dasar. Implementasi di ketiga bahasa.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Final projects dimulai!",
        "Project 1: Calculator App",
        "Apply semua yang sudah dipelajari",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Project Overview",
      talkingPoints: [
        "Calculator dengan +, -, *, /",
        "Input dari user",
        "Handle errors (bagi nol, invalid input)",
        "Loop sampai user quit",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Buat Repository Baru",
      talkingPoints: [
        "github.com → New repository",
        "Nama: calculator-app",
        "Create codespace",
        "Buat 3 file: calc.py, calc.js, Calc.java",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "07:00",
      title: "Planning",
      talkingPoints: [
        "1. Display menu",
        "2. Get user input (num1, operator, num2)",
        "3. Calculate based on operator",
        "4. Display result",
        "5. Loop atau quit",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "09:00",
      title: "Python Implementation",
      talkingPoints: [
        "Function untuk tiap operasi",
        "Main loop dengan while True",
        "Input validation dengan try-except",
        "Break saat user ketik 'q'",
      ],
      notes: "Live coding: calculator Python",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "JavaScript Implementation",
      talkingPoints: [
        "Node.js dengan readline",
        "Async input handling",
        "Switch-case untuk operator",
        "Similar structure dengan Python",
      ],
      notes: "Live coding: calculator JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Java Implementation",
      talkingPoints: [
        "Scanner untuk input",
        "Methods untuk operasi",
        "More verbose tapi structured",
      ],
      notes: "Live coding: calculator Java",
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Commit & Review",
      talkingPoints: [
        "git add, commit, push",
        "Review: concepts yang dipakai",
        "Variables, functions, loops, conditionals, error handling",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Congratulations! First project done!",
        "Next project: Todo List App",
        "Keep building!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Project: Calculator",
      subtitle: "Programming Fundamentals - Episode 29",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Calculator
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def calculator():
    while True:
        print("\\n=== Calculator ===")
        print("Enter 'q' to quit")

        try:
            num1 = input("First number: ")
            if num1.lower() == 'q': break
            num1 = float(num1)

            op = input("Operator (+,-,*,/): ")
            num2 = float(input("Second number: "))

            if op == '+': result = add(num1, num2)
            elif op == '-': result = subtract(num1, num2)
            elif op == '*': result = multiply(num1, num2)
            elif op == '/': result = divide(num1, num2)
            else: print("Invalid operator"); continue

            print(f"Result: {result}")

        except ValueError as e:
            print(f"Error: {e}")

calculator()`,
      title: "calc.py",
      highlightLines: [2, 3, 4, 5, 6, 7, 11, 22, 23, 24, 25, 30, 31],
      showAtFrame: 16200,
      hideAtFrame: 28800,
    },
  ],

  references: [
    {
      label: "Calculator Repository",
      url: "github.com/[username]/calculator-app",
    },
  ],
};
