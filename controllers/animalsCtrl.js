'use strict'

const Animal = require('../models/animalsMdl')

module.exports.getAnimal = ({ params: { id } }, res, next) => {
  Animal.forge({ id })
    .fetch({ withRelated: ['trick', 'type'], require: true })
    .then(animal => res.status(200).json(animal))
    .catch(err => next(err))
}

module.exports.getAnimals = (req, res, next) => {
  Animal.getAllAnimals()
    .then(animals => res.status(200).json(animals))
    .catch(err => next(err))
}
