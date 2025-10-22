import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type AuroraBackgroundProps = {
  className?: string
  children?: ReactNode
}

/**
 * AuroraBackground
 * Animated blurry gradient blobs behind content.
 * - Pure CSS + framer-motion. No inline scripts. CSP-safe.
 */
export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn('relative isolate overflow-hidden', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -top-1/2 -left-1/3 h-[120%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400/40 via-fuchsia-400/25 to-transparent blur-3xl"
          animate={{ x: [0, 120, -80, 0], y: [0, -60, 80, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-1/2 -right-1/3 h-[120%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/30 via-cyan-400/20 to-transparent blur-3xl"
          animate={{ x: [0, -100, 60, 0], y: [0, 50, -70, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/3 left-1/4 h-[60%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400/25 via-violet-400/15 to-transparent blur-2xl"
          animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {children}
    </div>
  )
}

export default AuroraBackground
