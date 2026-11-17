import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { externalLinks } from './src/lib/external-links.mjs';

export default defineConfig({
  site: 'https://www.theangleseyguide.com',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-GB', cy: 'cy' } },
    }),
  ],
  markdown: { processor: satteri({ hastPlugins: [externalLinks] }) },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cy'],
    routing: { prefixDefaultLocale: false },
  },
});
