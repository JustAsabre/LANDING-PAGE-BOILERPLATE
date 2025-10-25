type ShowcaseItem = {
  src: string
  alt: string
}

const items: ShowcaseItem[] = [
  { src: '/showcase/landing-1.svg', alt: 'Landing page 1' },
  { src: '/showcase/landing-2.png', alt: 'Landing page 2' },
  { src: '/showcase/landing-3.png', alt: 'Landing page 3' },
  { src: '/showcase/landing-4.png', alt: 'Landing page 4' },
  { src: '/showcase/landing-5.png', alt: 'Landing page 5' }
]

export function ShowcaseSlider() {
  // Duplicate items for seamless loop
  const loop = [...items, ...items]
  return (
    <section
      aria-labelledby="showcase-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-925"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-1/3 h-60 w-60 rounded-full bg-indigo-200/35 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute bottom-[-5rem] left-1/4 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl dark:bg-sky-500/15" />
      </div>
      <div className="container-responsive relative py-16 sm:py-20">
        <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-gray-800/70 dark:bg-gray-950/80">
          <h2 id="showcase-title" className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
            Recent landing pages
          </h2>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-indigo-100/60 bg-white/80 dark:border-gray-800/60 dark:bg-gray-950/70">
            <div className="flex gap-6 animate-marquee will-change-transform px-6 py-6">
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
      </div>
    </section>
  )
}

export default ShowcaseSlider
