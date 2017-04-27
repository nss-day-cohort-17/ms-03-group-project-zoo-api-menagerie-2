'use strict'

const { bookshelf } = require('../db/database')
require('./keepersMdl')
require('./animalsMdl')

const Keepers_Animals = bookshelf.Model.extend({
  tableName: 'keepers_animals',
  animals: function() {
    return this.belongsTo('Animal')
  },
  keepers: function() {
    return this.belongsTo('Keeper')
  }
}, {
  dependents: ['animals', 'keepers']
})

module.exports = bookshelf.model('Keepers_Animals', Keepers_Animals)
