# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive proposal presentation app for Pillbox Pharmacy's e-commerce platform. Built with Next.js 15 (App Router) and originally created via Google AI Studio. It presents an 18-slide proposal with a sidebar navigation, animated transitions, and a split-panel layout.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run clean` — Clean Next.js cache

## Environment

Requires `GEMINI_API_KEY` in `.env.local` (see `.env.example`). The app is configured for standalone output (Firebase/Cloud Run deployment).

## Architecture

This is a single-page presentation app with minimal routing:

- **`app/page.tsx`** — Main `ProposalApp` component. Contains the `MODULES` array (18 slides), sidebar navigation, top bar with prev/next controls, and the split-panel layout (left: title/features/insight, right: module-specific panel). Uses `motion/react` for animated transitions between slides.
- **`app/modules.tsx`** — All 18 right-panel components (`Module1Right` through `Module18Right`). This is a very large file (~33k tokens). Each module is an independent React component rendering detailed content for that slide.
- **`app/layout.tsx`** — Root layout. Uses Poppins font via `next/font/google`.
- **`lib/utils.ts`** — Single `cn()` utility (clsx + tailwind-merge).

## Key Conventions

- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`. Colors are hardcoded hex values (no theme tokens). The design uses a dark sidebar (`#0F0F0F`) with a light content area (`#F9FAFB`).
- **Animations**: `motion/react` (Framer Motion) for slide transitions with `AnimatePresence`.
- **Icons**: `lucide-react` for all icons.
- **Path aliases**: `@/*` maps to project root (configured in `tsconfig.json`).
- **ESLint**: Flat config (`eslint.config.mjs`), ESLint is ignored during builds.
- **No test framework** is configured.
- **No component library** — all UI is custom-built inline.
