# uditkandari.com

Personal website for Udit Kandari.

## Live

- https://uditkandari.com

## Tech

- Static HTML (Cloudflare Pages)

## Deploy

- Work happens on `work`; open a PR into `main`.
- CI on PRs: Prettier format check + Playwright smoke tests (Chromium).
- Production deploy: merge to `main` (Cloudflare Pages Git integration).

## How I work (work → PR → main)

- Create a branch off `work`, push commits freely.
- Open a PR into `main` (or `work` if collaborating) to get CI results.
- Only merges to `main` deploy to production. Use PR approvals before merging.

## How to run tests locally

1. Install dependencies: `npm install`
2. Run smoke tests: `npm test`
   - Locally defaults to WebKit to avoid sandbox/display limits; CI runs Chromium.
   - To force Chromium locally (if supported on your machine): `CI=true npm test`
3. Format check: `npm run format` (or `npm run format:fix` to auto-fix)
