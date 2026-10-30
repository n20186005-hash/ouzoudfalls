# شلالات أوزود — Astro site

Quadrilingual (Arabic + English + French + Chinese) visitor guide for Ouzoud Waterfalls, Morocco.

- `/` — Arabic (`ar`, RTL)
- `/en/` — English (`en`, LTR)
- `/fr/` — French (`fr`, LTR)
- `/zh/` — Chinese (`zh`, LTR)

All four main pages share one `GuidePage` component (`src/components/GuidePage.astro`); prose lives in
`src/content/guide.ts` (ar/en) and `src/content/guide.fr.ts` / `src/content/guide.zh.ts`, language-neutral
facts in `src/data/site.ts`. `hreflang` alternates (`ar` / `en` / `fr` / `zh` / `x-default`) are emitted in
`<head>` and in the localized sitemap referenced by `sitemap-index.xml`.

Three topic pages per language live under `/guide/{slug}/`, `/en/guide/{slug}/`,
`/fr/guide/{slug}/`, `/zh/guide/{slug}/`, rendered by `src/components/TopicPage.astro`
from `src/content/topics.ts`: `marrakech-transport`, `best-season`, `tickets`.

## Stack
- Astro 7.3.2
- Tailwind CSS 4.3.3 via @tailwindcss/vite
- TypeScript 5.9.3
- pnpm 12.4.0
- Node.js 24.21.0 LTS
- Cloudflare Workers Static Assets with a thin native asset Worker (`worker.mjs`, `wrangler.jsonc`)
- Exact deployment tool Wrangler4.133.0, project `ouzoudfalls`; no new domain bindings

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
The current local photograph is Kasmii’s2017Ouzoud upper-cascades view, cropped to remove lower boats/people, resized and JPEG-compressed under CC BY-SA4.0. Source, exact license and changes are linked on every content page and in `public/IMAGE-SOURCES.txt`. Historical imagery does not establish current access or flow. No external image fallback or build-time image request is required. The former2025overview and legacyOGSVG are not used as current photographs.

See CURRENT-REVIEW.md for current source limits, routing, privacy and build notes. Public Maps values are manually checked dated snapshots, not automatic updates or reviews collected here.

## Native local verification

After the build, run `npx wrangler deploy --dry-run` and `npx wrangler dev --ip 127.0.0.1 --port 8938`. These do not establish production acceptance. Google Analytics requires an affirmative choice; the visible privacy controls are shared across all content pages.
