const GA_ID = import.meta.env?.VITE_GA_MEASUREMENT_ID || ''

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

export function loadGA() {
  if (!GA_ID) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  const gtag: Gtag = (...args) => {
    window.dataLayer!.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_ID)
}
