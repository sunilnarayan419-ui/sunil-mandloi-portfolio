import { hero, profile, snapshot } from "../data/content";

const primary = "inline-flex items-center rounded bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90";
const outline = "inline-flex items-center rounded border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Hero() {
  return (
    <div id="top">
      <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h1 id="hero-title" className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-muted">{hero.lead}</p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">{hero.direction}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className={primary}>Explore projects</a>
              <a href={profile.github} className={outline} {...ext}>View GitHub<span className="sr-only"> (opens in a new tab)</span></a>
              <a href="#contact" className={outline}>Contact me</a>
            </div>
            <p className="mt-5 text-sm text-faint">
              Also on{" "}
              <a href={profile.linkedin} className="underline underline-offset-4 hover:text-accent" {...ext}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>{" "}
              and{" "}
              <a href={profile.researchgate} className="underline underline-offset-4 hover:text-accent" {...ext}>ResearchGate<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[17rem] md:max-w-none">
            <img
              src="/images/profile-photo.webp"
              alt="Portrait photograph of Sunil Mandloi"
              width={800}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-md border border-line object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-label="Professional snapshot" className="border-t border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-5">
          {snapshot.map((s) => (
            <div key={s.label}>
              <dt className="text-xs text-faint">{s.label}</dt>
              <dd className="mt-1 font-display text-base font-semibold text-ink">{s.value}</dd>
              <dd className="mt-1 text-sm leading-snug text-muted">{s.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
