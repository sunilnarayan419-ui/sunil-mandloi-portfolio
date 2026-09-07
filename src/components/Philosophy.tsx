import Reveal from "./Reveal";
import NetworkField from "./NetworkField";
import { philosophy } from "../data/content";

export default function Philosophy() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-void-line py-28">
      <NetworkField className="opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        {philosophy.map((p, i) => (
          <Reveal key={p.line} delayMs={i * 140}>
            <p
              className={`font-display text-3xl font-medium leading-tight sm:text-5xl lg:text-6xl ${
                p.accent ? "text-crimson-bright" : "text-paper"
              }`}
            >
              {p.line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
