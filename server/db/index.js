import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'mtrackerdb'
  }
})

export default db