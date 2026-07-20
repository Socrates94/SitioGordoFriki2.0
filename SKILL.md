

---
name: modern-ecommerce-builder
description: Use this skill when the user asks to build, scaffold, or develop a complete, modern e-commerce website or storefront. Covers architecture, UI/UX aesthetics, and core features.
---
# Modern E-Commerce Builder

## Goal

To scaffold, design, and develop a high-performance, visually stunning, and conversion-optimized modern e-commerce website following current industry best practices.

## Context & Technologies

When building modern e-commerce sites, you should default to the following stack unless the user specifies otherwise:

- **Framework**: Next.js (App Router) or Vite + React for high-performance rendering (SSR/SSG).
- **Styling**: Vanilla CSS with modern features (CSS Variables, Grid, Flexbox) or TailwindCSS (if explicitly requested).
- **State Management**: Zustand or React Context for cart and user state.
- **Payments**: Stripe integrations (or similar headless commerce APIs).
- **Database/Backend**: Firebase, Supabase, or a headless CMS (like Sanity or Shopify Storefront API).

## Instructions

1. **Understand Requirements & Planning**

   - Ask clarifying questions about the product niche, target audience, and required features if underspecified.
   - Outline the initial pages required (e.g., Home, Product Listing, Product Detail, Cart, Checkout).
2. **Scaffold the Project**

   - Initialize the project using the appropriate CLI in non-interactive mode.
   - Example: `npx -y create-next-app@latest ./ --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"`
3. **Establish a Premium Design System**

   - **Aesthetics**: Implement a dynamic, rich design that wows the user. Use harmonious color palettes, modern typography (e.g., Inter, Outfit), and subtle gradients.
   - **Interactivity**: Add micro-animations for hover states, adding to cart, and page transitions to make the UI feel alive.
   - **Layout**: Ensure the layout is mobile-first, responsive, and uses proper spacing.
4. **Implement Core E-commerce Features**

   - **Product Catalog**: Create a grid layout for products with high-quality (generated/placeholder) images, pricing, and clear Call-To-Action (CTA) buttons.
   - **Shopping Cart**: Implement a slide-out cart or dedicated cart page with persistent state.
   - **Checkout Flow**: Design a clean, step-by-step or one-page checkout form.
5. **SEO & Performance Optimization**

   - Ensure proper HTML semantic structure (`<header>`, `<main>`, `<article>`).
   - Add dynamic `<title>` and meta descriptions for product pages.
   - Optimize images using Next.js `<Image>` component or equivalent modern web practices (WebP, lazy loading).

## Constraints

- **Do not** build simple, generic MVP designs. The UI must feel premium and state-of-the-art.
- **Do not** store sensitive payment information or raw user passwords in the database; always defer to secure providers like Stripe or Firebase Auth.
- **Do not** use outdated technologies (e.g., class-based React components, jQuery).

## Examples

### Example 1: Starting a new clothing brand site

**User**: "I want to build a modern e-commerce site for my new streetwear brand."
**Agent Action**:

1. Confirms the aesthetic (e.g., dark mode, bold typography).
2. Runs the scaffolding command for Next.js.
3. Sets up the global CSS for a premium streetwear vibe.
4. Generates initial UI components for a hero banner and a product grid.
