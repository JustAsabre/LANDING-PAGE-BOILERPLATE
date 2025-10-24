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
    <div className="min-w-[260px] sm:min-w-[320px] lg:min-w-0 lg:flex-1">
      {title && <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>}
      <div className="relative overflow-hidden rounded-lg border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60">
        <div className={`flex gap-4 ${speedClass}`}>
          {loop.map((src, i) => (
            <div key={`${src}-${i}`} className="shrink-0 w-[180px] sm:w-[200px]">
              <img
                src={src}
                alt={`showcase-${i % items.length}`}
                className="h-auto w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                loading="lazy"
              />
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
        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
          <MiniMarquee speedClass="animate-marquee-fast" title="Concepts" />
          <MiniMarquee speedClass="animate-marquee-medium" title="Templates" />
          <MiniMarquee speedClass="animate-marquee-slow" title="Variants" />
        </div>
      </div>
    </section>
  )
}
