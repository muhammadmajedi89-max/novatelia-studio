# Novatelia Studio Developer Handoff

## Purpose

This document provides the developer handoff reference for Novatelia Studio after completion of the public frontend pages and enterprise architecture documentation.

## Current Project Status

The project currently includes:

- Next.js public frontend structure
- Reusable layout and UI components
- Public marketing pages
- Blog listing and article template
- Careers listing and role detail template
- Search placeholder page
- Custom 404 page
- Legal pages
- Documentation for CMS, design system, SEO, OpenGraph, structured data, accessibility and responsiveness

The project does not yet include:

- Live CMS/admin panel
- Database
- Authentication
- Real contact form submission backend
- Real CMS-managed content
- Production SEO metadata implemented on every route
- JSON-LD implemented in code
- Final accessibility audit
- Final responsive device audit

## Core Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix-compatible UI direction
- Lucide icons

## Key Directories

- app: Next.js app routes
- components/layout: Header and footer components
- components/ui: Reusable UI primitives
- components/home: Home page sections
- components/services: Services page sections
- components/portfolio: Portfolio page sections
- components/pricing: Pricing page sections
- components/ai-showcase: AI showcase sections
- components/contact: Contact page sections
- components/blog: Blog page sections
- components/careers: Careers page sections
- docs: Enterprise planning and certification documentation
- styles: Global CSS

## Public Routes

- /
- /services
- /portfolio
- /pricing
- /ai-showcase
- /contact
- /blog
- /blog/[slug]
- /careers
- /careers/[slug]
- /search
- /legal
- /legal/privacy
- /legal/terms
- /legal/cookies

## Build Commands

Recommended commands:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run start
```

## CMS Integration Plan

Recommended CMS path:

1. Sanity CMS for hosted editorial workflows.
2. Payload CMS if a self-hosted admin/backend is required.

Primary CMS-managed collections:

- Blog Posts
- Portfolio Projects
- Services
- Pricing Plans
- Careers
- Team Members
- Testimonials
- Legal Pages
- SEO Metadata
- Media Assets
- Contact Submissions

## Environment Variables

Future environment variables may include:

- NEXT_PUBLIC_SITE_URL
- CMS_PROJECT_ID
- CMS_DATASET
- CMS_API_TOKEN
- CONTACT_FORM_ENDPOINT
- SMTP_HOST
- SMTP_USER
- SMTP_PASSWORD
- ANALYTICS_ID

Do not commit production secrets to the repository.

## SEO Implementation Tasks

Before launch:

- Add route-level metadata exports.
- Add canonical helper.
- Add OpenGraph image defaults.
- Add robots rules.
- Add sitemap generation.
- Add robots.txt.
- Add JSON-LD helpers.

## Testing Strategy

Required checks:

- TypeScript typecheck
- ESLint
- Production build
- Lighthouse mobile and desktop
- Accessibility audit
- Responsive breakpoint screenshots
- Manual keyboard navigation test
- Form validation test after backend integration

## Deployment Plan

Recommended deployment target:

- Vercel for public frontend

Do not treat the current repository as fully production-ready until:

- CMS/admin decision is finalized
- Backend form handling is connected
- SEO metadata is implemented
- JSON-LD is implemented
- Accessibility and responsive audits are completed
- Legal content is reviewed by counsel

## Release Workflow

Recommended workflow:

1. Implement missing production features in feature branches.
2. Run lint, typecheck and build.
3. Open pull request.
4. Review UI, accessibility and responsive behavior.
5. Deploy preview to Vercel.
6. Approve production release.
7. Monitor analytics, errors and form submissions after launch.

## Handoff Rule

No release should be approved until the launch readiness scorecard is complete and all critical blockers are resolved.
