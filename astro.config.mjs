import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// اكتب النطاق النهائي هنا فقط، مثل: https://your-domain.ma
// اتركه فارغاً أثناء التطوير؛ البناء سيبقى صالحاً ولن يُنشأ sitemap دون نطاق.
const SITE = '';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
