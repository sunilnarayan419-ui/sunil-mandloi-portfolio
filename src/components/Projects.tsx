import Reveal from "./Reveal";
import ProjectCard, { type CardTone } from "./ProjectCard";
import { projects, profile } from "../data/content";

const flagship = projects.filter((p) => p.tier === "flagship");
const standard = projects.filter((p) => p.tier === "standard");
const foundation = projects.filter((p) => p.tier === "foundation");

// Mixed card treatment so projects don't read as identical rectangles.
const flagshipTones: CardTone[] = ["ivory", "graphite"];
const standardTones: CardTone[] = ["warm", "ivory", "warm"];

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-void-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="ledger-num text-sm text-crimson">05 — Projects</span>
            </Reveal>
            <Reveal delayMs={80}>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
                Real repositories, read the way a reviewer would.
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="mt-5 max-w-prose text-sm leading-relaxed text-paper-dim sm:text-base">
                Everything below is a public repository on my GitHub. Each card says what the
                problem was, how I approached it and what exists today, including where a repo is
                still unfinished.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper-dim underline decoration-void-line underline-offset-4 hover:text-crimson-bright"
            >
              Full GitHub profile ↗
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {flagship.map((project, i) => (
            <Reveal key={project.name} delayMs={i * 90} className="h-full">
              <ProjectCard project={project} tone={flagshipTones[i % flagshipTones.length]} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standard.map((project, i) => (
            <Reveal key={project.name} delayMs={(i % 3) * 90} className="h-full">
              <ProjectCard project={project} tone={standardTones[i % standardTones.length]} />
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={60}>
          <h3 className="ledger-num mt-16 text-xs uppercase tracking-wide text-paper-faint">
            Practice and scaffolds · work in progress
          </h3>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {foundation.map((project, i) => (
            <Reveal key={project.name} delayMs={i * 90} className="h-full">
              <ProjectCard project={project} tone="warm" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
