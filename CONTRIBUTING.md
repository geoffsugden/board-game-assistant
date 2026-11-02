# Contributing

## Branching

- Create a feature branch for all work
- Use a short descriptive branch name
- Keep branch scope focused on a single responsibility

Examples:

- `feature/add-game-session-api`
- `fix/game-session-lookup`
- `refactor/backend-naming`

## Commit messages

Use Conventional Commits.

Format:

```text
<type>: <short summary>
```

Common types:

- `feat` for new features
- `fix` for bug fixes
- `refactor` for code restructuring without behavior change
- `docs` for documentation updates
- `test` for tests
- `chore` for tooling, config, and maintenance updates

Examples:

```text
feat: add game session creation endpoint
fix: correct game session lookup validation
refactor: rename backend game session files
docs: add backend style guide
test: add API tests for game session routes
chore: update eslint configuration
```

### Optional body

If needed, add a short body to explain important context.

```text
feat: add game session creation endpoint

Add POST /api/gameSessions to persist a completed game session.
Includes validation and database save flow.
```

### Issue references

Include an issue reference only when you are addressing an existing issue or ticket.

Example:

```text
fix: correct game session lookup validation

The lookup route failed when an invalid Mongo ObjectId was supplied.
Refs: #42
```

At the moment, issue tracking is optional and not required for day-to-day work in this repository.

## Working expectations

- Keep commits small and logically scoped
- Do not mix unrelated changes in one commit
- Avoid committing debug logs, temporary files, or local environment artifacts
- Review your diff before committing
- Update documentation when the change affects project usage or conventions
- Keep the project naming and code style aligned with the repository style guide

## Pull requests

- Keep PRs focused on one change or feature
- Include a concise summary of what changed and why
- Mention any follow-up work or known limitations
- Prefer clear, reviewable diffs over broad rewrites

## AI-generated changes

When using AI assistance:

- Keep edits surgical and scoped to the task
- Do not introduce unrelated refactors
- Preserve existing naming and architecture conventions
- Ask for clarification when requirements are ambiguous
- Review all generated code before committing
- Remove temporary debug output before finalizing the change
