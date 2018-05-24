import express from 'express';
import Controllers from '../controllers'

const {
  UserRequestController
} = Controllers
const {
  addRequest
} = UserRequestController

const router = express.Router()
const userRequestRoute = router

router.get('/', (req, res) => {
  // all requests of a user
})

router.get('/:requestid', (req, res) => {
  // fetch a request that belongs to a logged in user
})

router.post('/', addRequest)

router.put('/:requestid', (req, res) => {
  // a user can modify his request
})

export default userRequestRoute