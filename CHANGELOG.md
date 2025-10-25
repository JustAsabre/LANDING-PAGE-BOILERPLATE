# Changelog

All notable changes to this project will be documented in this file.

## 0.1.0 - 2025-10-21
- Scaffolded Vite + React + TypeScript + Tailwind project
- Added landing components: Header, Hero, Benefits, CTA, Footer
- Configured security headers for Netlify and Vercel
- Implemented GA4 loader (env-driven)
- Set up ESLint, Prettier, Vitest + RTL
- Added PRD and README

## 0.1.1 - 2025-10-21
- Added alias configuration for '@' and Node types
- Fixed Netlify configuration filename and ensured HTTPS redirect
- Added clsx dependency for Button component
- Verified lint, tests, and production build

## 0.1.2 - 2025-10-21
- Added hidden Netlify form in index.html for build-time detection

## 0.1.3 - 2025-10-21
- Expanded README with detailed setup, scripts, security, integrations, and deployment guides
- Added Netlify Function stubs for Mailchimp and ConvertKit (optional)
- Extended .env.example with server-side variables for serverless integrations

## 0.1.4 - 2025-10-22
- Added shadcn-compatible structure via `components.json` and `src/components/ui`
- New UI/animations: `AuroraBackground` and `SplashCursor` with demos
- Integrated Aurora background into `Hero` and Splash cursor at app root
- Added `src/lib/utils.ts` with `cn` helper
- Updated README with usage and structure details

## 0.1.5 - 2025-10-22
- Removed Splash cursor and added a dark mode toggle (class-based)
- Converted CTA to native Netlify Forms submission with `/thanks` redirect; preserved Formspree path when configured
- Added `public/thanks.html` confirmation page
- Fixed tests by mocking `matchMedia` in `vitest.setup.ts` and guarding in `ThemeToggle`
- Ensured build passes and deployment succeeds on Netlify

## 0.1.6 - 2025-10-22
- Applied a light-mode gradient background sitewide
- Added `ShowcaseSlider` with automatic marquee animation and placeholder images under `public/showcase`
- Implemented a modern snackbar system: split `snackbar-context`, `snackbar-provider`, and `use-toast`; wired CTA to show success/error/info toasts
- Restyled CTA using the provided PrebuiltUI layout while preserving all submission logic and Netlify/Formspree compatibility
- Updated README to reflect new features

## 0.1.7 - 2025-10-25
- Restored CTA submission logic and toast-driven feedback while keeping the gradient shell intact
- Applied the new gradient treatment to the benefits and recent landing pages sections without impacting the slider animation