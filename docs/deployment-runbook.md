# Novatelia Studio Deployment Runbook

## Purpose

This runbook defines the final operational steps required to move Novatelia Studio from repository-ready to production-ready.

## 1. Vercel Project Setup

- Import the GitHub repository into Vercel
- Set the framework preset to Next.js
- Confirm the production branch is `main`
- Configure the production domain
- Enable automatic deployments from `main`

## 2. Required Environment Variables

Add these variables in the production deployment environment:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Add contact/email provider variables after selecting the provider:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=business@novatelia.com
CONTACT_FROM_EMAIL=
```

Add spam protection variables after selecting the provider:

```text
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

## 3. Sanity Setup

- Create the production Sanity project
- Create the production dataset
- Configure CORS for the production domain
- Add Blog, Portfolio, Career and Service content
- Confirm fallback behavior when CMS content is missing

## 4. Contact Flow Setup

- Connect the contact API to an email provider
- Add rate limiting
- Add Cloudflare Turnstile or equivalent spam protection
- Test success, validation and failure responses

## 5. Pre-Launch QA

Run the following checks before public launch:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Then manually verify:

- Home page
- Services page
- Portfolio page
- Blog listing and article pages
- Careers listing and detail pages
- Contact form
- Legal pages
- 404 page
- Mobile navigation
- SEO metadata
- OpenGraph previews
- JSON-LD output

## 6. Launch Checklist

- Production build passes
- Domain points to Vercel
- SSL is active
- Environment variables are configured
- CMS content is published
- Contact form sends real emails
- Analytics are configured if required
- Lighthouse audit is acceptable
- Stakeholder approval is received

## Current Status

The repository is code-ready for deployment preparation. Final production readiness depends on external service configuration, real content entry, email delivery, spam protection and deployment validation.
