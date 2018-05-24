import express from 'express';

import authRoute from './auth.route';
import userRequestRoute from './userRequest.route'
import requestRoute from './request.route'

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send('hello index');
})

export default {
  indexRoute,
  authRoute,
  userRequestRoute,
  requestRoute
}