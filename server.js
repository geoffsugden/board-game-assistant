import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import gameSessionsRouter from './src/routes/gameSessionsRoutes.js'
import connectToDatabase from './src/config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Ping / health check endpoint
app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' })
})

// Game sessions route - for requests related to viewing or storing game sessions.
app.use('/api/gameSessions', gameSessionsRouter)

//
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const start = async () => {
  await connectToDatabase()

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
  })
}

start()
