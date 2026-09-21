import Reveal from "./Reveal";
import { journeyStages } from "../data/content";

type Status = (typeof journeyStages)[number]["status"];

const badge: Record<Status, string> = {
  Foundation: "border-paper-dim/40 text-paper-dim",
  Building: "border-crimson bg-crimson/10 text-crimson",
  Exploring: "border-void-line text-paper-dim",
  "Long-term direction": "border-dashed border-paper-faint/60 text-paper-faint",
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">08 — Direction</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Building toward life-science strategy.
          </h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-paper-dim sm:text-base">
            Each stage is labelled with where it honestly stands: in place, being built now, being
            explored, or a long-term direction rather than something I've done.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-crimson via-void-line to-void-line sm:left-1/2"
          />
          <ol className="space-y-10">
            {journeyStages.map((item, i) => (
              <Reveal key={item.stage} delayMs={i * 50} as="li">
                <div
                  className={`relative flex items-center gap-6 sm:w-1/2 ${
                    i % 2 === 1 ? "sm:ml-auto sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="ledger-num absolute -left-[3px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-crimson sm:static" />
                  <div
                    className={`ml-8 flex flex-wrap items-baseline gap-x-3 gap-y-1.5 sm:ml-0 ${
                      i % 2 === 1 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="ledger-num text-xs text-paper-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-paper sm:text-xl">{item.stage}</span>
                    <span
                      className={`ledger-num rounded-sm border px-2 py-0.5 text-[10px] uppercase tracking-wide ${badge[item.status]}`}
                    >
                      {item.status}
                    </span>
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
