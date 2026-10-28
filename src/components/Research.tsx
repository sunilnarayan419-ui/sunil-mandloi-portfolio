import Section from "./Section";
import { inquiries, researchAreas } from "../data/content";

export default function Research() {
  return (
    <Section
      id="research"
      title="Research interests"
      lead="Where my current coursework and projects point. The two inquiries are questions I'm studying, not findings or publications."
      tone="sunk"
    >
      <ul className="flex flex-wrap gap-2" aria-label="Research areas">
        {researchAreas.map((a) => (
          <li key={a} className="rounded border border-line bg-surface px-3 py-1.5 text-sm text-ink">{a}</li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {inquiries.map((q) => (
          <article key={q.title}>
            <h3 className="font-display text-xl font-semibold text-ink">{q.title}</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {q.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            <p className="mt-4 rounded bg-amber-soft px-3 py-2 text-sm text-amber">{q.status}</p>
            {q.href && (
              <p className="mt-3 text-sm">
                <a href={q.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                  Read the question on ResearchGate<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
