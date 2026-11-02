# AI Agent Instructions

## Scope

This file defines expectations for AI-assisted work in this repository.

## General rules

- Work within the user request and do not expand scope without reason
- Prefer minimal, targeted edits over broad rewrites
- Preserve existing architecture and naming conventions
- Respect the repository style guide in `docs/style-guide.md`
- Do not change unrelated files
- If a requirement is ambiguous, ask for clarification before proceeding

## Implementation expectations

- Keep code readable, small, and easy to review
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
- Do not add new tooling unless the repository already depends on it or it is required for the task

## Documentation expectations

- Update docs only when the change affects project behavior, conventions, or usage
- Keep documentation aligned with the actual project structure and naming
- Use the existing repository convention docs rather than creating new ad hoc style documents
