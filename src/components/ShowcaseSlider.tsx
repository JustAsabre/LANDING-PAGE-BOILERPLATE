type ShowcaseItem = {
  src: string
  alt: string
}

const items: ShowcaseItem[] = [
  { src: '/showcase/landing-1.svg', alt: 'Landing page 1' },
  { src: '/showcase/landing-2.svg', alt: 'Landing page 2' },
  { src: '/showcase/landing-3.svg', alt: 'Landing page 3' },
  { src: '/showcase/landing-4.svg', alt: 'Landing page 4' },
  { src: '/showcase/landing-5.svg', alt: 'Landing page 5' }
]

export function ShowcaseSlider() {
  // Duplicate items for seamless loop
  const loop = [...items, ...items]
  return (
    <section aria-labelledby="showcase-title" className="bg-white/70 dark:bg-gray-900/60">
      <div className="container-responsive py-12">
        <h2 id="showcase-title" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
          Recent landing pages
        </h2>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex gap-6 animate-marquee will-change-transform">
            {loop.map((it, i) => (
              <div key={`${it.alt}-${i}`} className="shrink-0 w-[320px] sm:w-[420px] md:w-[520px]">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-auto w-full rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSlider
