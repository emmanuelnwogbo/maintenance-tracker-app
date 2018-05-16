import expect from 'expect.js';
import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const should = chai.should();
chai.use(chaiHttp);

function arrfun() {
  return [1, 2, 3, 4];
}

describe('array', () => {
  it('should have a length of 5', done => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).to.be(5);
    done();
  })
})

describe('arrayfun', () => {
  it('should have a length of 4', done => {
    expect(arrfun().length).to.be(4);
    expect(arrfun()).to.be.an('array');
    done();
  })
})


describe('GET /hello', () => {
  it('should return hello world', done => {
    chai.request(app).get('/hello')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
})