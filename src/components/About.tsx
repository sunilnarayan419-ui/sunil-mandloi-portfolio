import Reveal from "./Reveal";

const highlights = ["Life Sciences", "Biotechnology", "Computation", "AI", "Business", "Strategy"];

export default function About() {
  return (
    <section id="about" className="relative border-b border-void-line py-28 sm:py-36">
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
      </div>
    </section>
  );
}
