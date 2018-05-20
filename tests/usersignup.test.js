import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

const {
  expect
} = chai

describe('/api/v1/user/auth/user/signup', () => {
  it('should return 201 when a user is created successfully', done => {
    const user = {
      firstname: "emmanuel",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "mhbfndklewmhwgbj",
      confirmpassword: "mhbfndklewmhwgbj",
    }

    chai.request(app).post('/api/v1/user/auth/user/signup').send(user).end((err, res) => {
      expect(res).to.have.status(201)
      expect(res.body).to.be.an('object')
      expect(res.body).to.contain({
        message: `you've signed up succesfully.`
      })
      done()
    })
  })

  it('should return 403 if any inputs field is empty', done => {
    const user = {
      firstname: "",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "mhbfndklewmhwgbj",
      confirmpassword: "mhbfndklewmhwgbj",
    }

    chai.request(app).post('/api/v1/user/auth/user/signup').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.contain({
        message: `inputs can not be empty`
      })
      done()
    })
  })

  it('should return 403 if any inputs have spaces in them', done => {
    const user = {
      firstname: "emma nule",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "mhbfndklewmhwgbj",
      confirmpassword: "mhbfndklewmhwgbj",
    }

    chai.request(app).post('/api/v1/user/auth/user/signup').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.contain({
        message: `spaces are not allowed within your credentials`
      })
      done()
    })
  })

  it('should return 403 if email is not valid', done => {
    const user = {
      firstname: "emmanule",
      lastname: "nwogbo",
      email: "emmaahoo.com",
      password: "mhbfndklewmhwgbj",
      confirmpassword: "mhbfndklewmhwgbj",
    }

    chai.request(app).post('/api/v1/user/auth/user/signup').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.contain({
        message: `please make sure your credentials are correct`
      })
      done()
    })
  })

  it(`should return 403 if password and confirmpassword don't match`, done => {
    const user = {
      firstname: "emmanule",
      lastname: "nwogbo",
      email: "emma@yahoo.com",
      password: "mhbfndklwgbj",
      confirmpassword: "mhbfndklewmhwgbj",
    }

    chai.request(app).post('/api/v1/user/auth/user/signup').send(user).end((err, res) => {
      expect(res).to.have.status(403)
      expect(res.body).to.be.an('object')
      expect(res.body).to.contain({
        message: `please make sure your credentials are correct`
      })
      done()
    })
  })
})