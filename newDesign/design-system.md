# BrightByte Berlin — Design System Reference

> Source of truth for the visual design implemented in `hifi-v2-app.jsx`.
> If something breaks, use this to restore the correct values.

---

## Colors (`C` object)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F5F1E8` | Page background (bone) |
| `surface` | `#FBF8F1` | Card/panel backgrounds |
| `surfaceAlt` | `#FFFFFF` | White surfaces (artboard, modals) |
| `ink` | `#14130F` | Primary text, dark backgrounds |
| `inkSoft` | `#3A3833` | Secondary text, slightly lighter |
| `sub` | `#6B665C` | Subheadings, descriptions, labels |
| `subLight` | `#9A958A` | Placeholder text, tertiary content |
| `accent` | `#6B3977` | Primary accent (plum) — CTAs, highlights, logo |
| `accentSoft` | `#C4ADCF` | Light plum — timeline dots, dark-bg text |
| `accentBg` | `#EDE5F0` | Subtle plum tint — badges, value cards |
| `green` | `#16A34A` | Success/positive — deltas, metrics |
| `hair` | `rgba(20,19,15,0.08)` | Thin borders, dividers |
| `hairStrong` | `rgba(20,19,15,0.14)` | Stronger borders, outline buttons |

---

## Typography

### Font Families

| Class | Font | Fallbacks | Usage |
|-------|------|-----------|-------|
| (default) | Geist | -apple-system, BlinkMacSystemFont, sans-serif | All body text, headings |
| `.mono` | Geist Mono | JetBrains Mono, monospace | Labels, section numbers, timestamps, pills |
| `.serif` | Fraunces (opsz 9-144) | Georgia, serif | Italic accent words in headings |

### Type Scale

| Element | Size | Weight | Letter-spacing | Line-height | Notes |
|---------|------|--------|----------------|-------------|-------|
| Hero h1 | 80px | 600 | -0.04em | 0.96 | Homepage main headline |
| Section h2 (large) | 56px | 500 | -0.03em | 1.02 | Process, Work, Pricing |
| Section h2 (medium) | 44–48px | 500 | -0.03em | 1.0–1.05 | Services, FAQ, project detail |
| CTA/Contact h2 | 64px | 500 | -0.03em | 0.98 | Contact section headline |
| CTA banner h2 | 36px | 600 | -0.03em | 1.1 | Inline CTA banners |
| Card title h3 | 20px | 600 | -0.02em | — | Service cards, project cards |
| FAQ title h3 | 16–22px | 600 | -0.01em to -0.02em | — | FAQ questions |
| Body text | 17px | 400 | — | 1.6 | Section descriptions |
| Small body | 14px | 400 | — | 1.5–1.6 | Card descriptions, feature lists |
| Section label | 11px | 500 | 0.12em | — | `NN · Title` pattern, uppercase, mono |
| Micro labels | 10px | — | 0.04–0.16em | — | Form labels, sub-labels, uppercase, mono |
| Timeline/pill | 11px | 600 | 0.04em | — | Mono, process indicators |

### Heading Pattern: Serif Accent

Headings use a split style — geometric `Geist` for the main text, italic `Fraunces` for one emphasis word:

```jsx
<h2 style={{fontSize:56, fontWeight:500}}>
  Four steps,<br/>
  <span className="serif" style={{fontStyle:'italic', fontWeight:400}}>no surprises.</span>
</h2>
```

The serif word is always `fontWeight: 400`, `fontStyle: 'italic'`, sometimes colored with `C.accent`.

### Section Number Pattern

```jsx
<div className="mono section-num" style={{
  fontSize: 11,
  color: C.sub,
  letterSpacing: '0.12em',
  textTransform: 'uppercase'
}}>
  02 · Services
</div>
```

---

## Spacing

