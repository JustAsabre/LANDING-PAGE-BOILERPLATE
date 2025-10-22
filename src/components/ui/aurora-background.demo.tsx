import AuroraBackground from '@/components/ui/aurora-background'

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="rounded-xl border border-gray-200 bg-white/60 p-8 shadow-sm">
      <div className="relative z-0 mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Aurora Background</h3>
        <p className="mt-2 text-gray-700">
          A soft animated gradient backdrop built with framer-motion. Wrap any content with the component.
        </p>
      </div>
    </AuroraBackground>
  )
}

export default AuroraBackgroundDemo
