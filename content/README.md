# Content Directory

This directory contains MDX content for legal and informational pages, organized by project and language.

## Structure

```
content/
├── README.md
└── {project}/
    ├── {lang}/      # Language-specific content (e.g., en, id, zh, ja, de, ar)
    │   ├── privacy-policy.mdx
    │   └── privacy-rights.mdx
    └── snapshots/   # Archived versions of legal documents
```

## Projects

- **core** — Legal documents for [SIMSDIG](https://github.com/akhmadqasim/core), a school management platform.

## Adding a New Language

1. Create a new language folder inside the project directory (e.g., `content/{project}/{lang}/`).
2. Copy the English MDX files and translate the content.
3. Update the route page component to include the new language in `SUPPORTED_LANGS` and `contentMap`.

## Updating Legal Documents

Follow the workflow in `.claude/skills/update-legal-docs/SKILL.md`.
