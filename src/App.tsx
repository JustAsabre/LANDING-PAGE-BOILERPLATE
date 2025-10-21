import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
