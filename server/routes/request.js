import express from 'express';
import nonPersistDB from '../nonPersistDB'
import Controllers from '../controllers'

const {
  Request
} = Controllers
const {
  modifyRequest,
  getRequests
} = Request

const router = express.Router()
const requestRoute = router

router.get('/', getRequests)

router.put('/:requestid/approve', modifyRequest)

router.put('/:requestid/disapprove', modifyRequest)

router.put('/:requestid/resolve', modifyRequest)

export default requestRoute