# Work Detail Page (Case Study) — Notes

## Status
New page type, not previously scoped. Reference images received: `Example-Work_page.png`, `Example-Work_page_lower.png` (Wondermake "Nodge Films" case study, layout/structure reference only — content will be Aftab's own per-project copy from `01-content-reference.md`).

Aftab: "this is an example work page which you go to when you click on a particular work." Reached from the Portfolio page's project list (and likely also from Home's Works preview cards).

## Route
`/portfolio/:project-slug` (proposed — e.g. `/portfolio/mercury`, `/portfolio/sentry`) — to confirm at "fin."

## Layout structure (top to bottom, from both reference images)

**Header:**
- Nav: hamburger, wordmark badge, "← All work" back-link (replaces normal Work/About/Contact nav on this page), "Get started" button

**Hero block:**
- Full-bleed project hero image/brand color block (project's own color/art — in reference: solid yellow with the client's logo lockup centered)
- For Aftab: this would be a representative hero image/graphic per project (needs asset per project — see open items)

**Meta + intro block:**
- Category tag chips (e.g. "Branding," "Web Design & Build") → for Aftab, tags pulled from his own project descriptions (e.g. Mercury → "Systems," "Cryptography"; Sentry → "Security," "ML/Anomaly Detection" — exact tag taxonomy TBD, likely ties to Expertise categories once confirmed)
- H2: Project name
- Two-column text:
  - Left (short): one-line tagline/summary
  - Right (longer): 2 body paragraphs — the fuller story/context
- CTA: "Visit the website ↗" (external link) → for Aftab, only relevant where a live link exists (may not apply to all 6 projects — e.g. Terminal Portfolio is this site itself, some may be client-confidential)

**Image/asset gallery:**
- Multiple full-width or half-width image tiles showcasing the work — reference shows: two large black tiles (logo variations), then further down two more tiles (business card mockup, branded vehicle), then another full-bleed hero-style image (a different visual moment — director's chair shot)
- Variable tile sizing/rhythm — not a uniform grid, mixes full-bleed and half-width moments
- For Aftab: needs multiple screenshots/visuals per project (dashboards, diagrams, UI shots, etc. — asset-heavy requirement, flagged in open items)

**Related Work section:**
- Eyebrow/label: "RELATED WORK"
- 2 related project cards shown side by side, each with: color/art thumbnail, project name, category tag chips
- For Aftab: logic for "related" could be shared tags/category, or simply the next 2 projects in sequence — TBD

**Footer:**
- Standard global footer (same as documented in `01-content-reference.md` → Footer section) — confirms footer appears here too, consistent with "every page has a footer"

## Content mapping for Aftab
Each of the 6 projects (Terminal Portfolio, Mercury, Sentry, Araknid, Retail Management System, High School Robotics Bootcamp) would get its own detail page following this structure, using the descriptions already captured in `01-content-reference.md` expanded into the short/long two-column format.

## Waiting on
- Confirm this page exists for all 6 projects or only select ones
- Per-project imagery/asset gallery (significant asset gap — none of the 6 projects have screenshots yet)
- Per-project category tags (ties to Expertise categories)
- "Visit the website" links — which projects have a live/public link vs. none (e.g. client-confidential work)
- Longer-form descriptions per project (current content has one paragraph each; this layout wants short tagline + longer 2-paragraph body — may need Aftab to expand)
- "Related work" pairing logic
