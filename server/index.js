import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send([{
    message: 'hello world'
  }]);
})

app.listen(3000, () => {
  return 'listening';
})


export default app;