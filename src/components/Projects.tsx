import { useReveal } from '../useReveal'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectRow from './ProjectRow'

export default function Projects() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="projects" ref={ref} className="border-b border-line px-6 py-24 lg:px-16 lg:py-32 xl:pl-40">
      <SectionHeading number="05" title="Projects" eyebrow="Science, technology, and business — worked through in code" />

      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} delay={i * 60} />
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  )
}
