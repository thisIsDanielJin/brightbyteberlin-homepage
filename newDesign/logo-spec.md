# BrightByte Berlin — Logo Specification

## Concept: "Blooming Pixel"

A 3×3 pixel grid where shapes transition from sharp geometric squares (bottom-left) to organic rounded forms (top-right). This represents the brand's duality: technical precision meeting human-centered design. Digital "bytes" blooming into something alive and bright.

The metaphor also maps to what BrightByte does for clients: taking raw digital infrastructure and making it feel polished, alive, and engaging.

---

## Symbol Construction

```
Grid: 32×32 units
Pixel units: 8×8 with 2-unit gaps

Layout (3×3 grid positions):

    col1    col2    col3
    (2-10)  (12-20) (22-30)
row1 (2-10)   —       —      ○ (circle, r=4.5, opacity 0.45)
row2 (12-20)  ■       ■◐     ■◐◐ (rx=4, opacity 0.7)
row3 (22-30)  ■       ■       —

■  = sharp square (rx=1.5, full opacity)
■◐ = transitioning (rx=3, opacity 0.85)
○  = fully organic (circle, opacity 0.45)
```

**Reading direction:** Bottom-left (solid, geometric, digital) → Top-right (blooming, organic, alive)

---

## SVG Code

### Primary Mark (32×32 viewBox)

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Solid pixel squares — L-shape base (geometric) -->
  <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
  <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
  <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#6B3977"/>
  <!-- Transitioning pixel — slightly rounded -->
  <rect x="12" y="12" width="8" height="8" rx="3" fill="#6B3977" opacity="0.85"/>
  <!-- Blooming shapes — increasingly organic -->
  <rect x="22" y="12" width="8" height="8" rx="4" fill="#6B3977" opacity="0.7"/>
  <circle cx="26" cy="6" r="4.5" fill="#6B3977" opacity="0.45"/>
</svg>
```

### Favicon (simplified, 16×16)

```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="11" width="4" height="4" rx="0.75" fill="#6B3977"/>
  <rect x="6" y="11" width="4" height="4" rx="0.75" fill="#6B3977"/>
  <rect x="1" y="6" width="4" height="4" rx="0.75" fill="#6B3977"/>
  <rect x="6" y="6" width="4" height="4" rx="1.5" fill="#6B3977" opacity="0.85"/>
  <rect x="11" y="6" width="4" height="4" rx="2" fill="#6B3977" opacity="0.7"/>
  <circle cx="13" cy="3" r="2.25" fill="#6B3977" opacity="0.5"/>
</svg>
```

### Social Avatar (120×120, centered on bone background)

```svg
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="120" fill="#F5F1E8"/>
  <g transform="translate(28, 28) scale(2)">
    <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#6B3977"/>
    <rect x="12" y="12" width="8" height="8" rx="3" fill="#6B3977" opacity="0.85"/>
    <rect x="22" y="12" width="8" height="8" rx="4" fill="#6B3977" opacity="0.7"/>
    <circle cx="26" cy="6" r="4.5" fill="#6B3977" opacity="0.45"/>
  </g>
</svg>
```

### Dark Background Variant

For use on dark backgrounds (ink #14130F or similar):

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
  <rect x="12" y="22" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
  <rect x="2" y="12" width="8" height="8" rx="1.5" fill="#C4ADCF"/>
  <rect x="12" y="12" width="8" height="8" rx="3" fill="#C4ADCF" opacity="0.85"/>
  <rect x="22" y="12" width="8" height="8" rx="4" fill="#C4ADCF" opacity="0.7"/>
  <circle cx="26" cy="6" r="4.5" fill="#C4ADCF" opacity="0.45"/>
</svg>
```

---

## Wordmark Typography

| Segment | Font | Weight | Style | Color | Letter-spacing |
|---------|------|--------|-------|-------|----------------|
| bright | Geist | 600 | normal | #14130F (ink) | -0.01em |
| byte | Fraunces | 400 | italic | #6B3977 (plum) | -0.01em |
| .berlin | Geist | 400 | normal | #6B665C (sub) | -0.01em |

**Size:** 15px in nav, scales proportionally in other contexts.

**Dark background wordmark:**
- "bright" → #FBF8F1 (surface)
- "byte" → #C4ADCF (accentSoft)
- ".berlin" → rgba(251,248,241,0.55)

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Plum (primary) | #6B3977 | Symbol, "byte" text, accents |
| Plum Soft | #C4ADCF | Dark bg variant, lighter accents |
| Ink | #14130F | "bright" text, dark contexts |
| Sub | #6B665C | ".berlin" text |
| Bone | #F5F1E8 | Avatar background, light contexts |

---

## Clear Space

Minimum clear space around the mark = **25% of the mark's height** on all sides.

For the nav lockup (symbol + wordmark): the 10px gap between symbol and text is the internal spacing standard.

---

## Minimum Sizes

| Format | Min size | Notes |
|--------|----------|-------|
| Symbol only | 16px | Use simplified favicon version below 24px |
| Full lockup | 120px wide | Symbol + wordmark together |
| Wordmark only | 100px wide | Text without symbol |

---

## Usage Guidelines

### Do
- Use the plum symbol on light/bone backgrounds
- Use the accentSoft variant on dark backgrounds
- Maintain the sans+serif split in the wordmark
- Keep proportional scaling (never stretch)

### Don't
- Don't place the symbol on busy/patterned backgrounds
- Don't change the opacity progression of the bloom shapes
- Don't use the symbol at less than 16px
- Don't separate "bright" and "byte" in the wordmark
- Don't add effects (drop shadows, gradients) to the mark
- Don't rotate the symbol (the bloom direction is intentional)
