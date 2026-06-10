import { createClient } from 'next-sanity';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

export function isSanityConfigured() {
  return Boolean(sanityProjectId && sanityDataset);
}

export const sanityClient = isSanityConfigured()
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: process.env.NODE_ENV === 'production'
    })
  : null;
