# Design System — Wondermake-Inspired

Derived from 7 reference screenshots Aftab provided (`Main_site-hero`, `Main_Site-_Expertise`, `Main_Site-_Works`, `Main_Site-Animated_Sideways_Carousel_of_work`, `Main_Site-Testimonials`, `Main_site-contact`, `Footer`). Style confirmed by Aftab: **"wondermake is the style I'm choosing."**

This doc is descriptive planning only — no visual risk-taking decisions are finalized until Aftab uploads his own per-page reference images and says "fin."

---

## 1. Color palette (observed)

| Token | Hex (approx) | Usage |
|---|---|---|
| `--bg-base` | `#F5F5F3` (off-white / warm light gray) | Page background |
| `--ink` | `#0B0B0B` (near-black) | Text, borders, primary fill |
| `--surface-black` | `#111111` | Black-fill accent cards (e.g. "Branding" card, footer CTA block) |
| `--surface-white` | `#FFFFFF` | Card backgrounds within the grid |
| `--border-hairline` | `#0B0B0B` at full opacity, 1–2px | All grid dividers — thick, consistent, always black |
| Accent (project-specific, seen in carousel/work thumbnails) | Deep red `#B3121C`-ish, purple `#3A1748`-ish, muted pink | These belong to *individual project thumbnails*, not the site chrome — each work sample carries its own color, site shell stays black/white |

**Read on the palette:** Wondermake itself is essentially monochrome (black/white/off-white) as the *shell*, with color only appearing inside project thumbnails and case-study art. This is a deliberate contrast device — keeps the site's own identity neutral so the work pops. Recommend carrying this same principle for Aftab: neutral black/white shell, and any color comes from actual project screenshots (Mercury, Sentry, Araknid, etc.) rather than a site-wide accent color.

**Open item:** Aftab may want one small signature accent (a single color used sparingly — e.g. for links/hover states) rather than staying pure monochrome. To be decided at "fin" stage, not before.

---

## 2. Typography (observed)

- **Display / heading face:** Heavy, condensed-ish grotesk sans. Very bold weight, tight letter-spacing, some headlines use an outlined/double-stroke effect (see hero "REMEMBER." and contact "TOUCH"). Reads similar to families like *PP Neue Montreal*, *Aeonik*, or *Suisse Intl Black* — none of which are free.
- **Body face:** Clean, mid-weight grotesk/humanist sans, high legibility, generous line-height for paragraph copy (see hero subtext, about-style paragraphs).
- **Label/eyebrow face:** Small caps or uppercase, wide letter-spacing, medium weight — used for nav badges, "VIEW SERVICES," "NEVER BORING," project number tags (01/02/03), section eyebrows.

### Proposed free-font substitutions (pending final confirm at "fin")
- **Display/Headlines:** *Space Grotesk* (Bold/700) — closest free match to the chunky geometric grotesk energy, distinct character, pairs well with technical/dev content.
- **Body:** *Inter* (400/500) — neutral, extremely legible, works at any size, free and variable.
- **Labels/eyebrows/badges:** *Space Grotesk* (Medium, uppercase, tracked out) or *Inter* (600, uppercase) — reuse rather than introduce a 3rd family.
- **Alt display option (heavier/blacker feel):** *Archivo Black* or *General Sans* (if licensing allows) for the absolute heaviest hero moments only, used sparingly.

Type scale to formalize at build time (approximate, from screenshots):
- Hero H1: ~64–96px, black weight, tight leading (~0.95)
- Section H2: ~40–56px
- Card/module titles: ~24–32px
- Body: ~16–18px, relaxed leading (~1.5)
- Eyebrow/label: ~12–14px, uppercase, letter-spacing ~0.08em
- Footer wordmark: full-bleed, ~120px+, scales to viewport width

---

## 3. Layout system (observed)

- **Grid-first, bento-box structure.** The whole page is built on a visible column/row grid with thick black hairline dividers running full-bleed — cells snap to the grid rather than floating freely.
- **Modular cards.** Each grid cell is a self-contained module: icon + label, icon + heading + body, or pure black fill as a visual accent/breather.
- **Asymmetry within order.** Columns vary in width (some narrow icon-only cells, some wide content cells) but always align to the same underlying grid — organized chaos, not random.
- **Border-forward, not shadow-forward.** No drop shadows observed anywhere. All depth/separation comes from 1–2px solid black borders. Zero border-radius — everything is hard, square corners.
- **Badge buttons.** Small rectangular buttons with border, uppercase label + trailing icon (sparkle, arrow, rocket), sitting in their own grid cell — not full-width, not pill-shaped.
- **Full-bleed footer wordmark.** Footer closes on an enormous version of the brand name spanning the full viewport width, cropped/tight, as a closing visual anchor.
- **Testimonial slider.** Horizontal, 2-up peek layout (current + partial next card visible), arrow nav left/right, quote + attribution (name, role).
- **Carousel (work strip).** Continuous auto-scrolling horizontal strip of square/near-square project thumbnails, no visible pause controls in the reference — pure ambient motion, sits between Testimonials and Contact.

---

## 4. Components inventory (to be built later)

| Component | Notes |
|---|---|
| `Navbar` | Hamburger icon (left) + wordmark badge (black fill) + right-side CTA badge button |
| `HeroSection` | Eyebrow row (label + icon + label), large headline, subtext, dual CTA buttons, tag row |
| `ExpertiseGrid` | Bento grid of service cards — icon, title, one-line description; one card black-filled as accent |
| `WorksGrid` | Project cards, each with image/color block, title, tag chips (e.g. "Web Design & Build") |
| `TestimonialSlider` | Arrow-nav horizontal slider, 2-up partial peek, quote + name + role |
| `WorkCarousel` | Auto-scrolling infinite horizontal strip of thumbnails, no user controls, ambient motion |
| `ContactTeaser` | Icon, big outline-style heading, subtext, single CTA button linking to /contact |
| `ContactForm` (Contact page only) | Full form — fields TBD once Aftab uploads the Contact page reference |
| `Footer` | Nav column, services/expertise column, dark CTA card ("say hello" block), bottom bar (social links + legal line), giant full-bleed wordmark |

---

## 5. Motion (observed / inferred)

- Carousel: continuous linear auto-scroll, likely CSS `@keyframes translateX` loop or JS-driven marquee, no easing pause — constant speed.
- Testimonial slider: click-driven (arrow buttons), likely simple slide/fade transition, not automatic.
- Hover states: implied on buttons/badges (border or fill invert) — not confirmed from static screenshots, to observe if Aftab sends more detail or GIFs.
- No large animated hero sequences observed — motion is used functionally (carousel, slider) rather than decoratively.

---

## 6. Open items / not yet decided
- Final accent color (or confirm pure monochrome)
- Final font pairing confirmation
- Exact button hover/interaction states
- Contact form field list (waiting on Contact page reference image)
- Expertise page card content (waiting on Aftab's categories)
- Testimonial placeholder copy (to draft once page images arrive, or on request)
- Footer wordmark exact text/casing ("AFTAB MHD" vs "AFTAB MUHAMMAD" vs something else)
