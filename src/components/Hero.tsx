import { profile } from '../data/profile'
import { useReveal } from '../useReveal'

export default function Hero() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-line px-6 pt-24 lg:pl-32 lg:pr-16 lg:pt-0 xl:pl-40"
    >
      <span
        aria-hidden
        className="numeral-watermark pointer-events-none absolute -right-6 -top-10 select-none text-[38vw] leading-none lg:-right-10 lg:-top-24 lg:text-[26vw]"
      >
        01
      </span>

      <div className="relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <div>
          <p
            className="reveal font-mono text-[11px] tracking-[0.2em] text-crimson"
            style={{ transitionDelay: '0ms' }}
          >
            {profile.label.toUpperCase()}
          </p>

          <h1 className="mt-6 font-display text-[15vw] leading-[0.92] tracking-tight text-ink sm:text-[10vw] lg:text-[6vw] xl:text-[5.5vw]">
            <span className="reveal block" style={{ transitionDelay: '90ms' }}>
              {profile.firstName}
            </span>
            <span className="reveal block" style={{ transitionDelay: '180ms' }}>
              {profile.lastName}
            </span>
          </h1>

          <p
            className="reveal mt-8 max-w-md font-display text-xl italic text-ink-soft sm:text-2xl"
            style={{ transitionDelay: '280ms' }}
          >
            {profile.headline}
          </p>

          <p
            className="reveal mt-5 max-w-md text-base leading-relaxed text-ink-soft"
            style={{ transitionDelay: '360ms' }}
          >
            {profile.statement}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ transitionDelay: '440ms' }}>
            <a
              href="#projects"
              className="border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-crimson hover:text-crimson"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border-b border-transparent pb-1 text-sm font-medium text-ink-soft transition-colors hover:border-crimson hover:text-crimson"
            >
              Connect with me
            </a>
          </div>

          <div
            className="reveal mt-14 flex items-center gap-6 font-mono text-xs tracking-wide text-ink-faint"
            style={{ transitionDelay: '520ms' }}
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
              GitHub
            </a>
            <span className="h-px w-4 bg-line" aria-hidden />
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[320px] justify-self-center lg:max-w-[380px] lg:justify-self-end" style={{ transitionDelay: '200ms' }}>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full border border-line lg:translate-x-6 lg:translate-y-6"
          />
          <div className="aspect-square overflow-hidden rounded-full border border-line bg-paper-dim">
            <img
              src="/images/profile-photo.png"
              alt="Portrait of Sunil Mandloi"
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="hidden h-full w-full items-center justify-center font-display text-sm text-ink-faint" style={{ display: 'none' }}>
              Add portrait to /public/images/profile-photo.png
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
