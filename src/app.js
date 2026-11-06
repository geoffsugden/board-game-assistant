import express from 'express'
import path from 'node:path'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import gameSessionsRouter from './routes/gameSessionsRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, '..', 'dist')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/gameSessions', gameSessionsRouter)

app.get('/{*splat}', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

export default app
