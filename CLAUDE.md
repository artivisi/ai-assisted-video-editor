# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference for Episode Processing

**When user says "process episode X" or provides new footage:**

1. **Move files** from SD card/screencast folder to `public/footage/ep-XX/`
2. **Create symlinks** in `footage/programming-fundamentals/`
3. **Re-encode footage** with VideoToolbox (`h264_videotoolbox -b:v 12M`)
4. **Transcribe** with mlx-whisper (venv required)
5. **Sync** camera and screen recordings
6. **Create composition** in `src/tutorials/programming-fundamentals/compositions/`
7. **Register compositions** in `src/Root.tsx`
8. **Render** with `./scripts/render-segments.sh PF0X-Full rendered/output.mp4`

**Full workflow documentation:** `docs/PRODUCTION-WORKFLOW.md`
**Components reference:** `docs/COMPONENTS.md`

## Commands

- `npm start` - Start Remotion Studio for preview
- `npm run build` - Bundle the project
- `npm run lint` - Run ESLint and TypeScript checks
- `npx remotion render <CompositionId>` - Render specific composition
- `./scripts/render-segments.sh PF06-Full rendered/ep06.mp4 5000` - Segmented render for long videos

## Architecture

This is a Remotion project for creating programmatic videos using React.

### Project Structure

- `src/index.ts` - Entry point, registers RemotionRoot
- `src/Root.tsx` - Defines all Composition components (video configurations)
- `src/animations/` - Bumper animations (intro, outro, transitions)
- `src/components/` - Reusable video components (lower thirds, webcam overlay, etc.)
- `src/tutorials/` - Tutorial series content
- `src/assets/` - Audio, logos, and other static assets

### Key Concepts

- **Composition**: Defined in `Root.tsx`, each `<Composition>` registers a video with id, dimensions, fps, and duration
- **Animation components**: React components that use Remotion hooks (`useCurrentFrame`, `useVideoConfig`, `interpolate`, `spring`, etc.)
- Tailwind CSS v4 is enabled via `remotion.config.ts`

### Available Compositions

| ID | Description | Duration |
|----|-------------|----------|
| VlogIntro | "NGOPI DULU" intro with espresso cup animation | 150 frames |
| LowerThird | Name/title overlay | 150 frames |
| Transition | "artivisi" letter animation | 90 frames |
| Outro | End screen with subscribe CTA | 150 frames |
| PFIntro | Programming Fundamentals series intro | 150 frames |
| PFOutro | Programming Fundamentals series outro | 150 frames |

### Adding New Animations

1. Create component in `src/animations/<animation-name>/`
2. Export from index.ts in that folder
3. Register as `<Composition>` in `src/Root.tsx`

## Programming Fundamentals Series

A 31-episode tutorial series teaching Python, Java, and JavaScript together.

### Curriculum

Located in `src/tutorials/programming-fundamentals/SERIES_PLAN.md` - full curriculum overview.

### Series-Specific Bumpers

- `PFIntro` - Dark theme, typing animation, language icons (Py/Jv/JS)
- `PFOutro` - Props: `nextEpisodeTitle?: string` (optional, hides section if not provided)

### Transitions (`@remotion/transitions`)

Episode compositions use `TransitionSeries` with varied visual transitions:
- `fade()`, `slide()`, `wipe()`, `flip()`, `clockWipe()`, `iris()`
- Audio SFX added via `addSound()` wrapper pattern
- SFX variants in `src/assets/audio/`: transition-sfx.wav, -low.wav, -reverse.wav, -high.wav

## Animation Patterns

### Spring Animation
```typescript
const logoSpring = spring({
  frame: frame - 40,
  fps,
  config: { damping: 12, stiffness: 100 },
});
```

### Glitch Effect
```typescript
const glitchActive = (frame > 30 && frame < 34) || (frame > 60 && frame < 63);
const rgbSplit = glitchActive ? 4 : 0;
```

### Typing Animation
```typescript
const charsToShow = Math.floor(
  interpolate(frame, [startFrame, endFrame], [0, text.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
);
```

## Audio Assets

Located in `src/assets/audio/`:
- `keyboard-typing.wav` - Typing sound effect
- `transition-sfx.wav` - Swoosh/whoosh sound
- `transition-sfx-low.wav` - Low-pitch whoosh (for wipe transitions)
- `transition-sfx-reverse.wav` - Reverse whoosh (for slide transitions)
- `transition-sfx-high.wav` - High-pitch whoosh (spare)
- `outro-sfx.wav` - Outro background sound
- `outro-static.wav` - Static noise for glitch moments
- `white-noise.wav` - Ambient background noise
- `dialup-modem.wav` - Retro modem sound (used in VlogIntro)

## Video Component

Use `Video` from `@remotion/media` (not `OffthreadVideo` from remotion):
```tsx
import { Video } from "@remotion/media";
<Video src={getVideoPath("pf-06-camera-1")} trimBefore={startFrame} />
```

## Re-encoding Source Footage (MANDATORY)

Nikon ZFC `.MOV` and QuickTime `.mov` files cause Remotion/Chrome decoding errors. **Always re-encode before rendering:**

