'use strict'

const { bookshelf } = require('../db/database');
require('./keepersMdl')
require('./trainersMdl')
require('./typesMdl')

const Animal = bookshelf.Model.extend({
  tableName: 'animals',
  tricks: function(){ return this.hasMany('Tricks')},
  types: function() { return this.belongsTo('Type').through('Type_Id')}
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
  }
})

module.exports = bookshelf.model('Animal', Animal)
