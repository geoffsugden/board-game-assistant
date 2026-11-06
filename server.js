import 'dotenv/config'
import app from './src/app.js'
import connectToDatabase from './src/config/database.js'

const PORT = process.env.PORT || 3001

const start = async () => {
  await connectToDatabase()

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
  })
}

start()
