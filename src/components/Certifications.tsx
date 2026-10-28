import Reveal from "./Reveal";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">07 — Certifications</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Supporting the data & business side.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delayMs={i * 100}>
              <div className="reticle flex h-full flex-col border border-void-line bg-void-panel/60 p-8">
                <h3 className="font-display text-lg font-medium text-paper sm:text-xl">
                  {cert.name}
                </h3>
                {cert.issuer && <p className="mt-2 text-sm text-paper-dim">{cert.issuer}</p>}
                <p className="ledger-num mt-auto pt-6 text-xs text-paper-faint">
                  Completed {cert.completed}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
