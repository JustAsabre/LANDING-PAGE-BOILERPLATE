import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders hero and CTA', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /build secure, fast landing pages/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /let.?s get in touch/i })).toBeInTheDocument()
  })
})
