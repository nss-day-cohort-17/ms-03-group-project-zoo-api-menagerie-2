'use strict'

const { bookshelf } = require('../db/database');


const Trainer = bookshelf.Model.extend({
  tableName: 'trainers',
  tricks: function(){ return this.belongsToMany('Trick')},
  types: function() { return this.belongsTo('Type')}
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
})

module.exports = bookshelf.model('Trainer', Trainer)
