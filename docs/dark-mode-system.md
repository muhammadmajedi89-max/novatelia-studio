# Novatelia Studio Dark Mode System

## Purpose

This document defines the dark mode architecture for Novatelia Studio across the public website, future CMS/admin interfaces and design system documentation.

Dark mode should not be treated as an inverted color theme. It must use semantic tokens, accessible contrast and clear surface hierarchy.

## Theme Strategy

Recommended implementation:

- Use semantic CSS variables for light and dark themes.
- Map Tailwind tokens to those variables.
- Use a root class strategy such as `.dark` for theme switching.
- Persist user preference in local storage when theme switching is introduced.
- Respect system preference using `prefers-color-scheme` where appropriate.

## Dark Theme Tokens

### Background

- page-background: #07111F
- surface-primary: #0B1628
- surface-secondary: rgba(255,255,255,0.08)
- surface-elevated: #101D33
- surface-muted: rgba(255,255,255,0.05)

### Text

- text-primary: #FFFFFF
- text-secondary: rgba(255,255,255,0.72)
- text-muted: rgba(255,255,255,0.54)
- text-disabled: rgba(255,255,255,0.34)

### Borders

- border-default: rgba(255,255,255,0.12)
- border-strong: rgba(255,255,255,0.20)
- border-focus: #14B8A6

### Actions

- action-primary: #14B8A6
- action-primary-hover: #2DD4BF
- action-secondary: #FFFFFF
- action-muted: rgba(255,255,255,0.10)

## Surface Hierarchy

Dark mode should use these layers:

1. Page background
2. Section background
3. Card surface
4. Elevated panel
5. Overlay / modal

Each higher layer should be visually distinguishable using contrast, border or elevation.

## Component Mapping

### Header

- Dark transparent header over dark hero sections.
- Light surface header when placed over light pages.
- Focus states must remain visible in both themes.

### Buttons

- Primary action should use brand-blue in light mode and brand-teal in dark mode.
- Secondary button should use border contrast instead of low-opacity text only.
- Disabled state must keep readable text contrast.

### Cards

- Light mode: white card on brand-bg.
- Dark mode: surface-primary on page-background with border-default.
- Hover state: slightly elevated surface or stronger border.

### Forms

- Inputs must use surface-primary or white depending on theme.
- Placeholder text must meet readable contrast.
- Focus ring should use border-focus.
- Error state should not rely on red only; include message text.

## Accessibility Requirements

Dark mode must pass these checks:

- Body text contrast: WCAG AA minimum 4.5:1
- Large text contrast: WCAG AA minimum 3:1
- Focus indicator visible against adjacent colors
- Error and success states not communicated by color alone
- Form labels visible in both themes

## Implementation Plan

1. Add CSS variables for light and dark tokens.
2. Align Tailwind theme colors with CSS variables.
3. Add `.dark` theme class support.
4. Add theme provider or root class controller.
5. Test all public pages in both themes.
6. Add CMS/admin dark mode compatibility later.

## Certification Rule

A component is dark-mode ready only when:

- Text contrast passes AA.
- Hover and focus states are visible.
- Borders and surfaces remain distinguishable.
- Disabled state remains understandable.
- The component does not rely on a hard-coded light-only color.
