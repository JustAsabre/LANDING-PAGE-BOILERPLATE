export function validateEmail(email: string): boolean {
  // Basic RFC5322-inspired email regex (pragmatic)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

export function sanitizeString(input: string): string {
  // Very basic sanitization for demo purposes; backend must sanitize/validate again
  return input.replace(/[<>]/g, '')
}
