import express from 'express';

import Controllers from '../controllers'
import Utils from '../utils'

const router = express.Router()
const adminRoute = router


const {
  AdminController
} = Controllers

const {
  signUp
} = AdminController

const {
  Validate,
  Trim
} = Utils

const {
  signUpGate
} = Validate


router.post('/admin/signup', Trim, signUpGate, signUp)

router.post('/admin/signin', (req, res) => {
  res.send('hello admin signin');
})

router.post('/admin/logout', (req, res) => {
  res.send('hello admin logout');
})

export default adminRoute