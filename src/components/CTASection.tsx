import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/Button'
import { validateEmail, sanitizeString } from '@/lib/validation'
import { useToast } from '@/components/ui/use-toast'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

export function CTASection() {
  const { showToast } = useToast()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const action = useMemo(() => {
    if (FORMSPREE_ENDPOINT) return FORMSPREE_ENDPOINT
    return undefined
  }, [])

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = window.setTimeout(() => setStatus('idle'), 4000)
      return () => window.clearTimeout(timer)
    }
    return undefined
  }, [status])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!action) {
      setStatus('submitting')
      showToast('Submitting… Redirecting to thank you page.', 'info', 2500)
      return
    }

    e.preventDefault()

    const cleanName = sanitizeString(name)
    const cleanMsg = sanitizeString(message)

    if (!validateEmail(email)) {
      setStatus('error')
      showToast('Please enter a valid email address.', 'error', 3000)
      return
    }

    setStatus('submitting')

    try {
      const res = await fetch(action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email, name: cleanName, message: cleanMsg })
      })

      if (!res.ok) throw new Error('Form submission failed')

      setStatus('success')
      showToast('Thanks! Your request was sent.', 'success', 3500)
      setEmail('')
      setName('')
      setMessage('')
    } catch {
      setStatus('error')
      showToast('Something went wrong. Please try again.', 'error', 3500)
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="cta" className="bg-gradient-to-b from-indigo-50 via-sky-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="container-responsive py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-100/80 px-4 py-1 text-xs font-medium uppercase tracking-wide text-indigo-600 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">
            Contact Us
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Let’s Get In Touch.
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            Or just reach out manually at{' '}
            <a href="mailto:hello@prebuiltui.com" className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-300">
              hello@prebuiltui.com
            </a>
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div
            aria-hidden
            className="absolute inset-0 -m-8 rounded-[40px] bg-gradient-to-br from-indigo-300/50 via-sky-200/40 to-emerald-200/50 blur-3xl opacity-80 dark:from-indigo-500/30 dark:via-sky-400/25 dark:to-emerald-400/30"
          />
          <div className="relative rounded-[32px] border border-white/70 bg-white/95 p-[1px] shadow-xl backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/90">
            <div className="rounded-[30px] bg-white/95 p-6 shadow-sm dark:bg-gray-950/95 sm:p-10">
              <form
                onSubmit={handleSubmit}
                name="lead"
                method={action ? 'POST' : 'POST'}
                action={action ?? '/thanks'}
                data-netlify={!action ? 'true' : undefined}
                data-netlify-honeypot="bot-field"
                className="grid gap-6"
              >
                <input type="hidden" name="form-name" value="lead" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                    <div className="mt-2 flex h-11 items-center gap-3 rounded-full border border-slate-300/80 bg-white px-3 shadow-inner focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:border-slate-700 dark:bg-gray-900 dark:focus-within:ring-indigo-500 dark:focus-within:ring-offset-gray-950">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-full w-full bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                    <div className="mt-2 flex h-11 items-center gap-3 rounded-full border border-slate-300/80 bg-white px-3 shadow-inner focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:border-slate-700 dark:bg-gray-900 dark:focus-within:ring-indigo-500 dark:focus-within:ring-offset-gray-950">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-full w-full bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </label>
                </div>

                <label className="flex flex-col text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-base text-gray-900 shadow-inner outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-950"
                    placeholder="Enter your message"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center rounded-full bg-indigo-500 px-6 py-3 text-white shadow hover:bg-indigo-600 focus-visible:ring-indigo-400 sm:w-auto"
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit Form'}
                  </Button>
                  {status === 'success' && <span className="text-sm text-green-600">Thanks! We’ll be in touch.</span>}
                  {status === 'error' && <span className="text-sm text-red-600">Check your details and try again.</span>}
                </div>

                {import.meta.env.DEV && !action && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Note: Netlify Forms submissions are processed on deployed sites. In local dev, set VITE_FORMSPREE_ENDPOINT to test without redirects.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
