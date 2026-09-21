type Props = {
  number: string
  title: string
  eyebrow?: string
}

export default function SectionHeading({ number, title, eyebrow }: Props) {
  return (
    <div className="reveal mb-14 flex items-start gap-5 lg:mb-20 lg:gap-8">
      <span className="mt-2 font-mono text-xs text-crimson lg:mt-4">{number}</span>
      <div>
        {eyebrow && <p className="mb-2 text-sm text-ink-soft">{eyebrow}</p>}
        <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
    </div>
  )
}
