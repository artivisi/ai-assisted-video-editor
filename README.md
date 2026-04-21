# Remotion + HyperFrames Video Projects

Video animations, tutorial episodes, and YouTube Shorts for the ArtiVisi channel. Two pipelines live in this repo:

- **Remotion** (root) — long-form 16:9 tutorial episodes authored in React
- **HyperFrames** (`shorts/`, `bumpers-lab/`) — vertical 9:16 YouTube Shorts and bumper experiments authored in HTML + CSS + GSAP

## Quick Start

**Remotion (long-form):**

```bash
npm install
npm start        # Remotion Studio preview
npm run build    # Bundle for rendering
```

**HyperFrames (shorts / bumpers):**

```bash
cd shorts && npx hyperframes preview          # vertical Short preview
cd shorts && npx hyperframes render           # render to MP4
cd bumpers-lab && npx hyperframes preview     # bumper sandbox
```

Node.js 22+ and FFmpeg required for HyperFrames.

## Render Episodes

```bash
# Render full episode with FFmpeg pipeline (5-6x faster)
./scripts/render-from-config.sh ep05

# Render individual compositions
npx remotion render PFIntro out/pf-intro.mp4
npx remotion render PFOutro out/pf-outro.mp4

# Long videos — segmented rendering to avoid Chrome crashes
./scripts/render-segments.sh PF06-Full rendered/ep06.mp4 5000
```

## Project Structure

```
src/                               # Remotion (long-form) — React
├── animations/                    # Bumper animations (intro, outro, transitions)
├── components/                    # Reusable video components
├── tutorials/                     # Tutorial series content
│   └── programming-fundamentals/  # 31-episode series
│       ├── compositions/          # Full episode compositions
│       ├── components/            # Animated diagrams
│       ├── pf-*-transcript.ts     # Whisper transcripts (TS)
│       └── video-paths.ts         # Video file mappings
└── assets/                        # Audio, icons, logos

shorts/                            # HyperFrames — vertical 1080×1920 Shorts
├── index.html                     # Main composition
├── compositions/                  # Sub-compositions (data-composition-src)
├── assets/clips        → ../public/footage     (symlink)
├── assets/transcripts  → ../shared/transcripts (symlink)
└── assets/audio        → ../src/assets/audio   (symlink)

bumpers-lab/                       # HyperFrames — 1920×1080 bumper experiments
└── (scaffolded as needed; winners graduate to src/animations/)

shared/
├── transcripts/                   # Whisper JSON (readable by both pipelines)
└── assets/             → ../src/assets (symlink)

public/footage/ep-XX/              # Raw camera + screen recordings
rendered/                          # Long-form MP4 outputs
thumbnails/
├── long-form/                     # 1280×720 episode thumbnails
└── shorts/                        # 1080×1920 Short thumbnails

scripts/
├── episode-config/                # Episode render configurations
├── render-from-config.sh          # Main long-form render script
├── render-segments.sh             # Segmented render for long videos
├── extract-transcripts.mjs        # TS transcripts → shared/transcripts/*.json
├── process-transcript.mjs         # Whisper JSON → Remotion format
├── sync-transcripts.mjs           # Sync camera/screen recordings
├── extract-cursor.py              # Cursor tracking for zoom/pan
└── generate-zoom-keyframes.mjs    # Generate zoom keyframes

docs/
├── PRODUCTION-WORKFLOW.md         # Complete long-form workflow
├── COMPONENTS.md                  # Remotion component reference
└── SCRIPTS.md                     # Script reference
```

## Documentation

| Document | Purpose |
|----------|---------|
| [PRODUCTION-WORKFLOW.md](docs/PRODUCTION-WORKFLOW.md) | Complete episode processing workflow |
| [COMPONENTS.md](docs/COMPONENTS.md) | Remotion component usage |
| [SCRIPTS.md](docs/SCRIPTS.md) | Automation scripts reference |
| [CLAUDE.md](CLAUDE.md) | AI assistant guidance |

## Episode Processing Summary

1. **Move footage** from SD card/screencast to `public/footage/ep-XX/`
2. **Transcribe** with mlx-whisper
3. **Sync** camera and screen recordings
4. **Create episode config** in `scripts/episode-config/epXX.json`
5. **Render** with `./scripts/render-from-config.sh epXX`

See [PRODUCTION-WORKFLOW.md](docs/PRODUCTION-WORKFLOW.md) for detailed guide.

## Prerequisites

```bash
# Node.js dependencies
npm install

# Python dependencies (use venv)
python3 -m venv .venv
source .venv/bin/activate
pip install mlx-whisper opencv-python numpy

# FFmpeg
brew install ffmpeg  # macOS
```

## Programming Fundamentals Series

31-episode tutorial series teaching Python, Java, and JavaScript together.

- Episode outlines in `src/tutorials/programming-fundamentals/pf-XX.ts`
- Series plan in `src/tutorials/programming-fundamentals/SERIES_PLAN.md`
- Compositions registered in `src/Root.tsx`

## Available Compositions

| ID | Description |
|----|-------------|
| PFIntro | Programming Fundamentals series intro (5s) |
| PFOutro | Series outro with next episode preview (6s) |
| EP01-LowerThird | Episode 1 title overlay |
| EP05-LowerThird | Episode 5 title overlay |
| ... | See Root.tsx for full list |
