// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
