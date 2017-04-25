'use strict';

// const { knex } = require('../../database');
const trickData = require('./tricks')

let trickPromise = (knex) => {
  return trickData.map((trick) => {
  return knex('tricks').insert({name:trick.name})
})
}

exports.seed = function(knex, Promise) {
  return knex('tricks').del()
  .then(function() {
    return Promise.all(trickPromise(knex))
  })
}
