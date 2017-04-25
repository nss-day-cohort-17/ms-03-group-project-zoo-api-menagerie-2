'use strict'

const { bookshelf } = require('../db/database');
require('./typesMdl')
require('./tricksMdl')

const Animal = bookshelf.Model.extend({
  tableName: 'animals',
  tricks: function(){ return this.belongsTo('Trick')},
  types: function() { return this.belongsTo('Type')}
}, {
  getAllAnimals: function() {
    console.log("Get all called from Animal model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleAnimal: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  },
  getAnimalTricks: function(id) {
    return this.forge({id})
    .fetch({ withRelated: 'tricks', require: true })
    .then(tricks => tricks)
    .catch(err => err)
  },
  // getAnimalTrainers: function() {

  // },
  // getAnimalKeepers: function() {

  // }
})

module.exports = Animal
