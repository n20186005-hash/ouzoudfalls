# شلالات أوزود — Astro site

Single-page Arabic visitor guide for Ouzoud Waterfalls, Morocco.

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
