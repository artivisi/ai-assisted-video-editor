# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start Remotion Studio for preview
- `npm run build` - Bundle the project
- `npm run lint` - Run ESLint and TypeScript checks
- `npx remotion render` - Render video output
- `npx remotion render <CompositionId>` - Render specific composition

## Architecture

This is a Remotion project for creating programmatic videos using React.

### Project Structure

- `src/index.ts` - Entry point, registers RemotionRoot
- `src/Root.tsx` - Defines all Composition components (video configurations)
- `src/animations/` - All animation projects live here (no animations in root)
- `src/assets/logos/` - Logo SVG files for use in videos

### Key Concepts

- **Composition**: Defined in `Root.tsx`, each `<Composition>` registers a video with id, dimensions, fps, and duration
- **Animation components**: React components that use Remotion hooks (`useCurrentFrame`, `useVideoConfig`, `interpolate`, etc.)
- Tailwind CSS v4 is enabled via `remotion.config.ts`

### Adding New Animations

1. Create component in `src/animations/`
2. Register as `<Composition>` in `src/Root.tsx`
