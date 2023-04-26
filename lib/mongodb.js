import { MongoClient } from 'mongodb'
require('dotenv').config()

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function connectToDatabase() {
  try {
    await client.connect()
    console.log('Connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
  
  const database = client.db('gearup')
  return database
}

export { connectToDatabase }
