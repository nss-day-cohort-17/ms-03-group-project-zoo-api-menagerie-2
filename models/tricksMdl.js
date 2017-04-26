'use strict'

const { bookshelf } = require('../db/database');
require('./animalsMdl')
require('./animalsTricksMdl')
require('./trainersTricksMdl')


const Trick = bookshelf.Model.extend({
  tableName: 'tricks',
  animal: function() { return this.belongsToMany('Animal').through('Animals_Tricks')},
  trainer: function() { return this.belongsToMany('Trainer').through('Trainers_Tricks')}
}, {
  getAllTricks: function() {
    console.log("Get all called from Trick model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleTrick: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Trick', Trick)
