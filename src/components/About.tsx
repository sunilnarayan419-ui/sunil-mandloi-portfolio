import { useReveal } from '../useReveal'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="about" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="02" title="About" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="reveal">
          <p className="font-display text-2xl leading-snug text-ink lg:text-3xl">{profile.objective}</p>
        </div>

        <div className="reveal flex flex-col gap-6" style={{ transitionDelay: '80ms' }}>
          {profile.about.map((p, i) => (
            <p key={i} className="max-w-xl text-base leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 font-mono text-xs text-ink-faint">
            {profile.approach.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className={i === 0 ? 'text-ink' : ''}>{step}</span>
                {i < profile.approach.length - 1 && <span className="text-crimson">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
