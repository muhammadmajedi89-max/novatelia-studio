import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'SEO title', type: 'string' }),
    defineField({ name: 'description', title: 'SEO description', type: 'text', rows: 3 }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' }),
    defineField({
      name: 'robots',
      title: 'Robots',
      type: 'string',
      options: { list: ['index, follow', 'noindex, follow', 'noindex, nofollow'] },
      initialValue: 'index, follow'
    }),
    defineField({ name: 'openGraphTitle', title: 'OpenGraph title', type: 'string' }),
    defineField({ name: 'openGraphDescription', title: 'OpenGraph description', type: 'text', rows: 3 }),
    defineField({ name: 'openGraphImage', title: 'OpenGraph image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'twitterTitle', title: 'Twitter title', type: 'string' }),
    defineField({ name: 'twitterDescription', title: 'Twitter description', type: 'text', rows: 3 }),
    defineField({ name: 'twitterImage', title: 'Twitter image', type: 'image', options: { hotspot: true } })
  ]
});
