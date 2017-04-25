process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHTTP);

describe('testing Zoo routes:', () => {

  beforeEach( () => {
    return knex.migrate.rollback()
    .then( () => {
      return knex.migrate.latest()
    })
    .then( () => {
      return knex.seed.run()
    });
  });

// test that all these routes work for a get request

// trainers
  describe('"/api/v1/trainers"', () => {
    it('should get all trainers', () => {
      return chai.request(server)
      .get('/api/v1/trainers')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[27].should.have.property('name');
        res.body[27].name.should.equal('Kelsy Cham');
      });
    });
  });

// trainers/id
  describe('"/api/v1/trainers/1"', () => {
    it('should one trainer of id 1', () => {
      return chai.request(server)
      .get('/api/v1/trainers/1')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('Loren Thaim');
      });
    });
  });

// trainers/id/animals
// trainers/id/tricks

// animals
// animals/id
// animals/id/trainers
// animals/id/keepers

// keepers
// keepers/id
// keepers/id/animals

// tricks
// tricks/id
// tricks/id/animals
// tricks/id/trainers

// types
// types/id
// types/id/animals
// types/id/trainers



})
