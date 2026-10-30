import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// اكتب النطاق النهائي هنا فقط، مثل: https://your-domain.ma
// اتركه فارغاً أثناء التطوير؛ البناء سيبقى صالحاً ولن يُنشأ sitemap دون نطاق.
const SITE = 'https://ouzoudfalls.com';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  integrations: SITE
    ? [sitemap({ filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname), i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en', fr: 'fr', zh: 'zh' } } })]
    : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
