import express from 'express';

const router = express.Router()
const requestRoute = router

router.get('/:adminid', (req, res) => {
  res.send('hello all requests')
})

router.post('/', (req, res) => {
  res.send('request posted')
})

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