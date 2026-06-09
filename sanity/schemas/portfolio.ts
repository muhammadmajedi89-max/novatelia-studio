import { defineField, defineType } from 'sanity';

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'serviceType', title: 'Service type', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'challenge', title: 'Challenge', type: 'text', rows: 4 }),
    defineField({ name: 'solution', title: 'Solution', type: 'text', rows: 4 }),
    defineField({ name: 'results', title: 'Results', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'metrics', title: 'Metrics', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'label', title: 'Label', type: 'string' }),
      defineField({ name: 'value', title: 'Value', type: 'string' })
    ] }] }),
    defineField({ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3 }),
    defineField({ name: 'openGraphImage', title: 'OpenGraph image', type: 'image', options: { hotspot: true } })
  ]
});
