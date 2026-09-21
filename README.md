# Sunil Mandloi — Portfolio (V2)

A light, editorial-scientific personal portfolio for **Sunil Mandloi**, an
Integrated M.Sc. Life Sciences student at the University of Hyderabad building
at the intersection of biotechnology, computation, AI, data and business
strategy.

This is a **content and depth upgrade** of the existing site — same stack,
same visual identity (warm ivory / graphite anchors / crimson accent,
"scientific instrument" reticle cards, ambient node field, scroll reveals),
substantially more information underneath it. Nothing about the architecture,
palette, or working components was thrown away; three new sections were added
and the existing ones were enriched with verified detail.

## What changed in this pass

- **Cleaned up dead code.** A previous iteration of this repo left behind an
  unused, unreferenced set of files from an earlier (dark-theme) design pass —
  `data/profile.ts`, `data/sections.ts`, `data/projects.ts`, `Navigation.tsx`,
  `DevelopmentPath.tsx`, `ProjectRow.tsx`, `SectionHeading.tsx`,
  `Building.tsx`, `useReveal.ts`, `theme.css`, and a duplicate profile image.
  None of these were imported by `App.tsx` or wired into the live site — they
  were removed as pure cleanup, no visible behavior changed.
- **Three new sections**, styled to match the existing component patterns
  exactly (`Reveal`, `reticle` cards, `ledger-num` labels):
  - **Experience** (`src/components/Experience.tsx`) — the Epochfolio R&D
    internship and participation in the University of Hyderabad Data Science
    Conference, sourced from what was provided directly rather than invented.
  - **Research** (`src/components/Research.tsx`) — pulled from the real,
    verified ResearchGate profile: bio, skill tags, and the one research
    question actually posted there. Framed explicitly as scientific
    engagement, not a publication list.
  - **Certifications** (`src/components/Certifications.tsx`) — Power BI for
    Beginners and Introduction to MS Excel (Microsoft/Simplilearn/SkillUp).
- **About** now includes the Problem → Research → Data → Analysis →
  Economics → Strategy → Decision → Output framework as a visual row, plus an
  explicit "Currently building" vs. "Exploring long-term" split so
  present-day skills are never conflated with future ambition.
- **Project cards** now expand into Problem / Approach / Result, not just a
  tech-and-status line — all six project entries were checked against the
  live GitHub profile (`github.com/sunilnarayan419-ui`) during this pass and
  are current; nothing was added or removed.
- **Navigation** now carries 9 sections; the breakpoint for the full desktop
  nav was moved from `md:` to `lg:` and the item numbers hide below `xl:` so
  it doesn't crowd on tablet-width screens.
- **SEO**: canonical tag, refreshed title/description, and a JSON-LD `Person`
  schema with the real social links (LinkedIn, GitHub, ResearchGate).

## Technology stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** — warm-ivory/off-white surfaces (`void`), graphite dark
  anchors (`graphite`) for Philosophy/Contact/Footer, near-black text
  (`paper`)/light text on dark (`mist`), and a deep crimson accent used only
  for labels, hairlines, hover states, and a few large accent lines
- No animation/3D library dependency — the ambient node field, parallax hero,
  scroll reveals, and card tilt are Canvas 2D, `IntersectionObserver`, and CSS
  transforms, kept light so the site stays fast on low-powered devices
- Fully respects `prefers-reduced-motion` and is keyboard-navigable throughout

## Project structure

```
sunil-mandloi-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── profile-photo.png
├── src/
│   ├── components/                 One component per section
│   ├── hooks/                      useReducedMotion, useMouseParallax
│   ├── data/content.ts             All copy, links and project/experience data — edit here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                      SEO/meta tags, JSON-LD, Google Fonts
├── netlify.toml                    Netlify build + SPA redirect config
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

> Note: this environment had no network access, so `npm install` /
> `npm run build` could not be executed here to produce a fresh `dist/` or
> verify the TypeScript build end-to-end. Every file was hand-checked for
> import resolution and JSX/brace balance, but please run `npm install &&
> npm run build` yourself before deploying and flag anything that doesn't
> compile.

## Deploying to Netlify

Unchanged from before — the project is already configured for the existing
Netlify site (`https://sunil-narayan.netlify.app`):

- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` includes an SPA redirect (`/* → /index.html`)

Push this to your GitHub repo and redeploy on Netlify (or `netlify deploy
--prod` from the CLI) — no configuration changes are needed.

## Editing content

Everything on the page — profile, nav labels, education, expertise domains,
projects (name, description, problem/approach/result, tech, GitHub link,
category, status), experience & activities, certifications, research
engagement, the development-journey stages, and the philosophy/vision copy —
lives in **`src/data/content.ts`**. Update it there rather than in the
components. Keep the "Currently building" vs. "Exploring long-term" split in
`currentFocus` honest as things change — that's the mechanism that keeps
future ambition from reading as present-day expertise.

## A note on the color token names

In `tailwind.config.js` the token named **`void`** holds the light background
colors and **`paper`** holds the dark text colors — the reverse of what the
names suggest, left over from an earlier dark version. Renaming every class
across every component is a larger, riskier diff than it's worth right now;
flagged here again in case it's worth doing as a dedicated pass later.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), a skip-to-content
  link, and visible focus rings throughout
- The ambient canvas background lowers its node count on small screens and
  renders a single static frame under `prefers-reduced-motion`
- All motion — hero parallax, card tilt, orbit rotation — is CSS/canvas driven
  and disabled the same way
