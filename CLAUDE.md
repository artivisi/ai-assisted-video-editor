# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` - Start Remotion Studio for preview
- `npm run build` - Bundle the project
- `npm run lint` - Run ESLint and TypeScript checks
- `npx remotion render <CompositionId>` - Render specific composition
- `npx remotion render <CompositionId> out/filename.mp4` - Render to file

## Architecture

This is a Remotion project for creating programmatic videos using React.

### Project Structure

- `src/index.ts` - Entry point, registers RemotionRoot
- `src/Root.tsx` - Defines all Composition components (video configurations)
- `src/animations/` - Bumper animations (intro, outro, transitions)
- `src/components/` - Reusable video components (lower thirds, webcam overlay, etc.)
- `src/tutorials/` - Tutorial series content and outlines
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

### Episode Outlines

Located in `src/tutorials/programming-fundamentals/`:
- `SERIES_PLAN.md` - Full curriculum overview
- `pf-01.ts` through `pf-31.ts` - Individual episode outlines
- Each episode uses the `VideoOutline` type from `types.ts`

### Episode Outline Structure

```typescript
type VideoOutline = {
  episodeId: string;
  seriesId: string;
  title: string;
  description: string;
  duration: number;      // in seconds
  fps: number;
  outline: OutlineSection[];
  lowerThirds?: LowerThirdCue[];
  codeSnippets?: CodeSnippetCue[];
  references?: Reference[];
};
```

### Series-Specific Bumpers

- `PFIntro` - Dark theme, typing animation, language icons (Py/Jv/JS)
- `PFOutro` - Props: `nextEpisodeTitle?: string` (optional, hides section if not provided)

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
- `outro-sfx.wav` - Outro background sound
- `outro-static.wav` - Static noise for glitch moments
- `white-noise.wav` - Ambient background noise
- `dialup-modem.wav` - Retro modem sound (used in VlogIntro)
