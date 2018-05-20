import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';
import db from '../server/nonPersistDB'

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);

describe('/api/v1/request/user/:userid/:requestid', () => {
  it('should return status 401 if user does not exist', done => {
    chai.request(app).delete('/api/v1/request/user/9/1').end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })
})