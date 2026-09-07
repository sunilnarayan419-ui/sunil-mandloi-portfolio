# Sunil Mandloi — Portfolio (Light Scientific Redesign)

A light, editorial-scientific personal portfolio for **Sunil Mandloi**, an
Integrated M.Sc. Life Sciences student at the University of Hyderabad building
at the intersection of biotechnology, computation, AI, data and business
strategy.

> **Read this first:** I still can't reach a `sunil-mandloi-portfolio` repo
> under your GitHub account (`github.com/sunilnarayan419-ui/sunil-mandloi-portfolio`
> 404s, and your public profile lists no repo by that name) — so, as before,
> this is a revision of the project delivered in the previous round, not an
> edit pulled from your live codebase. If that repo is genuinely public now
> under a slightly different name/casing, send the exact URL and this can be
> reconciled against the real files directly.
>
> This revision retheme's that previous dark build to the light palette below,
> and fixes the actual cause of the "profile image not loading" issue: the
> image *was* resolving correctly at `/images/profile-photo.png` — it was just
> sitting under a heavy dark gradient wash inside a near-black circular frame,
> so it read as broken/invisible. That overlay and dark frame background are
> now removed entirely; the photo sits in a plain white frame with a thin
> crimson ring, per the brief.
>
> My sandbox still has no network access, so `npm install` / `npm run build`
> could not be run here to verify the build. Please run it yourself before
> deploying and share any error output if something doesn't compile.

## Technology stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS**, retuned to a light "scientific editorial" palette: warm
  white/off-white surfaces, near-black text, and a deep crimson (rose-800/600
  range, chosen for AA contrast on white) used only for labels, hairlines,
  hover states and a couple of large accent lines — never as a dominant color
- No 3D or animation library dependency — the immersive feel (ambient node
  field, parallax hero, scroll reveals, card tilt) is built with the Canvas 2D
  API, `IntersectionObserver`, and CSS transforms, kept deliberately light so
  the site stays fast on low-powered devices
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
(monogram in a light ring) since the original photo file wasn't accessible
from here. Drop your real photo in at the **exact same path and filename** —
`public/images/profile-photo.png`, lowercase, `.png` — and no code changes are
needed. Netlify's filesystem is case-sensitive even though your local machine's
may not be, so if you ever rename the file, make sure the case matches exactly
what's referenced in `src/components/Hero.tsx` (`/images/profile-photo.png`).

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

## A note on the color token names

In `tailwind.config.js` the token named **`void`** holds the light background
colors and **`paper`** holds the dark text colors — the reverse of what the
names suggest. That's left over from the earlier dark version; renaming every
class across every component was a much larger, riskier diff than leaving a
comment, so `void`/`paper` were re-pointed to new hex values instead. If you'd
like them renamed properly (e.g. `surface`/`ink`), it's a config rename plus a
find-and-replace across `src/components/`, and worth doing before this grows
much further.

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
