import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-base font-semibold text-ink">
          Sunil Mandloi
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm text-muted transition-colors hover:text-accent">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded border border-line px-3 py-1.5 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base text-ink">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block py-3 text-base text-ink">
              GitHub (opens in a new tab)
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
