import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-graphite-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="font-display text-sm text-mist">{profile.name}</p>
          <p className="mt-1 text-xs text-mist-faint">
            Life Sciences × Biotechnology × Technology × Business
          </p>
        </div>

        <div className="flex gap-6 text-xs text-mist-faint">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-crimson-bright">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-crimson-bright">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-crimson-bright">
            Email
          </a>
        </div>

        <p className="text-xs text-mist-faint">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
