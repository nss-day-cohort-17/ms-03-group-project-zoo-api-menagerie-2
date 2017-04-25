'use strict'

const { bookshelf } = require('../db/database');

const Type = bookshelf.Model.extend({
  tableName: 'types'
}, {
  getAllTypes: function() {
    console.log("Get all called from Type model");
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getSingleType: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => show)
    .catch(err => err)
  }
})

module.exports = Type
