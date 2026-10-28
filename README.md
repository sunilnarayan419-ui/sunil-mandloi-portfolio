# Sunil Mandloi — Portfolio

Live: https://sunil-narayan.netlify.app/

Positioning: Life Sciences × AI Engineering × Computational Biology. An Integrated M.Sc. student with
demonstrable projects, written so every claim can be traced to a repository or profile.

## Stack

Vite + React 18 + TypeScript (strict) + Tailwind CSS 3. No animation or UI library. Light theme by default,
dark theme follows the system setting. Netlify config unchanged (`netlify.toml`).

## Develop

```bash
npm install
npm run dev              # local dev server
npm run build            # content guard + type-check + production build -> dist/
npm run preview          # serve the production build
npm run check:content    # fails if an excluded repository is referenced anywhere that ships
npm run verify:projects  # needs network: every linked GitHub repo must answer 200
```

## Where things live

```
src/data/content.ts   All copy, links, projects, experience, skills. Edit here.
src/components/       Nav, Hero (+ snapshot), Projects, Framework, Research, Experience, Skills, Contact
src/index.css         Colour tokens (CSS variables) for light and dark
scripts/              check-content.mjs (exclusion guard), verify-projects.mjs (link check)
```

## Content rules

1. Evidence order: repository code and README, then the GitHub/research overview, then LinkedIn, then ResearchGate.
2. Prototype, conceptual and notebook work carries its own label. No result is shown unless a repository documents it.
3. The Projects section lists exactly five projects chosen by the owner (AlgalPathogenRisk-ML, Churn Handset Targeting, PaperLeet network biology, Bio-Inspired Infrastructure, Home Credit Default Risk). Change only on the owner's instruction. The only numeric result shown is the churn model's reported test-set ROC-AUC, labelled as coursework data.
4. One repository is deliberately excluded by the owner. `check:content` runs before every build and
   `verify:projects` ignores it, so it cannot reappear through a project list or a GitHub sync.
5. No publications, awards, user numbers or skill percentages. GCI is described as a programme, not a placement.
6. Public contact is the email address only. No phone number or address.

## Deploying

Unchanged: Netlify runs `npm run build` and publishes `dist/`. Push to `main`.
