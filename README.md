# LANDING-PAGE-BOILERPLATE

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JustAsabre/LANDING-PAGE-BOILERPLATE)

A secure, modern landing page boilerplate using React, Vite, TypeScript, and Tailwind CSS. Includes a hero, three benefit sections, and a CTA form that works with Netlify Forms or Formspree. GA4 placeholder included. Hardened with CSP and security headers for Netlify and Vercel.

## Features
- React 18 + Vite + TypeScript
- Tailwind CSS; reusable Button component; mobile-first layout
- Sections: Header, Hero, Benefits x3, CTA form, Footer
- Lead capture: Netlify Forms (default) or Formspree via env
- GA4 loader (env-driven, no inline scripts)
- Security headers (Netlify/Vercel), CSP, HSTS
- ESLint (flat config), Prettier, Vitest + React Testing Library

## Prerequisites
- Node.js 18+ and npm
- Git (for pushing to GitHub)

## Project Setup

1) Install dependencies
```powershell
npm install
```

2) Create an env file
```powershell
Copy-Item .env.example .env
```
Then set values for:
- `VITE_GA_MEASUREMENT_ID` (optional)
- `VITE_FORMSPREE_ENDPOINT` (optional; omit to use Netlify Forms)
- For serverless (when deploying on Netlify Functions):
  - `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`
  - `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`

3) Run the dev server
```powershell
npm run dev
```
Open http://localhost:5173

4) Quality checks
```powershell
npm run lint
npm test
npm run build
```

## Scripts
- `npm run dev` — Vite dev server
- `npm run build` — Type-checks then builds to `dist/`
- `npm run preview` — Serves the production build locally
- `npm run lint` — ESLint with flat config
- `npm test` — Vitest in run mode

## Directory Structure
```
src/
  components/           # UI components (Header, Hero, Benefits, CTASection, Footer, Button)
  lib/                  # Utilities (ga.ts, validation.ts)
  index.css             # Tailwind layers + global styles
  main.tsx, App.tsx
netlify/
  functions/            # Optional serverless functions (Mailchimp, ConvertKit)
public/                 # Static assets (favicon, robots.txt)
```

## Security Practices
- Avoid `dangerouslySetInnerHTML`; if necessary, sanitize with DOMPurify
- HTTPS in production; HSTS and other headers in `netlify.toml` / `vercel.json`
- Strict Content Security Policy; adjust when adding third-party resources
- Keep secrets out of the client: only `VITE_` vars are exposed to the browser
- Backend must re-validate/sanitize all inputs

## Forms (Lead Capture)
- Netlify Forms (default): The CTA form includes proper attributes and a hidden detection form in `index.html`. On Netlify, submissions appear in the Netlify dashboard.
- Formspree: Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXX` in `.env`. The CTA will POST directly to Formspree.
- Serverless integrations (optional): Use Netlify Functions (`netlify/functions/subscribe-*.ts`) to connect Mailchimp or ConvertKit without exposing API keys.

## GA4
- Set `VITE_GA_MEASUREMENT_ID` to enable analytics
- Loaded programmatically in `src/lib/ga.ts` to avoid inline scripts and match CSP

## Deploy

### Deploy to Netlify (recommended)
1. Push the code to GitHub (see GitHub section below)
2. In Netlify, New Site from Git → select your repo
3. Build settings (auto-detected but listed here):
	- Build command: `npm run build`
	- Publish directory: `dist`
	- Functions directory: `netlify/functions`
4. Add environment variables in Netlify UI for any secrets or public vars
5. Deploy — Netlify Forms will work automatically; check Forms tab for submissions

Troubleshooting Netlify builds
- Error: “Failed retrieving extensions ... fetch failed” or “Failed to parse configuration”
  - This is often transient or related to account auth. Try:
    - Re-run the deploy
    - Disconnect and reconnect the GitHub repo in Netlify
    - Ensure you’re logged in and your Netlify account has access to the repo
    - In Site settings → Build & deploy: confirm Build command (`npm run build`), Publish directory (`dist`), Functions (`netlify/functions`)
    - Set Node version to 18 (Site settings → Environment variables or use the provided netlify.toml)
    - Clear build cache and retry
  - If it persists, open a Netlify support ticket with the full log snippet
- Error: `sh: 1: tsc: not found`
  - Netlify skipped devDependencies because NODE_ENV=production. Fixed by setting `NPM_CONFIG_PRODUCTION=false` in `netlify.toml` (already included) or Site settings → Environment variables.
  - Alternatively, remove any forced NODE_ENV=production during build.

### Deploy to Vercel
1. Import the repo into Vercel
2. Build command: `npm run build`, Output: `dist`
3. Set environment variables in Vercel Project Settings
4. Deploy — security headers come from `vercel.json`

## GitHub (create repo and push)
From the project root:
```powershell
git init
git add -A
git commit -m "chore: initial boilerplate"
# Create a new GitHub repo, then:
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Email Integration Options

### Option 1: Formspree (Quickest)
1. Sign up at https://formspree.io and create a form
2. Copy your endpoint URL (looks like: https://formspree.io/f/xxxxxx)
3. In `.env`, set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
4. The CTA form will POST to Formspree; Netlify Forms remains a fallback when unset.

### Option 2: Mailchimp (Marketing lists)
Use a serverless function to keep your API key private.
1. Get Mailchimp API key, Audience ID, and server prefix (e.g., us6)
2. In `.env` (server-side): `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`
3. Deploy to Netlify; call `/.netlify/functions/subscribe-mailchimp` from the client

### Option 3: ConvertKit (Creators/newsletters)
Also via serverless function.
1. Get ConvertKit API key and Form ID
2. In `.env` (server-side): `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`
3. Deploy to Netlify; call `/.netlify/functions/subscribe-convertkit` from the client

Security note: never put real API keys in `VITE_` variables, and never commit `.env` to source control.

## Troubleshooting
- Dev server port busy: run `npm run dev -- --port 5174`
- CSP blocking resources: adjust allowed sources in `netlify.toml` / `vercel.json`
- Netlify Forms not appearing: ensure hidden form exists in `index.html` and form name matches
- GA not recording: verify `VITE_GA_MEASUREMENT_ID` and check ad-blockers

## License
MIT
