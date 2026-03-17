"use client"
import { useState } from 'react'
import Link from 'next/link'

const portfolioItems = [
  { href: "https://fortune.com/2021/06/13/nasdaq-board-diversity-people-with-disabilities-labor-force/", pub: "Fortune", type: "Op-Ed", date: "June 2021", tags: ["op-ed", "diversity"], title: "Nasdaq wants to improve board diversity. Why doesn't that include people with disabilities?", desc: "Argues that Nasdaq's board diversity proposal failed to include people with disabilities — a group with proven impact on company performance and governance.", chips: ["Disability Inclusion", "Corporate Governance"] },
  { href: "https://www.fastcompany.com/90690646/disability-is-the-missing-piece-in-the-dei-puzzle", pub: "Fast Company", type: "Feature", date: "2021", tags: ["op-ed", "diversity", "leadership"], title: "Disability Is the Missing Piece in the DEI Puzzle", desc: "Even as DEI becomes a corporate priority, people with disabilities are being left behind — and Disability:IN is stepping in to create real, measurable change.", chips: ["DEI", "Disability Inclusion"] },
  { href: "https://cecp.co/cecp-insights-blog/how-disability-inclusion-builds-sustainable-companies/", pub: "CECP", type: "Thought Leadership", date: "2021", tags: ["diversity", "leadership"], title: "How Disability Inclusion Builds Sustainable Companies", desc: "Jill Houghton of Disability:IN makes the business case for disability inclusion — from stronger financial performance to a richer culture of innovation.", chips: ["ESG", "Disability Inclusion"] },
  { href: "https://news.crunchbase.com/startups/legaltech-hypergrowth-legalzoom-startups-venture-raj-goyle-onit/", pub: "Crunchbase News", type: "Opinion / Analysis", date: "December 2021", tags: ["finance", "leadership"], title: "Why Legaltech Is Poised For Hypergrowth", desc: "Legaltech — long overlooked by investors — is on the verge of a fintech-style disruption, driven by COVID-19 and mounting pressure to digitise legal services.", chips: ["Legaltech", "Venture"] },
  { href: "https://www.law360.com/pulse/articles/1411475/bodhala-s-raj-goyle-on-legal-tech-s-fintech-moment", pub: "Law360 Pulse", type: "Executive Profile", date: "August 2021", tags: ["leadership", "finance"], title: "Bodhala's Raj Goyle On Legal Tech's Fintech Moment", desc: "Profile of Raj Goyle on why the legal industry is on the verge of a disruption cycle mirroring fintech's transformation of financial services.", chips: ["Legaltech", "Leadership"] },
  { href: "https://martechseries.com/mts-insights/interviews/techbytes-mykolas-rambus-general-manager-data-driven-marketing-equifax/", pub: "MarTech Series", type: "Executive Interview", date: "May 2019", tags: ["finance", "leadership"], title: "TechBytes with Mykolas Rambus, General Manager at Equifax", desc: "How data and analytics are reshaping enterprise competitiveness, the rise of AI in marketing, and the future of voice technology.", chips: ["Data & Analytics", "MarTech"] },
  { href: "https://www.axial.net/forum/two-ways-lps-co-invest-worth/", pub: "Axial", type: "Finance / Analysis", date: "September 2017", tags: ["finance", "leadership"], title: "Two Ways for LPs to Co-Invest, and Why It's Worth It", desc: "A deep dive into LP co-investing strategies — direct co-investment vs. sidecar vehicles — and why LPs are increasingly taking a more active role in private equity.", chips: ["Private Equity", "Co-Investment"] },
  { href: "https://www.linkedin.com/pulse/four-reasons-we-invest-underserved-markets-christopher-sugden/", pub: "LinkedIn", type: "Thought Leadership", date: "December 2017", tags: ["finance", "leadership"], title: "Four Reasons We Invest in Underserved Markets", desc: "Makes the case that investing in the \"rest of the country\" — especially east of the Mississippi — has proven to be an extremely attractive opportunity.", chips: ["Venture Capital", "Underserved Markets"] },
  { href: "https://www.linkedin.com/pulse/why-series-just-startups-anymore-christopher-sugden/", pub: "LinkedIn", type: "Thought Leadership", date: "2017", tags: ["finance", "leadership"], title: "Why Series A Is Not Just for Startups Anymore", desc: "As the cost of launching a startup plummets, many companies bypass early-stage VC and go straight to growth equity — reshaping the funding landscape.", chips: ["Growth Equity", "Startups"] },
  { href: "https://www.joinaliro.com/insights/participation-loan/", pub: "ALIRO", type: "Industry Insight", date: "2021", tags: ["finance"], title: "Loan Participations: 3 Things to Know in 2021", desc: "How loan participations have evolved and why new platforms like ALIRO are making balance sheet management more accessible than ever for credit unions and banks.", chips: ["Fintech", "Credit Unions"] },
  { href: "https://www.lend360.org/4076-2/", pub: "LEND360", type: "Industry Article", date: "September 2020", tags: ["finance"], title: "5 Ways to Build Your Online Lending Brand", desc: "A practical roadmap for online lenders navigating the COVID era — from content relevance and quality leads to data hygiene and cross-channel engagement.", chips: ["Fintech", "Online Lending"] },
  { href: "https://www.bizjournals.com/bizjournals/how-to/funding/2016/08/theres-no-free-college.html", pub: "Biz Journals", type: "Opinion / Finance", date: "August 2016", tags: ["finance"], title: "There's No Free College", desc: "Reliamax CEO Michael VanErdewyk makes the case for private student loans as a smarter alternative to credit card debt for families facing rising college costs.", chips: ["Student Loans", "Personal Finance"] },
  { href: "https://www.huffingtonpost.co.uk/kris-green/china-economy_b_6706254.html", pub: "HuffPost UK", type: "Op-Ed", date: "2015", tags: ["leadership", "finance"], title: "China's £310Billion Consumer Market: Are UK Retailers Missing Out?", desc: "Borderfree CSO Kris Green argues UK retailers are leaving money on the table by failing to court China's vast and fast-growing consumer market.", chips: ["E-Commerce", "China", "Retail"] },
  { href: "https://www.bloomberg.com/news/articles/2008-12-23/for-the-disabled-more-power-for-playbusinessweek-business-news-stock-market-and-financial-advice", pub: "Bloomberg BW", type: "Feature", date: "December 2008", tags: ["diversity", "leadership"], title: "For the Disabled, More Power for Play", desc: "Profiles the companies stepping up to make recreation accessible for people with disabilities — a group well-served at work but underserved at play.", chips: ["Assistive Tech", "Disability"] },
  { href: "https://www.wsj.com/articles/SB121970164024670703", pub: "Wall Street Journal", type: "Feature", date: "2008", tags: ["diversity", "leadership"], title: "Finding the Right Way to Disclose a Disability", desc: "A nuanced look at the personal and legal calculus behind disclosing a disability to an employer — when to do it and how to protect your rights.", chips: ["Disability", "Workplace Rights"] },
  { href: "https://www.directorsandboards.com/board-composition/board-diversity/increasing-disability-representation-on-corporate-boards/", pub: "Directors & Boards", type: "Op-Ed", date: "July 2023", tags: ["diversity", "leadership", "op-ed"], title: "Increasing Disability Representation on Corporate Boards", desc: "Ted Kennedy Jr. makes the case that people with disabilities remain nearly invisible in the boardroom — and outlines how market forces, updated governance charters, and investor pressure can change that.", chips: ["Board Diversity", "Disability Inclusion", "Governance"] },
  { href: "https://www.huffpost.com/entry/hiring-disabled-workers_b_2448183", pub: "HuffPost", type: "Op-Ed", date: "2013", tags: ["diversity", "leadership"], title: "Walgreens Isn't Always the Answer", desc: "Think Beyond the Label CEO Barb Otto argues that the Walgreens disability hiring model has limits — and that placing people with disabilities in middle- and high-skilled jobs would do far more for their economic outlook and American competitiveness.", chips: ["Disability Employment", "Workforce", "Policy"] },
  { href: "https://www.newsweek.com/its-time-include-disability-all-corporate-diversity-requirements-opinion-1623032", pub: "Newsweek", type: "Op-Ed", date: "August 2021", tags: ["op-ed", "diversity", "leadership"], title: "It's Time to Include Disability in All Corporate Diversity Requirements", desc: "Ted Kennedy Jr. argues that when the SEC approved Nasdaq's board diversity initiative — covering women, minorities, and LGBTQ+ individuals — people with disabilities were left out once again, despite clear evidence of their business value.", chips: ["Disability Inclusion", "Corporate Diversity", "Nasdaq"] },
  { href: "https://www.wsj.com/articles/SB946931533124460641", pub: "Wall Street Journal", type: "Feature", date: "2000", tags: ["leadership"], title: "Hong Kong's Quality-of-Life Challenge", desc: "The pandemic greatly accelerated the need for remote patient monitoring, making Gregg Michaelson more confident in his latest telehealth investments.", chips: ["Healthcare", "Technology"] },
    { href: "https://www.edisonpartners.com/blog/hrs-series-c", pub: "Edison Partners", type: "Blog", date: "2020", tags: ["leadership"], title: "Remote Patient Monitoring Empowers ‘Hospital at Home’", desc: "Gregg Michaelson shares what he’s looking for in healthcare IT investments as technology continues to improve patient outcomes.", chips: ["Healthcare", "Technology"] },
   { href: "https://www.edisonpartners.com/blog/healthcare-future-trends", pub: "Edison Partners", type: "Blog", date: "2021", tags: ["healthcare"], title: "What IT Companies Tell Us About Healthcare’s Future Trends", desc: "As rivals like Singapore court foreign professionals, Hong Kong risks losing its edge as a regional hub — sliding backward on quality-of-life measures like pollution.", chips: ["Hong Kong", "Asia Business"] },

   </a>
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'op-ed', label: 'Op-Ed' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'diversity', label: 'Diversity & Inclusion' },
  { key: 'finance', label: 'Finance' },
]

