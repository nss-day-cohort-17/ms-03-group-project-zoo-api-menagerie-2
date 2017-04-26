'use strict';

const { knex } = require('../../../db/database');
const trainerData = require('./trainers')

let trainerPromise = trainerData.map((trainer) => {
  return knex('trainers').insert({name:trainer.name, age:trainer.age, gender:trainer.gender, bio:trainer.bio, img:trainer.img})
})

exports.seed = function(knex, Promise) {
  return knex('trainers').del()
  .then(function() {
    return Promise.all(trainerPromise)
  })
}
