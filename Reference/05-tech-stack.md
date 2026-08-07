# Tech Stack & Project Structure Plan

## Confirmed
- **React** (not plain HTML/CSS/JS)
- Proper separation: components, pages, styles (CSS), scripts/logic (JS), assets — each in their own folder, no dumping everything at root
- Multi-page site (5 pages + shared footer/nav)

## Proposed toolchain (to confirm at "fin")
- **Vite** as build tool (fast, minimal config, standard for a React SPA of this size)
- **React Router** for client-side routing between the 5 pages
- Plain CSS (or CSS Modules) per component/page — matches the "CSS separate" requirement cleanly, avoids extra dependencies like Tailwind unless Aftab prefers utility classes
- No CMS/backend initially — content lives in structured JS/JSON data files (e.g. `data/projects.js`, `data/testimonials.js`) so Aftab can edit content without touching layout code
- Contact form: static form markup now, wiring (e.g. Formspree, EmailJS, or a real backend) to be decided once the Contact page reference/requirements are in

## Planned folder tree (draft — not yet created)

```
aftab-portfolio/
├── public/
│   └── favicon, static meta assets
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── work/            # project thumbnails (Mercury, Sentry, Araknid, etc.)
│   │   │   └── icons/           # custom SVG icons if not using an icon library
│   │   └── fonts/                # self-hosted font files, if not using Google Fonts CDN
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   ├── ExpertiseGrid/
│   │   ├── WorksGrid/
│   │   ├── TestimonialSlider/
│   │   ├── WorkCarousel/
│   │   ├── ContactTeaser/
│   │   ├── ContactForm/
│   │   └── ui/                  # shared small bits: Button, Badge, Tag, IconButton
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Contact/
│   │   ├── About/
│   │   ├── Expertise/
│   │   └── Portfolio/
│   ├── data/
│   │   ├── projects.js          # the 6 project entries, structured
│   │   ├── testimonials.js      # placeholder testimonials, structured
│   │   └── expertise.js         # placeholder service categories, structured
│   ├── styles/
│   │   ├── global.css           # resets, base typography, CSS variables (design tokens)
│   │   └── variables.css        # color/spacing/font tokens from design-system.md
│   ├── App.jsx                  # router setup
│   └── main.jsx                 # entry point
├── index.html
├── package.json
└── vite.config.js
```

## Notes
- Design tokens (colors, spacing, font sizes) from `02-design-system.md` will live in `src/styles/variables.css` as CSS custom properties, so every component pulls from one source instead of hardcoding values.
- `data/*.js` files mean Aftab can update project descriptions, testimonials, or expertise categories later without editing component code.
- This tree is a plan, not yet scaffolded — actual project creation happens after "fin."
