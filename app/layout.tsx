import type { Metadata } from 'next'
import { Cormorant_Garamond, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Suzanne Robitaille — Ghostwriter for Business Leaders',
  description: 'Executive ghostwriting for thought leadership articles, LinkedIn content, speeches, newsletters, and more. Confidential, always.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrumentSans.variable}`}>
      <body className="font-sans antialiased text-[15px] leading-relaxed overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
