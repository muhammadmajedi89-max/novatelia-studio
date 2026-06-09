# Novatelia Studio Component Variants

## Purpose

This document defines the component variant system for Novatelia Studio. It should be used by designers and developers to keep UI states, component behavior and handoff documentation consistent across the public website, future CMS and admin panels.

## Universal States

Every interactive component should define these states when applicable:

- Default
- Hover
- Focus
- Pressed
- Active
- Selected
- Disabled
- Loading
- Error
- Success

## Button Variants

Current frontend variants:

- primary
- secondary
- ghost
- dark

Required states:

- Default: stable visual state
- Hover: subtle lift or stronger contrast
- Focus: visible keyboard focus ring
- Pressed: reduced elevation or darker background
- Disabled: muted opacity and no pointer interaction
- Loading: spinner or loading label

## Card Variants

Current frontend variants:

- Card
- DarkCard

Recommended variants:

- Default Card
- Interactive Card
- Feature Card
- Metric Card
- Case Study Card
- Article Card
- Pricing Card
- Dark Card

Required states for interactive cards:

- Default
- Hover
- Focus
- Active

## Form Variants

Components:

- Text Input
- Textarea
- Select
- Checkbox
- Radio
- Submit Button

Required states:

- Default
- Focus
- Filled
- Error
- Success
- Disabled
- Loading

## Navigation Variants

Components:

- Header link
- Mobile menu item
- Footer link
- Breadcrumb link

Required states:

- Default
- Hover
- Active
- Focus

## Content Components

Components:

- Hero Section
- CTA Section
- FAQ Section
- Feature Grid
- Article Grid
- Pricing Table
- Legal Content Block

Required variants:

- Light Background
- Dark Background
- Compact
- Spacious
- With CTA
- Without CTA

## Admin/CMS Future Components

Future admin interface should define variants for:

- Sidebar Navigation
- Data Table
- Content Editor
- Media Picker
- Status Badge
- Role Badge
- Draft/Published Toggle
- Form Validation Messages
- Toast Notifications
- Confirmation Modal

## Accessibility Requirements

Every interactive variant must include:

- Visible keyboard focus
- Minimum 44px touch target where possible
- Accessible color contrast
- Semantic HTML element
- ARIA only when native semantics are insufficient

## Developer Handoff Requirements

Each component should document:

- Component name
- Purpose
- Props
- Variants
- States
- Responsive behavior
- Accessibility notes
- CMS fields if content-managed

## Certification Rule

No component should be marked production-ready until its default, hover, focus and disabled states are defined and tested where applicable.
