# gogogo-hash.github.io

Cory Christiansen's personal portfolio site — a single-page site built with Vite, React, TypeScript, and Tailwind CSS.

## Running locally

```sh
npm install
npm run dev
```

Then open the printed local URL. The web resume is served at `/resume/`.

## Editing content

All site content (name, tagline, project cards, and links) lives in one file: `src/data/site.ts`. Edit that file and the page updates — no need to touch any component.

## Web resume

The web resume is a standalone, hand-edited HTML + CSS page at `public/resume/index.html` (no React, no Tailwind, no build step). Vite copies everything in `public/` into the build as-is, so it's served at `/resume/`.

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. The site is served from `https://corychristiansen.dev` (custom domain configured via `public/CNAME`).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — type-check and build for production
- `npm run typecheck` — type-check only
- `npm run preview` — preview the production build locally
