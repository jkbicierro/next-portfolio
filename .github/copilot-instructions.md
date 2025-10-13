# Copilot instructions for this repo

This is a Next.js 15 (App Router) + React 19 + TypeScript portfolio with Tailwind CSS, shadcn-style UI patterns (Radix primitives + cva), next-themes, lucide-react, and motion/react.

- Architecture and structure

  - App Router lives in `src/app`. Global wrappers are in `src/app/layout.tsx` and styles in `src/app/globals.css`.
  - Reusable components:
    - `src/components/ui/*`: low-level primitives (shadcn style). E.g. `button.tsx` uses `class-variance-authority` (cva) and the `cn` helper from `src/lib/utils.ts`.
    - `src/components/block/*`: page-level building blocks like `navbar.tsx`, `footer.tsx`, `copyright.tsx`.
    - `src/components/buttons/*`: small composables (e.g., `mode-toggle.tsx`).
  - Path alias `@/*` maps to `./src/*` (see `tsconfig.json`). Prefer `import { Button } from "@/components/ui/button"` over relative paths.

- Theming, fonts, and styling

  - `ThemeProvider` from `next-themes` wraps the app in `layout.tsx` with `attribute="class"` and `defaultTheme="dark"`. Add client-only UI under it.
  - Fonts are loaded via `next/font` (`DM_Sans`, `Pacifico`) and exposed as CSS vars `--font-dm`, `--font-pacifico` on `<body>`.
  - Color tokens are defined in `globals.css` for `:root` and `.dark`; `tailwind.config.ts` maps them to Tailwind theme colors. Dark mode is class-based.
  - Global typographic scales for `h1`–`h5`, `p`, `small` are set in `globals.css`. Follow utility-first styling; spacing often uses bracketed values (e.g., `py-[200px]`).

- UI system conventions

  - Use `cn()` from `src/lib/utils.ts` to merge classes; prefer `tailwind-merge + clsx` instead of string concatenation.
  - When creating button-like components, mirror `src/components/ui/button.tsx`:
    - expose `variant` and `size` via cva, keep uppercase label style where applicable.
  - Radix primitives back `Avatar` in `src/components/ui/avatar.tsx`; follow the same pattern for future primitives.

- Client vs server components

  - Add `"use client"` at the top for components using hooks, event handlers, or `next/navigation` (e.g., `src/app/page.tsx`, `src/components/block/navbar.tsx`).
  - Server components should avoid client-only imports (e.g., `usePathname`, `useScroll`). If needed, split into a small client wrapper.

- Navigation and motion

  - `NavBar` renders a fixed top bar (desktop) and a bottom tab bar (mobile). Active state uses `usePathname()`.
  - Scroll progress indicator uses `motion/react` `useScroll()`; import from `"motion/react"` (not `framer-motion`).

- Routing and pages

  - Add routes by creating `src/app/<route>/page.tsx`. Current routes: `/` (home with `Hero`, `About`, `Process`), `/about`, `/contact`, `/research`.

- Images and assets

  - External images must be whitelisted in `next.config.ts` (`images.domains`). Update this file if you add new domains.

- Scripts and tooling

  - Dev: `npm run dev` (uses `next dev --turbopack`). Build: `npm run build`. Start: `npm run start`. Lint: `npm run lint`.
  - ESLint: flat config extending `next/core-web-vitals` + `next/typescript` (`eslint.config.mjs`).
  - Tailwind: tokens + fonts configured in `tailwind.config.ts`; content paths include `src/app`, `src/components`, `src/pages`.

- Export patterns to note

  - `NavBar` is a named export, `Footer` and `copyright` default-export.
  - Match the existing pattern when editing those files or importing them in `layout.tsx`.

- Practical examples
  - Import via alias: `import { Button } from "@/components/ui/button"` and use `variant="secondary"` as in the home page CTA.
  - Make a client component: add `"use client"` then `useState/useEffect` (see `About()` cards in `src/app/page.tsx`).
  - Add a new route: create `src/app/case-studies/page.tsx` and link to it from `navigation` in `navbar.tsx`.

Keep changes small and composable. Favor `ui/*` for primitives and `block/*` for composed sections. Align new tokens with the CSS variable theme and Tailwind mapping.

## Commit messages (for Copilot)

Use Conventional Commits to generate clear, consistent commit messages. Prefer small commits that map to one logical change.

- Format

  - <type>(<scope>): <subject>
  - Body paragraph(s) explaining the why, not just the what (optional)
  - Footer for breaking changes and issue references (optional)

- Rules

  - type: one of
    - feat: a new user-facing feature
    - fix or bug: a bug fix (treat `bug` as an alias of `fix`)
    - chore: repo maintenance, tooling, config, lockfiles
    - docs: documentation only changes
    - style: formatting, missing semicolons, no code change
    - refactor: code change that neither fixes a bug nor adds a feature
    - perf: performance improvement
    - test: adding or updating tests
    - build: build system or external dependencies changes
    - ci: CI configuration or scripts
    - revert: revert a previous commit
  - scope: optional; use a short area tag when helpful, e.g. app, navbar, button, theme, config, ci, deps
  - subject: imperative, no period at the end; aim for <= 72 chars
  - body: wrap at ~72 chars per line; include motivation, tradeoffs, links if needed
  - breaking changes: add a footer line starting with `BREAKING CHANGE:`
  - issues: reference with `Closes #123` or `Refs #123` in the footer

- Examples

  - feat(navbar): add active link highlight with usePathname
  - fix(button): correct secondary variant hover color in dark mode
  - chore(deps): bump next to 15.0.x and react to 19.0.x
  - docs(readme): add development and build instructions
  - refactor(ui): extract cn utility usages to reduce duplication
  - perf(hero): lazy-load background image with priority hint
  - test(about): add snapshot tests for card rendering
  - ci: add lint and typecheck to PR workflow
  - revert: revert "feat(hero): add scroll progress bar"

- Preferred scopes for this repo

  - app, pages, layout, navbar, footer, hero, about, process, contact
  - ui/button, ui/avatar, ui/input, theme, styles, config, deps, ci

- Template
  - <type>(<scope>): <subject>
  - <body describing why/how; include before/after if relevant>
  - BREAKING CHANGE: <description>
  - Closes #<issue>, Refs #<issue>

When suggesting or auto-generating commit messages in this repo, follow the above strictly. If unsure between `bug` and `fix`, prefer `fix`.
