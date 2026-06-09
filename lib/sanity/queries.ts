export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  seoTitle,
  seoDescription
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  body,
  seoTitle,
  seoDescription
}`;

export const portfolioQuery = `*[_type == "portfolio"] | order(featured desc, _createdAt desc) {
  title,
  "slug": slug.current,
  industry,
  serviceType,
  summary,
  challenge,
  solution,
  results,
  metrics,
  featured,
  seoTitle,
  seoDescription
}`;

export const careersQuery = `*[_type == "career" && status == "Open"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  department,
  location,
  employmentType,
  summary,
  responsibilities,
  requirements,
  applicationEmail,
  status,
  seoTitle,
  seoDescription
}`;

export const careerBySlugQuery = `*[_type == "career" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  department,
  location,
  employmentType,
  summary,
  responsibilities,
  requirements,
  applicationEmail,
  status,
  seoTitle,
  seoDescription
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc, _createdAt asc) {
  title,
  "slug": slug.current,
  eyebrow,
  summary,
  features,
  deliverables,
  featured,
  order,
  seoTitle,
  seoDescription
}`;
