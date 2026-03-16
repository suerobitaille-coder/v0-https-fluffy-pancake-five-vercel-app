"use client"

import { useReveal } from '@/hooks/use-reveal'

const industries = [
  {
    name: 'Finance & Fintech',
    desc: 'Investment theses, market commentary, regulatory opinion, founder narratives',
  },
  {
    name: 'Technology & SaaS',
    desc: 'Product leadership, AI commentary, engineering culture, go-to-market narrative',
  },
  {
    name: 'Professional Services',
    desc: 'Consulting, law, accounting — expertise translated into readable authority',
  },
  {
    name: 'Healthcare & Life Sciences',
    desc: 'Clinical leadership, health policy, patient advocacy, pharma strategy',
  },
  {
    name: 'Real Estate & Infrastructure',
    desc: 'Development narratives, urban commentary, sustainability positioning',
  },
  {
    name: 'Consumer & Retail',
    desc: 'Brand founders, retail innovation, consumer culture, trend leadership',
  },
]

function IndustryItem({ industry, delay }: { industry: typeof industries[0]; delay: number }) {
  const { ref, isVisible } = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`p-7 md:p-8 border border-border bg-surface flex justify-between items-start gap-4 transition-colors hover:border-accent group reveal ${isVisible ? 'visible' : ''}`}
    >
      <div>
        <div className="font-serif text-[22px] italic mb-2">{industry.name}</div>
        <div className="text-xs text-muted leading-relaxed">{industry.desc}</div>
      </div>
      <span className="text-accent text-lg shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </span>
    </div>
  )
}

export function Industries() {
  const introReveal = useReveal(0)

  return (
    <section id="industries" className="px-6 md:px-14 py-20 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-20 items-start">
        {/* Intro */}
        <div
          ref={introReveal.ref}
          className={`reveal ${introReveal.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-serif text-[42px] font-bold italic mb-5">
            Industries<br />I Write For
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Deep familiarity with the language, stakes, and audiences that matter in each sector. 
            I {"don't"} write generically — I write for your world.
          </p>
        </div>

        {/* Industries List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {industries.map((industry, index) => (
            <IndustryItem
              key={industry.name}
              industry={industry}
              delay={(index % 2) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
