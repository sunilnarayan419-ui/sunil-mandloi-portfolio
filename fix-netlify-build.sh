#!/usr/bin/env bash
# Run from the root of sunil-mandloi-portfolio. Removes legacy files that the redesign replaced.
# src/data/projects.ts is one of them: it contains the excluded repository entry (name + url) and is imported only
# by the legacy src/components/ProjectRow.tsx, which the new App.tsx no longer uses.
# It does NOT touch scripts/check-content.mjs. Nothing is committed or pushed.
set -euo pipefail
git rm --ignore-unmatch -r \
  src/components/About.tsx src/components/Building.tsx src/components/Certifications.tsx \
  src/components/DataBusiness.tsx src/components/DevelopmentPath.tsx src/components/Education.tsx \
  src/components/Expertise.tsx src/components/Footer.tsx src/components/Journey.tsx \
  src/components/Navigation.tsx src/components/NetworkField.tsx src/components/Philosophy.tsx \
  src/components/ProjectCard.tsx src/components/ProjectRow.tsx src/components/Reveal.tsx \
  src/components/SectionHeading.tsx src/components/Vision.tsx \
  src/data/profile.ts src/data/projects.ts src/data/sections.ts \
  src/hooks/useMouseParallax.ts src/hooks/useReducedMotion.ts src/useReveal.ts theme.css
echo "--- guard ---"; node scripts/check-content.mjs
echo "--- full build ---"; npm install && npm run build
git status --short
