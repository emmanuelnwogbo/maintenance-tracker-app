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
  signin
} = Auth

const router = express.Router()
const userRoute = router


router.post('/signup', (req, res) => {
  res.send('hello user signup');
})

router.post('/login', Validate, signin)

router.post('/logout', (req, res) => {
  res.send('hello user logout');
})

export default userRoute