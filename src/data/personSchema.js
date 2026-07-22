import { siteConfig } from "../config/siteConfig";

// JSON-LD Person schema — used on the Home page so search engines can
// understand this site represents a person, their role, and their links.
export function getPersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: `${siteConfig.title} (${siteConfig.subtitle})`,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location,
        },
        sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin].filter(Boolean),
    };
}

// JSON-LD CreativeWork schema for an individual project — used on
// ProjectDetail pages.
export function getProjectSchema(project, siteUrl) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        creator: {
            "@type": "Person",
            name: siteConfig.name,
        },
        url: `${siteUrl}/projects/${project.slug}`,
        keywords: project.tech.join(", "),
    };
}