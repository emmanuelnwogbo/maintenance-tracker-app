import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

const {
  expect
} = chai

describe(`/api/v1/request/:adminid`, () => {
  it(`should return 401 if admin doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/1').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.contain({
        message: `user not found`
      })
      done()
    })
  })

  it(`should return 200 if admin exists`, done => {
    chai.request(app).get('/api/v1/request/4').end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      done()
    })
  })
})

describe(`/api/v1/request/user/:userid`, () => {
  it(`should return 401 if user doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/user/9').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.contain({
        message: `user not found`
      })
      done()
    })
  })

  it(`should return 200 if user exists`, done => {
    chai.request(app).get('/api/v1/request/user/1').end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      done()
    })
  })
})