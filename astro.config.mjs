import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.theangleseyguide.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cy'],
    routing: { prefixDefaultLocale: false },
  },
});
