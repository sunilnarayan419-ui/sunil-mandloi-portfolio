import { useReveal } from '../useReveal'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="education" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="03" title="Education" />

      <div className="reveal relative max-w-2xl border-l border-line pl-8 lg:pl-10">
        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-crimson" aria-hidden />
        <p className="font-mono text-xs text-ink-faint">Present</p>
        <h3 className="mt-3 font-display text-3xl text-ink lg:text-4xl">{profile.education.degree}</h3>
        <p className="mt-2 text-lg text-ink-soft">{profile.education.institution}</p>
        <p className="mt-1 text-sm text-ink-faint">{profile.education.note}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
          The academic foundation underneath everything else here — the point where the rest of this page's
          direction begins.
        </p>
      </div>
    </section>
  )
}
