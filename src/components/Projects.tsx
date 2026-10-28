import type { ReactNode } from "react";
import Section from "./Section";
import { projects, profile, type Project, type StatusKind } from "../data/content";

const badge: Record<StatusKind, string> = {
  prototype: "bg-amber-soft text-amber",
  conceptual: "bg-amber-soft text-amber",
  notebook: "bg-sunk text-muted",
  implemented: "bg-accent-soft text-accent",
  contribution: "bg-accent-soft text-accent",
};

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      {children}
    </div>
  );
}

function Text({ children }: { children: string }) {
  return <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>;
}

function Dossier({ p }: { p: Project }) {
  return (
    <details open={p.open} className="group border-b border-line first:border-t">
      <summary className="flex cursor-pointer items-start gap-4 py-6 focus-visible:outline-offset-[-2px]">
        <span aria-hidden="true" className="chev mt-1.5 text-faint transition-transform">▸</span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-display text-xl font-semibold text-ink sm:text-2xl">{p.name}</span>
            <span className={`rounded px-2 py-0.5 text-xs font-medium ${badge[p.statusKind]}`}>{p.status}</span>
          </span>
          <span className="mt-1 block max-w-prose text-sm leading-relaxed text-muted sm:text-base">{p.positioning}</span>
        </span>
      </summary>

      <div className="grid gap-8 pb-10 sm:pl-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Block title="The problem"><Text>{p.problem}</Text></Block>
          <Block title="Why it matters"><Text>{p.why}</Text></Block>
          <Block title="My contribution"><Text>{p.contribution}</Text></Block>
          <Block title="What I learned"><Text>{p.learned}</Text></Block>
        </div>
        <div className="space-y-6">
          <Block title="Built so far"><List items={p.implemented} /></Block>
          <Block title="Not done, or not claimed"><List items={p.notYet} /></Block>
          {p.evidence && (
            <Block title="Evidence">
              <p className="mt-2 rounded border border-line bg-surface p-3 text-sm leading-relaxed text-ink">{p.evidence}</p>
            </Block>
          )}
          <Block title="Tools">
            <ul aria-label="Tools" className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <li key={t} className="rounded border border-line px-2 py-1 text-xs text-muted">{t}</li>
              ))}
            </ul>
          </Block>
          <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-4">
              Repository<span className="sr-only"> for {p.name} (opens in a new tab)</span>
            </a>
            {p.more?.map((m) => (
              <a key={m.href} href={m.href} target="_blank" rel="noopener noreferrer" className="text-muted underline underline-offset-4 hover:text-accent">
                {m.label}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </p>
        </div>
      </div>
    </details>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lead="Five projects. Each says what exists, what does not, and what the evidence is. Prototypes and conceptual work are labelled as such."
    >
      <div>
        {projects.map((p) => (
          <Dossier key={p.id} p={p} />
        ))}
      </div>
      <p className="mt-8 text-sm text-faint">
        Source for every project is on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
          GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </Section>
  );
}
