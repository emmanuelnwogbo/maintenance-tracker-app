import express from 'express';

const router = express.Router()
const userRoute = router


router.post('/signup', (req, res) => {
  res.send('hello user signup');
})

router.post('/signin', (req, res) => {
  res.send('hello user signin');
})

router.post('/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute