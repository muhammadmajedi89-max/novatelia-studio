# Novatelia Studio Phase 24 Production Implementation

## Purpose

Phase 24 turns the completed frontend and enterprise documentation into a real production-ready implementation.

This phase should not be treated as documentation only. It is the execution phase for CMS, backend, metadata, structured data, audits, deployment and final production verification.

## Current Starting Point

Completed before Phase 24:

- All public frontend pages
- Legal templates
- CMS/admin architecture document
- Design system variables
- Component variants
- Dark mode system plan
- SEO metadata framework
- OpenGraph system plan
- Structured data strategy
- Accessibility certification checklist
- Responsive certification checklist
- Developer handoff
- Launch readiness scorecard

Still missing before final launch:

- Live CMS/admin
- Database or hosted content backend
- Contact form backend
- Real SEO metadata in code
- Real JSON-LD in code
- OpenGraph image assets
- Sitemap and robots.txt
- Accessibility audit
- Responsive QA
- Production preview and deployment verification

## Recommended Execution Order

1. Select CMS and content backend.
2. Add CMS schemas and environment variables.
3. Connect Blog, Portfolio and Careers to CMS data.
4. Connect Contact form backend and lead storage.
5. Implement route-level metadata.
6. Implement OpenGraph defaults and image assets.
7. Implement JSON-LD helpers and page schemas.
8. Add sitemap and robots.txt.
9. Run accessibility audit.
10. Run responsive audit.
11. Run production build and preview deploy.
12. Complete final launch readiness review.

## CMS Decision

Primary recommendation:

- Sanity CMS for fastest editorial launch and strong Next.js integration.

Alternative:

- Payload CMS if Novatelia wants a fully self-hosted admin panel and database ownership.

## Phase 24.1 CMS Setup

Deliverables:

- CMS project created
- Studio/admin configured
- Environment variables documented
- Content schemas created
- Preview mode planned
- Media library enabled
- Editor roles configured

Collections:

- Blog Posts
- Portfolio Projects
- Careers
- Services
- Pricing Plans
- Team Members
- Testimonials
- Legal Pages
- SEO Metadata
- Contact Leads

## Phase 24.2 Frontend CMS Integration

Routes to connect first:

- /blog
- /blog/[slug]
- /portfolio
- /careers
- /careers/[slug]

Routes to connect later:

- /services
- /pricing
- /legal

## Phase 24.3 Contact Backend

Required features:

- Server-side form submission endpoint
- Validation
- Spam protection
- Email notification
- Lead storage
- Success and error states
- Rate limiting if needed

## Phase 24.4 SEO Implementation

Required implementation:

- Route-level metadata exports
- Dynamic metadata for CMS pages
- Canonical URLs
- Robots rules
- Sitemap
- robots.txt
- Metadata validation

## Phase 24.5 OpenGraph Implementation

Required implementation:

- Default OG image
- Page-specific OG images where needed
- Twitter card metadata
- Social preview validation
- CMS social preview fields

## Phase 24.6 Structured Data Implementation

Required implementation:

- Organization JSON-LD
- WebSite JSON-LD
- WebPage JSON-LD
- BlogPosting JSON-LD
- BreadcrumbList JSON-LD
- JobPosting JSON-LD only after real job data exists

## Phase 24.7 QA and Certification

Required audits:

- npm run lint
- npm run typecheck
- npm run build
- Lighthouse mobile
- Lighthouse desktop
- axe accessibility scan
- Keyboard navigation test
- Responsive screenshot review
- Form submission test
- Social preview test
- Schema validation test

## Phase 24.8 Deployment

Recommended deployment path:

- Vercel preview first
- Stakeholder review
- Production deployment only after blockers are resolved

Required before production:

- Domain connected
- SSL active
- Environment variables configured
- Build verified
- Sitemap submitted
- Analytics configured
- Error monitoring configured

## Go / No-Go Rule

Phase 24 is complete only when all critical blockers from launch-readiness-scorecard.md are resolved.

Until then, Novatelia Studio is ready for preview and implementation review, but not final production launch.
