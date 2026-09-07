# Sunil Mandloi — Portfolio

A personal, one-page editorial portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Before you run it: add your portrait

The photo URL provided couldn't be fetched automatically (it wasn't reachable from the
build environment). The site is already wired to use it — you just need to add the file:

1. Save your portrait as `profile-photo.png`
2. Place it at `public/images/profile-photo.png`

If the file is missing, the hero section shows a placeholder circle with a reminder
message instead of breaking — so the site still runs fine either way.

## What's inside

- **Stack:** React 19 + TypeScript + Vite 8 + Tailwind CSS v4
- **Structure:** a single-page site with 9 sections (Home, About, Education, Expertise,
  Projects, What I'm Building, Learning & Development, Vision, Contact), a slim left-side
  navigation rail on desktop, and a hamburger menu on mobile
- **Content:** every project, skill, and biographical fact comes from your GitHub profile
  (`sunilnarayan419-ui`) and the brief you provided. Nothing is invented — your LinkedIn
  profile is not publicly crawlable, so if there's content there you'd like reflected,
  add it to `src/data/profile.ts` directly

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
├── components/       # Navigation, Hero, About, Education, Expertise,
│                      Projects, ProjectRow, Building, DevelopmentPath,
│                      Philosophy, Vision, Contact, Footer, SectionHeading
├── data/             # profile.ts, projects.ts, sections.ts — edit these
│                      to update content without touching components
├── useReveal.ts      # small scroll-reveal hook used by every section
├── App.tsx
├── main.tsx
└── index.css         # design tokens (colors, fonts) live here as
                        Tailwind v4 @theme variables
```

## Updating content

- **Profile text, education, philosophy, vision:** edit `src/data/profile.ts`
- **Projects:** edit `src/data/projects.ts` — add, remove, or reorder entries; each one
  needs `number`, `name`, `category`, `description`, `technology`, `problem`, and `url`
- **Section order / labels in navigation:** edit `src/data/sections.ts`

## Design notes

- Palette: off-white paper background, near-black ink, a single restrained crimson
  accent used only for navigation state, section numbering, and hover/interactive
  moments — never as a background color
- Type: Fraunces (serif, display/headlines) paired with IBM Plex Sans (body/UI) and
  IBM Plex Mono (numbering and small data labels)
- Motion: one authored reveal on the hero at load, plus a single subtle fade-and-rise
  on scroll for each section — respects `prefers-reduced-motion`

## Deploying

The `dist/` folder from `npm run build` is a static site — it can be deployed as-is to
Vercel, Netlify, GitHub Pages, or any static host.
