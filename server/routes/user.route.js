import express from 'express'

import Controllers from '../controllers'
import Utils from '../utils'

const router = express.Router()
const userRoute = router

const {
  UserController
} = Controllers

const {
  signIn,
  signUp
} = UserController

const {
  Validate,
  Trim
} = Utils

const {
  signInGate,
  signUpGate
} = Validate


router.post('/admin/signup', Trim, signUpGate, signUp)

router.post('/admin/signin', Trim, signInGate, signIn)

router.post('/admin/logout', (req, res) => {
  res.send('hello admin logout');
})


export default userRoute