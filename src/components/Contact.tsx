import Section from "./Section";
import { contact, profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <p className="mx-auto max-w-6xl px-5 text-sm text-faint sm:px-8">
        Sunil Mandloi · Integrated M.Sc. Life Sciences, University of Hyderabad · Claims on this site follow the linked repositories.
      </p>
    </footer>
  );
}

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact" lead={contact.intro}>
        <p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block break-all font-display text-2xl font-semibold text-accent underline underline-offset-8 sm:text-3xl"
          >
            {profile.email}
          </a>
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base">
          {[
            ["GitHub", profile.github],
            ["LinkedIn", profile.linkedin],
            ["ResearchGate", profile.researchgate],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4 hover:text-accent">
                {label}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
