import express from 'express';

import userRoute from './user.route';
import adminRoute from './admin.route'
import requestRoute from './request.route'

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send('hello index');
})

export default {
  indexRoute,
  userRoute,
  adminRoute,
  requestRoute
}