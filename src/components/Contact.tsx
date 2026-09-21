import Reveal from "./Reveal";
import { profile } from "../data/content";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "LinkedIn", value: "sunil-mandloi", href: profile.linkedin, external: true },
  { label: "GitHub", value: "sunilnarayan419-ui", href: profile.github, external: true },
  { label: "ResearchGate", value: "Sunil-Mandloi-2", href: profile.researchgate, external: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-graphite-line bg-graphite bg-scientific-grid-dark py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-crimson/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson-soft">10 — Contact</span>
        </Reveal>

        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight text-mist sm:text-5xl lg:text-6xl">
            Let's build something useful.
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-mist-dim">
            I'm happy to hear from researchers, teams and mentors working across biotechnology,
            computational biology and life-science strategy. Email is the quickest way to reach me.
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="reticle-dark block border border-graphite-line px-6 py-5 text-mist transition-colors hover:border-crimson-bright hover:text-crimson-soft"
                >
                  <span className="ledger-num block text-[11px] uppercase tracking-wide text-mist-faint">
                    {l.label}
                    {l.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                  <span className="mt-1 block break-all text-base sm:text-lg">
                    {l.value}
                    {l.external && (
                      <span aria-hidden="true" className="ml-2">
                        ↗
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
