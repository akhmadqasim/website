# Copilot Instructions

## Commit Messages

- Use Conventional Commits format (feat:, fix:, chore:, docs:, etc.)
- Do NOT include `Co-authored-by` trailers in commit messages
- Keep commit messages concise and descriptive

## Interaction Style

- Always use the `ask_user` tool to gather feedback after every change
- Never stop the conversation — keep iterating until the user says "BERHENTI!" or "STOP!"
- Ask for confirmation before making significant changes

## Skills

- **Legal Document Updates:** When updating any legal document in `content/en/` (privacy policy, user consent, terms of service, etc.), follow the workflow defined in `.claude/skills/update-legal-docs/SKILL.md`. Always create a snapshot backup before editing, update the "Last Updated" date, and add a revision history entry.
