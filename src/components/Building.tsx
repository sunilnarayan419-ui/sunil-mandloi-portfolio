import { useReveal } from '../useReveal'
import SectionHeading from './SectionHeading'

const threads = [
  {
    title: 'Academic development',
    body: 'Coursework and independent study across life sciences, computation, and the business disciplines that sit alongside them.',
  },
  {
    title: 'Independent technical practice',
    body: 'Two self-authored, phase-structured Python curricula — one in computational biology, one in business and finance — built repository by repository, project by project.',
  },
  {
    title: 'Applied projects',
    body: 'Small working applications — a library system, a sales tracker, a startup runway calculator — built to practice turning a problem into working software.',
  },
  {
    title: 'Research interests',
    body: 'An active, developing interest in where biological and computational understanding intersects with economics and strategic decision-making.',
  },
]

export default function Building() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="building" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="06" title="What I'm Building" />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {threads.map((t, i) => (
          <div key={t.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <h3 className="font-display text-xl text-ink">{t.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
