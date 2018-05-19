import express from 'express';

import Controllers from '../controllers'
import Utils from '../utils'

const router = express.Router()
const adminRoute = router

const {
  AdminController
} = Controllers

const {
  signIn
} = AdminController

const {
  Validate,
  Trim
} = Utils

const {
  signInGate
} = Validate

router.post('/admin/signup', (req, res) => {
  res.send('hello admin signup');
})

router.post('/admin/signin', Trim, signInGate, signIn)

router.post('/admin/logout', (req, res) => {
  res.send('hello admin logout');
})

export default adminRoute