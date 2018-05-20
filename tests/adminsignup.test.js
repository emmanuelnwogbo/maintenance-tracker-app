import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);

describe(`/api/v1/user/auth/admin/signup`, () => {
  it(`should return status 201 if admin is successfully signedup`, done => {
    const admin = {
      firstname: "emmanuel",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "emmanuel",
      confirmpassword: "emmanuel"
    }

    chai.request(app).post('/api/v1/user/auth/admin/signup').send(admin).end((err, res) => {
      expect(res).to.have.status(201)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `you are logged in succesfully`,
      })
      done()
    })
  })

  it(`should return status 403 if some credentials are missing`, done => {
    const admin = {
      firstname: "",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "emmanuel",
      confirmpassword: "emmanuel"
    }

    chai.request(app).post('/api/v1/user/auth/admin/signup').send(admin).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `inputs can not be empty`,
      })
      done()
    })
  })

  it(`should return status 403 if credentials contain spaces`, done => {
    const admin = {
      firstname: "emman nuel",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "emmanuel",
      confirmpassword: "emmanuel"
    }

    chai.request(app).post('/api/v1/user/auth/admin/signup').send(admin).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.include({
        message: `spaces are not allowed within your credentials`,
      })
      done()
    })
  })
})