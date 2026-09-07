import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 lg:px-16 xl:pl-40">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="mt-1 text-xs text-ink-faint">Life Sciences × Biotechnology × Technology × Business</p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-ink-faint">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
            LinkedIn
          </a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}
