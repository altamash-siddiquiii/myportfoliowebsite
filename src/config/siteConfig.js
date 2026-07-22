// ============================================================================
// SINGLE SOURCE OF TRUTH for all contact info, social links, and nav data.
// Never hardcode these values inside components — always import from here.
//
// All actual values live in the ".env" file at the project root (copy
// ".env.example" to ".env" and fill it in) so they can be edited without
// touching any code. See README.md for the full list of variables.
// ============================================================================

import profilePhoto from "../assets/profile-photo.jpeg";
import resumePdf from "../assets/resume.pdf?url";

const env = import.meta.env;

export const siteConfig = {
    siteUrl: (env.VITE_SITE_URL || "https://your-domain.com").replace(/\/$/, ""),

    name: env.VITE_NAME || "Your Name",
    title: env.VITE_TITLE || "Full Stack Developer",
    subtitle: env.VITE_SUBTITLE || "",
    location: env.VITE_LOCATION || "",

    contact: {
        phone: env.VITE_PHONE || "",
        phoneHref: `tel:${(env.VITE_PHONE || "").replace(/[^+\d]/g, "")}`,
        email: env.VITE_EMAIL || "",
        emailHref: `mailto:${env.VITE_EMAIL || ""}`,
    },

    socials: {
        linkedin: env.VITE_LINKEDIN_URL || "",
        github: env.VITE_GITHUB_URL || "",
        twitter: env.VITE_TWITTER_URL || "",
        instagram: env.VITE_INSTAGRAM_URL || "",
        whatsapp: env.VITE_WHATSAPP_NUMBER
            ? `https://wa.me/${env.VITE_WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Hi ${env.VITE_NAME || ""}, I found your portfolio and would like to connect.`
              )}`
            : "",
    },

    resume: {
        pdfPath: resumePdf,
        fileName: `${(env.VITE_NAME || "resume").replace(/\s+/g, "_")}_Resume.pdf`,
    },

    // Bundled at build time — swap the file in src/assets/profile-photo.jpeg
    // and every usage (Navbar avatar, Hero image) picks it up automatically.
    photo: profilePhoto,
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
