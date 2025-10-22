import { createContext } from 'react'

export type Variant = 'success' | 'error' | 'info'
export type Toast = { id: number; message: string; variant: Variant }

export type SnackbarContextValue = {
  showToast: (message: string, variant?: Variant, timeoutMs?: number) => void
}

export const SnackbarContext = createContext<SnackbarContextValue | undefined>(undefined)
