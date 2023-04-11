import mongoose from 'mongoose'

async function connectToDatabase() {

  const MONGODB_URI = process.env.MONGO_URL

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

  const client = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = client.connection.db

  return { client, db }
}

export { connectToDatabase }
