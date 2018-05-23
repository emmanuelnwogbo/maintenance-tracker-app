import express from 'express';

const router = express.Router()
const requestRoute = router

router.get('/users/requests', (req, res) => {
  // a user can get a request
})

router.post('/users/requests', (req, res) => {
  // a user can post a request
})

router.get('/users/requests/:requestId', (req, res) => {
  // a user or admin can get a particular request
})

router.put('/users/requests/:requestId', (req, res) => {
  // a user can update a request
})


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