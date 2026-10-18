import { useEffect } from 'react';

/**
 * SEO Manager Component for Route-level Metadata & Structured Data
 */
function SEO({
  title = 'Equipage Equipment Solutions (EES) | Industrial Machinery & Forklifts India',
  description = 'Equipage Equipment Solutions (EES / EEIPL) is India’s authorized partner for BYD lithium forklifts, Terex Franna cranes, Beltas aerial ladders, and Doosan Bobcat equipment.',
  keywords = 'Equipage Equipment Solutions, EEIPL, BYD lithium forklift, Terex Franna cranes, Beltas turntable ladders, Doosan Bobcat India, aerial platforms',
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://eeipl.co.in/',
  ogType = 'website',
  ogImage = 'https://eeipl.co.in/logo.png',
  schemaJson = null,
  breadcrumbs = null,
  faqList = null,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
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
    setMetaTag('meta[name="robots"]', 'name', 'robots', robots);

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

    // Helper to manage JSON-LD tags
    const injectJsonLd = (id, jsonContent) => {
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('script');
        tag.id = id;
        tag.type = 'application/ld+json';
        document.head.appendChild(tag);
      }
      tag.textContent = JSON.stringify(jsonContent);
      return tag;
    };

    const injectedTags = [];

    // 6. Custom Structured Data Injection
    if (schemaJson) {
      injectedTags.push(injectJsonLd('page-schema-custom', schemaJson));
    }

    // 7. Automatic BreadcrumbList Schema
    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.url.startsWith('http') ? crumb.url : `https://eeipl.co.in${crumb.url}`
        }))
      };
      injectedTags.push(injectJsonLd('page-schema-breadcrumbs', breadcrumbSchema));
    }

    // 8. Automatic FAQPage Schema
    if (Array.isArray(faqList) && faqList.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqList.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      };
      injectedTags.push(injectJsonLd('page-schema-faq', faqSchema));
    }

    return () => {
      // Clean up injected page-specific schemas on unmount
      injectedTags.forEach((tag) => {
        if (tag && tag.parentNode) {
          tag.remove();
        }
      });
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schemaJson, breadcrumbs, faqList, robots]);

  return null;
}

export default SEO;
