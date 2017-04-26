'use strict';

const { knex } = require('../../../db/database');
const animalTricksData = require('./animals_tricks')

let animalTricksPromise = animalTricksData.map((res) => {
  return knex('animals_tricks').insert({animal_id:res.animal_id, trick_id:res.trick_id})
})

exports.seed = function(knex, Promise) {
  return knex('animals_tricks').del()
  .then(function() {
    return Promise.all(animalTricksPromise)
  })
}
