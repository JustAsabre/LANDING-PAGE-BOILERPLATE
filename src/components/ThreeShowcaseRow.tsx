// standalone presentational component

const items = [
  '/showcase/landing-1.svg',
  '/showcase/landing-2.svg',
  '/showcase/landing-3.svg',
  '/showcase/landing-4.svg',
  '/showcase/landing-5.svg'
]

function MiniMarquee({ speedClass, title }: { speedClass: string; title?: string }) {
  const loop = [...items, ...items]
  return (
    <div className="w-full">
      {title && <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>}
      <div className="relative overflow-hidden rounded-lg">
        <div className={`flex gap-4 ${speedClass}` }>
          {loop.map((src, i) => (
            <div key={`${src}-${i}`} className="shrink-0 w-[200px]">
              <img src={src} alt={`showcase-${i}`} className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ThreeShowcaseRow() {
  return (
    <section aria-label="three-showcase-row" className="py-8">
      <div className="container-responsive">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <MiniMarquee speedClass="animate-marquee-fast" title="Concepts" />
          <MiniMarquee speedClass="animate-marquee-medium" title="Templates" />
          <MiniMarquee speedClass="animate-marquee-slow" title="Variants" />
        </div>
      </div>
    </section>
  )
}
