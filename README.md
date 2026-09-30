# شلالات أوزود — Astro site

Quadrilingual (Arabic + English + French + Chinese) visitor guide for Ouzoud Waterfalls, Morocco.

- `/` — Arabic (`ar`, RTL)
- `/en/` — English (`en`, LTR)
- `/fr/` — French (`fr`, LTR)
- `/zh/` — Chinese (`zh`, LTR)

All four main pages share one `GuidePage` component (`src/components/GuidePage.astro`); prose lives in
`src/content/guide.ts` (ar/en) and `src/content/guide.fr.ts` / `src/content/guide.zh.ts`, language-neutral
facts in `src/data/site.ts`. `hreflang` alternates (`ar` / `en` / `fr` / `zh` / `x-default`) are emitted in
`<head>` and in `sitemap-index.xml`.

Long-tail topic pages (one per language) live under `/guide/{slug}/`, `/en/guide/{slug}/`,
`/fr/guide/{slug}/`, `/zh/guide/{slug}/`, rendered by `src/components/TopicPage.astro`
from `src/content/topics.ts`: `marrakech-transport`, `best-season`, `tickets`.

## Stack
- Astro 7.3.2
- Tailwind CSS 4.3.3 via @tailwindcss/vite
- TypeScript 5.9.3
- pnpm 12.4.0
- Node.js 24.21.0 LTS
- Cloudflare Workers static-assets deployment (`wrangler.jsonc`)

## Domain
Set the production domain in one place only: `SITE` inside `astro.config.mjs`.
Leave it empty for local/preview builds. When empty, canonical/absolute OG URL are omitted and sitemap is disabled.

## Commands
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Images
The visitor photography uses real Wikimedia Commons images through `Special:Redirect/file/...` URLs. Credit and source notes are included on-page. Logo, favicon and OG artwork are local assets.
