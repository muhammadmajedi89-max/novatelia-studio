# Novatelia Studio Structured Data

## Purpose

This document defines the structured data strategy for Novatelia Studio so search engines can better understand the company, website, services, articles, careers and navigation structure.

Structured data should be implemented as JSON-LD in the Next.js application and mapped to CMS fields during Phase 24.

## Core Schema Types

Recommended schema types:

- Organization
- WebSite
- WebPage
- Service
- Article
- BlogPosting
- BreadcrumbList
- FAQPage
- JobPosting
- ContactPoint

## Organization Schema

Use on the homepage and global layout where appropriate.

Recommended fields:

- @type: Organization
- name: Novatelia Studio
- url: https://novatelia.com
- logo
- description
- contactPoint
- address where legally confirmed
- sameAs social links when available

## WebSite Schema

Use globally.

Recommended fields:

- @type: WebSite
- name: Novatelia Studio
- url: https://novatelia.com
- potentialAction for search if search is connected to a real query system

## Service Schema

Use on service pages and service detail sections.

Recommended service categories:

- Enterprise Website Design
- AI Systems
- Automation Workflows
- Digital Growth Platforms
- Client Portals
- CMS and Admin Systems

## BlogPosting / Article Schema

Use for blog article detail pages.

Required fields:

- headline
- description
- image
- author
- publisher
- datePublished
- dateModified
- mainEntityOfPage

## BreadcrumbList Schema

Use on nested pages:

- Blog article pages
- Career detail pages
- Legal pages
- Portfolio/case study detail pages when added

## FAQPage Schema

Use only where visible FAQ content exists on the page.

Recommended pages:

- Pricing
- Services
- Contact if FAQ is added

## JobPosting Schema

Use on career detail pages after job data becomes CMS-managed.

Required fields:

- title
- description
- hiringOrganization
- employmentType
- jobLocation or applicantLocationRequirements
- datePosted
- validThrough when applicable

## ContactPoint Schema

Use for company contact information:

- email: business@novatelia.com
- telephone: +968 7808 2410
- contactType: business inquiries
- areaServed: Oman, Afghanistan, UAE and regional markets

## CMS Mapping

Phase 24 CMS models should include structured data fields for:

- Schema type
- Publisher
- Author
- Image
- Date published
- Date modified
- Service category
- Job posting details
- FAQ question and answer pairs
- Breadcrumb label

## Validation Checklist

Before launch, validate structured data using:

- Google Rich Results Test
- Schema.org Validator
- Search Console enhancement reports after indexing

## Implementation Plan

1. Create shared JSON-LD helper components.
2. Add Organization and WebSite schema to the root layout.
3. Add page-specific WebPage schema.
4. Add BlogPosting schema to blog detail pages.
5. Add JobPosting schema to career detail pages when real job data exists.
6. Add BreadcrumbList schema to nested routes.
7. Validate every schema before production launch.

## Certification Rule

A page is structured-data ready only when the JSON-LD is valid, accurate, visible content matches schema claims and there are no unsupported or misleading fields.
