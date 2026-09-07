import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">07 — Contact</span>
        </Reveal>

        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight text-paper sm:text-5xl lg:text-6xl">
            Let's build something useful.
          </h2>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="reticle border border-void-line px-6 py-4 text-base text-paper transition-colors hover:border-crimson hover:text-crimson-bright"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="reticle border border-void-line px-6 py-4 text-base text-paper transition-colors hover:border-crimson hover:text-crimson-bright"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="reticle border border-void-line px-6 py-4 text-base text-paper transition-colors hover:border-crimson hover:text-crimson-bright"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
