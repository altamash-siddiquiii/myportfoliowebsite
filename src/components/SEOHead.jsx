import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/siteConfig";

// Central SEO component — every page passes its own title/description/
// path, and optionally a JSON-LD schema object. Keeps meta tag markup
// out of every page component.
export default function SEOHead({
    title,
    description,
    path = "/",
    image = `${siteConfig.siteUrl}/og-image.jpg`,
    jsonLd = null,
    noindex = false,
}) {
    const fullTitle = `${title} | ${siteConfig.name}`;
    const canonicalUrl = `${siteConfig.siteUrl}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteConfig.name} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
}