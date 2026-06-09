# Novatelia Studio Design System Variables

## Purpose

This document defines the core design tokens for Novatelia Studio so the frontend, Figma system and future CMS/admin interfaces can share a consistent visual language.

## Color Tokens

### Brand

- brand-blue: #0066FF
- brand-purple: #6B21F5
- brand-teal: #14B8A6
- brand-navy: #0F172A

### Surface

- brand-bg: #F7FAFC
- brand-soft: #EEF4FF
- brand-surface: #FFFFFF
- brand-dark: #07111F

### Text

- brand-ink: #0F172A
- brand-muted: #64748B
- brand-on-dark: #FFFFFF
- brand-on-dark-muted: rgba(255,255,255,0.70)

### Border

- brand-border: #E2E8F0
- brand-surface-border: rgba(255,255,255,0.12)

## Typography Tokens

Primary font:

- Inter

Scale:

- display-xl: 72px / 1.0 / -0.05em
- display-lg: 56px / 1.0 / -0.05em
- heading-xl: 48px / 1.05 / -0.04em
- heading-lg: 40px / 1.1 / -0.04em
- heading-md: 32px / 1.15 / -0.03em
- body-lg: 18px / 1.75
- body-md: 16px / 1.75
- body-sm: 14px / 1.6
- label: 14px / 1.2 / 0.24em

## Spacing Tokens

Base unit:

- 4px

Recommended spacing:

- space-1: 4px
- space-2: 8px
- space-3: 12px
- space-4: 16px
- space-5: 20px
- space-6: 24px
- space-8: 32px
- space-10: 40px
- space-12: 48px
- space-16: 64px
- space-20: 80px
- space-24: 96px

## Radius Tokens

- radius-md: 12px
- radius-lg: 16px
- radius-xl: 20px
- radius-2xl: 24px
- radius-3xl: 32px
- radius-full: 999px

## Elevation Tokens

- shadow-soft: 0 12px 30px rgba(15, 23, 42, 0.08)
- shadow-card: 0 24px 60px rgba(15, 23, 42, 0.10)
- shadow-glow: 0 24px 80px rgba(0, 102, 255, 0.24)

## Motion Tokens

- duration-fast: 150ms
- duration-base: 220ms
- duration-slow: 360ms
- ease-standard: cubic-bezier(0.2, 0, 0, 1)

## Semantic Tokens

### Light Mode

- page-background: brand-bg
- surface-primary: white
- surface-secondary: brand-soft
- text-primary: brand-ink
- text-secondary: brand-muted
- action-primary: brand-blue
- action-secondary: brand-navy
- border-default: brand-border

### Dark Mode

- page-background: brand-dark
- surface-primary: #0B1628
- surface-secondary: rgba(255,255,255,0.08)
- text-primary: #FFFFFF
- text-secondary: rgba(255,255,255,0.70)
- action-primary: brand-teal
- action-secondary: #FFFFFF
- border-default: rgba(255,255,255,0.12)

## Implementation Notes

Current implementation uses Tailwind theme tokens in tailwind.config.ts. Phase 23 should align this document with:

- Tailwind config
- CSS custom properties
- Figma variables
- Component variants
- Dark mode semantic tokens

## Certification Requirement

Before launch, every component should use semantic tokens instead of hard-coded one-off colors wherever possible.
