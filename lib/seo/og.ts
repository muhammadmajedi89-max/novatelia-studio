const siteUrl = 'https://novatelia.com';
const defaultOgImage = `${siteUrl}/og/default.jpg`;

export type OpenGraphImageInput = {
  title?: string;
  image?: string;
  path?: string;
};

export function resolveOpenGraphImage(input: OpenGraphImageInput = {}) {
  if (input.image) {
    return input.image.startsWith('http') ? input.image : `${siteUrl}${input.image}`;
  }

  return defaultOgImage;
}

export function buildOpenGraphImageAlt(input: OpenGraphImageInput = {}) {
  return input.title ? `${input.title} - Novatelia Studio` : 'Novatelia Studio';
}

export function buildOpenGraphImages(input: OpenGraphImageInput = {}) {
  return [
    {
      url: resolveOpenGraphImage(input),
      width: 1200,
      height: 630,
      alt: buildOpenGraphImageAlt(input)
    }
  ];
}
