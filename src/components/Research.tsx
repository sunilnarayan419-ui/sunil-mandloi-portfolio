import Reveal from "./Reveal";
import { research, profile } from "../data/content";

export default function Research() {
  return (
    <section id="research" className="relative border-b border-void-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">06 — Research</span>
        </Reveal>
        <Reveal delayMs={80}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Scientific engagement, not a publication list.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delayMs={120} className="h-full">
            <div className="reticle flex h-full flex-col border border-void-line bg-void-panel/60 p-8 sm:p-10">
              <p className="ledger-num text-xs text-paper-faint">ResearchGate — verified profile</p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-paper-dim">
                {research.statement}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {research.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-void-line px-3 py-1.5 text-xs text-paper-dim"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={research.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm text-paper underline decoration-void-line underline-offset-4 hover:text-crimson-bright"
              >
                View ResearchGate profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={200} className="h-full">
            <div className="reticle flex h-full flex-col border border-void-line bg-void-raised/70 p-8 sm:p-10">
              <p className="ledger-num text-xs text-crimson">A question I'm sitting with</p>
              <h3 className="mt-4 font-display text-lg font-medium leading-snug text-paper sm:text-xl">
                {research.question.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">{research.question.context}</p>
              <div className="mt-auto flex items-center gap-4 pt-8 text-xs text-paper-faint">
                <span className="ledger-num">{research.question.date}</span>
                <span aria-hidden="true">·</span>
                <span>{research.question.answers} answers so far</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={260}>
          <p className="mt-8 max-w-prose text-sm text-paper-faint">
            {profile.name} is an early-career Life Sciences student — this reflects active
            scientific curiosity and engagement, not published research.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
