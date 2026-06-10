import type { Metadata } from 'next';
import type { SanitySeo } from '@/types/sanity';

const siteName = 'Novatelia Studio';
const siteUrl = 'https://novatelia.com';
const defaultDescription = 'Novatelia Studio designs AI systems, websites, web applications, automation workflows and growth platforms for modern teams.';

export type MetadataInput = SanitySeo & {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata(input: MetadataInput = {}): Metadata {
  const title = input.seoTitle || input.title || siteName;
  const description = input.seoDescription || input.description || defaultDescription;
  const url = input.path ? `${siteUrl}${input.path}` : siteUrl;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
