'use strict';

const { knex } = require('../../../db/database');
const trainerTypesData = require('./trainers_types')

let trainerTypesPromise = trainerTypesData.map((res) => {
  return knex('trainers_types').insert({trainer_id:res.trainer_id, type_id:res.type_id})
})

exports.seed = function(knex, Promise) {
  return knex('trainers_types').del()
  .then(function() {
    return Promise.all(trainerTypesPromise)
  })
}
