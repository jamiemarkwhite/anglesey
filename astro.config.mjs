import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anglesey.jamiewhite.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cy'],
    routing: { prefixDefaultLocale: false },
  },
});
