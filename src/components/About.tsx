import Reveal from "./Reveal";
import { approach, currentFocus } from "../data/content";

const highlights = ["Life Sciences", "Biotechnology", "Computation", "AI", "Business", "Strategy"];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">01 — About</span>
        </Reveal>

        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-paper sm:text-4xl lg:text-5xl">
            I'm an Integrated M.Sc. Life Sciences student at the University of Hyderabad,
            building at the intersection of life sciences, biotechnology, computation, data,
            AI and business.
          </h2>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mt-10 max-w-prose text-base leading-relaxed text-paper-dim sm:text-lg">
            Most of what I build starts as a biology question and ends up as a spreadsheet,
            a script, or a model — because the parts of this field I find most interesting
            live where a lab result has to turn into a decision someone can act on.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {highlights.map((word, i) => (
            <Reveal key={word} delayMs={i * 60}>
              <span className="inline-block rounded-sm border border-void-line px-4 py-2 font-display text-sm text-paper-dim">
                {word}
              </span>
            </Reveal>
          ))}
        </div>

        {/* The working lens every problem gets run through. */}
        <Reveal delayMs={420}>
          <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-void-line pt-10">
            {approach.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="ledger-num text-xs text-paper-dim sm:text-sm">{step}</span>
                {i < approach.length - 1 && (
                  <span className="text-xs text-crimson sm:text-sm" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Currently building vs. long-term interest — kept explicitly
            separate so future ambition never reads as present expertise. */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal delayMs={480} className="h-full">
            <div className="reticle h-full border border-void-line bg-void-panel/60 p-7">
              <p className="ledger-num text-xs text-crimson">Currently building</p>
              <ul className="mt-5 space-y-3">
                {currentFocus.building.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={540} className="h-full">
            <div className="reticle h-full border border-void-line bg-void-panel/60 p-7">
              <p className="ledger-num text-xs text-paper-faint">Exploring long-term</p>
              <ul className="mt-5 space-y-3">
                {currentFocus.exploring.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
