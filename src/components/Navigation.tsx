import { useEffect, useState } from 'react'
import { sections } from '../data/sections'

export default function Navigation() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Desktop rail */}
      <nav
        aria-label="Section navigation"
        className="fixed left-0 top-0 z-40 hidden h-screen w-20 flex-col items-center justify-between border-r border-line py-8 lg:flex xl:w-24"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            goTo('home')
          }}
          className="font-display text-lg tracking-tight text-ink"
          aria-label="Go to top"
        >
          SM
        </a>

        <ul className="flex flex-col items-center gap-5">
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id} className="group relative">
                <button
                  onClick={() => goTo(s.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="flex flex-col items-center gap-1.5 py-1"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-crimson' : 'bg-ink-faint group-hover:bg-ink'
                    }`}
                  />
                  <span className="sr-only">{s.label}</span>
                </button>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-sm bg-ink px-2.5 py-1 font-mono text-[11px] text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  {s.number} — {s.label}
                </span>
              </li>
            )
          })}
        </ul>

        <span className="font-mono text-[10px] tracking-[0.15em] text-ink-faint [writing-mode:vertical-rl]">
          © 2026
        </span>
      </nav>

      {/* Mobile bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-paper/95 px-5 py-4 backdrop-blur-sm lg:hidden">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            goTo('home')
          }}
          className="font-display text-base text-ink"
        >
          Sunil Mandloi
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
        >
          <span className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col justify-center bg-paper px-8 lg:hidden">
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-line py-3">
                <button
                  onClick={() => goTo(s.id)}
                  className="flex w-full items-baseline gap-4 text-left"
                >
                  <span className="font-mono text-xs text-crimson">{s.number}</span>
                  <span className="font-display text-2xl text-ink">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
