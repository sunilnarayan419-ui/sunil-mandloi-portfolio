import Reveal from "./Reveal";
import NetworkField from "./NetworkField";
import { philosophy } from "../data/content";

export default function Philosophy() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-graphite-line bg-graphite bg-scientific-grid-dark py-28">
      <NetworkField className="opacity-25" tone="dark" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-crimson/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        <span className="ledger-num text-sm text-crimson-bright">Methodology</span>

        <div className="mt-10">
          {philosophy.map((p, i) => (
            <Reveal key={p.line} delayMs={i * 140}>
              <div className="flex items-start gap-5 border-l border-graphite-line py-3 pl-6">
                <span className="ledger-num mt-2 shrink-0 text-xs text-mist-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`font-display text-2xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
                    p.accent ? "text-crimson-bright" : "text-mist"
                  }`}
                >
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
