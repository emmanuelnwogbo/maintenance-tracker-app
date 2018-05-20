import express from 'express';

import Controllers from '../controllers'
import Utility from '../utils'

const {
  RequestController
} = Controllers
const {
  addRequest
} = RequestController

const {
  Trim
} = Utility


const router = express.Router()
const requestRoute = router

router.post('/', Trim, addRequest)

router.get('/:userid/requests', (req, res) => {
  res.send(`all a user's requests`)
})

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