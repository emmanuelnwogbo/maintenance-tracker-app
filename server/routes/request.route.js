import express from 'express';

import Controllers from '../controllers'
import Utility from '../utils'

const {
  RequestController
} = Controllers
const {
  addRequest,
  getRequests
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

router.post('/', Trim, BasicInputCheck, addRequest)

router.get('/user/:userid', findUserId, getRequests)

router.get('/:requestid', (req, res) => {
  res.send('one request sent')
})

router.patch('/:requestid', (req, res) => {
  res.send(`request modified`);
})

router.delete('/:requestid', (req, res) => {
  res.send('request deleted')
})

export default requestRoute