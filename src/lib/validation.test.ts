import { describe, expect, it } from 'vitest'
import { sanitizeString, validateEmail } from './validation'

describe('validation', () => {
  it('validates email format', () => {
    expect(validateEmail('user@example.com')).toBe(true)
    expect(validateEmail('not-an-email')).toBe(false)
  })

  it('sanitizes angle brackets', () => {
    expect(sanitizeString('<script>')).toBe('script')
  })
})
