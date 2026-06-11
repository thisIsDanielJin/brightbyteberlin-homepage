# BrightByte Berlin — UX Strategy

> Locked in 2026-06-11. This is the rubric every design decision should pass.

---

## The 4-line strategy

1. **Direction:** Editorial / restrained polish (Linear blog · Stripe Press · Anthropic). One big idea per scroll. Generous whitespace. Considered typography.
2. **First impression goal:** Craft signal first. The visitor's first 3 seconds should say "this person ships beautiful technical work." The polish IS the pitch.
3. **Primary visitor:** Small business owner — non-technical founder hiring their first developer. They want confidence, clarity, fixed price. They infer technical credibility from how the site *looks and feels*, not from technical jargon.
4. **Polish budget:** Selective. One or two anchor visual moments (e.g. Strands hero), micro-interactions, one signature scroll moment. NOT every section animated.

---

## The decision rubric

When deciding anything, ask in order:

1. **Does this serve a small business owner who's nervous about their budget?**
   - If it intimidates them → cut it.
   - If it clarifies the offer or proves quality → keep it.
2. **Does it read as craft-signal in 3 seconds?**
   - Editorial composition, type hierarchy, considered motion = yes.
   - "Loud" effects, neon palettes, brutalist density = no.
3. **Does it pay its weight in polish budget?**
   - One Strands hero, one signature scroll moment, micro-interactions on cards = yes.
   - 12 different shader effects, page transitions, custom cursor = no.

---

## The tension we have to resolve

The current implementation is **brutalist tech** (acid yellow, all-caps Bricolage, dense grids, mono labels). The strategy says **editorial restrained** (Linear blog, Stripe Press).

These are opposite design languages. We must resolve it now.

### The proposed synthesis: "Considered Editorial"

Pull these from EDITORIAL:
- ✅ Generous whitespace (1.5–2× current)
- ✅ One idea per scroll
- ✅ Calmer palette (drop acid yellow → single warm or cool accent at low-saturation)
- ✅ Type pairing: serif display + clean sans body (Fraunces is already loaded, use it)
- ✅ Subtle motion only — text fades, hover states, no letter-by-letter reveals on every section
- ✅ Light theme OR off-black (not pure `#0A0A0A` — softer, paper-like)

Keep from CURRENT BRUTALIST:
- ✅ Mono labels for eyebrows, numerals, footers
- ✅ Hairline section dividers (much subtler)
- ✅ One signature shader anchor (Strands or PrismaticBurst, ONE place)
- ✅ Big numbers in metrics

DROP:
- ❌ Acid yellow as primary accent (too loud for editorial)
- ❌ All-caps display headlines everywhere (use sentence-case + serif italic accents)
- ❌ Letter-stagger animations
- ❌ Dense grid borders on every card (bone, not lines, separates sections)
- ❌ Multiple shader instances

Result: A site that reads as "expensive design studio that happens to write code" instead of "loud SaaS marketing page".

---

## Section roles in the new strategy

Each section has ONE job. Cut anything that doesn't serve the job.

| Section | Job (what visitor must take away) | Anchor moment |
|---|---|---|
| Hero | "This person makes beautiful, considered things." | Strands shader (single visual anchor) + restrained type |
| Manifesto | "Their values match mine." | Quiet, type-driven, NO grid borders |
| Services | "I can find what I need." | Editorial 2-col, plenty of breathing room |
| Process | "I know what working with them looks like." | Numbered timeline, NO cards |
| Work | "They've shipped real things for real people." | Big project images > shader thumbnails |
| Pricing | "I know the price + I'm not scared." | Three calm cards, ONE recommended, prose explanation |
| About | "I trust this person." | Photo + signal stats, no shader |
| FAQ | "My objections are addressed." | Clean accordion, restrained |
| CTA | "I know what to do next." | Simple, generous, single CTA |
| Footer | "I have what I need to follow up." | Dense info, calm typography |

---

## Strands placement (the original ask)

In a 2-column hero:
- **Left col (5/12):** Calm, magazine-like — eyebrow, headline (sentence-case serif italic accent), 18px sub copy, single CTA, signal line at bottom.
- **Right col (7/12):** Strands shader as a *contained object* (rounded card, generous padding around it), looks like a piece of art the studio made.

This makes the shader feel like *output of the studio's work*, not chrome decoration. That's the craft signal.

---

## What this means concretely for the next iteration

1. Calm the palette (drop acid → swap to a single low-sat accent like sage or warm clay — drawn from the existing Bone+plum tokens, OR a new editorial accent).
2. Switch headline from all-caps display heavy → mixed-case with serif italic emphasis (Fraunces is already imported).
3. Strip all the visible card borders and grid lines. Replace with whitespace and hairlines.
4. Reduce motion to: hero shader, one fade-up per section, hover lifts. Drop letter-stagger.
5. Hero gets the 2-col Strands layout.
6. Spacing: bump section padding from `clamp(6rem, 10vw, 10rem)` to `clamp(8rem, 12vw, 14rem)`.

If we like the result, lock it. If we don't, the rubric tells us why.
