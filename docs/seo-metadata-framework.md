# Novatelia Studio SEO Metadata Framework

## Purpose

This document defines the SEO metadata framework for Novatelia Studio so every page can be indexed, shared and managed consistently through the current Next.js frontend and future CMS/admin system.

## Global SEO Rules

Default site name:

- Novatelia Studio

Default title template:

- %s | Novatelia Studio

Default description:

- Novatelia Studio designs enterprise websites, AI systems, automation workflows and digital growth platforms for ambitious regional and global businesses.

Default domain:

- https://novatelia.com

Default language:

- en

Default robots:

- index, follow

## Page Metadata Requirements

Every public page should define:

- Title
- Meta description
- Canonical URL
- Robots rule
- OpenGraph title
- OpenGraph description
- OpenGraph image
- Twitter card metadata
- Structured data mapping where applicable

## Page Title Map

Recommended page titles:

- Home: Novatelia Studio | Enterprise Websites, AI Systems & Automation
- Services: Services | Novatelia Studio
- Portfolio: Portfolio | Novatelia Studio
- Pricing: Pricing | Novatelia Studio
- AI Showcase: AI Showcase | Novatelia Studio
- Contact: Contact | Novatelia Studio
- Blog: Blog | Novatelia Studio
- Careers: Careers | Novatelia Studio
- Search: Search | Novatelia Studio
- Legal: Legal | Novatelia Studio
- Privacy Policy: Privacy Policy | Novatelia Studio
- Terms of Service: Terms of Service | Novatelia Studio
- Cookie Policy: Cookie Policy | Novatelia Studio

## Canonical URL Rules

Canonical URLs should:

- Use the production domain.
- Avoid query parameters unless required.
- Use trailing slash policy consistently.
- Match the final deployed route.

Examples:

- https://novatelia.com/services
- https://novatelia.com/portfolio
- https://novatelia.com/blog

## Robots Rules

Recommended defaults:

- Public marketing pages: index, follow
- Blog article pages: index, follow
- Legal pages: index, follow
- Search results page: noindex, follow unless search content is static and curated
- Admin pages: noindex, nofollow
- Preview pages: noindex, nofollow

## CMS SEO Fields

Every CMS-managed content model should include:

- SEO title
- SEO description
- Canonical override
- Robots override
- OpenGraph title
- OpenGraph description
- OpenGraph image
- Twitter image
- Structured data type

## Quality Rules

SEO title:

- 45 to 65 characters where possible
- Clear primary keyword
- Brand included naturally

Meta description:

- 120 to 160 characters where possible
- Clear value proposition
- Human-readable and not keyword-stuffed

Images:

- Descriptive alt text
- Optimized size
- OpenGraph safe aspect ratio

## Implementation Plan

1. Add route-level metadata exports in Next.js pages/layouts.
2. Add shared SEO constants.
3. Add canonical URL helper.
4. Add OpenGraph image defaults.
5. Add CMS field mapping later in Phase 24.
6. Validate all metadata before deployment.

## Certification Rule

A public page is SEO-ready only when title, description, canonical URL, robots rule and social metadata are defined and validated.
