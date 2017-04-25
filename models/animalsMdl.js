'use strict'

const { bookshelf } = require('../db/database')
require('./tricksMdl')
require('./typesMdl')

const Animal = bookshelf.Model.extend({
  tableName: 'animals',
  trick: function() { return this.belongsTo('Trick')},
  type: function() { return this.belongsTo('Type')},
  keeper: function() { return this.hasMany('Keeper')}
}, {
  getAllAnimals: function() {
    console.log("Get all called from Animal model")
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Animal', Animal)
