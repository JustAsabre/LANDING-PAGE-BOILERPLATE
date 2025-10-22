import { useContext } from 'react'
import { SnackbarContext, type SnackbarContextValue } from './snackbar-context'

export function useToast() {
  const ctx = useContext(SnackbarContext)
  if (ctx) return ctx
  // Fallback no-op outside provider
  const noop: SnackbarContextValue['showToast'] = () => {
    if (import.meta.env?.DEV) {
      console.warn('[Snackbar] Provider not mounted; toast suppressed')
    }
  }
  return { showToast: noop }
}

export default useToast
