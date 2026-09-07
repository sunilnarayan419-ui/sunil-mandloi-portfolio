import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative border-b border-void-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="ledger-num text-sm text-crimson">02 — Education</span>
        </Reveal>

        <div className="mt-14 flex gap-8 sm:gap-12">
          <div className="relative hidden w-px shrink-0 bg-void-line sm:block">
            <span className="absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full bg-crimson" />
          </div>

          <Reveal delayMs={100} className="w-full">
            <div className="reticle border border-void-line bg-void-panel/60 p-8 sm:p-10">
              <p className="ledger-num text-xs text-paper-faint">Ongoing</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
                {profile.label}
              </h3>
              <p className="mt-2 text-base text-paper-dim">{profile.institution}</p>
              <p className="mt-6 max-w-prose text-sm leading-relaxed text-paper-dim">
                An integrated program spanning the core biological sciences, giving room to
                build computational, data and business capability alongside it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
