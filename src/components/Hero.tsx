import { useMouseParallax } from "../hooks/useMouseParallax";
import NetworkField from "./NetworkField";
import { profile } from "../data/content";

export default function Hero() {
  const { x, y } = useMouseParallax();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-void-line"
    >
      <NetworkField density="hero" className="opacity-70" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-crimson/10 blur-[120px]"
        style={{ transform: `translate3d(${x * 12}px, ${y * 12}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet/15 blur-[110px]"
        style={{ transform: `translate3d(${x * -10}px, ${y * -10}px, 0)` }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-16 sm:px-10 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
        <div style={{ transform: `translate3d(${x * -6}px, ${y * -6}px, 0)` }}>
          <p className="ledger-num mb-6 text-sm tracking-wide text-crimson">
            {profile.label} — {profile.institution}
          </p>

          <h1 className="font-display text-balance text-6xl font-medium leading-[0.95] text-paper sm:text-7xl lg:text-8xl">
            Sunil
            <br />
            Mandloi
          </h1>

          <p className="mt-8 font-display text-lg text-paper-dim sm:text-xl">
            Life Sciences <span className="text-crimson">×</span> Technology{" "}
            <span className="text-crimson">×</span> Business
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper-dim sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-sm border border-paper/25 px-6 py-3 text-sm text-paper transition-colors hover:border-crimson hover:text-crimson-bright"
            >
              See the work
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm bg-paper px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-crimson-bright hover:text-paper"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-square w-full max-w-sm"
          style={{ transform: `translate3d(${x * 10}px, ${y * 10}px, 0)` }}
        >
          <div className="reticle absolute inset-6 overflow-hidden rounded-full border border-crimson/30 bg-void-panel">
            <img
              src="/images/profile-photo.png"
              alt="Portrait of Sunil Mandloi"
              className="h-full w-full object-cover"
              width={640}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-crimson/5" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-paper/10 motion-reduce:animate-none"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full border border-crimson/10"
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
