import express from 'express';

const router = express.Router()
const adminRoute = router


router.post('/admin/signup', (req, res) => {
  res.send('hello admin signup');
})

router.post('/admin/signin', (req, res) => {
  res.send('hello admin signin');
})

router.post('/admin/logout', (req, res) => {
  res.send('hello admin logout');
})

export default adminRoute