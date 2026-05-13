# G DESIGNS ARCHITECTS & BUILDERS

> Premium architectural and construction company website — built as a motion-first, luxury experience using React, Framer Motion, GSAP, Vite, and Tailwind CSS.

---

## Live Website

| Environment | URL |
|---|---|
| Production | https://gdesignsarchitectsbuilders.site/ |
| Cloudflare Pages | https://gdesigns-website.pages.dev/ |

---

## Company

| Role | Name |
|---|---|
| Founder | SOORAJ S KUMAR |
| Co-Founder and Website Developer | DEEPIKA NARENDRAN |

**G DESIGNS ARCHITECTS & BUILDERS** is a South India-based premium architectural and construction firm operating across Kerala and Bengaluru. The firm specializes in residential architecture, villa design, commercial buildings, modern interiors, landscape planning, and floor plan documentation.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations, transitions, spring physics |
| GSAP | Hero-level timeline animations |
| React Icons | Icon library (FontAwesome subset) |
| Cloudflare Pages | Hosting and CDN |
| GitHub | Version control |

---

## Website Features

### Motion-First Design
- Custom cursor with `requestAnimationFrame` lerp interpolation — smooth dot and ring tracking at 60fps
- Word-by-word hero headline entrance with skew and spring physics
- Ambient breathing gold glow pulses in the hero section
- Scroll-triggered section reveals using Framer Motion `useInView`
- 3D tilt cards on project grid using `useMotionValue` and `useSpring`
- Parallax background on hero tied to scroll position
- Animated SVG blueprint drawing in the floor plan section
- Dual-direction marquee band with services and city names

### UI and Aesthetics
- Luxury black and gold theme throughout
- Responsive layout across desktop, tablet, and mobile
- Custom cursor with hover-expand ring state
- Shimmer effect on primary CTA button
- Glow-pulse animation on interactive elements
- Gold hairline accent dividers and corner markers
- Floating image badges in the About section
- Specialty pill tags replacing static stat counters

### Sections
- Navbar — fixed, blur-on-scroll, animated mobile menu with clip-path reveal
- Hero — parallax background, word-by-word entrance, ambient glows, spring CTA buttons
- Marquee — dual scrolling service and location ticker
- About — two-column layout with curtain image reveal and animated specialty badges
- Projects (Featured) — 2-column tilt card grid with hover overlay
- Projects (More) — 3-column extended gallery
- Floor Plan — animated SVG blueprint with PDF viewer link
- Contact — email, phone, Instagram with location pins
- Footer — copyright and developer credit

---

## Project Structure

```
gdesigns-website/
|
+-- public/
|   +-- logo.jpeg
|   +-- house1.jpeg
|   +-- house2.jpeg
|   +-- stairs1.jpeg
|   +-- stairs2.jpeg
|   +-- project1.jpeg ... project9.jpeg
|   +-- final floor plan.pdf
|
+-- src/
|   +-- components/
|   |   +-- Navbar.jsx
|   |   +-- HeroSection.jsx
|   |   +-- MarqueeSection.jsx
|   |   +-- AboutSection.jsx
|   |   +-- ProjectsSection.jsx
|   |   +-- FloorPlanSection.jsx
|   |   +-- ContactSection.jsx
|   |   +-- CustomCursor.jsx
|   |
|   +-- hooks/
|   |   +-- useSmoothScroll.js
|   |   +-- useScrollAnimation.js
|   |
|   +-- App.jsx
|   +-- main.jsx
|   +-- index.css
|   +-- App.css
|
+-- index.html
+-- package.json
+-- vite.config.js
+-- tailwind.config.js
+-- postcss.config.js
+-- .gitignore
+-- README.md
```

---

## Local Development

### Prerequisites

- Node.js 18 or above
- npm 9 or above

### Setup

```bash
# Clone the repository
git clone https://github.com/JoinDeeHub/gdesigns-website.git
cd gdesigns-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment — Cloudflare Pages

### 1. Push to GitHub

```bash
git add .
git commit -m "Deploy update"
git push origin main
```

### 2. Connect to Cloudflare Pages

- Go to Cloudflare Dashboard
- Workers and Pages > Create Application
- Connect to GitHub > Select `gdesigns-website`

### 3. Build Settings

| Setting | Value |
|---|---|
| Framework Preset | React (Vite) |
| Build Command | `npm run build` |
| Build Output Directory | `dist` |

### 4. Custom Domain

Domain `gdesignsarchitectsbuilders.site` is connected via Cloudflare DNS with automatic SSL.

Every push to `main` triggers an automatic redeploy.

---

## Custom Cursor — Technical Note

The cursor uses a `requestAnimationFrame` loop with linear interpolation (lerp) for smooth 60fps tracking:

- **Dot** — lerp factor `0.45` (near-instant, no lag)
- **Ring** — lerp factor `0.10` (deliberate trailing, premium feel)
- Ring expands to `64px` on hover over interactive elements
- All positioning via `transform: translate()` using `will-change: transform` for GPU compositing
- No `setTimeout`, no `style.left/top` — zero jank

---

## Social Media

- Instagram: https://www.instagram.com/gdesigns.ab

---

## Locations

- Palace Road, Attingal, Kerala
- Bengaluru, Karnataka, India

---

## Contact

- Email: gdesigns.ab@gmail.com
- Phone: +91 9567169331

---

## Developed By

**DEEPIKA NARENDRAN**
Co-Founder, G DESIGNS ARCHITECTS & BUILDERS

Responsibilities:
- UI/UX design and motion direction
- Full frontend development
- Component architecture
- Custom cursor engineering
- Cloudflare deployment and DNS configuration
- GitHub repository management
- Custom domain setup

GitHub: https://github.com/JoinDeeHub

---

## Future Enhancements

- WhatsApp click-to-chat integration
- Project category filtering
- Testimonial section
- Contact form with backend
- Admin dashboard for project management
- SEO metadata and Open Graph tags
- Dynamic CMS integration

---

## License

Copyright 2026 G DESIGNS ARCHITECTS & BUILDERS. All rights reserved.

Crafted with passion — JoinDeeHub by DEEPIKA NARENDRAN
