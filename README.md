# Stukadoors en onderhoudsbedrijf De Bruin

Next.js static website for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Local URL: `http://127.0.0.1:3000`

## Cloudflare Pages

Use these build settings:

- Framework preset: `Next.js`
- Build command: `npm run pages:build`
- Build output directory: `out`
- Node.js version: `20`

The site uses `output: "export"` in `next.config.js`, so `next build` creates a static `out/` directory that Cloudflare Pages can publish directly.
