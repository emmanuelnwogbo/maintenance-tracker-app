import express from 'express';

import Controllers from '../controllers';

const router = express.Router()
const userRoute = router

const {
  UserController
} = Controllers
const {
  signUp
} = UserController


router.post('/user/signup', signUp)

router.post('/user/signin', (req, res) => {
  res.send('hello user signin');
})

router.post('/user/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute