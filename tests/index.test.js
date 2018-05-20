import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

const {
  expect
} = chai

describe('/api/v1/user/auth/user/signin', () => {
  it('should return 200 when a user signs in successfully', done => {
    const user = {
      email: "emma@yahoo.com",
      password: "jaeerymbara"
    }

    chai.request(app).post('/api/v1/user/auth/user/signin').send(user).end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `you've signed in succesfully.`
      })
      done()
    })
  })

  it('should return 403 when inputs are empty', done => {
    const user = {
      email: "",
      password: "jaeerymbara"
    }

    chai.request(app).post('/api/v1/user/auth/user/signin').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `inputs can not be empty`
      })
      done()
    })
  })

  it('should return 403 when inputs contain spaces', done => {
    const user = {
      email: "emma@yahoo .com",
      password: "jaeerymbara"
    }

    chai.request(app).post('/api/v1/user/auth/user/signin').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `spaces are not allowed within your credentials`
      })
      done()
    })
  })

  it('should return 403 when invalid emails are used', done => {
    const user = {
      email: "emmayahoo.com",
      password: "jaeerymbara"
    }

    chai.request(app).post('/api/v1/user/auth/user/signin').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `please make sure your credentials are correct`
      })
      done()
    })
  })
})