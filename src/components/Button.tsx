import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ className, variant = 'primary', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500',
    secondary: 'bg-white dark:bg-gray-800 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-gray-700 hover:bg-brand-50 dark:hover:bg-gray-700 focus-visible:ring-brand-500',
    ghost: 'bg-transparent text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-gray-800 focus-visible:ring-brand-500'
  }
  return (
    <button
      className={clsx(base, variants[variant], 'px-4 py-2', className)}
      {...props}
    />
  )
}
