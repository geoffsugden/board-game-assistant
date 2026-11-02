# Backend Style Guide

## Scope

This document defines the coding conventions for the Express + Node.js backend in this repository.

## General style

Follow the conventions used by the official Express documentation and modern Node.js JavaScript style where practical:

- https://expressjs.com/en/5x/guide/routing.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://standardjs.com/

The backend should follow these rules unless a project-specific rule is stated below.

## Syntax and formatting

- Use ECMAScript modules (`import` / `export`)
- Use single quotes for strings
- Do not use semicolons
- Use trailing commas in multiline objects, arrays, and function calls
- Prefer 2-space indentation
- Use `const` for variables that do not change
- Use `let` only when reassignment is required
- Use `async` / `await` for asynchronous logic
- Prefer descriptive variable names and camelCase naming

## File and folder naming

- Use lowercase folder names: `config`, `controllers`, `models`, `routes`, `middleware`
- Use lowercase camelCase for module files in `routes` and `controllers`
- Use PascalCase for Mongoose model files
- Keep resource names consistent across the backend

Examples:

- `server.js`
- `src/config/database.js`
- `src/routes/gameSessionsRoutes.js`
- `src/controllers/gameSessionsController.js`
- `src/models/GameSession.js`

## Resource naming

Use one consistent naming pattern for the same domain concept across the project.

For the `gameSessions` resource, use the following convention:

- route file: `gameSessionsRoutes.js`
- controller file: `gameSessionsController.js`
- model file: `GameSession.js`
- route path: `/api/gameSessions`

Avoid mixing older naming patterns such as `playedGames` in active backend code.

## Routes

- Keep route handlers focused and short
- Route modules should define HTTP endpoints only
- Business logic should live in controller modules
- Use `async` handlers with `try` / `catch` around database or external calls
- Return HTTP status codes explicitly when needed

Examples:

- `GET /api/gameSessions`
- `GET /api/gameSessions/:id`
- `POST /api/gameSessions`

## Controllers

- Keep controller functions named by action, for example: `getAll`, `getOne`, `addGameSession`
- Return data from the model layer rather than performing inline domain logic
- Keep data transformation logic in the model or helper layer when it becomes reusable

## Models

- Define Mongoose schemas in dedicated model files
- Keep schema fields and validation rules explicit
- Use consistent serialization transforms when removing Mongo metadata such as `_id` and `__v`
- Use clear field names such as `gameName`, `date`, and `playerResults`

## Error handling

- Catch async errors in route handlers and controller layer when appropriate
- Return meaningful HTTP responses for failed operations
- Do not leave silent failures in database or request-handling logic

## Logging

- Use `console.log` only for development troubleshooting or startup messages
- Do not leave debug logging in production routes unless it is part of a deliberate operational workflow

## Tooling

Use the following default tooling for backend code quality:

- ESLint for linting
- Prettier for formatting
- EditorConfig for cross-platform formatting consistency

The project lint and formatting rules should follow the conventions above and should be kept as close to the public standards as practical.
