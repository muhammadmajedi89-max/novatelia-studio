# Novatelia Studio CMS & Admin Architecture

## Purpose

This document defines the recommended CMS and admin architecture for Novatelia Studio after completion of the public frontend pages.

The current website is a Next.js frontend with production-ready public page structure. It does not yet include a live admin panel, CMS backend, authentication, database, content editor, media library or contact submission storage.

## Recommended CMS Direction

Recommended options:

1. Sanity CMS
2. Payload CMS
3. Strapi
4. Directus

Recommended primary choice for Novatelia Studio:

- Sanity CMS for a fast editorial workflow, hosted studio, strong content modeling and easy Next.js integration.
- Payload CMS if a fully self-hosted admin panel with deeper custom backend control is preferred.

## Phase 24 Admin Scope

The admin/CMS layer should support these collections:

- Blog Posts
- Portfolio Projects
- Services
- Pricing Plans
- Careers / Jobs
- Team Members
- Testimonials
- Legal Pages
- SEO Metadata
- Media Assets
- Contact Submissions

## Admin Roles

Suggested roles:

- Super Admin
- Content Manager
- Editor
- Recruiter
- SEO Manager
- Viewer

## Content Models

### Blog Post

Fields:

- Title
- Slug
- Excerpt
- Category
- Author
- Published Date
- Cover Image
- Body Content
- SEO Title
- SEO Description
- OpenGraph Image
- Status

### Portfolio Project

Fields:

- Project Title
- Slug
- Industry
- Service Type
- Challenge
- Solution
- Results
- Metrics
- Images
- Featured Status
- SEO Fields

### Career Role

Fields:

- Job Title
- Slug
- Department
- Location
- Type
- Responsibilities
- Requirements
- Application Email
- Status

### Contact Submission

Fields:

- Name
- Email
- Company
- Project Type
- Message
- Source Page
- Created Date
- Lead Status
- Assigned To

## Integration Plan

Phase 24 should connect the static frontend to CMS data in this order:

1. Blog listing and article detail
2. Portfolio listing and case studies
3. Careers listing and job detail
4. Services and pricing content
5. Legal content
6. SEO metadata and OpenGraph data
7. Contact form submissions

## Deployment Notes

Public frontend should remain on Vercel.

CMS options:

- Sanity: hosted Sanity Studio and API.
- Payload: self-hosted Node app with database.
- Strapi/Directus: self-hosted CMS with database.

## Launch Readiness Requirement

Before production launch, the CMS/admin system must include:

- Authentication
- Role-based access control
- Draft and publish workflow
- Preview mode
- Media upload workflow
- Backup strategy
- Form spam protection
- SEO validation
- Legal review for policy pages
