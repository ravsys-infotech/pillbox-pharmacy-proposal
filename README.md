# Pillbox Pharmacy Proposal

Interactive proposal presentation app for Pillbox Pharmacy's e-commerce platform. The app is built with Next.js App Router and presents a multi-page proposal flow with a landing page, slide-based presentation experience, and thank-you screen.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (`motion/react`)
- Lucide React

## Project Structure

- `app/page.tsx` - landing page
- `app/proposal/page.tsx` - main proposal experience with slide navigation
- `app/modules.tsx` - right-panel content for each proposal module
- `app/thank-you/page.tsx` - closing page
- `components/` - shared visual components
- `hooks/` - presentation-specific hooks
- `lib/utils.ts` - shared utility helpers

## Local Development

Prerequisite: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint
- `npm run clean` - remove the Next.js build cache

## Notes

- No environment variables are currently required.
- The app is configured with `output: 'standalone'`.
- There is no test framework configured in this repository yet.
