import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);

describe(`/api/v1/request/`, () => {
  it(`should return status 201 if request is successfully created`, done => {
    const request = {
      category: "house appliances",
      nameofobject: 'television',
      details: "I have a problem with the way it sounds when it's in"
    }
    chai.request(app).post('/api/v1/request/').send(request).end((err, res) => {
      expect(res).to.have.status(201)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `request created successfully`,
      })
      done()
    })
  })

  it(`should return status 403 if any input in the request is empty`, done => {
    const request = {
      category: "",
      nameofobject: 'television',
      details: "I have a problem with the way it sounds when it's in"
    }
    chai.request(app).post('/api/v1/request/').send(request).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `inputs can not be empty`,
      })
      done()
    })
  })
})