import 'dotenv/config'
import mongoose from 'mongoose'

const DATABASE_NAME = 'board-game-assistant'
const TEST_DATABASE_NAME = 'board-game-assistant-test'

export const getMongoUri = () => {
  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri) {
    throw new Error('MONGODB_URI must be set')
  }

  const databaseName =
    process.env.NODE_ENV === 'test' ? TEST_DATABASE_NAME : DATABASE_NAME
  const databaseUri = new URL(mongoUri)
  databaseUri.pathname = `/${databaseName}`

  return databaseUri.toString()
}

const connectToDatabase = async () => {
  await mongoose.connect(getMongoUri())

  console.log('Connected to MongoDB')
}

export default connectToDatabase
