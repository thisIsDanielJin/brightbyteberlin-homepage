# Mock Design System Reference

Source: `newDesign/hifi-v2-app.jsx`

---

## Colors (C object)

```
bg:          #F5F1E8     (bone — page background)
surface:     #FBF8F1     (cards, elevated surfaces)
surfaceAlt:  #FFFFFF     (white override)
ink:         #14130F     (primary text, dark buttons)
inkSoft:     #3A3833     (secondary text)
sub:         #6B665C     (subtle text, descriptions)
subLight:    #9A958A     (lightest text, placeholders)
accent:      #6B3977     (plum — primary accent)
accentSoft:  #C4ADCF     (light plum — borders, glow)
accentBg:    #EDE5F0     (accent backgrounds, badges)
green:       #16A34A     (availability indicator)
hair:        rgba(20,19,15,0.08)    (borders)
hairStrong:  rgba(20,19,15,0.14)    (stronger borders)
```

---

## Fonts

- **Body:** Geist (system-ui sans-serif fallback)
- **Mono:** Geist Mono (`.mono` class — labels, metadata, badges)
- **Serif:** Fraunces (`.serif` class — italic accents in headings)

---

## Typography Scale

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| H1 (hero) | 72px | 500 | -0.03em |
| H2 (sections) | 48-64px | 500 | -0.03em |
| H3 (cards) | 18-22px | 600 | -0.01em |
| Body | 14-17px | 400 | normal |
| Mono labels | 9-11px | 500-600 | 0.04-0.16em |
| Section number | 11px mono | - | 0.12em, uppercase |

---

## Component Patterns

### Buttons
- **Primary:** `bg: C.ink, color: C.surface, borderRadius: 99, padding: 12-14px 20-28px`
- **Accent:** `bg: C.accent, color: C.surface, borderRadius: 99`
- **Outline:** `border: 1px solid C.hairStrong, color: C.ink, borderRadius: 99`
- **Hover class:** `.btn-hover` (scale + shadow transition)
- **Arrow pattern:** text + `<span style={{color: C.accent}}>→</span>`

### Cards
- `borderRadius: 18` (large cards), `14-16` (smaller)
- `border: 1px solid C.hair`
- `background: C.surface`
- Highlighted variant: `bg: C.ink, color: C.surface, boxShadow deep`

### Badges (absolute positioned)
- "MOST CHOSEN", "MOST ASKED": `position: absolute, top: -11/-12, left: 32`
- `padding: 3-4px 12px, bg: C.accent, borderRadius: 99, mono 10px white`

### Section Headers
- Pattern: `grid 1fr 2fr` or flexbox
- Left: mono section number `"0X · Label"` (11px, uppercase, 0.12em)
- Right: H2 + optional subtitle paragraph

---

## Spacing

- Section padding: `112px 56px`
- CTA banner: `48px 56px`
- Card padding: `36px 32px` (pricing), `24px 30px` (FAQ)
- Grid gaps: `24px` (cards), `48px` (section header), `64px` (form layout)
- Max content width: none (content fills padding)

---

## Charts (Hero Section)

- **Library:** ECharts (use `echarts` npm package)
- **Donut chart:** Traffic breakdown — Organic 62%, Direct 24%, Social 14%
- **Bar chart:** 6-month revenue with gradient fill, last bar highlighted in plum
- These appear inside the hero browser mockup

---

## Animations

- Entrance: opacity 0→1, translateY 20→0, duration 0.9s, cubic-bezier(0.16,1,0.3,1)
- Stagger: 0.15s per item delay
- Marquee: 35s linear infinite, pause on hover
- Process auto-advance: 2200ms interval
- Hero phase animation: 300ms / 1200ms / 2200ms / 3000ms stages

---

## Section Order (page flow)

1. Nav (sticky)
2. Hero (centered headline + browser mockup)
3. Tech Strip (marquee with SVG logos)
4. Services (2x2 cards with illustrations)
5. Process (circle timeline, 4 steps)
6. CTA Banner (dark, dual gradient)
7. Work (3-column project cards)
8. About (photo left, bio right)
9. Pricing (3-column tier cards)
10. FAQ (featured + 2x3 grid)
11. Contact (timeline left, form right)
12. Footer (4-col + SEO section + bottom bar)
