import Reveal from "./Reveal";
import { journeyStages } from "../data/content";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">08 — Development</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Building toward life-science strategy.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-crimson via-void-line to-void-line sm:left-1/2"
          />
          <ol className="space-y-10">
            {journeyStages.map((stage, i) => (
              <Reveal key={stage} delayMs={i * 50} as="li">
                <div
                  className={`relative flex items-center gap-6 sm:w-1/2 ${
                    i % 2 === 1 ? "sm:ml-auto sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="ledger-num absolute -left-[3px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-crimson sm:static" />
                  <div
                    className={`ml-8 flex items-baseline gap-3 sm:ml-0 ${
                      i % 2 === 1 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="ledger-num text-xs text-paper-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-paper sm:text-xl">{stage}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
