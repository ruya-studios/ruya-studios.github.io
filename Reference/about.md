# About Page — Notes

## Status
Reference images received: 3 total.
- `About-Me_Page.png` — clean Wondermake-editorial style (upper section)
- `About-Me_Page_Terminal.png` — **alternate terminal/pixel-art aesthetic**, same content, different skin. Aftab: "I kinda like" this one. **Not yet decided which direction wins — treat as an open design fork, not a confirmed direction.**
- `About-Me_Lower.png` — lower-section layout reference (structural pattern only, content is Wondermake's own, not Aftab's — see notes below)

Aftab's own words: "the design is split into two the upper and lower part since I can't fit all into a single page."

---

## IMPORTANT — new About copy supersedes the original blurb
The About page reference images use **different, more developed copy** than what was given in the original content dump (`01-content-reference.md`). This new copy is the source of truth for the About page for the initial build. **Confirmed: whether/how the original bio's specifics (freelance history, Saudi/Egypt clients, real estate consulting work, mentoring) get folded in is deferred until after the site is built** — not a blocker for the first build pass.

## New About page copy (verbatim from reference images)

**Nav:** hamburger · "AFTAB MHD" wordmark badge · "GET STARTED" button (rocket icon)

**Hero block:**
- Eyebrow: DESIGNER ✳ DEVELOPER
- H1: ABOUT ME.
- Subtext: "I build software, design systems, and write poetry."

**Who I Am block:**
- Eyebrow: ✳ WHO I AM
- H2: "A computer science graduate who loves turning ideas into meaningful digital experiences."
- Body: "I enjoy building software that solves real problems and designing interfaces that feel clean, intuitive, and intentional. When I'm not coding or designing, you'll probably find me writing poetry or capturing moments through my lens."
- Three icon items:
  - **BUILD** — Systems & Applications
  - **DESIGN** — Interfaces & Experiences
  - **WRITE** — Poetry & Thoughts
- Black-and-white portrait photo (right side), small decorative dot grid + sparkle badge

**What I Value block:**
- Eyebrow: → WHAT I VALUE
- 01 **CLARITY** — Simple, intuitive & effective.
- 02 **PURPOSE** — Build with meaning, not just features.
- 03 **CRAFT** — Attention to detail in everything.
- 04 **GROWTH** — Always learning, always evolving.

**Tools / Beyond the code block:**
- ⚙ TOOLS I WORK WITH: Python, JavaScript, React, FastAPI, Node.js, Tailwind CSS, Git, Docker, and more...
- ♡ BEYOND THE CODE: Photography, Poetry, Football, Music (each with its own icon)

**CTA bar:**
- Icon box (envelope / terminal prompt depending on version)
- "Let's create something great together."
- "I'm always open to new ideas and collaborations."
- Button: "GET IN TOUCH →"

**Footer:**
- © 2025 Aftab Mhd · Designed & built with purpose. · GitHub / LinkedIn / Instagram icons

---

## Terminal aesthetic variant — additional details (`About-Me_Page_Terminal.png`)

**Direction confirmed: Hybrid.** Editorial base (clean grotesk type, standard grid/bento structure) + selected terminal-flavored details layered on top — no full pixel font. Specifically, carry over from the terminal mock:
- Section labels styled as terminal commands: "> whoami", "> what_i_value", "> tools_i_work_with", "> beyond_the_code"
- Portrait image displayed inside a fake terminal window: title bar "user@aftab:~$ portrait.jpg" with a close (×) button, "capture>" button with camera icon overlay
- CTA bar icon box using a ">_" prompt glyph
- Optional: subtle blinking-cursor accent on the hero subtext line

**Not carrying over:** full pixel/blocky font for headings, the pixel-art mascot sprite, "AFTAB MHD>_" pixel-styled wordmark in nav — those stay in the clean editorial style used everywhere else on the site, so the hybrid page still feels consistent with the rest of the site rather than a standalone skin.

This is now the confirmed direction for the About page — no longer an open fork.

---

## Lower section reference (`About-Me_Lower.png`) — structural pattern only
This image is a **Wondermake reference screenshot**, not Aftab content. It shows two sections:
1. **"General Approach"** — 4 numbered principle cards (Wondermake's own: Optimistic Creative, Design for Humans, Don't Be Boring, Progress Over Process)
2. **"Recognition"** — a table-style list of awards/press mentions (Wondermake's own CSSDA/Awwwards/press credits)

**Do not reuse this content verbatim** — it's Wondermake's own copy about their own agency. What to take from it: the *layout pattern* for a lower About section.

**Confirmed for Aftab's page:**
- **Approach section** — Aftab's own version of the 4-card numbered-principles pattern (content TBD, text specifics deferred to after initial build — see `06-open-items.md`)
- **Certificates section** — Aftab's equivalent of the "Recognition" table, but repurposed for certificates rather than awards/press. **Currently hidden/not rendered** — Aftab only has one certificate right now, not enough to justify the section yet. Build the section in code but keep it commented out or feature-flagged off, ready to switch on once there are more certificates to show.

## Waiting on
- Text specifics for the Approach section (deferred to post-initial-build)
- Real portrait photo (b&w photo shown in mock — confirm if Aftab has this ready to use)
