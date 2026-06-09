import { defineField, defineType } from 'sanity';

export const career = defineType({
  name: 'career',
  title: 'Career Role',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'employmentType', title: 'Employment type', type: 'string', options: { list: ['Full-time', 'Part-time', 'Contract', 'Remote'] } }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'responsibilities', title: 'Responsibilities', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'applicationEmail', title: 'Application email', type: 'string', initialValue: 'business@novatelia.com' }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['Open', 'Paused', 'Closed'] }, initialValue: 'Open' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3 }),
    defineField({ name: 'openGraphImage', title: 'OpenGraph image', type: 'image', options: { hotspot: true } })
  ]
});
