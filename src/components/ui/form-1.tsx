import { FormEvent, FormHTMLAttributes, ReactNode, useMemo, useState } from 'react'

type DataAttributes = {
  [K in `data-${string}`]?: string | undefined
}

type FormAttributes = FormHTMLAttributes<HTMLFormElement> & DataAttributes

type ExampleProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  formProps?: FormAttributes
  nameValue?: string
  emailValue?: string
  messageValue?: string
  onNameChange?: (value: string) => void
  onEmailChange?: (value: string) => void
  onMessageChange?: (value: string) => void
  submitting?: boolean
  submitLabel?: string
  children?: ReactNode
}

export function Example({
  onSubmit,
  formProps,
  nameValue,
  emailValue,
  messageValue,
  onNameChange,
  onEmailChange,
  onMessageChange,
  submitting = false,
  submitLabel = 'Submit Form',
  children
}: ExampleProps) {
  const [internalName, setInternalName] = useState('')
  const [internalEmail, setInternalEmail] = useState('')
  const [internalMessage, setInternalMessage] = useState('')

  const name = nameValue ?? internalName
  const email = emailValue ?? internalEmail
  const message = messageValue ?? internalMessage

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (onSubmit) {
      onSubmit(event)
    } else {
      event.preventDefault()
    }
  }

  function handleNameChange(value: string) {
    onNameChange?.(value)
    if (nameValue === undefined) {
      setInternalName(value)
    }
  }

  function handleEmailChange(value: string) {
    onEmailChange?.(value)
    if (emailValue === undefined) {
      setInternalEmail(value)
    }
  }

  function handleMessageChange(value: string) {
    onMessageChange?.(value)
    if (messageValue === undefined) {
      setInternalMessage(value)
    }
  }

  const sanitizedFormProps = useMemo(() => {
    if (!formProps) return {}
    const rest: Record<string, unknown> = { ...formProps }
    delete rest.className
    delete rest.onSubmit
    return rest
  }, [formProps])

  const buttonText = submitting ? 'Submitting…' : submitLabel

  return (
    <form
      {...sanitizedFormProps}
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-sm text-slate-800 dark:text-slate-100"
    >
      {children}
      <p className="text-xs bg-indigo-200 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 font-medium px-3 py-1 rounded-full">
        Contact Us
      </p>
      <h1 className="text-4xl font-bold py-4 text-center text-slate-900 dark:text-slate-50">Let’s Get In Touch.</h1>
      <p className="max-md:text-sm text-gray-500 dark:text-gray-300 pb-10 text-center">
        Or just reach out manually to us at{' '}
        <a href="mailto:hello@prebuiltui.com" className="text-indigo-600 dark:text-indigo-300 hover:underline">
          hello@prebuiltui.com
        </a>
      </p>

  <div className="w-full max-w-[24rem] px-4">
        <label htmlFor="name" className="font-medium text-slate-700 dark:text-slate-200">
          Full Name
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 dark:border-slate-600 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden bg-white/90 dark:bg-slate-900/60">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
              fill="#475569"
            />
          </svg>
          <input
            id="name"
            name="name"
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent text-slate-900 dark:text-slate-100"
            placeholder="Enter your full name"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
          />
        </div>

        <label htmlFor="email" className="font-medium text-slate-700 dark:text-slate-200">
          Email Address
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 dark:border-slate-600 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden bg-white/90 dark:bg-slate-900/60">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
              fill="#475569"
            />
          </svg>
          <input
            id="email"
            name="email"
            type="email"
            className="h-full px-2 w-full outline-none bg-transparent text-slate-900 dark:text-slate-100"
            placeholder="Enter your email address"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
          />
        </div>

        <label htmlFor="message" className="font-medium text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full mt-2 p-2 bg-transparent border border-slate-300 dark:border-slate-600 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all text-slate-900 dark:text-slate-100"
          placeholder="Enter your message"
          required
          value={message}
          onChange={(event) => handleMessageChange(event.target.value)}
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white py-2.5 w-full rounded-full transition"
          disabled={submitting}
        >
          {buttonText}
          <svg
            className="mt-0.5"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Example