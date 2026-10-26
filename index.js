import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import playedGamesRouter from './src/routes/playedGames.js'
import connectToDatabase from './src/config/db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))
app.use(cors({ origin: `http://localhost:5173` }))
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/playedGames', playedGamesRouter)

const start = async () => {
  await connectToDatabase()

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
  })
}

start()
