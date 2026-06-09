export type SanitySlug = string;

export type SanitySeo = {
  seoTitle?: string;
  seoDescription?: string;
};

export type SanityPost = SanitySeo & {
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  body?: unknown[];
};

export type SanityPortfolioProject = SanitySeo & {
  title: string;
  slug: SanitySlug;
  industry?: string;
  serviceType?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  metrics?: Array<{ label?: string; value?: string }>;
  featured?: boolean;
};

export type SanityCareer = SanitySeo & {
  title: string;
  slug: SanitySlug;
  department?: string;
  location?: string;
  employmentType?: string;
  summary?: string;
  responsibilities?: string[];
  requirements?: string[];
  applicationEmail?: string;
  status?: string;
};

export type SanityService = SanitySeo & {
  title: string;
  slug: SanitySlug;
  eyebrow?: string;
  summary?: string;
  features?: string[];
  deliverables?: string[];
  featured?: boolean;
  order?: number;
};
