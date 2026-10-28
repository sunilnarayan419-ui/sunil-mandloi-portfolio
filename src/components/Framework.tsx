import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { framework } from "../data/content";

export default function Framework() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="framework" title="From biology to industry" lead={framework.intro} tone="sunk">
      <div className="relative">
        {/* connecting line, desktop only */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-[0.45rem] hidden h-px bg-line lg:block">
          <div className={`h-px bg-accent ${seen ? "draw-line" : "scale-x-0"}`} />
        </div>
        <ol ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {framework.stages.map((s, i) => (
            <li key={s.name} className="relative">
              <span aria-hidden="true" className="relative z-10 mb-4 hidden h-3 w-3 rounded-full bg-accent lg:block" />
              <h3 className="font-display text-base font-semibold text-ink">
                <span className="sr-only">Step {i + 1}: </span>
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.does}</p>
              <p className="mt-3 border-l-2 border-accent pl-3 text-sm leading-relaxed text-ink">{s.algal}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-8 text-sm text-faint">{framework.note}</p>
    </Section>
  );
}
