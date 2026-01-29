# Remotion Video Projects

Video animations and tutorial compositions for ArtiVisi YouTube channel.

## Project Structure

```
src/
├── animations/           # Standalone bumper animations
│   ├── vlog-intro/      # "NGOPI DULU" intro bumper
│   ├── lower-third/     # Name/title overlay
│   ├── transition/      # "artivisi" letter animation
│   └── outro/           # End screen
├── components/          # Reusable tutorial components
│   ├── VideoLowerThird.tsx
│   ├── WebcamOverlay.tsx
│   ├── ZoomPan.tsx
│   └── CodeHighlight.tsx
├── tutorials/           # Tutorial video series
│   ├── programming-fundamentals/
│   ├── building-app-with-ai/
│   └── networking-cloud/
└── assets/
    ├── audio/
    ├── icons/
    └── logos/
```

## Quick Start

```bash
npm install
npm start        # Preview in browser
npm run build    # Bundle for rendering
```

## Render Bumpers

```bash
npx remotion render VlogIntro out/vlog-intro.mp4
npx remotion render LowerThird out/lower-third.mp4
npx remotion render Transition out/transition.mp4
npx remotion render Outro out/outro.mp4
```

---

## Tutorial Video Workflow

### Storage Setup (Symlinks)

Keep project on laptop, store large files on external drive:

```bash
# 1. Create folders on external drive
mkdir -p /Volumes/YOUR_EXTERNAL_DRIVE/remotion-footage
mkdir -p /Volumes/YOUR_EXTERNAL_DRIVE/remotion-output

# 2. Remove existing folders (if empty)
rmdir footage out

# 3. Create symlinks
ln -s /Volumes/YOUR_EXTERNAL_DRIVE/remotion-footage footage
ln -s /Volumes/YOUR_EXTERNAL_DRIVE/remotion-output out
```

Verify symlinks:
```bash
ls -la footage out
# Should show -> /Volumes/YOUR_EXTERNAL_DRIVE/...
```

### Folder Structure on External Drive

```
/Volumes/YOUR_EXTERNAL_DRIVE/
├── remotion-footage/
│   ├── programming-fundamentals/
│   │   ├── pf-01-main.mp4
│   │   ├── pf-01-webcam.mp4
│   │   └── ...
│   ├── building-app-with-ai/
│   └── networking-cloud/
└── remotion-output/
    └── (rendered videos)
```

### Creating a Tutorial Episode

#### 1. Create Episode Outline

Copy the template and fill in your content:

```bash
cp src/tutorials/programming-fundamentals/_template.ts \
   src/tutorials/programming-fundamentals/episode-01.ts
```

Edit the file with:
- Episode metadata (title, description, duration)
- Recording outline with timestamps and talking points
- Lower third cues
- Reference links
- Code snippets to display

#### 2. Generate Printable Outline

Generate a text file for recording reference:

```bash
node scripts/generate-outline.mjs src/tutorials/programming-fundamentals/episode-01.ts
```

Output: `episode-01-outline.txt` in the same folder.

#### 3. Record Footage

- Use OBS or similar to record screen + webcam separately
- Save to `footage/programming-fundamentals/`
- Naming convention: `pf-01-main.mp4`, `pf-01-webcam.mp4`

#### 4. Create Composition

Add to `src/Root.tsx`:

```tsx
import { TutorialComposition } from "./tutorials/TutorialComposition";
import { episode01 } from "./tutorials/programming-fundamentals/episode-01";

<Composition
  id="PF-01"
  component={TutorialComposition}
  durationInFrames={episode01.duration * episode01.fps}
  fps={episode01.fps}
  width={1920}
  height={1080}
  defaultProps={{
    mainVideoSrc: staticFile("footage/programming-fundamentals/pf-01-main.mp4"),
    webcamSrc: staticFile("footage/programming-fundamentals/pf-01-webcam.mp4"),
    outline: episode01,
  }}
/>
```

#### 5. Preview and Render

```bash
npm start                              # Preview
npx remotion render PF-01 out/pf-01.mp4  # Render
```

---

## Components Reference

### VideoLowerThird

Animated title/link overlay.

```tsx
<VideoLowerThird
  title="Introduction to Variables"
  subtitle="Programming Fundamentals"
  link="github.com/artivisi/examples"
  position="bottom-left"  // bottom-left | bottom-right | top-left | top-right
  showAt={90}             // frame to appear
  hideAt={270}            // frame to disappear
  accentColor="#22c55e"
/>
```

### WebcamOverlay

Picture-in-picture webcam.

```tsx
<WebcamOverlay
  src={webcamVideoSrc}
  position="bottom-right"
  size="medium"           // small | medium | large
  shape="rounded"         // circle | rounded | rectangle
  borderColor="#22c55e"
  showAt={0}
  hideAt={9000}
/>
```

### ZoomPan

Keyframe-based zoom and pan for screencast focus.

```tsx
<ZoomPan
  keyframes={[
    { frame: 0, x: 0.5, y: 0.5, scale: 1 },      // Start centered
    { frame: 300, x: 0.3, y: 0.2, scale: 2 },    // Zoom to top-left
    { frame: 600, x: 0.5, y: 0.5, scale: 1 },    // Back to normal
  ]}
  easing="smooth"
>
  <OffthreadVideo src={screencastSrc} />
</ZoomPan>
```

### CodeHighlight

Syntax-highlighted code overlay with line highlighting.

```tsx
<CodeHighlight
  code={`function hello() {
  console.log("Hello!");
}`}
  title="example.js"
  highlightLines={[2]}
  position="center"
  size="large"            // small | medium | large | fullscreen
  showAt={0}
  hideAt={300}
/>
```

---

## Audio Generation Scripts

Generate sound effects:

```bash
node scripts/generate-dialup-modem.mjs
node scripts/generate-letter-sfx.mjs
node scripts/generate-outro-static.mjs
node scripts/generate-whoosh-sound.mjs
```

---

## Docs

- [Remotion Fundamentals](https://www.remotion.dev/docs/the-fundamentals)
- [Remotion Discord](https://discord.gg/6VzzNDwUwV)
