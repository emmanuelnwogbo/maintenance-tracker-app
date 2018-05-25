import express from 'express';

const router = express.Router()
const userRoute = router


router.post('/signup', (req, res) => {
  res.status(201).send({
    message: `you're signedup`,
    body: req.body
  });
})

router.post('/login', (req, res) => {
  res.status(200).send({
    message: `you're logged in`
  });
})

router.post('/logout', (req, res) => {
  res.status(200).send({
    message: `you're logged out`
  });
})


export default userRoute