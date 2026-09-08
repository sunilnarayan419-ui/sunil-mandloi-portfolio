import { useState } from "react";
import Reveal from "./Reveal";
import { expertiseDomains } from "../data/content";

const angles = [-90, 0, 90, 180];

export default function Expertise() {
  const [active, setActive] = useState<string>(expertiseDomains[0].id);
  const activeDomain = expertiseDomains.find((d) => d.id === active) ?? expertiseDomains[0];

  return (
    <section
      id="expertise"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">03 — Expertise</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Four domains, one lens.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Orbit diagram */}
          <Reveal delayMs={140} className="mx-auto w-full max-w-sm">
            <div className="relative aspect-square w-full">
              <div
                aria-hidden="true"
                className="absolute inset-[18%] animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-void-line motion-reduce:animate-none"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="reticle flex h-20 w-20 items-center justify-center rounded-full border border-crimson/40 bg-void-panel font-display text-xs text-crimson">
                  CORE
                </div>
              </div>

              {expertiseDomains.map((domain, i) => {
                const angle = (angles[i] * Math.PI) / 180;
                const radius = 42;
                const left = 50 + radius * Math.cos(angle);
                const top = 50 + radius * Math.sin(angle);
                const isActive = active === domain.id;
                return (
                  <button
                    key={domain.id}
                    onMouseEnter={() => setActive(domain.id)}
                    onFocus={() => setActive(domain.id)}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-sm border px-3 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                      isActive
                        ? "border-crimson bg-crimson/10 text-paper scale-105"
                        : "border-void-line bg-void-panel text-paper-dim hover:text-paper"
                    }`}
                  >
                    {domain.title}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active domain detail — accessible, always-legible */}
          <Reveal delayMs={200}>
            <div
              key={activeDomain.id}
              className="reticle border border-void-line bg-void-panel/60 p-8 transition-colors sm:p-10"
            >
              <span className="ledger-num text-xs text-crimson">{activeDomain.title}</span>
              <ul className="mt-6 space-y-4">
                {activeDomain.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
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
