'use strict'

const { bookshelf } = require('../db/database')
require('./animalsMdl')
require('./tricksMdl')

const Animals_Tricks = bookshelf.Model.extend({
  tableName: 'animals_tricks'
})

module.exports = bookshelf.model('Animals_Tricks', Animals_Tricks)
