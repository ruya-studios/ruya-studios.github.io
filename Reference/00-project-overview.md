# Project Overview — Aftab Muhammad Portfolio Site

## Status
**Planning / documentation phase.** No code has been written yet. This folder is the single source of truth for content, design system, and structure. Build begins once Aftab says "fin."

## What this is
A multi-page personal portfolio site for **Aftab Muhammad** — creative developer, writer, and tinkerer. Primary identity: Python-first software engineer with a strong writing/poetry side and a habit of building genuinely useful tools.

## Reference / style inspiration
Visual language is modeled on **Wondermake** (wondermake.xyz) — see `02-design-system.md` for the full breakdown. Key borrowed traits: thick black grid borders, bento-style modular layout, black-fill accent cards, chunky bold display type, small badge-style nav/CTA buttons, off-white editorial background, giant wordmark footer.

This is stated explicitly by the client: **"wondermake is the style I'm choosing."** Structure and layout patterns are adapted 1:1 where sensible; content and copy are 100% Aftab's own.

## Tech stack
- **React** (confirmed — not plain HTML/CSS/JS)
- Proper project tree: components / pages / assets / styles kept separate
- Multi-page routing (React Router, to be confirmed at build time)
- See `05-tech-stack.md` for the planned folder tree

## Pages
1. **Home** — Hero → Expertise (preview) → Works (preview) → Testimonials → Carousel (auto-scrolling work strip) → Contact (teaser only) → Footer
2. **Contact** — full contact form
3. **About** — bio / background
4. **Expertise** — services / type of work offered
5. **Portfolio** — full work showcase

Footer appears on every page.

## Content sourcing status
- ✅ Home hero copy — provided (verbatim)
- ✅ Selected Work — 6 projects provided (verbatim)
- ✅ About copy — provided (verbatim)
- ✅ Contact details — provided (verbatim)
- ✅ Footer structure — adapted from Wondermake reference footer image
- ⏳ Expertise page categories — **placeholder**, Aftab will edit later
- ⏳ Testimonials — **placeholder**, Aftab will edit later
- ⏳ Per-page reference images — Aftab is uploading these next, one page at a time

## Working rules for this phase
- Claude stays in documentation/information-gathering mode only.
- No questions asked until Aftab explicitly says **"fin."**
- Every new piece of content or image Aftab sends gets logged into these docs, not built into code.
