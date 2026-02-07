# Scripts Reference

Available scripts for video production automation.

## Render

| Script | Purpose | Usage |
|--------|---------|-------|
| `render-segments.sh` | **Main render script** - segmented Remotion render for long videos | `./scripts/render-segments.sh PF06-Full rendered/ep06.mp4 5000` |

## Transcription & Sync

| Script | Purpose | Usage |
|--------|---------|-------|
| `transcribe-with-whisper.sh` | Transcribe audio with mlx-whisper | `./scripts/transcribe-with-whisper.sh footage.mov` |
| `process-transcript.mjs` | Convert Whisper JSON to Remotion format | `node scripts/process-transcript.mjs input.json output.ts` |
| `sync-transcripts.mjs` | Sync camera and screen recordings by matching transcript phrases | `node scripts/sync-transcripts.mjs camera.json screen.json sync.ts` |

## Silence Detection

| Script | Purpose | Usage |
|--------|---------|-------|
| `remove-silence.sh` | One-step silence removal | `./scripts/remove-silence.sh video.mp4` |
| `detect-silence.sh` | Detect silence regions | `./scripts/detect-silence.sh video.mp4` |
| `detect-silence.mjs` | Convert silence data to EDL | `node scripts/detect-silence.mjs silence.txt --output edl.ts` |

## Zoom/Pan

| Script | Purpose | Usage |
|--------|---------|-------|
| `generate-zoom-keyframes.mjs` | Generate zoom keyframes from cursor data | `node scripts/generate-zoom-keyframes.mjs cursor.json --output zoom.ts` |

## YouTube Upload

| Script | Purpose | Usage |
|--------|---------|-------|
| `youtube-auth.mjs` | YouTube OAuth authentication setup | `node scripts/youtube-auth.mjs` |
| `youtube-upload.mjs` | Upload single video with metadata, thumbnail, playlist | `node scripts/youtube-upload.mjs metadata.json video.mp4` |
| `youtube-batch-upload.mjs` | Batch upload multiple episodes sequentially | `node scripts/youtube-batch-upload.mjs ep04 ep06` |
| `generate-youtube-metadata.mjs` | Generate YouTube metadata JSON | `node scripts/generate-youtube-metadata.mjs all --start-date 2026-02-01` |

## Python Dependencies

```bash
# Use venv for Python scripts
source .venv/bin/activate

# Required packages
pip install mlx-whisper opencv-python numpy
```

## Transcription with mlx-whisper

```bash
source .venv/bin/activate

mlx_whisper footage/programming-fundamentals/pf-06-camera-1.mov \
  --output-dir footage/programming-fundamentals \
  --output-format json \
  --word-timestamps True \
  --model mlx-community/whisper-medium \
  --language id
```

**Models (fastest -> most accurate):**
- `mlx-community/whisper-tiny`
- `mlx-community/whisper-base`
- `mlx-community/whisper-small`
- `mlx-community/whisper-medium` (recommended)
- `mlx-community/whisper-large-v3`
