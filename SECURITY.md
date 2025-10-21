# Security Guidance

This project includes sensible defaults for a secure frontend landing page.

- Input Validation & Sanitization: Client-side validation is provided; backends must validate again.
- XSS Prevention: No dangerouslySetInnerHTML used; consider DOMPurify if needed.
- Tokens/Secrets: Do not commit secrets. Only expose public values via `VITE_` in `.env`.
- HTTPS: Enforced via redirects and HSTS headers in Netlify/Vercel config.
- CSP: See `netlify.toml` and `vercel.json` for a restrictive default policy; adjust when adding third-parties.
- Cookies/Auth: Prefer HttpOnly cookies for tokens; implement CSRF protections and proper CORS on the backend.
- Dependencies: Run `npm audit` regularly and update dependencies.