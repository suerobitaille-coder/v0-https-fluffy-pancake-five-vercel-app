"use client"

import Link from 'next/link'
import { useReveal } from '@/hooks/use-reveal'

const stats = [
  { label: 'Experience', value: '20+', suffix: 'years writing' },
  { label: 'Content Produced', value: '100+', suffix: 'articles & op-eds' },
  { label: 'Specialty', value: null, suffix: 'Business & innovation leadership voice' },
  { label: 'Discretion', value: null, suffix: 'NDAs standard, always' },
]

export function Hero() {
  const mainReveal = useReveal(0)
  const sidebarReveal = useReveal(150)

  return (
    <section className="border-b border-border px-6 md:px-14 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end">
        {/* Main Content */}
        <div 
          ref={mainReveal.ref}
          className={`reveal ${mainReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase text-accent mb-7">
            <span className="w-7 h-px bg-accent block" />
            Ghostwriter for Business Leaders
          </div>
          
          <h1 className="font-serif text-[clamp(52px,7vw,96px)] font-bold leading-[0.95] tracking-tight mb-8">
            Your ideas.<br />
            <em className="text-accent">My words.</em><br />
            Their attention.
          </h1>
          
          <p className="text-base leading-relaxed text-muted max-w-[520px] mb-10">
            I help executives, founders, and operators find their voice — and place it where it matters. 
            Thought leadership articles, LinkedIn posts, newsletters, speeches, and beyond. Confidential, always.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="#contact"
              className="inline-block px-7 py-3.5 bg-accent text-background text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-85 transition-opacity"
            >
              {"Let's Talk"}
            </Link>
            <Link
              href="#services"
              className="inline-block px-7 py-3.5 border border-border text-muted text-[11px] font-semibold tracking-[0.18em] uppercase hover:border-accent hover:text-accent transition-colors"
            >
              See My Work
            </Link>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div 
          ref={sidebarReveal.ref}
          className={`border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 flex flex-col reveal ${sidebarReveal.isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`py-5 border-b border-border ${index === 0 ? 'border-t' : ''}`}
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1.5">
                {stat.label}
              </div>
              <div className="font-serif text-xl italic text-foreground">
                {stat.value && (
                  <strong className="font-sans not-italic text-2xl font-semibold text-accent mr-1">
                    {stat.value}
                  </strong>
                )}
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
