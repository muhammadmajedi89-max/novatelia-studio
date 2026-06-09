import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'novatelia-studio',
  title: 'Novatelia Studio',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes
  }
});
