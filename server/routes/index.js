import express from 'express';

import userRoute from './user.route';

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send('hello index');
})

export default {
  indexRoute,
  userRoute
}