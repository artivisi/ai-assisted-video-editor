# Shorts Visual Identity

## Style Prompt

Dark, editor-native tech aesthetic — the palette of a developer's terminal at 1am. GitHub-dark canvas with OneDark syntax accents. Monospace-first for code, crisp sans-serif for headlines. Motion is confident and linear: `power2.inOut`, medium energy (0.3-0.5s transitions). No glow, no gradients, no neon. The only warmth comes from syntax color — error red, string green, number yellow.

## Colors

| Token            | Hex       | Role                                |
| ---------------- | --------- | ----------------------------------- |
| `--bg`           | `#0d1117` | Canvas (GitHub dark)                |
| `--panel`        | `#1a1a2e` | Card / scene panels                 |
| `--code-bg`      | `#282c34` | Code block (OneDark)                |
| `--text`         | `#ffffff` | Primary headline                    |
| `--text-soft`    | `#abb2bf` | Body / caption                      |
| `--accent-py`    | `#3776AB` | Python blue                         |
| `--accent-js`    | `#F7DF1E` | JavaScript yellow                   |
| `--accent-java`  | `#ED8B00` | Java orange                         |
| `--code-string`  | `#98c379` | String green                        |
| `--code-number`  | `#e5c07b` | Number yellow                       |
| `--code-keyword` | `#c678dd` | Keyword purple                      |
| `--error`        | `#ef4444` | Error highlight (the 0.000…04 part) |

## Typography

- Headlines: `"Inter", -apple-system, sans-serif` — 800 weight, tight letter-spacing
- Code: `"JetBrains Mono", monospace` — 500 weight (mapped by HyperFrames compiler for deterministic rendering)
- Minimum sizes in 1080×1920 vertical: headlines 110px, body 48px, code 64px

## Motion

- Medium energy. Entrance eases: `power3.out`, `expo.out`, `back.out(1.4)`
- Transitions between scenes: blur crossfade (medium preset) at 0.5s
- Offset first entrance by 0.2-0.3s so the viewer's eye has a moment to land

## What NOT to Do

- No linear full-screen gradients on dark bg — H.264 banding
- No generic blues (`#3b82f6`) — stay in OneDark family
- No `repeat: -1` loops, no `Math.random()`, no `Date.now()`
- No exit animations (`gsap.to(... opacity: 0)`) except on the final scene — transitions handle the handoff
- No emoji in copy — keep it code-editor sober
