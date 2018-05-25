import express from 'express';
import nonPersistDB from '../nonPersistDB'

const router = express.Router()
const requestRoute = router

// all routes below are only accessible to admins

router.get('/', (req, res) => {
  res.status(200).send(nonPersistDB[0])
})

router.put('/:requestid/approve', (req, res) => {
  let counter = 0;
  let found = 0
  nonPersistDB[0].map(item => {
    if (item.id === req.params.requestid) {
      found += 1
      res.status(200).send({
        message: `request successfully approved`,
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

router.put('/:requestid/disapprove', (req, res) => {
  let counter = 0;
  let found = 0
  nonPersistDB[0].map(item => {
    if (item.id === req.params.requestid) {
      found += 1
      res.status(200).send({
        message: `request successfully disapproved`,
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

router.put('/:requestid/resolve', (req, res) => {
  let counter = 0;
  let found = 0
  nonPersistDB[0].map(item => {
    if (item.id === req.params.requestid) {
      found += 1
      res.status(200).send({
        message: `request successfully resolved`,
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

export default requestRoute