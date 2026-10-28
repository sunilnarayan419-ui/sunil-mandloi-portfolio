import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lead="Grouped by what my repositories, coursework and internship actually show. There are no proficiency scores because I can't measure them honestly."
      tone="sunk"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.shown.map((g) => (
          <div key={g.group}>
            <h3 className="font-display text-base font-semibold text-ink">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded border border-line bg-surface px-2.5 py-1 text-sm text-ink">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-line pt-6">
        <h3 className="font-display text-base font-semibold text-ink">Currently learning</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.learning.map((i) => (
            <li key={i} className="rounded border border-dashed border-faint px-2.5 py-1 text-sm text-muted">{i}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
