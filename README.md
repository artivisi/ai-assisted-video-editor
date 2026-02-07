# Remotion Video Projects

Video animations and tutorial compositions for ArtiVisi YouTube channel.

## Quick Start

```bash
npm install
npm start        # Preview in browser
npm run build    # Bundle for rendering
```

## Render Episodes

```bash
# Render full episode with FFmpeg pipeline (5-6x faster)
./scripts/render-from-config.sh ep05

# Render individual compositions
npx remotion render PFIntro out/pf-intro.mp4
npx remotion render PFOutro out/pf-outro.mp4
```

## Project Structure

```
src/
├── animations/                    # Bumper animations (intro, outro, transitions)
├── components/                    # Reusable video components
├── tutorials/                     # Tutorial series content
│   └── programming-fundamentals/  # 31-episode series
│       ├── compositions/          # Full episode compositions
│       ├── components/            # Animated diagrams
│       ├── pf-01.ts ... pf-31.ts  # Episode outlines
│       └── video-paths.ts         # Video file mappings
└── assets/                        # Audio, icons, logos

scripts/
├── episode-config/                # Episode render configurations
├── render-from-config.sh          # Main render script
├── process-transcript.mjs         # Whisper JSON → Remotion format
├── sync-transcripts.mjs           # Sync camera/screen recordings
├── extract-cursor.py              # Cursor tracking for zoom/pan
└── generate-zoom-keyframes.mjs    # Generate zoom keyframes

docs/
├── PRODUCTION-WORKFLOW.md         # Complete step-by-step guide
├── COMPONENTS.md                  # Component reference
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
