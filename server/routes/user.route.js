import express from 'express'

import Controllers from '../controllers'
import Utils from '../utils'

const router = express.Router()
const userRoute = router

const {
  UserController
} = Controllers

const {
  signIn
} = UserController

const {
  Validate,
  Trim
} = Utils

const {
  signInGate
} = Validate

router.post('/user/signin', Trim, signInGate, signIn)

router.post('/user/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute