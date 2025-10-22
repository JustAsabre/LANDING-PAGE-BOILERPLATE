import { FormEvent, useMemo, useState } from 'react'
import { validateEmail, sanitizeString } from '@/lib/validation'
import { useToast } from '@/components/ui/use-toast'
import Example from '@/components/ui/form-1'

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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    // If we're using Netlify Forms (no Formspree action), allow native submit
    if (!action) {
      showToast('Submitting… Redirecting to thank you page.', 'info', 2500)
      return
    }

    // Formspree path (AJAX)
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
      showToast('Thanks! Your request was sent.', 'success', 3500)
      setEmail('')
      setName('')
      setMessage('')
    } catch {
      setStatus('error')
      showToast('Something went wrong. Please try again.', 'error', 3500)
    }
  }

  return (
    <section id="cta" className="bg-white/70 dark:bg-gray-950/60">
      <div className="container-responsive py-16 sm:py-20">
        <Example
          onSubmit={onSubmit}
          formProps={{
            name: 'lead',
            method: 'POST',
            action: action ?? '/thanks',
            'data-netlify': !action ? 'true' : undefined,
            'data-netlify-honeypot': 'bot-field'
          }}
          nameValue={name}
          emailValue={email}
          messageValue={message}
          onNameChange={setName}
          onEmailChange={setEmail}
          onMessageChange={setMessage}
          submitting={status === 'submitting'}
          submitLabel="Submit Form"
        >
          <input type="hidden" name="form-name" value="lead" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
        </Example>

        {import.meta.env.DEV && !action && (
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
            Note: Netlify Forms submissions are processed on deployed sites. In local dev, use Formspree by setting
            VITE_FORMSPREE_ENDPOINT.
          </p>
        )}
      </div>
    </section>
  )
}