| Context | Padding | Notes |
|---------|---------|-------|
| Section (standard) | `112px 56px` | Top/bottom 112, left/right 56 |
| Section (compact) | `80px 56px` | Services detail page sections |
| Hero | `140px 56px 80px` | Extra top for nav clearance |
| Footer | `72px 56px 36px` | Larger top, smaller bottom |
| CTA banner | `48px 56px` | Tight, punchy |
| Trust bar | `32px 56px` | Single compact row |
| Nav | `20px 56px` | Slim header bar |

### Component Gaps

| Context | Gap |
|---------|-----|
| Card grid (services, pricing) | `24–32px` |
| Section header to content | `56–72px` |
| Inline button group | `12px` |
| Nav links | `28–32px` |
| Feature list items | `8–10px` |
| Form fields grid | `18px` |

---

## Borders & Radius

| Element | Border | Radius |
|---------|--------|--------|
| Cards (service, project, pricing) | `1px solid ${C.hair}` | `16–18px` |
| Form inputs | `1px solid ${C.hair}` | `8px` |
| Pills/badges | `1px solid ${C.hair}` or filled | `99px` (fully round) |
| Browser mockup frames | `1px solid ${C.hair}` | `14px` (outer), `8px` (inner) |
| Form container | `1px solid ${C.hair}` | `18px` |
| FAQ items | `1px solid ${C.hair}` | `14px` |
| CTA buttons | — | `99px` |
| Value badges | — | `10px` |

---

## Shadows

| Context | Box-shadow |
|---------|-----------|
| Form card | `0 30px 60px -40px rgba(20,19,15,0.18)` |
| Pricing highlight card | `0 30px 60px -30px rgba(20,19,15,0.4)` |
| Work card hover | `0 16px 40px -12px rgba(20,19,15,0.12)` |
| Browser mockup | `0 8px 24px rgba(20,19,15,0.14)` |
| Hero frame (phase 4) | `0 32px 64px -24px rgba(20,19,15,0.18), 0 0 0 1px rgba(20,19,15,0.04)` |
| Button hover | `0 0 20px rgba(107,57,119,0.25), 0 4px 12px rgba(20,19,15,0.08)` |

---

## Buttons

### Primary (dark)
```jsx
{
  padding: '14px 28px',
  background: C.ink,
  color: C.surface,
  borderRadius: 99,
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer'
}
```
Arrow accent: `<span style={{color:C.accent}}>→</span>`

### Primary (accent) — used in CTA banner
```jsx
{
  padding: '14px 28px',
  background: C.accent,
  color: C.surface,
  borderRadius: 99,
  fontSize: 14,
  fontWeight: 600
}
```

### Secondary (outline)
```jsx
{
  padding: '14px 24px',
  color: C.ink,
  borderRadius: 99,
  fontSize: 14,
  fontWeight: 500,
  border: `1px solid ${C.hairStrong}`
}
```

### Hover effects
- `.btn-hover`: `box-shadow` glow + `outline: 2px solid rgba(107,57,119,0.4)` with offset
- `.outline-hover`: `border-color: #6B3977`, `box-shadow: 0 0 16px rgba(107,57,119,0.2)`, `color: #6B3977`

---

## Animations & Transitions

### Easing
- Primary: `cubic-bezier(0.16, 1, 0.3, 1)` — used for most entrance animations
- Standard: `ease` — used for hovers and simple transitions

### Motion patterns
- **Fade-slide up**: `opacity: 0 → 1`, `translateY(20px) → 0` — section entrances
- **Scale-in**: `scale(0.96) → scale(1)` — hero browser frame
- **Stagger**: `${idx * 0.15}s` delay per card
- **Card hover**: `translateY(-3px)` + shadow increase
- **Arrow shift**: `translateX(4px)` on parent hover
- **Nav glow**: `@keyframes navGlow` — pulsing box-shadow on CTA

### Durations
- Fast (hover): `0.2–0.35s`
- Medium (entrance): `0.6–0.9s`
- Slow (hero sequence): `0.8–1.1s`

---

## Layout Patterns

### 2-Column Section (heading left, content right)
```jsx
<div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, alignItems:'baseline'}}>
  <div className="mono section-num">03 · Process</div>
  <div>
    <h2>...</h2>
    <p>...</p>
  </div>
</div>
```

