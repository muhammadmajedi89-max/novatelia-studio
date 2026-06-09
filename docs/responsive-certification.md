# Novatelia Studio Responsive Certification

## Purpose

This document defines the responsive certification checklist for Novatelia Studio before production launch.

The goal is to ensure every public page works across mobile, tablet, desktop and wide desktop breakpoints without overflow, broken spacing, hidden content or unusable interactions.

## Certification Breakpoints

Required viewport checks:

- 390px: Mobile
- 768px: Tablet portrait
- 1024px: Tablet landscape
- 1440px: Desktop
- 1920px: Wide desktop

Optional additional checks:

- 320px: Small mobile stress test
- 480px: Large mobile
- 1366px: Common laptop
- 2560px: Ultra-wide display

## Pages to Test

- Home
- Services
- Portfolio
- Pricing
- AI Showcase
- Contact
- Blog
- Blog Article Detail
- Careers
- Career Detail
- Search
- 404
- Legal Hub
- Privacy Policy
- Terms of Service
- Cookie Policy

## Layout Rules

### Containers

- Main content should use consistent container width.
- Horizontal padding should protect content on small screens.
- Wide desktop layouts should not stretch text beyond readable line length.

### Grids

- Multi-column grids should collapse cleanly on mobile.
- Cards should maintain consistent gaps.
- Pricing and portfolio grids must avoid horizontal overflow.

### Typography

- Display headings must scale down on mobile.
- Body copy should remain readable at all breakpoints.
- Line lengths should remain comfortable on desktop and wide screens.

### Navigation

- Header navigation must fit desktop widths.
- Mobile navigation should be touch-friendly when implemented.
- Footer links should wrap without layout breaks.

### Forms

- Contact forms must fit mobile width.
- Inputs and textareas should be full width on small screens.
- Error and success states must not cause layout shift issues.

### Media

- Images and visual blocks must scale within containers.
- OpenGraph and media assets should use responsive dimensions.
- Decorative visuals should not create horizontal scroll.

## Interaction Rules

- Touch targets should be comfortable on mobile.
- Hover-only behavior must have keyboard and touch equivalents.
- Sticky or absolute elements must not block content on small screens.

## Testing Checklist

For every breakpoint:

- No horizontal scrolling.
- Header remains usable.
- Footer remains readable.
- Cards stack correctly.
- Text remains readable.
- Buttons are tappable.
- Forms are usable.
- CTAs are visible.
- No overlapping content.
- No clipped important content.

## Tools

Recommended tools:

- Chrome DevTools responsive mode
- Real device testing where possible
- Lighthouse mobile and desktop audits
- Browser zoom testing
- Screenshot comparison before production launch

## Certification Rule

A page is responsive-certified only when it passes all required breakpoints and no layout, overflow, readability or interaction issues remain.
