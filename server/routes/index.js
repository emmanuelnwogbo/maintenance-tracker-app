import express from 'express';

const router = express.Router()
const indexRoute = router


router.get('/', (req, res) => {
  res.send('hello index');
})

export default {
  indexRoute
}