export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container-responsive flex items-center justify-between py-4">
        <a href="#" className="text-xl font-bold text-brand-700" aria-label="Home">
          RichyTech.inc
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-6 text-sm text-gray-700">
            <li><a className="hover:text-brand-700" href="#benefits">Benefits</a></li>
            <li><a className="hover:text-brand-700" href="#cta">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
