import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">03 — Experience</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Applied research, not just coursework.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {experience.map((role, i) => (
            <Reveal key={role.id} delayMs={i * 100}>
              <div className="reticle border border-void-line bg-void-panel/60 p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="ledger-num text-xs text-crimson">{role.kind}</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-paper sm:text-2xl">
                      {role.role}
                    </h3>
                    <p className="mt-1 text-base text-paper-dim">{role.org}</p>
                  </div>
                  <div className="text-right">
                    <p className="ledger-num text-sm text-paper-faint">{role.period}</p>
                    <p className="mt-1 text-sm text-paper-faint">{role.location}</p>
                  </div>
                </div>

                <p className="mt-6 max-w-prose text-sm leading-relaxed text-paper-dim sm:text-base">
                  {role.summary}
                </p>

                <ul className="mt-6 space-y-3 border-t border-void-line pt-6">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-paper-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
