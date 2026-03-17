import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
     <See My Work />
      <Industries />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
