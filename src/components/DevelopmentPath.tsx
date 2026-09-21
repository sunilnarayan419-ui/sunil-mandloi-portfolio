import { useReveal } from '../useReveal'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function DevelopmentPath() {
  const ref = useReveal<HTMLElement>()
  const path = profile.developmentPath

  return (
    <section id="path" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="07" title="Learning & Development" eyebrow="I am deliberately building a multidisciplinary capability" />

      {/* Mobile: vertical list */}
      <ol className="reveal flex flex-col lg:hidden">
        {path.map((step, i) => (
          <li key={step}>
            <div className="flex items-center gap-4 py-3">
              <span className="font-mono text-[11px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-lg text-ink">{step}</span>
            </div>
            {i < path.length - 1 && <span className="ml-[42px] block h-6 w-px bg-line" aria-hidden />}
          </li>
        ))}
      </ol>

      {/* Desktop: wrapping horizontal path */}
      <ol className="reveal hidden flex-wrap items-center gap-y-6 lg:flex">
        {path.map((step, i) => (
          <li key={step} className="flex items-center">
            <span className="text-xl text-ink">{step}</span>
            {i < path.length - 1 && (
              <span className="mx-5 text-crimson" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
