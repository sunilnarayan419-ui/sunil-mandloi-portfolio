import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  lead,
  children,
  tone = "base",
}: {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
  tone?: "base" | "sunk";
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line py-20 sm:py-28 ${tone === "sunk" ? "bg-sunk" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
