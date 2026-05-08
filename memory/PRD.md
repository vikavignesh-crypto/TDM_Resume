# Portfolio — Alex Morgan (Project Manager, TDM)

## Original problem statement
Generate a portfolio website for an individual with 12 years of IT experience and currently Project Manager for Test Data Management project.

## User choices
- Placeholder name/contact (Alex Morgan, contact@example.com)
- Visual style: "you decide" — implemented Swiss & High-Contrast (Cabinet Grotesk + IBM Plex + JetBrains Mono, Klein Blue #002FA7 accent)
- Default sections (Hero, About, Experience timeline, Skills, Projects, Testimonials, Contact)
- No contact form — email + LinkedIn + GitHub links only
- Placeholder Résumé PDF download button

## Architecture
- Frontend: React (CRA + craco), Tailwind, lucide-react. Single-page portfolio at /
- Backend: FastAPI template untouched (basic /api/, /api/status). MongoDB available but unused for portfolio content
- Content lives in /app/frontend/src/data/portfolio.js — single source of truth, easy to edit

## Implemented (2025-12)
- Sticky glassmorphism nav with smooth scroll + mobile drawer
- Hero (asymmetric grid, massive type, headshot, dual CTAs)
- About (huge "12" mono, 3-paragraph bio, 4-stat strip)
- Experience as data-table (5 rows, hover state)
- Skills bento grid (6 cells, hover → Klein Blue) + cert marquee
- Projects: 3 alternating case studies w/ tags + 3 metrics each
- Testimonials carousel (3 quotes, prev/next)
- Contact: dark section with email/LinkedIn/GitHub link rows + résumé card
- Placeholder /resume.pdf in public/
- Document title set imperatively (overrides emergent-main.js title)

## Backlog
- P1: Replace placeholder name, contact, links, and résumé PDF
- P1: Connect a real headshot
- P2: Add a /case-studies/[id] route for full-length write-ups
- P2: Add Resend integration for a contact form (currently links-only)
- P2: SEO meta (OG image, sitemap), analytics
- P3: Light/dark mode toggle
