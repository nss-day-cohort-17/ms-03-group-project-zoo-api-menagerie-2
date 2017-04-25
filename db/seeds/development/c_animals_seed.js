'use strict';

const { knex } = require('../../../db/database');
const animalData = require('./animals')

let animalPromise = animalData.map((animal) => {
  return knex('animals').insert({name:animal.name, age:animal.age, gender:animal.gender, species:animal.species, img:animal.img, type_id:animal.type_id})
})

exports.seed = function(knex, Promise) {
  return knex('animals').del()
  .then(function() {
    return Promise.all(animalPromise)
  })
}
