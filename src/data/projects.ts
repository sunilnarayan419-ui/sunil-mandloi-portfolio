// The project list lives in content.ts, the single source of truth for the site.
// This module only re-exports it so that existing imports of "../data/projects" keep working
// and there is exactly one `Project` type in the codebase.
export type { Project } from "./content";
export { projects } from "./content";
