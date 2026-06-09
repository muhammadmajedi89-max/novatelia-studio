# Novatelia Studio OpenGraph System

## Purpose

This document defines the OpenGraph and social sharing system for Novatelia Studio so every public page produces a consistent, professional preview across LinkedIn, Facebook, X/Twitter, WhatsApp, Telegram and other platforms.

## Default Social Identity

- Site name: Novatelia Studio
- Default locale: en_US
- Default type: website
- Default domain: https://novatelia.com
- Default image path: /og/default.jpg

## Required Metadata

Every shareable page should define:

- og:title
- og:description
- og:url
- og:site_name
- og:type
- og:image
- og:image:width
- og:image:height
- og:image:alt
- twitter:card
- twitter:title
- twitter:description
- twitter:image

## Image Standards

Recommended dimensions:

- OpenGraph image: 1200 x 630
- Square fallback: 1200 x 1200
- Minimum safe image width: 1200

Recommended format:

- JPG or PNG for universal compatibility
- WebP only as an additional optimized asset, not the only social image

## Default OpenGraph Image Composition

A default image should include:

- Novatelia Studio logo or wordmark
- Brand gradient or dark background
- Short value proposition
- Website domain
- Safe padding around all edges

## Page-Specific Image Rules

### Home

Use a brand-level hero card focused on enterprise websites, AI systems and automation.

### Services

Use a service-grid or strategy visual showing website, AI and automation capabilities.

### Portfolio

Use a case-study collage or project outcomes visual.

### Blog Articles

Use article-specific title image with category, title and brand marker.

### Careers

Use a people/culture or studio collaboration visual.

### Legal Pages

Use default brand image unless legal-specific image is required.

## CMS Fields

CMS-managed pages should include:

- OpenGraph title
- OpenGraph description
- OpenGraph image
- OpenGraph image alt text
- Twitter title
- Twitter description
- Twitter image
- Social preview status

## Validation Checklist

Before launch, validate key URLs using platform preview tools:

- LinkedIn Post Inspector
- Facebook Sharing Debugger
- X Card Validator where available
- WhatsApp preview test
- Telegram preview test

## Implementation Plan

1. Add global OpenGraph defaults in Next.js metadata.
2. Add per-page OpenGraph overrides.
3. Add default image assets in public/og.
4. Add CMS OpenGraph fields in Phase 24.
5. Validate all primary routes before launch.

## Certification Rule

A page is social-share ready only when it has a valid title, description, canonical URL, image, image alt text and preview validation result.
