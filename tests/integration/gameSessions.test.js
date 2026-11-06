import assert from 'node:assert/strict'
import { once } from 'node:events'
import test, { after, before, beforeEach } from 'node:test'
import mongoose from 'mongoose'

const [{ default: app }, { default: connectToDatabase }, { default: GameSession }] =
  await Promise.all([
    import('../../src/app.js'),
    import('../../src/config/database.js'),
    import('../../src/models/GameSession.js'),
  ])

let server
let baseUrl

test('GET /ping reports the server is available', async () => {
  const response = await fetch(`${baseUrl}/ping`)

  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { status: 'ok' })
})

before(async () => {
  await connectToDatabase()
  server = app.listen(0)
  await once(server, 'listening')

  const address = server.address()
  assert.notEqual(address, null)
  assert.notEqual(typeof address, 'string')
  baseUrl = `http://127.0.0.1:${address.port}`
})

beforeEach(async () => {
  await GameSession.deleteMany({})
})

after(async () => {
  if (server) {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  await mongoose.disconnect()
})

test('GET /api/gameSessions returns an empty list when no sessions exist', async () => {
  const response = await fetch(`${baseUrl}/api/gameSessions`)

  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), [])
})

test('GET /api/gameSessions returns all existing sessions', async () => {
  await GameSession.insertMany([
    {
      gameName: 'Catan',
      date: '2026-11-03T00:00:00.000Z',
      playerResults: [{ playerName: 'Alex', playerResult: 10 }],
    },
    {
      gameName: 'Azul',
      date: '2026-11-04T00:00:00.000Z',
      playerResults: [{ playerName: 'Sam', playerResult: 5 }],
    },
  ])

  const response = await fetch(`${baseUrl}/api/gameSessions`)

  assert.equal(response.status, 200)
  const gameSessions = await response.json()
  assert.equal(gameSessions.length, 2)
  assert.deepEqual(
    gameSessions.map(({ gameName }) => gameName).sort(),
    ['Azul', 'Catan'],
  )
})

test('POST /api/gameSessions creates a session and GET retrieves it', async () => {
  const session = {
    gameName: 'Catan',
    date: '2026-11-03T00:00:00.000Z',
    playerResults: [
      { playerName: 'Alex', playerResult: 10 },
      { playerName: 'Sam', playerResult: 8 },
    ],
  }

  const createResponse = await fetch(`${baseUrl}/api/gameSessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(session),
  })

  assert.equal(createResponse.status, 201)
  const createdSession = await createResponse.json()
  assert.equal(createdSession.gameName, session.gameName)
  assert.equal(createdSession.date, session.date)
  assert.equal(createdSession.playerResults[0].playerName, 'Alex')
  assert.ok(createdSession.id)
  assert.equal('_id' in createdSession, false)
  assert.equal('__v' in createdSession, false)

  const getResponse = await fetch(
    `${baseUrl}/api/gameSessions/${createdSession.id}`,
  )

  assert.equal(getResponse.status, 200)
  assert.deepEqual(await getResponse.json(), createdSession)
})

test('GET /api/gameSessions/:id returns 404 when the session does not exist', async () => {
  const missingId = new mongoose.Types.ObjectId().toString()
  const response = await fetch(`${baseUrl}/api/gameSessions/${missingId}`)

  assert.equal(response.status, 404)
})
