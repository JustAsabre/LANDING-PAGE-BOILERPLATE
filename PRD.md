# Repo 1 — Landing Page Boilerplate (PRD)

## Goal
A demo landing page with hero, 3 benefit sections, and a CTA form that sends leads (Formspree or Netlify Forms), GA4 placeholder, and mobile-optimized responsive design.

## Scope
- Tech: React 18, Vite, TypeScript, Tailwind CSS
- Hosting: Netlify or Vercel
- Features:
  - Header, Hero, Benefits (3), CTA Form, Footer
  - Form submission via Netlify Forms or Formspree (config by env)
  - GA4 integration placeholder loaded via module (no inline)
  - Security hardening: CSP, HSTS, XFO, XCTO, Referrer-Policy
  - DX: ESLint, Prettier, Vitest + RTL, strict TS

## Non-Goals
- Backend APIs (beyond external Formspree or Netlify form handling)
- Auth flows (documented best practices only)

## Requirements
- Security
  - Input validation and basic sanitization on client; backend must validate again
  - No dangerouslySetInnerHTML; DOMPurify if ever needed
  - HTTPS enforced; CSP; headers configured; env vars for keys
- Performance
  - Mobile-first, responsive
  - Code-splitting-ready via Vite/React lazy
- Analytics
  - GA4 only if VITE_GA_MEASUREMENT_ID is set
- Forms
  - Netlify: data-netlify + hidden form-name
  - Formspree: POST JSON to env endpoint

## Acceptance Criteria
- Page builds and renders sections
- Form submits in both modes (mocked) and validates email
- GA module loads only when env is present
- Netlify/Vercel headers present

## Milestones
1. Scaffold project (Vite + TS + Tailwind) [Done]
2. Implement components (Hero, Benefits x3, CTA, Header, Footer) [Done]
3. Security headers/configs for Netlify/Vercel [Done]
4. GA module and env wiring [Done]
5. DX setup: ESLint, Prettier, Vitest, RTL [In Progress]
6. Docs: PRD, README, CHANGELOG [In Progress]
7. Build & verification [Pending]

## Risks & Mitigations
- CSP may block GA or external assets: test and adjust src lists
- Formspree or Netlify limitations: document and allow switching
- Env leakage: .env is gitignored and only VITE_ prefix is used