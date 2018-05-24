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


router.post('/signup', Validate, signup)

router.post('/login', (req, res) => {
  res.send('hello user signin');
})

router.post('/logout', (req, res) => {
  res.send('hello user logout');
})


export default userRoute