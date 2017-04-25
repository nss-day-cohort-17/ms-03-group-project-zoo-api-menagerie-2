'use strict';

const { knex } = require('../../../db/database');
const trainerTricksData = require('./trainers_tricks')

let trainerTricksPromise = trainerTricksData.map((res) => {
  return knex('trainers_tricks').insert({trainer_id:res.trainer_id, trick_id:res.trick_id})
})

exports.seed = function(knex, Promise) {
  return knex('trainers_tricks').del()
  .then(function() {
    return Promise.all(trainerTricksPromise)
  })
}
