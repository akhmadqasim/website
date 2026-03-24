# Contributing

Thanks for your interest in contributing! Here's how to get started.

## Setup

```bash
git clone https://github.com/akhmadqasim/website.git
cd website
bun install
bun dev
```

No database required. The dev server runs on `http://localhost:3000`.

## How to Contribute

1. Fork the repository
2. Create a branch from `main`
3. Make your changes
4. Open a Pull Request against `main`

## Branch Naming

Use the following format:

```
feat/short-description
bug/short-description
chore/short-description
```

Examples:

- `feat/add-dark-mode`
- `bug/fix-navbar-spacing`
- `chore/update-dependencies`

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dark mode toggle
fix: resolve navbar alignment on mobile
chore: update dependencies
docs: update README
```

Do not include `Co-authored-by` trailers in commit messages.

## Code Style

- Follow the existing Prettier and ESLint configuration in the project
- Run `bun lint` before submitting a PR
- Keep code clean and consistent with the existing codebase
