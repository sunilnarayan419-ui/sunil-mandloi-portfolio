import Reveal from "./Reveal";
import ProjectCard, { type CardTone } from "./ProjectCard";
import { projects, profile } from "../data/content";

// Mixed card treatment so projects don't read as identical white
// rectangles — ivory, warm-gray, and an occasional dark graphite card.
const tones: CardTone[] = ["ivory", "warm", "graphite"];

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-void-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="ledger-num text-sm text-crimson">04 — Projects</span>
            </Reveal>
            <Reveal delayMs={80}>
              <h2 className="mt-6 max-w-xl font-display text-3xl font-medium text-paper sm:text-4xl">
                Curated work, not everything.
              </h2>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper-dim underline decoration-void-line underline-offset-4 hover:text-crimson-bright"
            >
              Full GitHub profile ↗
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delayMs={(i % 3) * 90} className="h-full">
              <ProjectCard project={project} tone={tones[i % tones.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
