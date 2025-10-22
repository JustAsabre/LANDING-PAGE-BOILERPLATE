import ThemeToggle from '@/components/ui/theme-toggle'

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container-responsive flex items-center justify-between py-4">
        <a href="#" className="text-xl font-bold text-brand-700 dark:text-brand-400" aria-label="Home">
          RichyTech.inc
        </a>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary">
            <ul className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
              <li><a className="hover:text-brand-700 dark:hover:text-brand-400" href="#benefits">Benefits</a></li>
              <li><a className="hover:text-brand-700 dark:hover:text-brand-400" href="#cta">Get Started</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
