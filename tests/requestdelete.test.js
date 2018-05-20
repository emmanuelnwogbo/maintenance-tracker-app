import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);

describe(`/api/v1/request/user/:userid/:requestid`, () => {
  it(`should return status 401 if user does not exist`, done => {
    chai.request(app).delete('/api/v1/request/user/9/1').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })

  it(`should return status 404 if userid exists, but requestid doesn't`, done => {
    chai.request(app).delete('/api/v1/request/user/2/19').end((err, res) => {
      expect(res).to.have.status(404)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `found 0 item to delete`
      })
      done()
    })
  })

  it(`should return status 200 if userid exists and requestid does`, done => {
    chai.request(app).delete('/api/v1/request/user/2/1').end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `successfully deleted one item`
      })
      done()
    })
  })
})