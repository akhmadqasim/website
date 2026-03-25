---
paths:
  - "content/**/*.mdx"
---

# MDX Content Rules

- All emails must use `<ObfuscatedEmail user="..." domain="..." />` - never plain text
- Use `<h2 id="section-name">` for anchor links (not `## Heading`)
- Do not use markdown tables - they break with prose classes. Use bullet lists instead
- Every legal document must have a "Last Updated" date and "Revision History" section
- Import components at the top of the file (e.g., `import { ObfuscatedEmail }`)
