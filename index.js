import 'dotenv/config'
import express from 'express'
import scorecardRouter from './src/routes/scorecard.js'
import connectToDatabase from './src/config/db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/scorecards', scorecardRouter)

const start = async () => {
  await connectToDatabase()

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
  })
}

start()
