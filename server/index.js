import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import knex from 'knex'

import routes from './routes'

dotenv.config()

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'mtrackerdb'
  }
})

const app = express();

const {
  indexRoute,
  authRoute,
  requestRoute
} = routes;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api/v1', indexRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/request', requestRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
  if (error) {
    return error
  }

  return `server started on port ${PORT}`
})


export default app;