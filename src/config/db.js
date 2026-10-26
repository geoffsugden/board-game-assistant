import 'dotenv/config'
import mongoose from 'mongoose'

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI)

  console.log('Connected to MongoDB')
}

export default connectToDatabase
