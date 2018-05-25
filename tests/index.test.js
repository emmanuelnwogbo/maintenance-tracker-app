import chai from 'chai';
import chaiHttp from 'chai-http'

import app from '../server';

const {
  expect
} = chai

const should = chai.should();
chai.use(chaiHttp);