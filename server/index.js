import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const app = express()

const {
  indexRoute,
  authRoute,
  userRequestRoute,
  requestRoute
} = routes;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use('/', indexRoute);
app.use('/api/v1', indexRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users/requests', userRequestRoute)
app.use('/api/v1/requests', requestRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
  if (error) {
    return error
  }

  return `server started on port ${PORT}`
})

export default app