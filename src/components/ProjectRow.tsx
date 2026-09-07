import type { Project } from '../data/projects'

export default function ProjectRow({ project, delay }: { project: Project; delay: number }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="reveal group grid gap-4 border-t border-line py-8 transition-colors lg:grid-cols-[64px_1.1fr_1.4fr_auto] lg:items-start lg:gap-8 lg:py-10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-crimson">
        {project.number}
      </span>

      <div>
        <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-crimson lg:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-ink-faint">{project.category}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technology.map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-ink-soft">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-md">
        <p className="text-sm leading-relaxed text-ink-soft">{project.description}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-faint">{project.problem}</p>
      </div>

      <span className="flex items-center gap-2 font-mono text-xs text-ink transition-colors group-hover:text-crimson lg:justify-self-end">
        View project
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  )
}
