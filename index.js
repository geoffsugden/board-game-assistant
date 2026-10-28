import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import playedGamesRouter from './src/routes/playedGames.js'
import connectToDatabase from './src/config/db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/playedGames', playedGamesRouter)

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
