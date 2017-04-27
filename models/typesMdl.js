'use strict'

const { bookshelf } = require('../db/database')
require('./animalsMdl')
require('./trainersTypesMdl')

const Type = bookshelf.Model.extend({
  tableName: 'types',
  animal: function() { return this.hasMany('Animal')},
  trainer: function() { return this.belongsToMany('Trainer').through('Trainers_Types')}
}, {
  getAllTypes: function() {
    console.log("Get all called from Type model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleType: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
}, {
  dependents: ['animal', 'trainer']
})

module.exports = bookshelf.model('Type', Type)
