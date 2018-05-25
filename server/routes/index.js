import express from 'express';

import authRoute from './auth';
import userRequestRoute from './userRequest'
import requestRoute from './request'

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send({
    message: `welcome to the maintainance tracker api`
  })
})

export default {
  indexRoute,
  authRoute,
  userRequestRoute,
  requestRoute
}