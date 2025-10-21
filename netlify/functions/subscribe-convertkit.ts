import type { Handler, HandlerEvent } from '@netlify/functions'

const API_KEY = process.env.CONVERTKIT_API_KEY
const FORM_ID = process.env.CONVERTKIT_FORM_ID

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  if (!API_KEY || !FORM_ID) {
    return { statusCode: 500, body: 'Server not configured' }
  }
  try {
    const body = JSON.parse(event.body || '{}') as { email?: string; name?: string }
    const email = (body.email || '').toString().trim()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return { statusCode: 400, body: 'Invalid email' }
    }
    const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: API_KEY, email, first_name: body.name || '' })
    })
    if (!res.ok) {
      const text = await res.text()
      return { statusCode: res.status, body: text }
    }
    return { statusCode: 200, body: 'Subscribed' }
  } catch {
    return { statusCode: 500, body: 'Server error' }
  }
}
