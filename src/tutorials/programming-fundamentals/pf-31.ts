import { VideoOutline } from "../types";

export const pf31: VideoOutline = {
  episodeId: "pf-31",
  seriesId: "programming-fundamentals",
  title: "Project: Number Guessing Game",
  description: "Final project ketiga: membuat number guessing game dengan difficulty levels dan score tracking.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Project 3: Guessing Game",
        "Fun project dengan game logic",
        "Practice loops dan conditionals",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Game Overview",
      talkingPoints: [
        "Computer picks random number",
        "Player tries to guess",
        "Hints: too high / too low",
        "Track number of attempts",
        "Difficulty levels",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Buat Repository",
      talkingPoints: [
        "Nama: guessing-game",
        "Create codespace",
        "File: game.py (focus Python)",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "06:00",
      title: "Basic Game Loop",
      talkingPoints: [
        "Generate random number",
        "While loop untuk guessing",
        "Compare guess with secret",
        "Give hints",
        "Break when correct",
      ],
      notes: "Live coding: basic game",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Add Difficulty Levels",
      talkingPoints: [
        "Easy: 1-10, unlimited guesses",
        "Medium: 1-50, 10 guesses",
        "Hard: 1-100, 5 guesses",
        "Let player choose",
      ],
      notes: "Live coding: difficulty levels",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Score Tracking",
      talkingPoints: [
        "Track attempts",
        "Calculate score based on attempts",
        "Fewer attempts = higher score",
        "Display final score",
      ],
      notes: "Live coding: scoring",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Play Again Feature",
      talkingPoints: [
        "Ask to play again",
        "Track total games and wins",
        "Show statistics at end",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "25:00",
      title: "Polish & Enhancements",
      talkingPoints: [
        "Input validation",
        "Clear screen between games",
        "ASCII art title",
        "Ideas: leaderboard, hints limit",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Final Commit & Review",
      talkingPoints: [
        "git add, commit, push",
        "Review Git history",
        "All 3 projects complete!",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Guessing Game complete!",
        "Next: Series wrap-up",
        "You've built 3 real projects!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Project: Guessing Game",
      subtitle: "Programming Fundamentals - Episode 31",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Number Guessing Game
import random

def play_game(difficulty):
    ranges = {"easy": (1, 10, 99), "medium": (1, 50, 10), "hard": (1, 100, 5)}
    min_num, max_num, max_attempts = ranges[difficulty]

    secret = random.randint(min_num, max_num)
    attempts = 0

    print(f"\\nGuess a number between {min_num} and {max_num}")
    print(f"You have {max_attempts} attempts" if max_attempts < 99 else "")

    while attempts < max_attempts:
        try:
            guess = int(input("Your guess: "))
            attempts += 1

            if guess == secret:
                score = max(100 - (attempts - 1) * 10, 10)
                print(f"🎉 Correct! Attempts: {attempts}, Score: {score}")
                return True, attempts, score
            elif guess < secret:
                print("Too low!")
            else:
                print("Too high!")

            remaining = max_attempts - attempts
            if remaining > 0 and max_attempts < 99:
                print(f"Attempts remaining: {remaining}")

        except ValueError:
            print("Please enter a valid number")

    print(f"Game over! The number was {secret}")
    return False, attempts, 0`,
      title: "game.py",
      highlightLines: [5, 6, 8, 14, 19, 20, 21, 22, 23, 24],
      showAtFrame: 10800,
      hideAtFrame: 32400,
    },
  ],
};
