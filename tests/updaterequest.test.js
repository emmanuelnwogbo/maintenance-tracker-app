import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

const {
  expect
} = chai

describe('/api/v1/request/:adminid/:requestid', () => {
  const request = {
    category: "home appliance",
    nameofobject: "fridge",
    details: "I'm giving you more details so that I can help you help me"
  }

  it(`should return 403 if admin does exist and request exist but inputs are incomplete`, done => {
    const request = {
      status: ""
    }
    chai.request(app).patch('/api/v1/request/4/1').send(request).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `inputs can not be empty`
      })
      done()
    })
  })

  it(`should return 401 if admin does not exist`, done => {
    chai.request(app).patch('/api/v1/request/1/1').send(request).end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })

  it(`should return 404 if admin does exist but request doesn't`, done => {
    chai.request(app).patch('/api/v1/request/4/12').send(request).end((err, res) => {
      expect(res).to.have.status(404)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `no item with such id exists`
      })
      done()
    })
  })

  it(`should return 200 if admin does exist and request exists`, done => {
    chai.request(app).patch('/api/v1/request/4/1').send(request).end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      done()
    })
  })
})

describe('/api/v1/request/user/:userid/:requestid', () => {
  const request = {
    category: "home appliance",
    nameofobject: "fridge",
    details: "I'm giving you more details so that I can help you help me"
  }

  it(`should return 401 if user does not exist`, done => {
    chai.request(app).patch('/api/v1/request/user/4/1').send(request).end((err, res) => {
      expect(res).to.have.status(401)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `user not found`
      })
      done()
    })
  })

  it(`should return 404 if user does exist but request doesn't`, done => {
    chai.request(app).patch('/api/v1/request/user/1/12').send(request).end((err, res) => {
      expect(res).to.have.status(404)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `no item with such id exists`
      })
      done()
    })
  })

  it(`should return 200 if user does exist and request exists`, done => {
    chai.request(app).patch('/api/v1/request/user/1/1').send(request).end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `successfully edited 1 item`
      })
      done()
    })
  })
})