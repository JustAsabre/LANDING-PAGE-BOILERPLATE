import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type SplashCursorProps = {
  /** Hex or tailwind color value used for the splash glow */
  colorClass?: string
  /** Effect radius in pixels */
  radius?: number
  className?: string
}

/**
 * SplashCursor
 * Lightweight cursor-follow radial glow that blends on top of the page.
 * - No event listeners on every element, just one on window.
 * - Uses CSS variables to avoid layout thrash; CSP-safe.
 */
export function SplashCursor({ colorClass = 'from-brand-400/40', radius = 160, className }: SplashCursorProps) {
  const [coords, setCoords] = useState({ x: -9999, y: -9999 })
  const raf = useRef<number | null>(null)
  const pending = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      pending.current = { x: e.clientX, y: e.clientY }
      if (raf.current == null) {
        raf.current = requestAnimationFrame(() => {
          if (pending.current) setCoords(pending.current)
          raf.current = null
        })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  type SplashStyle = React.CSSProperties & { '--x'?: string; '--y'?: string; '--r'?: string }
  const style: SplashStyle = {
    '--x': `${coords.x}px`,
    '--y': `${coords.y}px`,
    '--r': `${radius}px`
  }

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed inset-0 z-40 transition-opacity duration-300',
        'bg-[radial-gradient(circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))]',
        colorClass,
        'via-transparent to-transparent',
        className
      )}
      style={style}
    />
  )
}

export default SplashCursor
