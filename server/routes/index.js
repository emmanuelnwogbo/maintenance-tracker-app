import express from 'express';

import authRoute from './auth.route';
import requestRoute from './request.route'

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send('hello index');
})

export default {
  indexRoute,
  authRoute,
  requestRoute
}