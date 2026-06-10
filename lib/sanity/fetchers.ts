import { sanityClient } from './client';
import {
  careerBySlugQuery,
  careersQuery,
  portfolioQuery,
  postBySlugQuery,
  postsQuery,
  servicesQuery
} from './queries';
import type {
  SanityCareer,
  SanityPortfolioProject,
  SanityPost,
  SanityService
} from '@/types/sanity';

const defaultRevalidate = 60;

async function fetchFromSanity<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: defaultRevalidate } });
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return null;
  }
}

export async function getPosts(): Promise<SanityPost[]> {
  return (await fetchFromSanity<SanityPost[]>(postsQuery)) || [];
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return fetchFromSanity<SanityPost>(postBySlugQuery, { slug });
}

export async function getPortfolioProjects(): Promise<SanityPortfolioProject[]> {
  return (await fetchFromSanity<SanityPortfolioProject[]>(portfolioQuery)) || [];
}

export async function getCareers(): Promise<SanityCareer[]> {
  return (await fetchFromSanity<SanityCareer[]>(careersQuery)) || [];
}

export async function getCareerBySlug(slug: string): Promise<SanityCareer | null> {
  return fetchFromSanity<SanityCareer>(careerBySlugQuery, { slug });
}

export async function getServices(): Promise<SanityService[]> {
  return (await fetchFromSanity<SanityService[]>(servicesQuery)) || [];
}
