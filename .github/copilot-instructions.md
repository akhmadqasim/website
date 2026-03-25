# Copilot Instructions

## Project Overview

Personal portfolio website for Akhmad Qasim (Backend & iOS Developer). Also hosts legal pages (privacy policy, user consent) for the iOS SaaS app **SIMSDIG** — a school management platform.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** shadcn/ui (Maia preset) + Magic UI
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Package Manager:** Bun
- **Font:** Figtree (sans) + Geist Mono (mono)
- **Animations:** motion/react
- **Content:** MDX (via @next/mdx)

## Build, Run, and Test

- Install: `bun install`
- Dev server: `bunx --bun next dev --turbopack`
- Type check: `bunx tsc --noEmit`
- Add shadcn component: `bunx --bun shadcn@latest add {component}`
- Add Magic UI component: `bunx --bun shadcn@latest add "https://magicui.design/r/{component}"`
- **Note:** `bunx --bun next build` may fail due to Bun + jest-worker bug. Use `bunx tsc --noEmit` for validation.

## Folder Structure

- `app/` — Next.js App Router pages
- `components/sections/` — Page sections (hero, skills, footer, etc.)
- `components/ui/` — shadcn/ui and Magic UI components
- `content/{project}/{lang}/` — MDX content organized by project and language
- `.claude/skills/` — Claude Code skill definitions
- `.claude/rules/` — Path-scoped rules (MDX, components, legal pages)
- `.claude/agents/` — Custom subagents (legal reviewer, etc.)

## Commit Messages

- Use Conventional Commits format (feat:, fix:, chore:, docs:, etc.)
- Do NOT include `Co-authored-by` trailers in commit messages
- Keep commit messages concise and descriptive

## Interaction Style

- Always use the `ask_user` tool to gather feedback after every change
- Never stop the conversation — keep iterating until the user says "BERHENTI!" or "STOP!"
- Ask for confirmation before making significant changes

## Coding Guidelines

- All emails must use the `<ObfuscatedEmail>` component (never plain text emails in public pages)
- MDX headings that need anchor links use HTML `<h2 id="...">` syntax
- Use Tailwind CSS v4 plugin syntax in globals.css (`@plugin` instead of tailwind.config)

## Skills

- **Legal Document Updates:** When updating any legal document in `content/{project}/{lang}/` (privacy policy, user consent, terms of service, etc.), follow the workflow defined in `.claude/skills/update-legal-docs/SKILL.md`. Always create a snapshot backup before editing, update the "Last Updated" date, and add a revision history entry.
