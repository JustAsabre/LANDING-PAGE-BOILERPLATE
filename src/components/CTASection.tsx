import Example from '@/components/ui/form-1'
import ThreeShowcaseRow from '@/components/ThreeShowcaseRow'

export function CTASection() {
  // Render three horizontal sliders and the exact Example form component

  return (
    <section id="cta" className="bg-white/70 dark:bg-gray-950/60">
      <div className="container-responsive py-16 sm:py-20">
        <ThreeShowcaseRow />
        <div className="mt-8">
          <Example />
        </div>
      </div>
    </section>
  )
}
