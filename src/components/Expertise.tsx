import { useReveal } from '../useReveal'
import { expertise } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Expertise() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="expertise" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="04" title="Expertise" eyebrow="Four domains I'm building capability across" />

      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {expertise.map((group, i) => (
          <div
            key={group.number}
            className="reveal border-t border-line pt-6"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-crimson">{group.number}</span>
              <h3 className="font-display text-2xl text-ink">{group.domain}</h3>
            </div>
            <ul className="mt-5 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
