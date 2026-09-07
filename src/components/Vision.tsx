import { useReveal } from '../useReveal'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Vision() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="vision" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="08" title="Where I'm Heading" />

      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <p className="reveal max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">{profile.vision}</p>

        <div className="reveal flex flex-wrap items-center gap-x-3 gap-y-3 lg:justify-end" style={{ transitionDelay: '100ms' }}>
          {profile.visionEquation.map((term, i) => (
            <span key={term} className="flex items-center gap-3">
              <span className="rounded-full border border-line px-4 py-2 font-display text-base text-ink">
                {term}
              </span>
              {i < profile.visionEquation.length - 1 && <span className="text-ink-faint">+</span>}
            </span>
          ))}
          <span className="text-ink-faint">=</span>
          <span className="rounded-full bg-crimson px-4 py-2 font-display text-base text-paper">
            {profile.visionResult}
          </span>
        </div>
      </div>
    </section>
  )
}
