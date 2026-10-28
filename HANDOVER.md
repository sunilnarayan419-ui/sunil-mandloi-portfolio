# Redesign hand-over

## Not run in the authoring environment (no network)
`npm install`, `npm run build` (tsc + vite) and `npm run verify:projects` could not run. What was run:
Tailwind 3.4 CSS generation, an esbuild bundle of `src/main.tsx` against React 19, strict type-check of
`src/data/content.ts`, and Chromium renders at 1360px and 390px (light and dark). Result: no horizontal
overflow, no broken in-page anchors, one h1, no console errors apart from the test harness image path.
Run `npm install && npm run build` before pushing; fix any type error it reports.

## Please confirm (owner-only facts)
1. cell_division_timer and novo_nordisk_insulin_india_strategy were on the previous site but are not in the
   17-repository list supplied. `npm run verify:projects` will tell you; delete the entries in `secondaryGroups` if they 404.
2. GCI Scholar start date ("From September 2026") and whether the programme is still running.
3. PaperLeet pull request: shown as "2026" with a search link; paste the exact PR URL into `experience` and `projects` if you want it.
4. Home Credit Default Risk: shown without metrics (not re-verified). Add them from the notebook if reproducible.
5. Certificate issuer is not shown (the earlier "Microsoft / Simplilearn / SkillUp" wording implied an official vendor credential).
6. network-biology-collection is a fork of Hongyang-Du/PaperLeet whose README describes the upstream ML-papers library;
   the network-biology work itself is the merged upstream PR. The site links both and says so.

## Removed from the previous site
Finance-Logistics-100-Python-Projects (scaffold only, not in your list), the 11-section layout, canvas network
animation and parallax. Unused portrait PNGs in `public/images` were left in place.

## Git
```
git checkout -b portfolio-redesign
git add -A && git status
git diff --stat main
git commit -m "Redesign portfolio around Life Sciences x AI engineering, with evidence-labelled projects"
```
Preview: `npm run dev` or `npm run build && npm run preview`. Deploy: merge to `main`; Netlify builds as before.
Nothing has been pushed or deployed.
