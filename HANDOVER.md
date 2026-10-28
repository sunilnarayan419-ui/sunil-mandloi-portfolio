# Redesign hand-over

## Not run in the authoring environment (no network)
`npm install`, `npm run build` (tsc + vite) and `npm run verify:projects` could not run. What was run:
Tailwind 3.4 CSS generation, an esbuild bundle of `src/main.tsx` against React 19, strict type-check of
`src/data/content.ts`, and Chromium renders at 1360px and 390px (light and dark). Result: no horizontal
overflow, no broken in-page anchors, one h1, no console errors apart from the test harness image path.
Run `npm install && npm run build` before pushing; fix any type error it reports.

## Projects section (revision 3)
Lists exactly five projects: AlgalPathogenRisk-ML, Churn Handset Targeting, PaperLeet network biology,
Bio-Inspired Infrastructure, Home Credit Default Risk. Cell Division Timer, Novo Nordisk, Sales Performance
Tracker, Startup Runway Manager and Library Management System were removed on request. `verify:projects`
reads every repo link from `content.ts`; run it with network to confirm each link answers.

Evidence notes: the algal project has no risk model (the dataset has no outcome labels); churn ROC-AUC 0.693 is
a reported coursework test-set figure; network-biology-collection is a fork of the upstream PaperLeet library,
so the work is described as the merged upstream pull request; Home Credit is shown without metrics (not re-verified).

## Please confirm
1. GCI Scholar start date ("From September 2026") and whether the programme is still running.
2. PaperLeet pull request is linked as a search of your PRs; paste the exact URL if you have it.
4. Home Credit Default Risk: add metrics only if you can reproduce them from the notebook.
3. Certificate issuer is not shown, to avoid implying an official vendor credential.

## Git
```
git checkout -b portfolio-redesign
git add -A && git status
git diff --stat main
git commit -m "Redesign portfolio around Life Sciences x AI engineering, with evidence-labelled projects"
```
Preview: `npm run dev` or `npm run build && npm run preview`. Deploy: merge to `main`; Netlify builds as before.
Nothing has been pushed or deployed.
