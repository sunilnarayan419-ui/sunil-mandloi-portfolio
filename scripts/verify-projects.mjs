#!/usr/bin/env node
// Keeps the Projects section honest.
//
//   npm run verify:projects
//
// 1. Every repository linked from src/data/content.ts must still respond 200
//    on github.com (a deleted or private repo returns 404).
// 2. Any public repo on the profile that is NOT in content.ts is reported, so a
//    new project doesn't silently go missing from the site.
//
// It uses plain github.com pages, not the REST API, so there is no rate limit
// or token needed. It is deliberately NOT part of `npm run build`: a network
// hiccup should never block a deploy.

import { readFileSync } from "node:fs";

const OWNER = "sunilnarayan419-ui";
const src = readFileSync(new URL("../src/data/content.ts", import.meta.url), "utf8");

const linked = [...src.matchAll(/github:\s*"https:\/\/github\.com\/([^/"]+)\/([^/"]+)"/g)].map((m) => m[2]);
// Repos that exist on the profile but are intentionally not shown as projects.
const intentionallyOmitted = new Set([OWNER, "sunil-mandloi-portfolio"]);

let failed = false;

for (const repo of linked) {
  const res = await fetch(`https://github.com/${OWNER}/${repo}`, { method: "HEAD", redirect: "follow" });
  const ok = res.status === 200;
  if (!ok) failed = true;
  console.log(`${ok ? "OK  " : "FAIL"} ${repo} (HTTP ${res.status})`);
}

const listing = await fetch(`https://github.com/${OWNER}?tab=repositories`);
if (listing.ok) {
  const html = await listing.text();
  const onProfile = [...new Set([...html.matchAll(new RegExp(`href="/${OWNER}/([^"/?#]+)"`, "g")).map((m) => m[1])])];
  const missing = onProfile.filter((r) => !linked.includes(r) && !intentionallyOmitted.has(r));
  if (missing.length) {
    console.log(`\nOn GitHub but not on the site: ${missing.join(", ")}`);
    console.log("Add them to src/data/content.ts, or add them to intentionallyOmitted in this script.");
  }
} else {
  console.log(`\n(Could not read the profile listing: HTTP ${listing.status})`);
}

if (failed) {
  console.error("\nOne or more project links are broken. Remove or fix them before deploying.");
  process.exit(1);
}
console.log("\nAll linked project repositories exist.");
