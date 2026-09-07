import Reveal from "./Reveal";
import NetworkField from "./NetworkField";
import { philosophy } from "../data/content";

export default function Philosophy() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-void-line py-28">
      <NetworkField className="opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        <span className="ledger-num text-sm text-crimson">Methodology</span>

        <div className="mt-10">
          {philosophy.map((p, i) => (
            <Reveal key={p.line} delayMs={i * 140}>
              <div className="flex items-start gap-5 border-l border-void-line py-3 pl-6">
                <span className="ledger-num mt-2 shrink-0 text-xs text-paper-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`font-display text-2xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
                    p.accent ? "text-crimson-bright" : "text-paper"
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
