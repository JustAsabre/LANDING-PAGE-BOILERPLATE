import { ReactNode, useCallback, useMemo, useState } from 'react'
import { CheckCircle, Info, X, XCircle } from 'lucide-react'
import { SnackbarContext, Toast, Variant } from './snackbar-context'

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const showToast = useCallback((message: string, variant: Variant = 'info', timeoutMs = 3000) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message, variant }])
    if (timeoutMs > 0) {
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), timeoutMs)
    }
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 p-3 shadow-lg backdrop-blur"
            role="status"
            aria-live="polite"
          >
            {t.variant === 'success' ? (
              <CheckCircle className="text-emerald-600" size={18} />
            ) : t.variant === 'error' ? (
              <XCircle className="text-red-600" size={18} />
            ) : (
              <Info className="text-indigo-600" size={18} />
            )}
            <div className="flex-1 text-sm text-gray-900 dark:text-gray-100">{t.message}</div>
            <button
              className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setToasts((list) => list.filter((x) => x.id !== t.id))}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
