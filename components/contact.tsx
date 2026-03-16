"use client"

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Spinner } from '@/components/ui/spinner'

const contactLinks = [
  {
    type: 'Email',
    value: 'suerobitaille@gmail.com',
    href: 'mailto:suerobitaille@gmail.com',
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/suzannerobitaille',
    href: 'https://www.linkedin.com/in/suzannerobitaille/',
  },
  {
    type: 'Book a Call',
    value: 'calendly.com/suerobitaille',
    href: 'https://calendly.com/suerobitaille/30min',
  },
]

const idealClientTraits = [
  { bold: "You're a senior leader", rest: 'with genuine expertise but no time to write' },
  { bold: 'You want to own a point of view', rest: 'in your industry, not just post content' },
  { bold: 'You value discretion', rest: 'and understand ghostwriting is a profession' },
  { bold: 'You have a clear audience', rest: "— a board, an industry, a market — you're trying to reach" },
  { bold: "You're building something", rest: '— a company, a legacy, a book — and words are part of it' },
]

export function Contact() {
  const leftReveal = useReveal(0)
  const rightReveal = useReveal(150)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In production, you would send this to your API
    console.log('Form submitted:', formData)
    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const currentMonth = new Date().toLocaleString('default', { month: 'long' })
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="px-6 md:px-14 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column */}
        <div
          ref={leftReveal.ref}
          className={`reveal ${leftReveal.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-serif text-[clamp(44px,6vw,72px)] font-bold leading-[0.98] mb-4">
            Ready to<br />
            <em className="text-accent">build your</em><br />
            voice?
          </h2>
          <p className="text-[13px] leading-relaxed text-muted mb-12 max-w-[380px]">
            I work with a small number of clients at a time to keep the quality high and the attention genuine. 
            If the fit is right, {"let's"} talk.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col">
            {contactLinks.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.type !== 'Email' ? '_blank' : undefined}
                rel={link.type !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex justify-between items-center py-5 border-b border-border text-foreground no-underline transition-all hover:pl-3 group"
              >
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted mb-1">
                    {link.type}
                  </div>
                  <div className="font-serif text-[22px] italic">{link.value}</div>
                </div>
                <span className="text-accent text-xl opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 mt-9 text-[11px] tracking-[0.16em] uppercase text-muted border border-border px-4 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
            Accepting new clients — {currentMonth} {currentYear}
          </div>
        </div>

        {/* Right Column */}
        <div
          ref={rightReveal.ref}
          className={`reveal ${rightReveal.isVisible ? 'visible' : ''}`}
        >
          {/* Ideal Client Card */}
          <div className="bg-surface border border-border p-11 mb-8">
            <div className="font-serif text-[28px] italic mb-5 pb-5 border-b border-border">
              {"You're"} probably a good fit if...
            </div>
            <ul className="flex flex-col">
              {idealClientTraits.map((trait, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 py-4 border-b border-border text-sm leading-relaxed text-muted"
                >
                  <span className="text-accent text-xs mt-0.5 shrink-0">✓</span>
                  <span>
                    <span className="text-foreground font-medium">{trait.bold}</span> {trait.rest}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-muted italic">
              All engagements begin with a no-obligation discovery call. NDAs signed before any materials are shared.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-border p-11">
            <div className="font-serif text-[28px] italic mb-5 pb-5 border-b border-border">
              Send a message
            </div>
            
            {formState === 'success' ? (
              <div className="py-8 text-center">
                <div className="text-accent text-2xl mb-3">✓</div>
                <p className="text-foreground font-medium">Message sent successfully</p>
                <p className="text-sm text-muted mt-1">{"I'll"} be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-background text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-85 transition-opacity disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <>
                      <Spinner className="w-4 h-4" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
