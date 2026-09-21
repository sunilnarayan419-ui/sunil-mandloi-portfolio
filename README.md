# Sunil Mandloi — Portfolio

Personal portfolio of **Sunil Mandloi**, a second-year Integrated M.Sc. Life Sciences
student at the University of Hyderabad working across biotechnology, computational biology,
Python and data analytics, and life-science business strategy.

Live: https://sunil-narayan.netlify.app/

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS 3 — warm-ivory surfaces, graphite anchors, crimson accent
- No animation or 3D library: the network field is Canvas 2D; reveals use `IntersectionObserver`
- All motion respects `prefers-reduced-motion`
- Deployed on Netlify (`netlify.toml`: build, SPA redirect, security and cache headers)

## Develop

```bash
npm install
npm run dev              # local dev server
npm run build            # type-check + production build → dist/
npm run preview          # serve the production build
npm run verify:projects  # check the Projects section against GitHub (see below)
```

## Where things live

```
src/data/content.ts      Every piece of copy, link, project, experience entry — edit here
src/components/          One component per section (Hero, About, Education, Experience,
                         Expertise, Projects, DataBusiness, Research, Journey, Contact …)
src/hooks/               useReducedMotion, useMouseParallax
public/                  favicon, images (WebP portrait, JPG social card), robots.txt, sitemap.xml
scripts/verify-projects.mjs
```

Section order: Hero → About → Education → Experience → Skills → Projects → Data & Business →
Research → Direction → Vision → Contact.

## Content rules

1. **Projects mirror GitHub.** Only repositories that exist at
   `github.com/sunilnarayan419-ui` appear, and every claim on a card must be traceable to that
   repo's README or code. Run `npm run verify:projects` before deploying; it fails on a dead
   link and lists public repos that are missing from the site. It uses plain github.com pages,
   so it needs no token, and it is deliberately not part of `npm run build`.
2. **Status is stated honestly.** `tier` and `status` in `content.ts` distinguish finished work
   from practice repos and scaffolds. Do not upgrade a status until the code exists.
3. **Python is the only programming language presented as a skill.** Project tags list Python
   libraries the repo actually imports or declares.
4. **Now vs later.** `currentFocus.building` is work under way; `currentFocus.exploring` and the
   "Direction" stages carry a status label so ambition never reads as expertise.
5. **No invented credentials.** The hackathon entry is participation. There are no publications
   (ResearchGate shows one question and none). The Novo Nordisk repo is an independent case study.
6. Public contact: `sunilnarayan419@gmail.com`; no phone number is published.

## Accessibility and performance notes

- Semantic landmarks, skip link to `#main`, real anchor links in the nav, Escape closes the
  mobile menu, visible focus rings, `aria-expanded` / `aria-pressed` on interactive controls
- Small-text colours meet WCAG AA (`paper-faint` and `mist-faint` were adjusted; `crimson-soft`
  is used for small crimson text on graphite)
- Hero portrait is a ~43 KB WebP (was a 1.9 MB PNG); hashed assets are cached immutably
- Google Fonts load with `display=swap`

## Deploying

Unchanged: Netlify builds with `npm run build` and publishes `dist/`. Push to `main`.
