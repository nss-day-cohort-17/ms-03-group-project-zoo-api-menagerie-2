'use strict'

const { bookshelf } = require('../db/database')
require('./trainersMdl')
require('./tricksMdl')

const Trainers_Tricks = bookshelf.Model.extend({
  tableName: 'trainers_tricks',
  trainers: function() {
    return this.belongsTo('Trainer')
  },
  tricks: function() {
    return this.belongsTo('Trick')
  }
}, {
  dependents: ['trainers', 'tricks']
})

module.exports = bookshelf.model('Trainers_Tricks', Trainers_Tricks)
