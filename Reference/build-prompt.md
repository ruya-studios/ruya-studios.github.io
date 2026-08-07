# Build Prompt — Aftab Muhammad Portfolio Website

I'm attaching full documentation (11 markdown files) and reference images for a personal portfolio website I need built. Read everything before writing any code. This is a real, multi-page production site — build it properly, not as a prototype.

**All documentation and reference images are in the `Reference/` folder.** Read every file in it before starting — don't skip any, and don't rely on assumptions where the docs already give an answer.

## What you're building

A 6-page personal portfolio site for **Aftab Muhammad** — a creative developer and writer (Python-first software engineer, also writes poetry/stories). Visual style is modeled on the design agency **Wondermake** (thick black borders, bento-grid layout, bold grotesk type, off-white background, black-fill accent cards, badge-style buttons, zero border-radius) — but with Aftab's own content and a confirmed **hybrid editorial/terminal aesthetic on the About page specifically** (see docs).

## Documentation provided (in `Reference/`)

11 markdown files covering:
1. `00-project-overview.md` — project summary, status, confirmed decisions
2. `01-content-reference.md` — all verbatim copy: hero, 6 projects, about, contact, footer
3. `02-design-system.md` — colors, typography, layout system, component inventory, motion
4. `03-site-structure.md` — page list, routes, navigation, per-page flow
5. `04-page-notes/home.md`, `contact.md`, `about.md`, `expertise.md`, `portfolio.md`, `work-detail.md` — detailed section-by-section breakdowns of each page, derived from reference screenshots, with confirmed decisions noted inline
6. `05-tech-stack.md` — proposed React/Vite folder tree
7. `06-open-items.md` — the master tracker of what's confirmed vs. still placeholder

Plus all reference images referenced by filename throughout the docs (Wondermake screenshots used as layout/style reference — do not copy their copy, only their structure/interaction patterns, per the notes in each doc). Match each image filename mentioned in the docs to the actual file in `Reference/` before using it.

**Read all of this fully before starting.** The docs contain specific confirmed decisions (marked `[x]` in `06-open-items.md` or noted "confirmed" inline) — treat those as final requirements, not suggestions. Items still marked placeholder/TBD should be built with clearly-labeled placeholder content, structured so Aftab can swap in real content later without touching layout code.

## Tech requirements

- **React + Vite**, React Router for the 6 routes
- Proper separated project structure: `components/`, `pages/`, `styles/` (CSS), `data/` (JS/JSON content files), `assets/` (images/icons/fonts) — no dumping everything in one file. Follow the folder tree in `05-tech-stack.md` as the baseline, adjust as needed for good practice.
- Plain CSS (component-scoped, e.g. one `.css` file per component/page) using CSS custom properties for the design tokens (colors, spacing, type scale) defined in `02-design-system.md` — one `variables.css` as the single source of truth
- Content (project list, testimonials, expertise categories) lives in `data/*.js` files, not hardcoded in components, so it's editable later
- Fonts: Space Grotesk (display/headings) + Inter (body), loaded via Google Fonts or self-hosted — match the weight/scale guidance in `02-design-system.md`
- Fully responsive down to mobile
- Visible keyboard focus states on all interactive elements
- Respect `prefers-reduced-motion` for the carousel and any hover/scroll animations

## Pages to build (routes)

1. `/` — Home: Hero → Expertise preview (bento grid) → Works preview (grid) → Testimonials (slider) → Carousel (auto-scrolling work strip) → Contact teaser (no form, just CTA) → Footer
2. `/contact` — Contact: heading + subtext + direct contact list (email/WhatsApp/Instagram/LinkedIn) + full form (enquiry-type checkboxes, name, company optional, email, timeline, budget, project details textarea, consent checkbox, submit). No availability widget (confirmed skip). No bottom work-strip (confirmed drop).
3. `/about` — About: hybrid editorial + terminal-detail aesthetic (see `04-page-notes/about.md` for exactly which terminal elements to include: prompt-style section labels like "> whoami", portrait shown in fake terminal window chrome, ">_"-style CTA icon — but NOT full pixel font or the mascot sprite). Sections: hero, Who I Am, What I Value (4 items), Tools/Beyond the Code, Approach section (placeholder content, structurally present), Certificates section (build it, but keep it hidden/not rendered — only one certificate exists so far), CTA bar, footer.
4. `/expertise` — Expertise: numbered row-list (not a grid) with hover-expand interaction revealing a thumbnail per row, "Services at a Glance" aside card, bottom icon-tab section. Use placeholder categories (clearly marked as such in the data file).
5. `/portfolio` — Portfolio: filter tabs + two-column hover-to-preview layout (static project name list on left, large preview panel on right that swaps on hover/click). No bottom Expertise teaser (confirmed drop).
6. `/portfolio/:project-slug` — Work Detail: one per project (all 6), reached from Portfolio page. Back-nav header, full-bleed project hero, tag chips, name, two-column intro (short tagline + longer body), "visit website" CTA (only where a link exists), image gallery (placeholder tiles until real assets exist), Related Work (2 cards), footer.

Footer appears on every page — see `01-content-reference.md` for structure, confirmed wordmark text is **"AFTAB MHD"**.

## Content rules

- Use Aftab's real content verbatim from `01-content-reference.md` and the per-page notes wherever it's provided (hero copy, 6 project descriptions, about copy from the mocks, contact details).
- Where content is explicitly marked placeholder (Expertise categories, testimonials, footer CTA copy, Approach section text, per-project images/tags) — write clearly-labeled, tasteful placeholder content that's easy to find and swap out later. Don't leave anything broken or empty; don't over-invent either — keep placeholders simple and obviously placeholder (e.g. a code comment or a `// TODO: replace with real testimonials` marker in the data file).
- For missing project imagery: use solid-color or gradient placeholder blocks (styled consistently with the site's monochrome shell) rather than stock photos or fabricated screenshots — these are meant to be swapped for real screenshots later.

## What NOT to do

- Don't copy any of Wondermake's actual copy (service descriptions, testimonial quotes, awards, taglines) — those examples exist only to show layout/interaction patterns, per every page-notes file.
- Don't add a bottom work-strip to Contact or a bottom Expertise teaser to Portfolio — both explicitly dropped.
- Don't add the Contact page availability/studio-hours widget — explicitly dropped.
- Don't go full pixel-font/mascot-sprite on the About page — hybrid only, per the confirmed decision.
- Don't invent final Expertise categories or testimonial content as if they were real — keep them flagged as placeholder.

## Deliverable

A working, runnable React project with the full folder structure, all 6 routes functional, responsive, and matching the design system — ready for Aftab to run locally, review, and start swapping in his real assets and remaining content (tracked in `06-open-items.md`).

If anything in the docs is ambiguous or conflicting, make the most reasonable call consistent with the rest of the design system and flag the assumption in a comment or a short summary at the end — don't stall on it.

## Before you start

Confirm you can see all 11 files in `Reference/` plus the reference images (Home hero/expertise/works/testimonials/carousel/contact, Footer, About page + terminal variant + lower section, Contact page, Expertise page + hover effect, Works page, Example work-detail page + lower section). If anything's missing, say so before building rather than guessing at what it contained.
