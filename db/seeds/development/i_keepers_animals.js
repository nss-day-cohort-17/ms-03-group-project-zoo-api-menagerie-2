'use strict';

const { knex } = require('../../../db/database');
const keepersAnimalsData = require('./keepers_animals')

let keepersAnimalsPromise = keepersAnimalsData.map((res) => {
  return knex('keepers_animals').insert({keeper_id:res.keeper_id, animal_id:res.animal_id})
})

exports.seed = function(knex, Promise) {
  return knex('keepers_animals').del()
  .then(function() {
    return Promise.all(keepersAnimalsPromise)
  })
}
