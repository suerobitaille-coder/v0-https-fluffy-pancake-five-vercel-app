"use client"

import { useReveal } from '@/hooks/use-reveal'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    body: "30–60 minutes to understand your voice, your audience, your goals, and what you absolutely don't want to say.",
  },
  {
    num: '02',
    title: 'Voice Capture',
    body: 'I analyze existing materials — emails, talks, interviews — to map the cadence, vocabulary, and tone that is distinctly yours.',
  },
  {
    num: '03',
    title: 'Draft & Refine',
    body: 'First draft delivered. Two rounds of revision included as standard. Most clients barely touch it.',
  },
  {
    num: '04',
    title: 'Publish & Own',
    body: 'You publish under your name. Full rights transfer. I disappear. The NDA was signed on day one.',
  },
]

function Step({ step, delay, isLast }: { step: typeof steps[0]; delay: number; isLast: boolean }) {
  const { ref, isVisible } = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`p-9 border border-border bg-surface relative reveal ${isVisible ? 'visible' : ''}`}
    >
      {/* Arrow between steps (hidden on mobile and last item) */}
      {!isLast && (
        <span className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-accent text-lg z-10">
          →
        </span>
      )}
      
      <div className="text-5xl font-serif font-bold text-border leading-none mb-4">
        {step.num}
      </div>
      <div className="text-sm font-semibold tracking-[0.06em] uppercase text-foreground mb-2.5">
        {step.title}
      </div>
      <p className="text-[13px] leading-relaxed text-muted">
        {step.body}
      </p>
    </div>
  )
}

export function Process() {
  const headerReveal = useReveal(0)

  return (
    <section id="process" className="px-6 md:px-14 py-20 border-b border-border">
      <div
        ref={headerReveal.ref}
        className={`flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-5 border-b border-border reveal ${headerReveal.isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-[42px] font-bold italic">How It Works</h2>
        <span className="text-[11px] tracking-[0.16em] uppercase text-muted mt-2 md:mt-0">
          From Brief to Published
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {steps.map((step, index) => (
          <Step
            key={step.num}
            step={step}
            delay={index * 100}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
