import { useRef, useState, type MouseEvent } from "react";
import { categoryMeta, projects } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Project = (typeof projects)[number];
export type CardTone = "ivory" | "warm" | "graphite";

export default function ProjectCard({
  project,
  tone = "ivory",
}: {
  project: Project;
  tone?: CardTone;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const meta = categoryMeta[project.category];
  const isDark = tone === "graphite";

  const surface =
    tone === "graphite"
      ? "reticle-dark border-graphite-line bg-graphite text-mist"
      : tone === "warm"
        ? "reticle border-void-line bg-void-raised/70 text-paper"
        : "reticle border-void-line bg-void-panel/60 text-paper";

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 6 });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className={`group relative flex h-full flex-col border p-7 ${surface}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`ledger-num text-xs ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>
          {project.number}
        </span>
        <span
          className={`ledger-num rounded-sm border px-2 py-1 text-[11px] ${
            isDark ? "border-graphite-line text-crimson-bright" : "border-void-line text-crimson"
          }`}
        >
          {meta.label}
        </span>
      </div>

      <h3 className={`mt-5 font-display text-xl font-medium sm:text-2xl ${isDark ? "text-mist" : "text-paper"}`}>
        {project.name}
      </h3>

      <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-mist-dim" : "text-paper-dim"}`}>
        {project.description}
      </p>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`mt-5 self-start text-xs underline underline-offset-4 transition-colors hover:text-crimson-bright ${
          isDark ? "text-mist-faint decoration-graphite-line" : "text-paper-faint decoration-void-line"
        }`}
      >
        {open ? "Hide details" : "View details"}
      </button>

      {open && (
        <div className={`mt-4 space-y-4 border-t pt-4 text-sm ${isDark ? "border-graphite-line" : "border-void-line"}`}>
          <p className={isDark ? "text-mist-dim" : "text-paper-dim"}>
            <span className={`ledger-num block text-[11px] ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>
              Problem
            </span>
            {project.problem}
          </p>
          <p className={isDark ? "text-mist-dim" : "text-paper-dim"}>
            <span className={`ledger-num block text-[11px] ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>
              Approach
            </span>
            {project.approach}
          </p>
          <p className={isDark ? "text-mist-dim" : "text-paper-dim"}>
            <span className={`ledger-num block text-[11px] ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>
              Result
            </span>
            {project.result}
          </p>
          <div className={`flex flex-wrap items-center justify-between gap-3 border-t pt-3 ${isDark ? "border-graphite-line" : "border-void-line"}`}>
            <p className={isDark ? "text-mist-dim" : "text-paper-dim"}>
              <span className={`ledger-num ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>Built with </span>
              {project.tech.join(", ")}
            </p>
            <p className={isDark ? "text-mist-dim" : "text-paper-dim"}>
              <span className={`ledger-num ${isDark ? "text-mist-faint" : "text-paper-faint"}`}>Status </span>
              {project.status}
            </p>
          </div>
        </div>
      )}

      <div className="mt-auto pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-sm transition-colors group-hover:border-crimson group-hover:text-crimson-bright ${
            isDark ? "border-mist/20 text-mist" : "border-paper/20 text-paper"
          }`}
        >
          View on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
