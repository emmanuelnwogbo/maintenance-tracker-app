import express from 'express'

import Controllers from '../controllers'
import Utils from '../utils'

const router = express.Router()
const userRoute = router

const {
  UserController
} = Controllers

const {
  signUp
} = UserController

const {
  Validate,
  Trim
} = Utils

const {
  signUpGate
} = Validate


router.post('/user/signup', Trim, signUpGate, signUp)

router.post('/user/signin', (req, res) => {
  res.send('hello user signin');
})

router.post('/user/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute