import { useReveal } from '../useReveal'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="contact" ref={ref} className="px-6 py-24 lg:px-16 lg:py-36 xl:pl-40">
      <div className="reveal flex items-start gap-5 lg:gap-8">
        <span className="mt-2 font-mono text-xs text-crimson lg:mt-4">09</span>
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Let's connect
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            Interested in biotechnology, computational biology, AI, data, life-science business, strategy, or
            interesting projects? I'd be happy to connect.
          </p>

          <div className="mt-10 flex flex-col gap-1 border-t border-line pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-baseline justify-between border-b border-line py-4 transition-colors hover:border-crimson"
            >
              <span className="font-display text-2xl text-ink transition-colors group-hover:text-crimson sm:text-3xl">
                Email
              </span>
              <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-crimson sm:text-sm">
                {profile.email}
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between border-b border-line py-4 transition-colors hover:border-crimson"
            >
              <span className="font-display text-2xl text-ink transition-colors group-hover:text-crimson sm:text-3xl">
                LinkedIn
              </span>
              <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-crimson sm:text-sm">
                →
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between py-4 transition-colors"
            >
              <span className="font-display text-2xl text-ink transition-colors group-hover:text-crimson sm:text-3xl">
                GitHub
              </span>
              <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-crimson sm:text-sm">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
