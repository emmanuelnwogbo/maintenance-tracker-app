import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

const {
  expect
} = chai

describe(`/api/v1/request/:adminid/:requestid`, () => {
  it(`should return status 200 if request exists`, done => {
    chai.request(app).get('/api/v1/request/4/1').end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `found 1 item`
      })
      done()
    })
  })

  it(`should return status 404 if request doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/4/20').end((err, res) => {
      expect(res).to.have.status(404)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `found 0 item`
      })
      done()
    })
  })

  it(`should return status 401 if admin doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/1/1').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })
})

describe(`/api/v1/request/user/:userid/:requestid`, () => {
  it(`should return status 200 if request exists`, done => {
    chai.request(app).get('/api/v1/request/user/1/1').end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `found 1 item`
      })
      done()
    })
  })

  it(`should return status 404 if request doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/user/1/20').end((err, res) => {
      expect(res).to.have.status(404)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `found 0 item`
      })
      done()
    })
  })

  it(`should return status 401 if user doesn't exist`, done => {
    chai.request(app).get('/api/v1/request/user/90/1').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })
})