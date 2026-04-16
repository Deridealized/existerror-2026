# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check (tsc -b) then Vite production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Stack

- **React 19 + TypeScript + Vite** — SPA with React Router DOM v7
- **CSS Modules** — scoped styling per component; no CSS-in-JS
- **Framer Motion** — animations
- **D3.js** — force simulation for SkillsChart
- **Vercel** — deployment (SPA rewrite in vercel.json)
- No backend or CMS; all content is local TypeScript data files

## Architecture

### Routing (`src/App.tsx`)
React Router with routes for Home, client pages (BirdInHand, Deana), and a 404 Error page.

### Data-Driven Content
All content is defined in local data files — components iterate over these arrays:
- `src/components/Work/projects.ts` — project cards
- `src/data/skills.ts` — skills with name, category, level (1–5)
- `src/components/Hero/heroTileInfo.ts` — hero stats tiles
- `src/components/Contact/contactDetails.ts` — contact info
- `src/components/Skills/skillsListed.ts` — skills list items

To add/update content, edit the relevant data file — no UI code changes needed.

### Theme System (`src/context/ThemeContext.tsx`)
Dark theme is default. Light theme swaps in via `[data-theme="light"]` on `document.documentElement`. Theme persists to `localStorage` and respects `prefers-color-scheme`. CSS custom properties are defined in `src/index.css`.

### GitHub Activity (`src/hooks/useGitHubActivity.ts`)
Fetches latest 5 commits from `Deridealized/existerror-2026` via the public GitHub API. Unauthenticated — rate limits apply.

### SkillsChart
D3 force simulation with a `ResizeObserver` for responsiveness. Uses charge, center, collision, and boundary constraint forces. Lives in `src/components/SkillChart/`.

### CSS Conventions
- Each component folder has a `.module.css` file
- Global tokens and theme variables in `src/index.css`
- Fonts: Share Tech Mono, Space Mono, Bebas Neue
- Core palette: `--palette-black`, `--palette-off-white`, `--palette-limegreen`, `--palette-red`
