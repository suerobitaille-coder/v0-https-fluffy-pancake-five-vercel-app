"use client"

import { useReveal } from '@/hooks/use-reveal'

const services = [
  {
    num: '01',
    title: 'Thought Leadership',
    body: 'Articles, Op-eds and LTEs placed in targeted media that position you as the go-to voice in your field. Written in your byline, never mine.',
    tags: ['Op-Eds', 'Letters', 'Industry Press', 'Media lists'],
  },
  {
    num: '02',
    title: 'LinkedIn Content Strategy',
    body: 'Personal executive content plans that build trust through authenticity and direct communication.',
    tags: ['B2B Content', 'Calendars', 'Metrics'],
  },
  {
    num: '03',
    title: 'Speeches & Keynotes',
    body: 'High-stakes spoken-word content for conference stages, AGMs, and internal all-hands. Structured to land, written to sound like you.',
    tags: ['Keynotes', 'Conference Talks', 'Board Communications', 'All-Hands'],
  },
  {
    num: '04',
    title: 'Executive Newsletters',
    body: 'Ongoing editorial programs that keep you visible and relevant — weekly, biweekly, or monthly, tailored to your audience and strategic goals.',
    tags: ['Email', 'Substack', 'Internal Communications'],
  },
  {
    num: '05',
    title: 'Strategic Narratives',
    body: 'Company origin stories, investor narratives, and brand messaging frameworks that crystallize what you stand for and why it matters.',
    tags: ['Brand Story', 'Investor Deck Copy', 'About Pages'],
  },
  {
    num: '06',
    title: 'Interview-to-Draft',
    body: 'You talk, I write. A structured conversation — one hour or less — becomes a polished, publication-ready piece. Minimal time, maximum output.',
    tags: ['Fast Turnaround', 'Voice Matching', 'Any Format'],
  },
  {
    num: '07',
    title: 'Books & Long-Form',
    body: 'Business books, manifestos, and long-form narratives that codify your thinking and build lasting authority. From outline to final manuscript.',
    tags: ['Business Books', 'Memoir', 'Manifestos', 'Reports'],
  },
]

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref, isVisible } = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`bg-surface p-10 border border-border relative transition-all duration-300 hover:border-accent hover:bg-accent-dim reveal ${isVisible ? 'visible' : ''} group`}
    >
      <div className="text-[11px] tracking-[0.2em] text-accent mb-6 opacity-70">
        {service.num}
      </div>
      <h3 className="font-serif text-[28px] font-bold leading-tight mb-4">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted mb-6">
        {service.body}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-[0.14em] uppercase text-muted border border-border px-2.5 py-1 transition-colors group-hover:text-accent group-hover:border-accent group-hover:opacity-70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Services() {
  const headerReveal = useReveal(0)

  return (
    <section id="services" className="px-6 md:px-14 py-20 border-b border-border">
      <div
        ref={headerReveal.ref}
        className={`flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-5 border-b border-border reveal ${headerReveal.isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-[42px] font-bold italic">What I Write</h2>
        <span className="text-[11px] tracking-[0.16em] uppercase text-muted mt-2 md:mt-0">
          Formats & Deliverables
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.num} 
            service={service} 
            delay={(index % 3) * 100}
          />
        ))}
      </div>
    </section>
  )
}
