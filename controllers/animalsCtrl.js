'use strict'

const Animal = require('../models/animal')

module.exports.getAnimal = ({ params: { id } }, res, next) => {
  Animal.getSingleShow(id)
  .then(animal => res.status(200).json(animal))
  .catch(err => next(err))
}

module.exports.getAnimals = (req, res, next) => {
  Animal.fetchAll()
  .then(animals => res.status(200).json(animals))
  .catch(err => next(err))
}

module.exports.getAnimalTricks = ({ params: { id }}, res, next) => {
  Animal.
}

module.exports.getAnimalTrainers = ({ params: { id }}, res, next) => {
  Animal.
}

module.exports.getAnimalKeepers = ({ params: { id }}, res, next) => {
  Animal.
}
