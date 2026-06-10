# Novatelia Studio Production QA Audit

## Scope

This audit tracks the current production readiness state for the Novatelia Studio website after CMS, SEO and contact flow implementation.

## Completed

- Public pages implemented
- Sanity CMS foundation implemented
- Blog CMS integration implemented
- Careers CMS integration implemented
- Portfolio listing CMS integration implemented
- Services listing CMS integration implemented
- Shared metadata builder implemented
- JSON-LD helpers implemented
- OpenGraph image helpers implemented
- Contact API route implemented
- Contact form connected to API route

## Required before final launch

### Environment

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION
- Email delivery provider credentials
- Spam protection keys

### CMS

- Create real Sanity project
- Configure production dataset
- Add real Blog, Portfolio, Career and Service content
- Confirm CMS fallback behavior when content is missing

### Contact

- Add email delivery provider such as Resend or SendGrid
- Add rate limiting
- Add spam protection such as Cloudflare Turnstile
- Confirm form success and failure states in production

### SEO

- Confirm metadata on all public pages
- Confirm canonical URLs
- Confirm OpenGraph previews
- Confirm JSON-LD output
- Validate structured data with Google tools

### Accessibility

- Check keyboard navigation
- Check visible focus states
- Check form labels and errors
- Check heading structure
- Check color contrast

### Performance

- Run Lighthouse audit
- Confirm image optimization
- Confirm bundle size
- Confirm mobile performance
- Confirm Core Web Vitals

### Deployment

- Configure production domain
- Configure environment variables
- Run production build
- Verify all routes
- Verify 404 page
- Verify contact form
- Verify CMS data fetching

## Current readiness

The project is structurally close to production-ready, but final launch should wait until email delivery, spam protection, real CMS content and deployment QA are completed.
