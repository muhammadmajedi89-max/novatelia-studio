# Novatelia Studio Accessibility Certification

## Purpose

This document defines the accessibility certification checklist for Novatelia Studio before production launch.

The target standard is WCAG 2.2 AA for the public website and future CMS/admin interfaces.

## Certification Scope

Pages to audit:

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

## Core Requirements

### Color Contrast

- Body text must meet at least 4.5:1 contrast.
- Large text must meet at least 3:1 contrast.
- Interactive states must remain visible in light and dark modes.
- Error and success states must not rely on color alone.

### Keyboard Navigation

- All links, buttons, inputs and controls must be reachable by keyboard.
- Focus order must follow the visual reading order.
- Focus indicators must be clearly visible.
- No keyboard trap should exist.

### Focus States

Every interactive component must include:

- Default state
- Hover state
- Focus state
- Active or pressed state where applicable
- Disabled state where applicable

### Semantic HTML

Required standards:

- One logical h1 per page.
- Headings must follow a meaningful hierarchy.
- Buttons must be buttons when triggering actions.
- Links must be links when navigating.
- Lists should use semantic list elements.
- Sections should use appropriate landmarks where useful.

### Screen Reader Support

- Images require meaningful alt text or empty alt text if decorative.
- Form fields require labels.
- Error messages must be associated with relevant fields.
- Icon-only buttons require accessible labels.
- Dynamic updates should use ARIA live regions when needed.

### Forms

Contact forms and future admin forms must include:

- Visible label or accessible label
- Required field indication
- Validation messages
- Keyboard-friendly controls
- Clear submit state
- Success and error feedback

### Touch Targets

- Primary interactive targets should be at least 44 x 44 px where possible.
- Links in dense navigation should have sufficient padding.
- Mobile menus must be easy to activate.

### Motion and Animation

- Motion should be subtle and not essential to understanding content.
- Respect prefers-reduced-motion where possible.
- Avoid flashing content.

## Testing Tools

Recommended testing stack:

- Lighthouse Accessibility
- axe DevTools
- WAVE
- Keyboard-only manual test
- Screen reader spot test
- Browser zoom test at 200 percent

## Manual Audit Checklist

For every page:

- Page has meaningful title.
- Main landmark exists.
- Heading order is logical.
- Navigation is keyboard accessible.
- Focus state is visible.
- Forms are labeled.
- Images have correct alt text.
- Text contrast passes AA.
- Layout works at 200 percent zoom.
- No content is hidden from keyboard users.

## Certification Rule

A page is accessibility-certified only when automated checks pass and manual keyboard, focus, semantic and responsive zoom checks have been completed.
