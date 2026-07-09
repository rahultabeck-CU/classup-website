import { Helmet } from "react-helmet-async";

const SITE_NAME = "ClassUp";
const BASE_URL = "https://classup.com.au";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/naplan/year-5", will be prefixed with BASE_URL
  ogImage?: string;
  ogTitle?: string; // falls back to `title` when omitted
  ogDescription?: string; // falls back to `description` when omitted
  schemaMarkup?: object | object[]; // JSON-LD object(s)
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogTitle,
  ogDescription,
  schemaMarkup,
  noIndex = false,
}: SEOProps) {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;

  // Normalise schemaMarkup to an array so we can render multiple scripts
  const schemas: object[] = schemaMarkup
    ? Array.isArray(schemaMarkup)
      ? schemaMarkup
      : [schemaMarkup]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data — one <script> per schema object */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}
