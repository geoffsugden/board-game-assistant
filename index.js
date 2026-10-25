import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log('====================================================')
  console.log(`Server running at port ${PORT}`)
  console.log('====================================================')
})
