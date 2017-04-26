// process.env.NODE_ENV = 'test';

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
      });
    });
  });

// trainers/id
  // describe('"/api/v1/trainers/1"', () => {
  //   it('should get one trainer of id 1', () => {
  //     return chai.request(server)
  //     .get('/api/v1/trainers/1')
  //     .then( (res) => {
  //       res.should.have.status(200);
  //       res.should.be.json
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('name');
  //       res.body.should.have.property('age');
  //       res.body.should.have.property('bio');
  //       res.body.name.should.equal('Loren Thaim');
  //       res.body.age.should.equal(42);
  //       res.body.bio.should.equal('Reverse-engineered exuding toolset');
  //     });
  //   });
  // });

// trainers/id/animals
// trainers/id/tricks

// animals
  describe('"/api/v1/animals"', () => {
    it('should get all animals', () => {
      return chai.request(server)
      .get('/api/v1/animals')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('species');
        res.body[0].name.should.equal('Wallas');
        res.body[0].species.should.equal('ferret');
      });
    });
  });
// animals/id
// animals/id/trainers
// animals/id/keepers

// keepers
  describe('"/api/v1/keepers', () => {
    it('should get all keepers', () => {
      return chai.request(server)
      .get('/api/v1/keepers')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array')
      })
    })
  })

// keepers/id
// keepers/id/animals

// tricks
  describe('"/api/v1/tricks', () => {
    it('should get all tricks', () => {
      return chai.request(server)
      .get('/api/v1/tricks')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array')
      })
    })
  })
// tricks/id
// tricks/id/animals
// tricks/id/trainers

// types
  describe('"/api/v1/types', () => {
    it('should get all types', () => {
      return chai.request(server)
      .get('/api/v1/types')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array')
      })
    })
  })
// types/id
// types/id/animals
// types/id/trainers


})
