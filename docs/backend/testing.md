# Backend Testing

Run the backend tests with:

```sh
npm test
```

The integration tests require the MongoDB server configured by `MONGODB_URI` to
be reachable. The database name is set by the application: normal runs use
`board-game-assistant`, while `NODE_ENV=test` uses `board-game-assistant-test`.
Both use the same MongoDB server, credentials, and query options from
`MONGODB_URI`. Test data is cleared before each integration test.

The frontend is not included in this test suite.
