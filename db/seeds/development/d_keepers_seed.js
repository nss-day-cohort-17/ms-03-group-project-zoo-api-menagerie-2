'use strict';

const { knex } = require('../../../db/database');
const keeperData = require('./keepers')

let keeperPromise = keeperData.map((keeper) => {
  return knex('keepers').insert({name:keeper.name, age:keeper.age, gender:keeper.gender, bio:keeper.bio, img:keeper.img, shift:keeper.shift, animal_id:keeper.animal_id})
})

exports.seed = function(knex, Promise) {
  return knex('keepers').del()
  .then(function() {
    return Promise.all(keeperPromise)
  })
}
