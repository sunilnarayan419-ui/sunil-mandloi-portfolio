import { useMouseParallax } from "../hooks/useMouseParallax";
import NetworkField from "./NetworkField";
import { profile, narrative } from "../data/content";

export default function Hero() {
  const { x, y } = useMouseParallax();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-void-line"
    >
      {/* Faint coordinate-grid texture, scoped to the Hero section only so
          its edge-fade mask can never affect content further down the
          page (see index.css .bg-scientific-grid — mask-image masks an
          element's entire painted subtree, not just its own background,
          so this must stay off any wrapper that contains other sections). */}
      <div aria-hidden="true" className="bg-scientific-grid pointer-events-none absolute inset-0" />

      <NetworkField density="hero" className="opacity-40" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-crimson/[0.07] blur-[120px]"
        style={{ transform: `translate3d(${x * 12}px, ${y * 12}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet/10 blur-[110px]"
        style={{ transform: `translate3d(${x * -10}px, ${y * -10}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-10 h-64 w-64 rounded-full bg-void-raised/70 blur-[90px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-16 sm:px-10 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
        <div style={{ transform: `translate3d(${x * -6}px, ${y * -6}px, 0)` }}>
          <p className="ledger-num mb-6 text-sm tracking-wide text-crimson">
            {profile.label} — {profile.institution}
            <span className="mt-1 block text-xs text-paper-faint sm:ml-3 sm:mt-0 sm:inline">
              {profile.stage}
            </span>
          </p>

          <h1 className="font-display text-balance text-6xl font-medium leading-[0.95] text-paper sm:text-7xl lg:text-8xl">
            Sunil{" "}
            <br aria-hidden="true" />
            Mandloi
          </h1>

          <p className="text-balance mt-8 font-display text-lg text-paper sm:text-2xl">
            Life Sciences <span className="text-crimson">×</span> Computational Biology{" "}
            <span className="text-crimson">×</span> AI
          </p>
          <p className="text-balance mt-2 font-display text-base text-paper-dim sm:text-lg">
            Python &amp; data analytics · exploring life-science business &amp; strategy
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper-dim sm:text-lg">
            I build Python and data projects around biological and business questions, and I'm
            learning how a scientific result becomes a decision someone can act on.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-sm border border-paper/20 px-6 py-3 text-sm text-paper transition-colors hover:border-crimson hover:text-crimson"
            >
              See the work
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm bg-paper px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-crimson-bright"
            >
              Get in touch
            </a>
          </div>

          <ol
            aria-label="Direction of travel"
            className="ledger-num mt-10 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] uppercase tracking-wide text-paper-faint sm:text-xs"
          >
            {narrative.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {step}
                {i < narrative.length - 1 && (
                  <span aria-hidden="true" className="text-crimson">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Portrait — kept as a clean, clearly visible photograph. No dark
            overlay or heavy frame sits on top of the face; the scientific
            framing lives in the thin rings and small orbit nodes around it. */}
        <div
          className="relative mx-auto aspect-square w-full max-w-sm"
          style={{ transform: `translate3d(${x * 10}px, ${y * 10}px, 0)` }}
        >
          {/* Warm gradient glow behind the portrait, so the frame reads as
              sitting in a lit, scientific environment rather than floating
              on a flat background. */}
          <div
            aria-hidden="true"
            className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,_rgba(159,18,57,0.10),_rgba(242,239,231,0)_65%)] blur-2xl"
          />

          {/* Two counter-rotating orbital rings — the restrained "orbital
              system" scientific motif requested for the portrait frame. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-[spin_50s_linear_infinite] rounded-full border border-dashed border-crimson/25 motion-reduce:animate-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[8%] animate-[spin_70s_linear_infinite_reverse] rounded-full border border-dotted border-paper/15 motion-reduce:animate-none"
          />
          <div aria-hidden="true" className="absolute -inset-3 rounded-full border border-void-line" />

          <div className="reticle !absolute inset-6 overflow-hidden rounded-full border border-void-line bg-void-panel shadow-card">
            <img
              src="/images/profile-photo.webp"
              alt="Portrait of Sunil Mandloi"
              className="h-full w-full object-cover"
              width={800}
              height={800}
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Small orbit nodes — the "scientific instrument" accents around
              the frame, per the light-scientific composition. */}
          <span
            aria-hidden="true"
            className="absolute -top-2 left-1/4 h-2.5 w-2.5 rounded-full border border-crimson/40 bg-void-panel shadow-card"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-2 -right-2 h-3 w-3 rounded-full border border-crimson/30 bg-void-panel shadow-card animate-pulse motion-reduce:animate-none"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-0 h-2 w-2 rounded-full bg-crimson/40"
          />
          <span
            aria-hidden="true"
            className="absolute right-4 top-6 h-1.5 w-1.5 rounded-full bg-paper/25"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit items-center gap-2 text-xs text-paper-faint sm:flex">
        <span className="ledger-num">SCROLL</span>
        <span className="h-6 w-px animate-pulse bg-paper-faint motion-reduce:animate-none" />
      </div>
    </section>
  );
}
