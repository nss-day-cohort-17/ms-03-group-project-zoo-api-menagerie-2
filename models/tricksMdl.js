'use strict'

const { bookshelf } = require('../db/database');

const Trick = bookshelf.Model.extend({
  tableName: 'tricks'
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
