---
name: update-legal-docs
description: Use when the user wants to update, edit, or modify any legal document page — including privacy policy, user privacy choices, terms of service, or other legal/compliance pages. Ensures proper versioning with snapshot backups, revision history updates, and date changes.
---

# Update Legal Documents

Follow these steps **in order** when making changes to any legal document (privacy policy, user consent, terms of service, etc.).

## Files

Legal documents are stored as MDX files in `content/en/`:

- `privacy-policy.mdx` — SIMSDIG Privacy Policy
- `user-consent.mdx` — User Privacy Choices

Additional legal documents (e.g., terms of service) should follow the same pattern.

- **Snapshots:** `content/en/snapshots/`

## Workflow

### 1. Create Snapshot of Old Version

Before editing, duplicate the current file into `content/en/snapshots/` with the date of the **previous** version:

```
content/en/snapshots/privacy-policy-24-march-2026.mdx
content/en/snapshots/user-consent-24-march-2026.mdx
```

The date in the filename should match the "Last Updated" date **before** the change, not today's date.

### 2. Edit the Content

Make the requested changes to the main MDX file (`privacy-policy.mdx` or `user-consent.mdx`).

### 3. Update "Last Updated" Date

Change the date at the top of the document to today's date:

```markdown
**Last Updated: [Today's Date]**
```

### 4. Add Revision History Entry

Add a new entry at the bottom of the document in the "Revision History" section:

```markdown
- **[Today's Date]** — [Brief description of changes made].
```

### 5. Type Check

Run `bunx tsc --noEmit` to ensure no TypeScript errors.

### 6. Commit and Push

Commit with a descriptive message:

```
docs: update SIMSDIG privacy policy — [brief description]
```

## Notes

- Snapshots are read-only archives — never edit snapshot files.
- The Table of Contents section numbers must be updated if sections are added/removed.
- All emails must use the `<ObfuscatedEmail>` component (never plain text emails).
- If adding new sections, update the TOC and renumber all subsequent sections.
