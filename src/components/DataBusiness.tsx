import Reveal from "./Reveal";
import {
  businessDisclaimer,
  businessThreads,
  certifications,
  evidenceChain,
} from "../data/content";

export default function DataBusiness() {
  return (
    <section
      id="business"
      className="relative border-b border-void-line bg-void-raised py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">06 — Data & Business</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Where scientific evidence becomes a decision.
          </h2>
        </Reveal>
        <Reveal delayMs={140}>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper-dim sm:text-lg">
            The part of life sciences I keep coming back to is the step after the result: who
            acts on it, who pays for it, and what has to be true for it to reach a market. Data
            is how that argument gets made, so that's what I'm building skills in.
          </p>
        </Reveal>

        {/* Evidence → impact chain */}
        <Reveal delayMs={200}>
          <ol
            aria-label="How scientific evidence becomes market impact"
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3 border-y border-void-line py-6"
          >
            {evidenceChain.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  className={`font-display text-sm sm:text-base ${
                    i === evidenceChain.length - 1 ? "text-crimson" : "text-paper"
                  }`}
                >
                  {step}
                </span>
                {i < evidenceChain.length - 1 && (
                  <span aria-hidden="true" className="text-crimson">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Where each piece actually shows up */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {businessThreads.map((t, i) => (
            <Reveal key={t.title} delayMs={i * 80} className="h-full">
              <div className="reticle flex h-full flex-col border border-void-line bg-void-panel/60 p-7 sm:p-8">
                <p className="ledger-num text-xs text-crimson">{t.kind}</p>
                <h3 className="mt-3 font-display text-lg font-medium text-paper sm:text-xl">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-paper-faint">{t.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">{t.body}</p>
                {t.link && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm text-paper underline decoration-void-line underline-offset-4 hover:text-crimson-bright"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <p className="mt-8 max-w-prose border-l-2 border-crimson/40 pl-4 text-sm leading-relaxed text-paper-dim">
            {businessDisclaimer}
          </p>
        </Reveal>

        {/* Certifications: supporting coursework, deliberately compact */}
        <Reveal delayMs={160}>
          <h3 className="ledger-num mt-16 text-xs uppercase tracking-wide text-paper-faint">
            Supporting coursework
          </h3>
        </Reveal>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delayMs={i * 80} as="li">
              <div className="flex h-full flex-col border border-void-line bg-void-panel/60 px-6 py-5">
                <p className="font-display text-base font-medium text-paper">{cert.name}</p>
                {cert.issuer && <p className="mt-1 text-sm text-paper-dim">{cert.issuer}</p>}
                <p className="ledger-num mt-3 text-xs text-paper-faint">
                  Completed {cert.completed}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
