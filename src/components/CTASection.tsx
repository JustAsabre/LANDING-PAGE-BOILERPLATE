import { FormEvent, useMemo, useState } from 'react'
import { Button } from '@/components/Button'
import { validateEmail, sanitizeString } from '@/lib/validation'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

export function CTASection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const action = useMemo(() => {
    if (FORMSPREE_ENDPOINT) return FORMSPREE_ENDPOINT
    return undefined
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    // If we're using Netlify Forms (no Formspree action), allow native submit
    if (!action) {
      return
    }

    // Formspree path (AJAX)
    e.preventDefault()
    const cleanName = sanitizeString(name)
    const cleanMsg = sanitizeString(message)
    if (!validateEmail(email)) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      // Formspree JSON endpoint
      const res = await fetch(action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email, name: cleanName, message: cleanMsg })
      })
      if (!res.ok) throw new Error('Formspree failed')

      setStatus('success')
      setEmail('')
      setName('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="bg-white dark:bg-gray-900">
      <div className="container-responsive py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Ready to capture leads?</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Sign up to receive a demo and onboarding resources.</p>
        </div>
        <form
          onSubmit={onSubmit}
          name="lead"
          method={action ? 'POST' : 'POST'}
          action={action ?? '/thanks'}
          data-netlify={!action ? 'true' : undefined}
          data-netlify-honeypot="bot-field"
          className="mx-auto mt-8 max-w-xl space-y-4"
        >
          <input type="hidden" name="form-name" value="lead" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500"
              placeholder="Tell us a bit about your needs..."
            />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Request Demo'}
            </Button>
            {status === 'success' && <span className="text-green-600">Thanks! We’ll be in touch.</span>}
            {status === 'error' && <span className="text-red-600">Check your details and try again.</span>}
          </div>
          {import.meta.env.DEV && !action && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Note: Netlify Forms submissions are processed on deployed sites. In local dev, use Formspree
              by setting VITE_FORMSPREE_ENDPOINT.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
