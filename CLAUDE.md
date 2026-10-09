# CLAUDE.md

## Project overview

This repo is Cory Christiansen's personal developer portfolio site: a single-page site with a hero, a list of live projects, and links to GitHub, LinkedIn, and a web resume. It's deployed to GitHub Pages at the custom domain `corychristiansen.dev`.

## Tech stack

- Vite + React + TypeScript (strict mode on)
- Tailwind CSS via the official `@tailwindcss/vite` plugin
- npm as the package manager
- No routing library, UI component library, or state management — this is a single page.

## Common commands

- `npm run dev` — start the local dev server
- `npm run build` — type-check and build for production (outputs to `dist/`)
- `npm run typecheck` — type-check only (`tsc -b --noEmit`)
- `npm run preview` — preview the production build locally

## Project structure

- `src/data/site.ts` — the single typed data file for all site content (name, tagline, projects, links)
- `src/components/` — small presentational components: `Header`, `ProjectCard`, `ProjectList`, `LinkList`, `Footer`
- `src/App.tsx` — assembles the components into the page
- `public/resume/index.html` — the standalone web resume (see below)
- `public/CNAME` — custom domain config for GitHub Pages
- `.github/workflows/deploy.yml` — the GitHub Pages deploy workflow

## Conventions

- All page content lives in `src/data/site.ts`. To update the name, tagline, projects, or links, edit that file — don't hardcode content in components.
- Keep Tailwind classes simple and beginner-friendly: basic spacing, typography, layout, and color utilities only. No arbitrary values (`w-[313px]`), no `@apply`, no custom plugins, no complex `group-*`/`peer-*` patterns, and no custom theme config unless truly necessary.
- Keep components small and single-purpose.
- No personal contact info (phone, address, personal email) anywhere in the site or the resume page. The one exception is the forwarding address on the custom domain (`Contact@CoryChristiansen.dev`), which is shown in the Contact tab in `src/data/site.ts`.
- TypeScript strict mode is on — keep it on, and keep the codebase type-clean.

## Web resume notes

`public/resume/index.html` is standalone, hand-written HTML + CSS with no build step — not React, not Tailwind. Vite copies it into the build as-is, so it's served at `/resume/`. Cory edits its content by hand. It intentionally has no email, phone, or address; don't add any back if you notice it's missing. Its "Back to portfolio" link is hidden by a small script when the page is shown inside the portfolio's Resume-tab iframe.

## Deployment notes

- Pushes or merges to `main` auto-deploy via `.github/workflows/deploy.yml`.
- This repo is a GitHub user site (`gogogo-hash.github.io`), so Vite's `base` must stay `/`.
- The custom domain `corychristiansen.dev` is defined by `public/CNAME` — don't delete it, since GitHub Pages needs it on every deploy to keep the custom domain configured.

## Open TODOs

- Replace the placeholder projects in `src/data/site.ts` with real ones.
- Review and finalize the resume draft at `public/resume/index.html`.
- Finish custom domain DNS setup and enforce HTTPS once the certificate is available.
