import { useEffect } from 'react';

/**
 * SEO Manager Component for Route-level Metadata & Structured Data
 */
function SEO({
  title = 'Equipage Equipment Solutions (EES) | Industrial Machinery & Forklifts India',
  description = 'Equipage Equipment Solutions (EES / EEIPL) is India’s authorized partner for BYD lithium forklifts, Terex Franna cranes, Beltas aerial ladders, and Doosan Bobcat equipment.',
  keywords = 'Equipage Equipment Solutions, EEIPL, BYD lithium forklift, Terex Franna cranes, Beltas turntable ladders, Doosan Bobcat India, aerial platforms',
  canonicalUrl = window.location.href,
  ogType = 'website',
  ogImage = 'https://eeipl.co.in/logo.png',
  schemaJson = null
}) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Equipage') || title.includes('EES')
      ? title
      : `${title} | Equipage Equipment Solutions (EES)`;
    document.title = formattedTitle;

    // Helper to create or update meta tags
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', formattedTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 4. Twitter Tags
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', formattedTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. Structured Data Injection if provided
    let scriptTag = null;
    if (schemaJson) {
      const scriptId = 'page-schema-jsonld';
      scriptTag = document.getElementById(scriptId);
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    }

    return () => {
      // Clean up injected page-specific schema on unmount
      if (schemaJson && scriptTag) {
        scriptTag.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schemaJson]);

  return null;
}

export default SEO;
