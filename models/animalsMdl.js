'use strict'

const { bookshelf } = require('../db/database')

require('./tricksMdl')
require('./typesMdl')
require('./animalsTricksMdl')
require('./keepersAnimalsMdl')

const Animal = bookshelf.Model.extend({
  tableName: 'animals',
  trick: function() { return this.belongsToMany('Trick').through('Animals_Tricks')},
  type: function() { return this.belongsTo('Type')},
  keeper: function() { return this.belongsToMany('Keeper').through('Keepers_Animals')}
}, {
  getAllAnimals: function() {
    console.log("Get all called from Animal model")
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  }
}, {
  dependents: ['trick', 'type', 'keeper']
})

module.exports = bookshelf.model('Animal', Animal)
