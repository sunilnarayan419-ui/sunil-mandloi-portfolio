import { useRef, useState, type MouseEvent } from "react";
import { categoryMeta, projects } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Project = (typeof projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const meta = categoryMeta[project.category];

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
      className="reticle group relative flex h-full flex-col border border-void-line bg-void-panel/60 p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="ledger-num text-xs text-paper-faint">{project.number}</span>
        <span className="ledger-num rounded-sm border border-void-line px-2 py-1 text-[11px] text-crimson">
          {meta.label}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-medium text-paper sm:text-2xl">
        {project.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-paper-dim">{project.description}</p>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 self-start text-xs text-paper-faint underline decoration-void-line underline-offset-4 transition-colors hover:text-crimson-bright"
      >
        {open ? "Hide details" : "View details"}
      </button>

      {open && (
        <div className="mt-4 space-y-2 border-t border-void-line pt-4 text-sm">
          <p className="text-paper-dim">
            <span className="ledger-num text-paper-faint">Built with </span>
            {project.tech.join(", ")}
          </p>
          <p className="text-paper-dim">
            <span className="ledger-num text-paper-faint">Status </span>
            {project.status}
          </p>
        </div>
      )}

      <div className="mt-auto pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-paper/20 px-4 py-2 text-sm text-paper transition-colors group-hover:border-crimson group-hover:text-crimson-bright"
        >
          View on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
