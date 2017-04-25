'use strict';

const { knex } = require('../../../db/database');
const keepersAnimalsData = require('./trainers_tricks')

let keepersAnimalsPromise = keepersAnimalsData.map((res) => {
  return knex('trainers_tricks').insert({keeper_id:res.keeper_id, animal_id:res.animal_id})
})

exports.seed = function(knex, Promise) {
  return knex('trainers_tricks').del()
  .then(function() {
    return Promise.all(keepersAnimalsPromise)
  })
}
