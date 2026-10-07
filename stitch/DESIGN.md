---
name: Vzhik Nordic Grocery
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#715d00'
  on-secondary: '#ffffff'
  secondary-container: '#fed400'
  on-secondary-container: '#6f5c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe177'
  secondary-fixed-dim: '#ebc300'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-price:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-tablet: 1rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system delivers a calm, hyper-focused, and utilitarian grocery shopping experience tailored for urban speed and everyday reliability. In sharp contrast to visual-heavy marketplaces filled with discount badges and visual noise, this aesthetic draws inspiration from Scandinavian functionalism and architectural graphic design: purposeful negative space, high contrast, strict structural rhythm, and zero decorative fluff. 

The emotional tone is quiet confidence, swift precision, and uncompromised trust. Groceries are essential; the interface gets out of the way, presenting produce and pantry staples as heroic, unadorned objects. Every visual element has a functional reason to exist.

## Colors

The palette is engineered around high functional contrast and minimal sensory distraction:

- **Primary (`#111111`):** Deep solid charcoal black. Drives key primary actions, principal headlines, dominant iconography, and active navigation indicators.
- **Secondary / Accent (`#FFD400`):** Electric industrial yellow. Reserved purely for tactical highlights: delivery progress indicators, urgent alerts, cart badges, and key high-velocity buttons. Never used for decorative backgrounds.
- **Surface & Canvas (`#FFFFFF` & `#F3F3F3`):** Canvas ground sits at `#F3F3F3` to separate distinct `#FFFFFF` interactive tiles and sheet layers effortlessly without deep artificial drop shadows.
- **Muted & Subtitles (`#6B6B6B`):** Neutral gray calibrating secondary metadata, product weights, packaging details, and inactive controls.
- **Border / Hairlines (`#E5E5E5`):** Structural separation lines across cards, dividers, and modular containers.
- **Semantic Feedback:** Success (`#10B981`) for completed deliveries and confirmed carts; Error (`#EF4444`) for missing stock and validation issues.

## Typography

The type system runs exclusively on **Inter**, adhering rigorously to Cyrillic typesetting conventions:
- **Price Display:** Prices always use standard Russian typographic spacing between digits and currency (`199 ₽`, not `199₽`). Decimal values are rendered uniformly or reduced slightly in size.
- **Rhythm & Kerning:** Tight tracking (`-0.02em` to `-0.03em`) on larger headers anchors high visual density without sacrificing legibility. Body text stays neutral with generous line heights to ensure rapid scanning during walking or on-the-go browsing.
- **Labels & Microcopy:** Clear distinction between product quantities/weights (set in `body-sm`, `#6B6B6B`) and titles (set in `title-md`, `#111111`).

## Layout & Spacing

A strictly responsive, fluid layout designed from a phone-first viewport:

- **Mobile (Base):** 2-column symmetric card grid with `0.75rem` (12px) gutters and `1rem` (16px) outer edge margins. Maximizes vertical real estate while providing thumb-friendly targets.
- **Tablet / Large Mobile:** 3-to-4 column fluid grid with `1rem` gutters and `1.5rem` outer margins.
- **Desktop / Web:** Max container constraint of `1120px`, centered, running a structured 4-to-6 column catalog layout.
- **Vertical Spacing Scale:** Built on a strict 4px/8px modular scale (`0.25rem` up to `2rem`). Spacing between product details remains tight (`space-xs` to `space-sm`), while screen-level groupings take `space-xl` to enforce clear topical separation.

## Elevation & Depth

Depth is established almost purely through tonal surface contrast and hairline definition rather than layered drop shadows:

- **Canvas vs. Surface:** `#FFFFFF` modules sit atop `#F3F3F3` background canvas. The contrast itself communicates interactive elevation.
- **Borders over Shadows:** All primary cards utilize a `1px solid #E5E5E5` containment stroke.
- **Tactile Shadows (Minimal):** When floating components are required (such as sticky bottom action sheets or sticky cart pills), use an ambient, near-imperceptible shadow: `0 4px 16px rgba(0, 0, 0, 0.04)`.
- **Zero Heavy Skewing:** No saturated drop shadows, no colorful glows, and no translucent glassmorphism that degrades legibility under sunlight.

## Shapes

The interface balances welcoming geometry with geometric clarity:
- **Product & Content Cards:** `rounded-lg` (16px) or `rounded-xl` (20px) creating soft, friendly visual tiles for produce and items.
- **Primary & Action Buttons:** Substantial radius (`16px`) for full-width action bars, providing an ergonomic thumb press.
- **Navigation Pills & Counters:** `rounded-full` (9999px) for tabs, category pills, tags, and increment counters (`+` / `-`).
- **Input Fields:** `14px` border radius to match nested card structures.

## Components

### Buttons
- **Primary Action:** Full-width, `48px` or `54px` height, solid `#111111` with `#FFFFFF` text (`label-lg`). Pressed state dims smoothly to `#262626`.
- **Accent Action (Checkout / Express):** Solid `#FFD400` with `#111111` bold text. Used when rapid completion is paramount.
- **Secondary / Card Action:** `#FFFFFF` background, `1px solid #E5E5E5`, `#111111` text.
- **Cart Stepper Button:** Minimalist pill containing `-`, quantity, and `+` within `#F3F3F3` surface, or solid `#111111` pill when active.

### Tab Pills & Category Filters
- Horizontal scrolling pill rail without scrollbars.
- **Active Pill:** Solid `#111111`, `#FFFFFF` typography.
- **Inactive Pill:** Surface `#FFFFFF`, `1px solid #E5E5E5`, text `#6B6B6B`.

### Product Cards (2-Column Grid)
- Background `#FFFFFF`, border `1px solid #E5E5E5`, radius `16px`, padding `12px`.
- High-quality photo placed directly on clean neutral ground.
- Product weight / volume in `body-sm` (`#6B6B6B`) immediately above name.
- Bold localized price tag (`label-price`) with minimal add button anchored at bottom right.

### Input Fields & Search
- Surface `#FFFFFF`, border `1px solid #E5E5E5`, radius `14px`, height `48px`.
- Search bar features an integrated magnifying glass icon (`#6B6B6B`) and placeholder "Поиск продуктов" in `#6B6B6B`. Focused state transitions border to `#111111`.

### Progress Indicator
- Slim linear bar (`4px` height), track `#E5E5E5`, active fill `#FFD400`, rounded edges. Used for order status stages ("Собираем", "В пути", "Доставлен").

### Bottom Navigation
- Fixed bottom bar on mobile (`height: 64px` + safe-area inset), background `#FFFFFF`, top hairline `1px solid #E5E5E5`.
- 3 primary destinations: **Каталог** (Catalog), **Мои заказы** (Orders), **Профиль** (Profile).
- Active item uses solid `#111111` icon and text; inactive uses `#6B6B6B`. No pill wraps or decorative blobs around the icons.