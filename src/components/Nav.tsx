import { useEffect, useState } from "react";
import { navSections, profile } from "../data/content";

export default function Nav() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-void-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleJump("hero");
          }}
          className="font-display text-sm tracking-tight text-paper hover:text-crimson-bright transition-colors"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => handleJump(s.id)}
                className={`group flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors ${
                  active === s.id ? "text-paper" : "text-paper-faint hover:text-paper-dim"
                }`}
              >
                <span className="ledger-num text-xs text-crimson">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-void-line bg-void/97 px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navSections.map((s, i) => (
              <li key={s.id}>
                <button
                  onClick={() => handleJump(s.id)}
                  className={`flex w-full items-center gap-3 rounded px-2 py-3 text-left text-base ${
                    active === s.id ? "text-paper" : "text-paper-faint"
                  }`}
                >
                  <span className="ledger-num text-xs text-crimson">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
