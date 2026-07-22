# Mohd Altamish — Portfolio Website

Live: **https://mohdaltamish.onrender.com**

A personal portfolio site built with React + Vite. Single-page layout (Hero,
About, Skills, Experience, Education, Projects, Contact) plus two routed
pages (`/resume`, `/projects/:slug`), dark/light theme, typewriter hero
animation, a working contact form (EmailJS + WhatsApp), and SEO metadata
via `react-helmet-async`.

**→ See [GETTING_STARTED.md](./GETTING_STARTED.md) for the full setup
guide: prerequisites, every `.env` variable explained, step-by-step
EmailJS configuration, what to change/replace with your own content, and
deployment instructions. This README is just the quick overview.**

## Tech Stack

- React 19 + Vite
- React Router (routing)
- Framer Motion (animation)
- react-helmet-async (per-page SEO meta tags)
- EmailJS (contact form — no backend needed)
- Font Awesome CDN + lucide-react (icons)
- Plain CSS Modules — no Tailwind, no Bootstrap, no UI kit

## Quick Start

```bash
npm install
cp .env.example .env   # then fill in your real values — see GETTING_STARTED.md
npm run dev
```

App runs at `http://localhost:5173`.

## Available Scripts

```bash
npm run dev       # start dev server
npm run build     # production build to dist/, then regenerates sitemap.xml + robots.txt from VITE_SITE_URL
npm run preview   # locally preview the production build
npm run sitemap   # regenerate public/sitemap.xml + public/robots.txt only
npm run lint      # run ESLint
```

Everything else — environment variables, EmailJS setup, what to
replace, deployment — is in **[GETTING_STARTED.md](./GETTING_STARTED.md)**.
