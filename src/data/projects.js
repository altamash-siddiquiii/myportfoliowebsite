// ============================================================================
// SINGLE SOURCE OF TRUTH for all project data.
// - Projects.jsx (preview cards) reads title/summary/tech/image/slug
// - ProjectDetail.jsx (case-study page, batch 7) reads the full object
// Adding a new project = add one object here. No component edits needed.
// ============================================================================

export const projects = [
    {
        slug: "portfolio-website",
        title: "Portfolio Website",
        tagline: "This Site — React + Vite Personal Portfolio",
        summary:
            "A premium, fully responsive personal portfolio built with React and Vite — animated hero, dark/light theme, working contact form, and SEO-ready meta tags out of the box.",
        tech: ["React.js", "Vite", "Framer Motion", "React Router", "EmailJS"],
        // NOTE: this file is also imported by the plain-Node sitemap script
        // (scripts/generate-sitemap.js), which can't read import.meta.env —
        // so, unlike siteConfig.js, URLs here are literal, not env-driven.
        // If you change your GitHub username, update this line too.
        githubUrl: "https://github.com/altamash-siddiquiii/myportfoliowebsite",
        liveUrl: "https://mohdaltamish.onrender.com",
        featured: true,
        overview:
            "This portfolio itself — a single-page React application built with Vite, covering a hero section, about, skills, experience, education, projects and a working contact form, plus dedicated resume and case-study routes. Built as a from-scratch design system (no UI framework), with every personal detail driven by environment variables so it's easy to reconfigure for anyone.",
        keyFeatures: [
            "Typewriter-animated hero with a tilt-responsive profile photo",
            "Dark/light theme toggle persisted to localStorage",
            "Client-rendered SEO — per-page meta tags, Open Graph, JSON-LD via react-helmet-async",
            "Working contact form via EmailJS with client-side rate limiting",
            "Auto-generated sitemap.xml/robots.txt from a single source of truth",
            "Fully responsive, code-split routes, zero UI framework dependency",
        ],
        architecture:
            "Vite + React 19, plain CSS Modules for styling (no Tailwind/Bootstrap), Framer Motion for animation, React Router for the /resume and /projects/:slug routes with lazy-loaded code splitting. All personal data (contact info, socials, resume, projects) is centralized in src/config and src/data, driven by .env at build time.",
        challenges: [
            {
                challenge: "Keeping every personal detail editable without touching component code.",
                solution:
                    "Centralized all contact info, social links and site metadata into a single siteConfig.js sourced entirely from environment variables, so the whole site can be re-skinned for a different person by editing one .env file.",
            },
            {
                challenge: "Getting real SEO value out of a client-rendered single-page app.",
                solution:
                    "Used react-helmet-async for per-route title/description/canonical/OG/JSON-LD tags, plus a build step that regenerates sitemap.xml and robots.txt from the same project/route data — so search engines and the sitemap never drift out of sync.",
            },
        ],
    },
    {
        slug: "explorebnb",
        title: "ExploreBnB",
        tagline: "Airbnb-Inspired Full Stack Rental Platform",
        summary:
            "A full-stack rental listing platform with listing management, file uploads, map display, reviews, and secure authentication.",
        tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js"],
        githubUrl: "[REPLACE_ME]",
        liveUrl: "[REPLACE_ME]",
        featured: true,
        overview:
            "ExploreBnB is a full-stack rental listing platform inspired by Airbnb, built to practice end-to-end MVC architecture. Users can browse listings, view them on an interactive map, leave reviews, and manage their own listings through a secure authenticated dashboard.",
        keyFeatures: [
            "Full listing CRUD with image upload support",
            "Interactive map display for listing locations",
            "User reviews and ratings on individual listings",
            "Secure authentication and authorization via Passport.js",
            "Server-rendered views with EJS templating",
        ],
        architecture:
            "Built on an MVC structure with Express handling routing and controllers, MongoDB/Mongoose for the data layer, and EJS for server-rendered views. File uploads are handled through a dedicated middleware layer that validates and stores images before persisting listing records.",
        challenges: [
            {
                challenge:
                    "Handling secure file uploads without exposing the server to unvalidated input.",
                solution:
                    "Implemented a dedicated upload middleware with file-type and size validation before any listing document is written to the database.",
            },
            {
                challenge: "Keeping authorization checks consistent across listing edit/delete routes.",
                solution:
                    "Centralized an isOwner authorization middleware applied to every protected route, rather than repeating ownership checks per controller.",
            },
        ],
    },
    {
        slug: "stock-management-app",
        title: "Stock Management Application",
        tagline: "Zerodha-Inspired Stock Trading Clone",
        summary:
            "A full-stack MERN stock management app with buy/sell functionality, JWT auth, and email OTP verification.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
        githubUrl: "[REPLACE_ME]",
        liveUrl: "[REPLACE_ME]",
        featured: true,
        overview:
            "A MERN-stack stock management application inspired by Zerodha, allowing users to simulate buying and selling stocks through a responsive React frontend backed by secure REST APIs, with JWT-based authentication and email OTP verification for account security.",
        keyFeatures: [
            "Buy/sell order flow with real-time portfolio updates",
            "JWT-based authentication with protected API routes",
            "Email OTP verification during account signup",
            "Responsive React.js frontend consuming REST APIs",
        ],
        architecture:
            "React frontend communicates with an Express REST API, with MongoDB storing user portfolios and transaction history. Authentication uses JWT stored securely client-side, with an OTP verification step layered on top of the standard signup flow for added account security.",
        challenges: [
            {
                challenge: "Verifying real users at signup without adding excessive friction.",
                solution:
                    "Added an email OTP verification step using a time-limited code, keeping the flow to a single extra input before account activation.",
            },
            {
                challenge: "Keeping portfolio state accurate across concurrent buy/sell actions.",
                solution:
                    "Wrapped balance and holdings updates in atomic database operations to prevent race conditions on rapid successive trades.",
            },
        ],
    },
    {
        slug: "fb-panel",
        title: "FB Panel",
        tagline: "Automation & Management Tool (Freelance)",
        summary:
            "A freelance automation tool with token-based admin authentication, bulk messaging, and live status monitoring.",
        tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
        githubUrl: "[REPLACE_ME]",
        liveUrl: "[REPLACE_ME]",
        featured: true,
        overview:
            "FB Panel is a freelance automation and management tool built for a client, featuring a secure admin dashboard protected by token verification and key-based approval, with bulk automation actions and live monitoring of account status.",
        keyFeatures: [
            "Token verification and key-based approval authentication for admin access",
            "Automated bulk messaging management",
            "Auto-comment functionality",
            "Live status monitoring dashboard",
            "Country-based authorization for user permissions",
        ],
        architecture:
            "Server-rendered EJS dashboard backed by an Express/MongoDB backend. Access control is layered: a token verification step gates login, and a separate key-based approval step gates access to bulk-action features, with country-based rules further restricting what each user role can trigger.",
        challenges: [
            {
                challenge: "Restricting sensitive bulk-action features to approved users only.",
                solution:
                    "Built a two-step authorization gate — token verification followed by a manual key-based approval — before any bulk-action route becomes accessible.",
            },
            {
                challenge: "Giving the client visibility into live automation status without manual refreshing.",
                solution:
                    "Implemented a live status monitoring view on the dashboard so the client can track running jobs as they execute.",
            },
        ],
    },
    {
        slug: "mehndi-artist-portfolio",
        title: "Mehndi Artist Portfolio Website",
        tagline: "Freelance Client Portfolio Site",
        summary:
            "A responsive React.js portfolio for a freelance mehndi artist client, featuring a work gallery and appointment booking interface.",
        tech: ["React.js"],
        githubUrl: "[REPLACE_ME]",
        liveUrl: "[REPLACE_ME]",
        featured: true,
        overview:
            "A responsive portfolio website built for a freelance mehndi artist client, showcasing a work gallery and giving prospective customers a simple interface to request appointment bookings.",
        keyFeatures: [
            "Responsive image gallery showcasing the artist's work",
            "Appointment booking interface for prospective clients",
            "Mobile-first responsive layout",
        ],
        architecture:
            "A React.js single-page application built with component-based structure, focused on a fast-loading gallery and a straightforward booking form, styled for a clean presentation across devices.",
        challenges: [
            {
                challenge: "Presenting a large image gallery without hurting page load performance.",
                solution:
                    "Used lazy-loaded, optimized images so the gallery loads progressively instead of blocking initial render.",
            },
        ],
    },
];

// Smaller projects with no dedicated case-study page
export const otherProjects = [
    {
        title: "Todo List Application",
        tech: ["React.js", "JavaScript"],
        githubUrl: "[REPLACE_ME]",
    },
    {
        title: "Weather Application",
        tech: ["JavaScript", "REST API"],
        githubUrl: "[REPLACE_ME]",
    },
];