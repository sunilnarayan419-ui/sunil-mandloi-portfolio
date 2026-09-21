import { useRef, useState, type MouseEvent } from "react";
import { categoryMeta, type Project } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

export type CardTone = "ivory" | "warm" | "graphite";

const steps = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "result", label: "Result" },
] as const;

export default function ProjectCard({
  project,
  tone = "ivory",
}: {
  project: Project;
  tone?: CardTone;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const flagship = project.tier === "flagship";
  const [open, setOpen] = useState(flagship);
  const reduced = useReducedMotion();
  const meta = categoryMeta[project.category];
  const isDark = tone === "graphite";
  const panelId = `project-${project.number}-details`;

  const surface =
    tone === "graphite"
      ? "reticle-dark border-graphite-line bg-graphite text-mist"
      : tone === "warm"
        ? "reticle border-void-line bg-void-raised/70 text-paper"
        : "reticle border-void-line bg-void-panel/60 text-paper";

  const text = isDark ? "text-mist-dim" : "text-paper-dim";
  const faint = isDark ? "text-mist-faint" : "text-paper-faint";
  const line = isDark ? "border-graphite-line" : "border-void-line";
  const accent = isDark ? "text-crimson-soft" : "text-crimson";

  // Tilt is a light, decorative flourish on the compact cards only; the
  // flagship cards hold more reading content, so they stay still.
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced || flagship || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -5, ry: px * 5 });
  };
  const handleLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className={`group relative flex h-full flex-col border p-7 sm:p-8 ${surface}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`ledger-num text-xs ${faint}`}>{project.number}</span>
        <span className={`ledger-num rounded-sm border px-2 py-1 text-[11px] ${line} ${accent}`}>
          {meta.label}
        </span>
      </div>

      <h3
        className={`mt-5 font-display font-medium ${isDark ? "text-mist" : "text-paper"} ${
          flagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {project.name}
      </h3>

      <p className={`mt-3 text-sm leading-relaxed ${text}`}>{project.description}</p>

      {/* Technology + status are always visible: they are the first thing a
          reviewer scans for. */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology">
        {project.tech.map((t) => (
          <li
            key={t}
            className={`rounded-sm border px-2.5 py-1 text-xs ${line} ${text}`}
          >
            {t}
          </li>
        ))}
      </ul>

      {!flagship && (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={`mt-5 self-start text-xs underline underline-offset-4 transition-colors hover:text-crimson-bright ${faint} ${
            isDark ? "decoration-graphite-line" : "decoration-void-line"
          }`}
        >
          {open ? "Hide problem → approach → result" : "Show problem → approach → result"}
        </button>
      )}

      {open && (
        <dl id={panelId} className={`mt-5 space-y-4 border-t pt-5 text-sm ${line}`}>
          {steps.map(({ key, label }) => (
            <div key={key}>
              <dt className={`ledger-num text-[11px] uppercase tracking-wide ${faint}`}>{label}</dt>
              <dd className={`mt-1 leading-relaxed ${text}`}>{project[key]}</dd>
            </div>
          ))}
        </dl>
      )}

      {project.caveat && (
        <p className={`mt-5 border-l-2 pl-3 text-xs leading-relaxed ${faint} ${isDark ? "border-crimson-soft/60" : "border-crimson/40"}`}>
          {project.caveat}
        </p>
      )}

      <div className={`mt-auto flex flex-wrap items-center justify-between gap-3 pt-7`}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub (opens in a new tab)`}
          className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-sm transition-colors hover:border-crimson hover:text-crimson-bright group-hover:border-crimson group-hover:text-crimson-bright ${
            isDark ? "border-mist/20 text-mist" : "border-paper/20 text-paper"
          }`}
        >
          View on GitHub
          <span aria-hidden="true">↗</span>
        </a>
        <p className={`ledger-num text-[11px] ${faint}`}>
          <span className="sr-only">Status: </span>
          {project.status}
        </p>
      </div>
    </article>
  );
}
