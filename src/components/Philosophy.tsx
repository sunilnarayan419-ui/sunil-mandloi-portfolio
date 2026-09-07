import { useReveal } from '../useReveal'
import { profile } from '../data/profile'

export default function Philosophy() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="border-b border-line bg-ink px-6 py-28 lg:px-16 lg:py-40 xl:pl-40">
      <div className="reveal mx-auto max-w-4xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-crimson">The principle</p>
        <p className="mt-8 font-display text-3xl leading-[1.25] text-paper sm:text-4xl lg:text-5xl">
          {profile.philosophy.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
