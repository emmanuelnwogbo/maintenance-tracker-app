import express from 'express';
import nonPersistDB from '../nonPersistDB'

const router = express.Router()
const userRequestRoute = router

router.get('/', (req, res) => {
  res.status(200).send(nonPersistDB[0])
})

router.get('/:requestid', (req, res) => {
  let found = 0;
  let counter = 0
  nonPersistDB[0].map(item => {
    if (item.id === req.params.requestid) {
      found += 1
      res.status(200).send(item)
    }
    counter += 1
  })

  if (found < 1 && counter === nonPersistDB[0].length) {
    res.status(404).send({
      message: `request does not exist`
    })
  }
})

router.post('/', (req, res) => {
  res.status(201).send({
    message: `request created`,
    body: req.body
  });
})

router.put('/:requestid', (req, res) => {
  let counter = 0;
  let found = 0
  nonPersistDB[0].map(item => {
    if (item.id === req.params.requestid) {
      found += 1
      res.status(200).send({
        message: `request successfully edited`,
        body: req.body
      });
    }
    counter += 1
  })

  if (found < 1 && counter === nonPersistDB[0].length) {
    res.status(404).send({
      message: `no such request exists `
    })
  }
})

export default userRequestRoute