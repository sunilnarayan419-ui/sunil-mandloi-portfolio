# Sunil Mandloi — Portfolio (Redesign)

A dark, immersive personal portfolio for **Sunil Mandloi**, an Integrated M.Sc. Life
Sciences student at the University of Hyderabad building at the intersection of
biotechnology, computation, AI, data and business strategy.

> **Read this first:** this redesign was built as a fresh Vite + React + TypeScript
> project rather than an edit of the previous codebase, because the
> `sunil-mandloi-portfolio` repository wasn't reachable to read from (private, or
> under a different name) at build time. All real content — name, education,
> project list, GitHub/LinkedIn/email links — was pulled from your public GitHub
> profile and verified. If you'd like this merged back into your original repo's
> file structure instead, share repo access and it can be reconciled directly.
>
> This environment also has no network access, so `npm install` / `npm run build`
> could not be run or verified here. Please run the install + build steps below
> yourself before deploying, and open an issue with any error output if something
> doesn't compile — the code has been written and reviewed carefully, but hasn't
> been machine-verified.

## Technology stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with a custom dark design system (`tailwind.config.js`)
- No 3D or animation library dependency — the immersive feel (ambient node field,
  parallax hero, scroll reveals, card tilt) is built with the Canvas 2D API,
  `IntersectionObserver`, and CSS transforms, kept deliberately light so the site
  stays fast on low-powered devices
- Fully respects `prefers-reduced-motion` and is keyboard-navigable throughout

## Project structure

```
sunil-mandloi-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── profile-photo.png      ← placeholder, replace with your real photo
├── src/
│   ├── components/                 One component per section
│   ├── hooks/                      useReducedMotion, useMouseParallax
│   ├── data/content.ts             All real copy, links and project data — edit here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                      SEO/meta tags, Google Fonts
├── netlify.toml                    Netlify build + SPA redirect config
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Replace the profile photo

`public/images/profile-photo.png` currently contains a generated placeholder
(monogram in a ring) since the original photo file wasn't accessible from here.
Drop your real photo in at the same path and filename — no code changes needed.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deploying to Netlify

The project is already configured for the existing Netlify site
(`https://sunil-narayan.netlify.app`):

- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` includes an SPA redirect (`/* → /index.html`) so client-side
  routing/anchors keep working on refresh and direct links.

Push this project to your GitHub repo and connect/redeploy it on Netlify (or run
`netlify deploy --prod` from the CLI) — no other configuration changes should be
needed.

## Editing content

Everything that appears on the page — name, tagline, nav labels, education,
expertise domains, the project list (name, description, tech, GitHub link,
category, status), the development-journey stages, and the philosophy/vision
copy — lives in **`src/data/content.ts`**. Update it there rather than in the
components.

## Adding real project detail

Each project card can show an expandable panel (tech + status today). If you
want a fuller `Problem / Approach / Outcome` breakdown per project, add those
fields to the relevant object in `src/data/content.ts` and extend
`src/components/ProjectCard.tsx` to render them — left out here rather than
invented, per the brief's instruction not to fabricate project detail.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), a skip-to-content
  link, and visible focus rings throughout
- The ambient canvas background lowers its node count on small screens and
  renders a single static frame (no animation loop) under `prefers-reduced-motion`
- All motion — hero parallax, card tilt, orbit rotation — is CSS/canvas driven
  and disabled the same way
