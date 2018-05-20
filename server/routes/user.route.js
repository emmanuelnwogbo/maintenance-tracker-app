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

router.post('/admin/signup', (req, res) => {
  res.send('hello admin signup');
})

router.post('/admin/signin', Trim, signInGate, signIn)

router.post('/admin/logout', (req, res) => {
  res.send('hello admin logout');
})


export default userRoute