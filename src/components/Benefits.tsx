const items = [
  {
    title: 'Security-first',
    desc: 'CSP, security headers, env separation, and no unsafe HTML by default.'
  },
  {
    title: 'Performance',
    desc: 'Vite + code-splitting + Tailwind ensures fast loads and good Lighthouse scores.'
  },
  {
    title: 'Developer Experience',
    desc: 'TypeScript, ESLint, Prettier, and tests are pre-configured for smooth work.'
  }
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-sky-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute bottom-[-6rem] right-1/4 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10" />
      </div>
      <div className="container-responsive relative py-16 sm:py-20">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Why this boilerplate?</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{it.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
