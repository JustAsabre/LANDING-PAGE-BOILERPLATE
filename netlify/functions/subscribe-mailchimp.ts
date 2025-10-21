import type { Handler, HandlerEvent } from '@netlify/functions'

const API_KEY = process.env.MAILCHIMP_API_KEY
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX // e.g., us6

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    return { statusCode: 500, body: 'Server not configured' }
  }
  try {
    const body = JSON.parse(event.body || '{}') as { email?: string; name?: string }
    const email = (body.email || '').toString().trim()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return { statusCode: 400, body: 'Invalid email' }
    }
    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed', merge_fields: { FNAME: body.name || '' } })
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
