import express from 'express';

const router = express.Router()
const userRoute = router


router.post('/user/signup', (req, res) => {
  res.send('hello user signup');
})

router.post('/user/signin', (req, res) => {
  res.send('hello user signin');
})

router.post('/user/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute