import Section from "./Section";
import { certifications, certNote, experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((e) => (
          <li key={e.role + e.org} className="grid gap-3 border-t border-line pt-6 md:grid-cols-[14rem_1fr] md:gap-8">
            <div>
              <p className="text-sm text-faint">{e.period}</p>
              <p className="mt-1 text-sm text-muted">{e.kind}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{e.role}</h3>
              <p className="text-sm text-muted">{e.org}</p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">{e.summary}</p>
              {e.points.length > 0 && (
                <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {e.evidence && <p className="mt-3 max-w-prose text-sm text-faint">{e.evidence}</p>}
              {e.href && (
                <p className="mt-3 text-sm">
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                    {e.hrefLabel}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t border-line pt-6">
        <h3 className="font-display text-lg font-semibold text-ink">Short courses</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="text-sm leading-relaxed">
              <p className="font-medium text-ink">{c.name} <span className="font-normal text-faint">· completed {c.date}</span></p>
              <p className="mt-1 text-muted">{c.topics}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-faint">{certNote}</p>
      </div>
    </Section>
  );
}
