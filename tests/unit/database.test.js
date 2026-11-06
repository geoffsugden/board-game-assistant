import assert from 'node:assert/strict'
import test from 'node:test'
import { getMongoUri } from '../../src/config/database.js'

test('uses the application database outside of test mode', () => {
  const originalNodeEnv = process.env.NODE_ENV
  const originalMongoUri = process.env.MONGODB_URI

  process.env.NODE_ENV = 'development'
  process.env.MONGODB_URI = 'mongodb://localhost:27017?retryWrites=true'

  try {
    const databaseUri = new URL(getMongoUri())

    assert.equal(databaseUri.pathname, '/board-game-assistant')
    assert.equal(databaseUri.searchParams.get('retryWrites'), 'true')
  } finally {
    if (originalNodeEnv === undefined) {
      delete process.env.NODE_ENV
    } else {
      process.env.NODE_ENV = originalNodeEnv
    }

    if (originalMongoUri === undefined) {
      delete process.env.MONGODB_URI
    } else {
      process.env.MONGODB_URI = originalMongoUri
    }
  }
})

test('uses a dedicated database while running tests', () => {
  const originalNodeEnv = process.env.NODE_ENV
  const originalMongoUri = process.env.MONGODB_URI

  process.env.NODE_ENV = 'test'
  process.env.MONGODB_URI = 'mongodb://localhost:27017/board-game-assistant?retryWrites=true'

  try {
    const testUri = new URL(getMongoUri())

    assert.equal(testUri.pathname, '/board-game-assistant-test')
    assert.equal(testUri.searchParams.get('retryWrites'), 'true')
  } finally {
    if (originalNodeEnv === undefined) {
      delete process.env.NODE_ENV
    } else {
      process.env.NODE_ENV = originalNodeEnv
    }

    if (originalMongoUri === undefined) {
      delete process.env.MONGODB_URI
    } else {
      process.env.MONGODB_URI = originalMongoUri
    }
  }
})
