'use strict';

const { knex } = require('../../../db/database');
const trickData = require('./tricks')

let trickPromise = trickData.map((trick) => {
  return knex('tricks').insert({name:trick.name})
})

exports.seed = function(knex, Promise) {
  return knex('tricks').del()
  .then(function() {
    return Promise.all(trickPromise)
  })
}