const services = [
  { num: '01', title: 'Thought Leadership Articles', body: 'LinkedIn essays, op-eds, and platform-specific content that positions you as the go-to voice in your field.', tags: ['LinkedIn', 'Op-Ed', 'Industry Press'] },
  { num: '02', title: 'Books & Long-Form', body: 'Business books, manifestos, and long-form narratives that codify your thinking and build lasting authority.', tags: ['Business Books', 'Memoir', 'Manifestos'] },
  { num: '03', title: 'Speeches & Keynotes', body: 'High-stakes spoken-word content for conference stages, AGMs, and internal all-hands.', tags: ['Keynotes', 'Conference Talks', 'Board Comms'] },
  { num: '04', title: 'Executive Newsletters', body: 'Ongoing editorial programmes that keep you visible and relevant — weekly, biweekly, or monthly.', tags: ['Email', 'Substack'] },
  { num: '05', title: 'Strategic Narratives', body: 'Company origin stories, investor narratives, and brand messaging frameworks.', tags: ['Brand Story', 'Investor Deck Copy'] },
  { num: '06', title: 'Interview-to-Draft', body: 'You talk, I write. One conversation becomes a polished, publication-ready piece.', tags: ['Fast Turnaround', 'Voice Matching'] },
]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = portfolioItems.filter(item =>
    activeFilter === 'all' || item.tags.includes(activeFilter)
  )

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="border-b border-border px-6 md:px-14 py-3 sticky top-0 bg-background z-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[11px] tracking-[0.18em] uppercase text-muted hover:text-accent transition-colors">
            Ghostwriter · Business &amp; Leadership
          </Link>
          <nav className="hidden md:flex gap-9">
            <Link href="/#services" className="text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors">Services</Link>
                        <Link href="/work" className="text-[11px] tracking-[0.16em] uppercase text-accent border-b border-accent pb-0.5">See My Work</Link>
            <Link href="/#industries" className="text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors">Industries</Link>
            <Link href="/#process" className="text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors">Process</Link>
            <Link href="/#contact" className="text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors">Work Together</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div className="px-6 md:px-14 py-16 md:py-20 border-b border-border">
        <Link href="/" className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors mb-10 block">
          ← Back to Home
        </Link>
        <div className="flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase text-accent mb-6">
          <span className="w-7 h-px bg-accent block" />
          Portfolio
        </div>
        <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-bold leading-[0.95] mb-6">
          <em className="text-accent">Selected</em> Work
        </h1>
        <p className="text-[15px] leading-relaxed text-muted max-w-[560px]">
          A curated selection of published writing across formats and industries. All client work remains confidential — what&apos;s shown here is bylined or publicly attributed.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="px-6 md:px-14 py-6 border-b border-border flex gap-2 flex-wrap items-center">
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted mr-2">Filter by</span>
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`text-[10px] tracking-[0.14em] uppercase px-4 py-1.5 border transition-all ${
              activeFilter === f.key
                ? 'border-accent text-accent bg-accent/10'
                : 'border-border text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="px-6 md:px-14 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {filtered.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-border flex flex-col hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <div className="h-[140px] flex items-center justify-center border-b border-border font-serif text-xl italic text-muted bg-background relative overflow-hidden group-hover:text-accent group-hover:border-accent transition-colors">
                {item.pub}
                <span className="absolute top-3 left-3 font-sans text-[9px] tracking-[0.18em] uppercase text-accent border border-accent px-2 py-0.5 bg-background">
                  {item.pub}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-2.5 items-center mb-3">
                  <span className="text-[9px] tracking-[0.18em] uppercase text-accent">{item.type}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-[9px] tracking-[0.14em] uppercase text-muted">{item.date}</span>
                </div>
                <div className="font-serif text-[19px] font-bold leading-snug mb-2.5">{item.title}</div>
                <p className="text-[12px] leading-relaxed text-muted flex-1">{item.desc}</p>
                <div className="flex justify-between items-center mt-4 pt-3.5 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {item.chips.map(c => (
                      <span key={c} className="text-[9px] tracking-[0.12em] uppercase text-muted border border-border px-1.5 py-0.5 group-hover:border-accent group-hover:text-accent group-hover:opacity-70 transition-colors">{c}</span>
                    ))}
                  </div>
                  <span className="text-accent text-base opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-6 md:px-14 pb-24">
        <div className="font-serif text-4xl italic font-bold mb-8 pb-5 border-b border-border">
          What I Can Write For You
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map(s => (
            <div key={s.num} className="bg-surface border border-border p-10 hover:border-accent hover:bg-accent/5 transition-all group">
              <div className="text-[11px] tracking-[0.2em] text-accent mb-6 opacity-70">{s.num}</div>
              <div className="font-serif text-[28px] font-bold leading-tight mb-4">{s.title}</div>
              <p className="text-[14px] leading-relaxed text-muted mb-6">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-[10px] tracking-[0.14em] uppercase text-muted border border-border px-2.5 py-1 group-hover:text-accent group-hover:border-accent group-hover:opacity-70 transition-colors">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/#contact" className="inline-block px-7 py-3.5 bg-accent text-background text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-85 transition-opacity">
            Work Together →
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-14 py-5 flex justify-between items-center">
        <span className="font-serif text-[15px] italic text-muted">Suzanne Robitaille</span>
        <span className="text-[11px] tracking-[0.1em] uppercase text-border">All client work is confidential</span>
        <span className="text-[11px] tracking-[0.1em] uppercase text-muted">© 2026</span>
      </footer>

    </main>
  )
}
