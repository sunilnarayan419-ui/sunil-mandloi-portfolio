import Reveal from "./Reveal";

const terms = ["Biology", "Technology", "Data", "Economics", "Strategy"];

export default function Vision() {
  return (
    <section id="vision" className="relative border-b border-void-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">06 — Vision</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 font-display text-3xl font-medium text-paper sm:text-4xl">
            Where I'm heading
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-6 text-center">
          {terms.map((term, i) => (
            <Reveal key={term} delayMs={i * 90} className="flex items-center gap-x-5">
              <span className="font-display text-xl text-paper sm:text-3xl">{term}</span>
              {i < terms.length - 1 && (
                <span className="font-display text-xl text-crimson sm:text-3xl">+</span>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={terms.length * 90 + 100}>
          <div className="mx-auto mt-10 w-fit border-t border-void-line pt-10 text-center">
            <span className="font-display text-2xl text-paper-faint sm:text-3xl">=</span>
            <p className="mt-6 font-display text-3xl font-medium text-crimson-bright sm:text-4xl lg:text-5xl">
              Better life-science decisions
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
