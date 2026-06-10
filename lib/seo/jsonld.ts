const siteUrl = 'https://novatelia.com';
const organizationName = 'Novatelia Studio';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    url: siteUrl,
    email: 'business@novatelia.com',
    telephone: '+968 7808 2410',
    areaServed: ['Oman', 'United Arab Emirates', 'Afghanistan', 'Central Asia', 'Africa'],
    sameAs: []
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organizationName,
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: organizationName
    }
  };
}

export function articleJsonLd(input: {
  title: string;
  description?: string;
  slug: string;
  publishedAt?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: `${siteUrl}/blog/${input.slug}`,
    datePublished: input.publishedAt,
    author: {
      '@type': 'Person',
      name: input.author || organizationName
    },
    publisher: {
      '@type': 'Organization',
      name: organizationName
    }
  };
}

export function serviceJsonLd(input: {
  name: string;
  description?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    provider: {
      '@type': 'Organization',
      name: organizationName,
      url: siteUrl
    },
    url: `${siteUrl}/services/${input.slug}`
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  };
}
