import express from 'express';
import Controllers from '../controllers'
import Utils from '../utils'

const {
  Validate
} = Utils
const {
  Auth
} = Controllers
const {
  signup
} = Auth

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

router.post('/admin/signup', Validate, signup)

router.post('/admin/signin', (req, res) => {
  res.send('hello user signin');
})

router.post('/admin/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute