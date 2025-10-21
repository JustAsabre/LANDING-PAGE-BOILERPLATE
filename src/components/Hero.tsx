import { Button } from '@/components/Button'

export function Hero() {
  return (
    <section className="bg-white" aria-labelledby="hero-title">
      <div className="container-responsive py-16 sm:py-24 flex flex-col items-start gap-6">
        <h1 id="hero-title" className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Build secure, fast landing pages
        </h1>
        <p className="max-w-2xl text-lg text-gray-700">
          A production-ready React + Tailwind boilerplate with security best practices, analytics, and a lead capture form.
        </p>
        <div className="flex gap-3">
          <a href="#cta"><Button>Get Started</Button></a>
          <a href="#benefits"><Button variant="secondary">Learn More</Button></a>
        </div>
      </div>
    </section>
  )
}
