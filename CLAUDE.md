# CLAUDE.md

## Project

Personal portfolio + SIMSDIG legal pages. Next.js 16, TypeScript strict, Tailwind v4, shadcn/ui (Maia preset), Magic UI, Bun.

## Architecture

- `app/` - App Router pages
- `components/sections/` - hero, skills, footer, navbar, infra
- `components/ui/` - shadcn + Magic UI components
- `content/{project}/{lang}/` - MDX content (e.g., `content/core/en/`)
- `.claude/skills/` - reusable workflows
- `.claude/rules/` - path-scoped rules (auto-loaded per file type)
- `.claude/agents/` - custom subagents

## Commands

- `bun install` - install deps
- `bunx --bun next dev --turbopack` - dev server
- `bunx tsc --noEmit` - type check (**always use this, not `next build`**)
- `bunx --bun shadcn@latest add {name}` - add shadcn component
- `bunx --bun shadcn@latest add "https://magicui.design/r/{name}"` - add Magic UI component

## Rules

- Conventional Commits: feat:, fix:, chore:, docs:
- Use `bun` or `bunx --bun` prefix for all commands
- Use `@plugin` in globals.css for Tailwind v4 plugins
- Path-specific rules in `.claude/rules/` (MDX, components, legal pages)

## Do Not

- Run `next build` directly (Bun + jest-worker bug - use `bunx tsc --noEmit`)
- Use `framer-motion` package (use `motion/react`)

## Legal Documents

@.claude/skills/update-legal-docs/SKILL.md
