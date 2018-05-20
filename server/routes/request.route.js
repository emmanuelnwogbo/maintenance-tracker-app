import express from 'express';

import Controllers from '../controllers'
import Utility from '../utils'

const {
  RequestController
} = Controllers
const {
  addRequest,
  getRequests,
  getRequest
} = RequestController

const {
  Validate,
  Trim,
  Authenticate
} = Utility

const {
  findUserId
} = Authenticate

const {
  BasicInputCheck
} = Validate

const router = express.Router()
const requestRoute = router

router.get('/:adminid', findUserId, getRequests)

router.get('/user/:userid', findUserId, getRequests)

router.post('/', Trim, BasicInputCheck, addRequest)

router.get('/:adminid/:requestid', findUserId, getRequest)

router.get('/user/:userid/:requestid', findUserId, getRequest)

router.patch('/:userid/:requestid', (req, res) => {
  res.send(`request modified`);
})

router.delete('/:requestid', (req, res) => {
  res.send('request deleted')
})

export default requestRoute