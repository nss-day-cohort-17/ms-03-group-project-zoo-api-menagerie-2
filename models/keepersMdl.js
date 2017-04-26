'use strict'

const { bookshelf } = require('../db/database');
require('./keepersAnimalsMdl')

const Keeper = bookshelf.Model.extend({
  tableName: 'keepers',
  type: function(){ return this.belongsTo('Type')},
  animal: function(){ return this.belongsToMany('Animal').through('Keepers_Animals')},
}, {
  getAllKeepers: function() {
    console.log("Get all called from Keeper model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  }
})

module.exports = Keeper