```bash
ffmpeg -i original.MOV -c:v h264_videotoolbox -b:v 12M -c:a aac -b:a 192k fixed.mp4
```

Then update `video-paths.ts` to point to the `-fixed.mp4` files.

**Bitrate recommendations for 1080p:**
- 12M: Source quality (re-encoding for Remotion)
- 8-10M: Final output (YouTube upload)

## Rendering Long Videos

For videos longer than 10 minutes, use segmented rendering to avoid Chrome crashes:

```bash
./scripts/render-segments.sh PF06-Full rendered/output.mp4 5000
```

This renders in 5000-frame segments (~2.7 min each), then concatenates with FFmpeg.

**Working render configuration:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Segment size | 5000 frames | Prevents Chrome memory crashes |
| Concurrency | 1 | `--concurrency=1`, single renderer |
| Video cache | 4GB | `--offthread-video-cache-size-in-bytes=4294967296` |
| Footage server | `localhost:3333` | HTTP server for video files |
| Public dir | Empty `/tmp` dir | Avoids bundling large footage |

**Prerequisites:**
- Re-encoded footage (raw MOV files crash Chrome)
- Known frame count in `render-segments.sh` case statement
- External drive mounted

**Timing:** ~10-15 min per segment, ~8 min bundling overhead for first segment.

### Video Path Configuration

`src/tutorials/programming-fundamentals/video-paths.ts` automatically switches between:
- **Preview mode**: `staticFile()` for Remotion Studio
- **Render mode**: HTTP URLs when `REMOTION_FOOTAGE_URL` is set

### Adding Known Frame Counts

For faster startup, add frame counts to `scripts/render-segments.sh`:
```bash
case "$COMPOSITION_ID" in
    "PF06-Full") TOTAL_FRAMES=45737 ;;
    ...
esac
```

## YouTube Upload Pipeline

Scripts in `scripts/` for batch uploading to YouTube with scheduled publishing.

### Setup (one-time)
1. Create Google Cloud project, enable YouTube Data API v3
2. Create OAuth 2.0 credentials (Desktop app)
3. Save as `client_secret.json` in project root
4. Add yourself as test user in OAuth consent screen
5. Run `node scripts/youtube-auth.mjs`

### Workflow

```bash
# 1. Generate metadata for all episodes (with scheduling)
node scripts/generate-youtube-metadata.mjs all --start-date 2026-02-01 --interval 2

# 2. Generate thumbnails with AI (Gemini, DALL-E, etc.)
#    Then resize to 1280x720:
ffmpeg -i input.png -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=#0d1117" thumbnails/ep06.png

# 3. Upload (batch or single)
node scripts/youtube-batch-upload.mjs ep04 ep06
node scripts/youtube-upload.mjs scripts/youtube-metadata/ep06.json rendered/pf-ep06-variables.mp4
```

### Upload Features
- Title, description, tags from metadata JSON
- Custom thumbnail from `thumbnails/epXX.png`
- Auto-creates playlist, adds video
- Scheduled publishing (private with publishAt)

## Recording Setup

- **Camera**: Nikon ZFC (records to SD card as `.MOV`)
- **Screen**: QuickTime Player Screen Recording (`.mov`)
- **Storage**: External drive at `public/footage/`

## Zoom/Pan Workflow

### Manual Keyframe Definition (Recommended)

For precise control, define zoom actions manually in `pf-XX-zoom-manual.ts`:

```typescript
const actions: Array<{
  camTime: number;      // Camera time in seconds (from transcript)
  duration: number;     // How long to hold (seconds)
  x: number;            // Focus X (0-1, 0.5 = center)
  y: number;            // Focus Y (0-1, 0.5 = center)
  scale: number;        // Zoom level (1 = wide, 1.7 = zoomed)
  note: string;         // Description for reference
}> = [
  { camTime: 134, duration: 5, x: 0.15, y: 0.4, scale: 1.5, note: "File explorer" },
  { camTime: 142, duration: 10, x: 0.5, y: 0.35, scale: 1.8, note: "Editor - show code" },
  { camTime: 160, duration: 10, x: 0.5, y: 0.65, scale: 1.8, note: "Terminal - run command" },
];
```

**Focus Position Reference (VSCode layout):**
| Area | X | Y | Scale |
|------|---|---|-------|
| Wide view | 0.5 | 0.5 | 1.0 |
| File explorer | 0.15 | 0.4 | 1.5-1.7 |
| Editor | 0.5 | 0.35 | 1.7-1.8 |
| Terminal | 0.5 | 0.65 | 1.7-1.8 |

**Time Conversion:**
- Screen time = Camera time - syncOffset
- Frame = Screen time × 30

## Processing Time Reference (25-min video, Apple Silicon M1)

| Step | Time |
|------|------|
| Copy files | ~2 min |
| Re-encode footage (VideoToolbox) | ~5 min |
| Transcription (mlx-whisper) | ~20 min |
| Create composition + preview | ~45 min |
| Render (segmented, 10 segments) | ~3.5 hours |
| **Total** | **~4.5 hours** |
