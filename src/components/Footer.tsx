import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-graphite-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="font-display text-sm text-mist">{profile.name}</p>
          <p className="mt-1 max-w-sm text-xs leading-relaxed text-mist-faint">{profile.headline}</p>
        </div>

        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-mist-faint">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-crimson-soft">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-crimson-soft">
            LinkedIn
          </a>
          <a href={profile.researchgate} target="_blank" rel="noopener noreferrer" className="hover:text-crimson-soft">
            ResearchGate
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-crimson-soft">
            Email
          </a>
        </nav>

        <p className="text-xs text-mist-faint">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
