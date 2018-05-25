import express from 'express';

const router = express.Router()
const requestRoute = router

// all routes below are only accessible to admins

router.get('/', (req, res) => {
  // an admin can get all requests
  // make sure this is available to only admins
})

router.put('/:requestId/approve', (req, res) => {
  // an admin can approve a request
})

router.put('/:requestId/disapprove', (req, res) => {
  // an admin can disaprove a request
})

router.put('/:requestId/resolve', (req, res) => {
  // an admin can resolve a request
})

export default requestRoute