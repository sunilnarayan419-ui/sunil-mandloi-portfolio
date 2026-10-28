#!/usr/bin/env node
// Build guard for the owner's exclusion rule: one repository must never appear on the site.
// It scans everything that ships (source, HTML, public files) for the repository name in any
// common spelling. The name is assembled from parts so this file does not trip its own check.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const parts = ["mini", "bio", "python", "projects"];
const pattern = new RegExp(parts.join("[-_ .]?"), "i");
const roots = ["src", "public", "index.html", "netlify.toml"];
const textExt = new Set([".ts", ".tsx", ".css", ".html", ".json", ".xml", ".txt", ".svg", ".toml", ".md", ""]);

const hits = [];
function walk(p) {
  const st = statSync(p);
  if (st.isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)));
  if (!textExt.has(extname(p))) return;
  if (pattern.test(readFileSync(p, "utf8"))) hits.push(p);
}
roots.forEach((r) => { try { walk(r); } catch { /* optional path */ } });

if (hits.length) {
  console.error("Excluded repository referenced in: " + hits.join(", "));
  process.exit(1);
}
console.log("check-content: no excluded repository references found.");
