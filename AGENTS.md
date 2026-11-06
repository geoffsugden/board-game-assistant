# AI Agent Instructions

## Scope

This file defines expectations for AI-assisted work in this repository.

## General rules

- Work within the user request and do not expand scope without reason
- Prefer minimal, targeted edits over broad rewrites
- Preserve existing architecture and naming conventions
- Respect the backend style guide in `docs/backend/style-guide.md`
- Do not change unrelated files
- If ambiguity materially affects behavior, scope, or data safety, ask for clarification. Otherwise, make a reasonable assumption and state it.

## Privacy and security

- Only access files inside the project being worked on
- Never open, read, search, parse, print, or modify `.env` files or files containing credentials, tokens, passwords, or private keys
- Do not send local data to external services or connected apps unless the user explicitly asks
- If a task appears to require crossing these boundaries, stop and explain what access is needed
- Do not expose secret values in command output, logs, summaries, or commits

## Implementation expectations

- Match existing project patterns for Express, Node.js, and MongoDB usage
- Keep route, controller, and model naming consistent
- Do not leave debug logs, temporary files, or local artifacts behind
- Use the project’s configured lint and formatting rules

## Commit expectations

- Use Conventional Commits for commit messages
- Keep commit scope focused and descriptive
- Do not include unrelated changes in a single commit
- Summaries should be clear enough for a teammate to understand the intent without reading the code

## Tooling and validation

- Prefer the smallest validation command that checks the changed behavior
- Re-run relevant checks after edits
- Do not add new tooling without first confirming with user
- Integration tests must use the dedicated test database and must not clear or modify the normal application database

## Documentation expectations

- Update docs only when the change affects project behavior, conventions, or usage
- Keep documentation aligned with the actual project structure and naming
- Use the existing repository convention docs rather than creating new ad hoc style documents
