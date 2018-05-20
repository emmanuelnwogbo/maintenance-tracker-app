import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);

describe(`/api/v1/user/auth`, () => {
  it(`should return status 200 if admin sign's in successfully`, done => {
    const admin = {
      email: 'emman@yahoo.com',
      password: 'jerrymako'
    }
    chai.request(app).post('/api/v1/user/auth/admin/signin').send(admin).end((err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `you've signed in successfully.`,
      })
      done()
    })
  })

  it(`should return status 403 if login credentials are left out`, done => {
    const admin = {
      email: '',
      password: 'jerrymako'
    }
    chai.request(app).post('/api/v1/user/auth/admin/signin').send(admin).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `inputs can not be empty`,
      })
      done()
    })
  })

  it(`should return status 403 there are spaces between credentials`, done => {
    const admin = {
      email: 'mike@gmail.com',
      password: 'jerry mako'
    }
    chai.request(app).post('/api/v1/user/auth/admin/signin').send(admin).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `spaces are not allowed within your credentials`,
      })
      done()
    })
  })

  it(`should return status 403 if email is not valid`, done => {
    const admin = {
      email: 'mikegmail.com',
      password: 'jerrymako'
    }
    chai.request(app).post('/api/v1/user/auth/admin/signin').send(admin).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `please make sure your credentials are valid`,
      })
      done()
    })
  })
})