### Card Grid
```jsx
// Services: 2-column
gridTemplateColumns: '1fr 1fr', gap: 32

// Pricing: 3-column
gridTemplateColumns: '1fr 1fr 1fr', gap: 24

// FAQ: 2-column
gridTemplateColumns: '1fr 1fr', gap: 16
```

### Service Detail Cards (horizontal)
```jsx
gridTemplateColumns: '240px 1fr'  // illustration left, content right
```

---

## Component Patterns

### Nav
- Sticky-look, `padding: 20px 56px`
- Logo + wordmark left, links center, CTA right
- Wordmark: `bright` (Geist 600) + `byte` (Fraunces italic 400, plum) + `.berlin` (Geist 400, sub)
- Link hover: underline grows from left (::after pseudo)

### Section Divider (GradientDivider)
```jsx
height: 1,
background: 'linear-gradient(90deg, transparent 0%, rgba(107,57,119,0.15) 30%, rgba(107,57,119,0.15) 70%, transparent 100%)'
```

### Browser Chrome Mockup
```jsx
// Chrome bar
height: 28–32px, background: C.ink or dark, flex row
// Traffic lights: 3 circles (7px), colors: #FF5C5C, #FFC83D, #28C940
// URL bar: mono, 11px, muted text
```

### Metric Cards (KPI)
```jsx
{
  background: C.surface,
  border: `1px solid ${C.hair}`,
  borderRadius: 12,
  padding: '24px',
  textAlign: 'center'
}
// Number: fontSize 36–48, fontWeight 600, color C.ink
// Label: fontSize 12, color C.sub, mono
// Delta badge: fontSize 11, fontWeight 600, color '#16A34A',
//   background 'rgba(22,163,74,0.1)', padding '3px 10px', borderRadius 99
```

### Form Fields
```jsx
// Label
<div className="mono" style={{fontSize:10, color:C.sub, letterSpacing:'0.04em', marginBottom:8, textTransform:'uppercase'}}>

// Input
<div style={{padding:'12px 14px', background:C.bg, border:`1px solid ${C.hair}`, borderRadius:8, fontSize:14, color:C.subLight}}>
```

### Project Type Pills (selectable)
```jsx
{
  padding: '8px 14px',
  background: isSelected ? C.ink : C.bg,
  color: isSelected ? C.surface : C.ink,
  border: `1px solid ${isSelected ? C.ink : C.hair}`,
  borderRadius: 99,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s ease'
}
```

---

## Logo

See `logo-spec.md` for full logo specification including:
- Symbol SVG (32x32 "Blooming Pixel" grid)
- Wordmark typography split
- Dark/light variants
- Clear space and minimum sizes

---

## Interaction Patterns

### CTA Flow
All conversion buttons funnel to the Contact form:
- Pricing buttons → scroll to Contact + pre-select project type pill
- Hero "Start your project" → scroll to Contact
- CTA banner "Start a project" → scroll to Contact
- FAQ "Ask anything" → scroll to Contact
- "See recent work" → scroll to Work section

### Type Mapping (Pricing → Contact pill)
| Tier index | Pricing tier | Selected pill |
|------------|-------------|---------------|
| 0 | Starter | Landing page |
| 1 | Growth | Multi-page site |
| 2 | Custom | Web app / MVP |

---

## File Structure

```
newDesign/
├── BrightByte HiFi v2.html    — Entry point, loads CDNs + scripts
├── design-canvas.jsx           — Pan/zoom artboard wrapper (DesignCanvas, DCSection, DCArtboard)
├── hifi-v2-app.jsx             — All components, data, and App root
├── logo-spec.md                — Logo specification document
└── design-system.md            — This file
```

### CDN Dependencies
- React 18.3.1 (development UMD)
- ReactDOM 18.3.1
- Babel Standalone 7.29.0
- Framer Motion 11.18.2
- Apache ECharts 5.5.1
- Google Fonts: Geist (300–800), Geist Mono (400–500), Fraunces (400–500, variable opsz)
