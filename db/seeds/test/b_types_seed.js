'use strict';

// const { knex } = require('../../../db/database');
const typeData = require('./types')

let typePromise = (knex) => {
  return typeData.map((type) => {
  return knex('types').insert({type:type.type})
})
}

exports.seed = function(knex, Promise) {
  return knex('types').del()
  .then(function() {
    return Promise.all(typePromise(knex))
  })
}
