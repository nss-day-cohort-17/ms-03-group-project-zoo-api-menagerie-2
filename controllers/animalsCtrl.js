'use strict'

const Animal = require('../models/animalsMdl')

module.exports.getAnimal = ({ params: { id } }, res, next) => {
  Animal.getSingleAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch(err => next(err))
}

module.exports.getAnimals = (req, res, next) => {
  Animal.getAllAnimals()
  .then(animals => res.status(200).json(animals))
  .catch(err => next(err))
}

module.exports.getAnimalTricks = ({ params: { id }}, res, next) => {
  Animal.forge({id})
  .fetch({ withRelated: ['tricks'], require: true })
  .then(tricks => res.status(200).json(tricks))
  .catch(err => next(err))
}

module.exports.getAnimalTrainers = ({ params: { id }}, res, next) => {
  Animal.getAnimalTrainers()
  .then(trainers => res.status(200).json(trainers))
  .catch(err => next(err))
}

module.exports.getAnimalKeepers = ({ params: { id }}, res, next) => {
  Animal.getAnimalKeepers()
  .then(keepers => res.status(200).json(keepers))
  .catch(err => next(err))
}
