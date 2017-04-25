'use strict'

const { bookshelf } = require('../db/database');
require('./tricksMdl')
require('./trainersMdl')
require('./typesMdl')

const Keeper = bookshelf.Model.extend({
  tableName: 'keepers',
  animals: function(){ return this.belongsTo('Animal')},
}, {
  getAllKeepers: function() {
    console.log("Get all called from Keeper model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleKeeper: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
})

module.exports = Keeper
