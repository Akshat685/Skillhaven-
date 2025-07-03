// skillhaven-studio/sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import lesson from './schemas/lesson';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'skillhaven-studio',
  projectId: 'sqjlh8ym',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(), // Register code input plugin
  ],
  schema: {
    types: [lesson],
  },
});
