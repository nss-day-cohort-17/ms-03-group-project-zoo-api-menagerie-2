process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHTTP);
