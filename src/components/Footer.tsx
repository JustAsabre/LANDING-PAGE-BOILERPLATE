export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white py-8">
      <div className="container-responsive text-center text-sm text-gray-600">
        © {year} YourBrand. All rights reserved.
      </div>
    </footer>
  )
}
