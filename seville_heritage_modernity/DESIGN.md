---
name: Seville Heritage & Modernity
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#55433d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#88726c'
  outline-variant: '#dbc1b9'
  surface-tint: '#99462a'
  primary: '#964328'
  on-primary: '#ffffff'
  primary-container: '#b55b3e'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59e'
  secondary: '#5d5e64'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe6'
  on-secondary-container: '#616268'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#7a2f15'
  secondary-fixed: '#e2e2e8'
  secondary-fixed-dim: '#c5c6cc'
  on-secondary-fixed: '#191c20'
  on-secondary-fixed-variant: '#45474c'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style
The design system is crafted for a premium home renovation service that bridges the gap between Andalusian tradition and contemporary architectural precision. The brand personality is **sophisticated, grounded, and deeply personal**, aiming to evoke a sense of reliability and artisanal quality. 

The visual style is a blend of **Minimalism** and **Tactile Modernism**. It leverages heavy whitespace to mirror the airy feeling of a renovated home, while using rich, earthy textures and high-contrast accents to ground the experience. The emotional response should be one of "aspirational comfort"—a professional assurance that the user's home is in expert hands. 

The UI uses "tú" throughout to establish a peer-to-peer relationship of trust, moving away from cold corporate distance toward a collaborative, warm partnership.

## Colors
The palette is inspired by the sun-drenched facades and historic interiors of Seville.
- **Primary (Terracotta):** A rich, clay-based earth tone used for key actions and brand markers. It provides warmth and a local "ceramic" feel.
- **Secondary (Anthracite):** A deep charcoal grey used for typography and structural elements to provide high-end, architectural contrast.
- **Background (Bone White):** An off-white shade that prevents the harshness of pure white, creating a softer, more premium canvas.
- **Accent (Gold/Champagne):** Used sparingly for trust badges and subtle decorative borders to signify quality and luxury.

## Typography
The typography strategy pairings reflect the "Heritage & Modernity" theme. 
- **Headlines:** Use *Libre Caslon Text*. This serif face communicates authority, history, and elegance. It should be used for all editorial headings and section titles.
- **Body & UI:** Use *Work Sans*. A professional and versatile sans-serif that ensures maximum legibility for technical details and service descriptions. 
- **Hierarchy:** Maintain generous line-height (1.6) for body text to ensure a relaxed, breathable reading experience. Labels and small identifiers use uppercase with increased letter spacing to create a modern, architectural feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a gallery-like feel, centering the content with wide margins. 
- **Grid:** A 12-column grid for desktop, collapsing to 4 columns on mobile.
- **Rhythm:** An 8px linear scale is used. Vertical rhythm is expansive; use `stack-lg` (64px) between major sections to emphasize the premium nature of the service—giving each project "room to breathe."
- **Mobile:** Margins are reduced to 16px. Image galleries should transition from multi-column grids to a single-column stacked format or a horizontal carousel with partial visibility of the next card to encourage swiping.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.
- **Surfaces:** Use subtle shifts in background color (e.g., Bone White to a slightly darker Soft Grey) to define sections.
- **Outlines:** Cards and containers use a 1px border in `accent_border_hex`. This mimics architectural drawings and clean interior lines.
- **Shadows:** Only used for active states or floating elements (like a "Contact Us" FAB). Shadows should be "Ambient"—extremely soft, using the Secondary color at 5% opacity with a large blur radius (20px-30px).

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the "technical" feel of construction, making the UI feel approachable and "human-centric" while maintaining the precision of a professional firm. 
- **Images:** High-quality photography should maintain sharp or very slightly rounded corners (4px) to look like framed art.
- **Buttons:** Use the standard `rounded` (4px) for a sturdy, reliable appearance.

## Components
- **Buttons:** Primary buttons are solid Terracotta with white text. Secondary buttons are outlined Anthracite. Hover states should involve a subtle shift to a deeper earth tone.
- **Service Cards:** Feature a large, high-aspect-ratio image at the top, a `headline-sm` title, and a short "tú"-focused description. The entire card uses a 1px soft grey border.
- **Image Galleries:** Use an asymmetrical masonry grid for desktop to showcase diverse renovation projects. On mobile, these should be full-width to emphasize detail.
- **Trust Badges:** Minimalist icons (e.g., local certification, years of experience) rendered in Gold or Anthracite with `label-bold` text.
- **Input Fields:** Clean, bottom-border-only or fully outlined fields with generous internal padding. Focus states use a 2px Terracotta bottom-border.
- **CTAs:** Floating or pinned "Solicita tu presupuesto" (Request your quote) buttons should be prominent and use the Primary color to stand out against the Bone White background.