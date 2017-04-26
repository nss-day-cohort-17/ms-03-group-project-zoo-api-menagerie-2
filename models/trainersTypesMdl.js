'use strict'

const { bookshelf } = require('../db/database')
require('./trainersMdl')
require('./typesMdl')

const Trainers_Types = bookshelf.Model.extend({
  tableName: 'trainers_types',
  trainers: function() {
    return this.belongsTo('Trainer')
  },
  types: function() {
    return this.belongsTo('Type')
  }
})

module.exports = bookshelf.model('Trainers_Types', Trainers_Types)
