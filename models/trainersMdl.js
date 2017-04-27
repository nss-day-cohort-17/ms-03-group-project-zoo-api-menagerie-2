'use strict'

const { bookshelf } = require('../db/database');
require('./trainersTricksMdl')
require('./trainersTypesMdl')

const Trainer = bookshelf.Model.extend({
  tableName: 'trainers',
  trick: function(){ return this.belongsToMany('Trick').through('Trainers_Tricks')},
  type: function() { return this.belongsToMany('Type').through('Trainers_Types')}
}, {
  getAllTrainers: function() {
    console.log("Get all called from Trainer model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleTrainer: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
}, {
  dependents: ['trick', 'type']
})

module.exports = Trainer
