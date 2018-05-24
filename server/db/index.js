import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL
const client = new pg.Client(connectionString)
client.connect()

export default client