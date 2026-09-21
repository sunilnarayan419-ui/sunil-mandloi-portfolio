import { useState } from "react";
import Reveal from "./Reveal";
import { expertiseDomains } from "../data/content";

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
          <span className="ledger-num text-sm text-crimson">04 — Skills</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Five domains, one lens.
          </h2>
        </Reveal>

        {/* Phones: the orbit is too tight for five labels, so use tappable chips. */}
        <div role="group" aria-label="Skill domains" className="mt-10 flex flex-wrap gap-2 sm:hidden">
          {expertiseDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActive(domain.id)}
              aria-pressed={active === domain.id}
              className={`rounded-sm border px-3 py-2 text-sm transition-colors ${
                active === domain.id
                  ? "border-crimson bg-crimson/10 text-paper"
                  : "border-void-line bg-void-panel text-paper-dim"
              }`}
            >
              {domain.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-14 sm:mt-16 lg:grid-cols-2">
          {/* Orbit diagram */}
          <Reveal delayMs={140} className="mx-auto hidden w-full max-w-sm sm:block">
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
                const angle = ((-90 + (i * 360) / expertiseDomains.length) * Math.PI) / 180;
                const radius = 40;
                const left = 50 + radius * Math.cos(angle);
                const top = 50 + radius * Math.sin(angle);
                const isActive = active === domain.id;
                return (
                  <button
                    key={domain.id}
                    onMouseEnter={() => setActive(domain.id)}
                    onFocus={() => setActive(domain.id)}
                    onClick={() => setActive(domain.id)}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    aria-pressed={isActive}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300 sm:px-3 sm:py-2 sm:text-sm ${
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
              <p className="mt-8 border-t border-void-line pt-5 text-xs leading-relaxed text-paper-faint">
                <span className="ledger-num text-crimson">Seen in </span>
                {activeDomain.seenIn}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
