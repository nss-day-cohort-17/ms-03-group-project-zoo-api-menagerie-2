'use strict'

const Animal = require('../models/animalsMdl')
const AnimalTrick = require('../models/animalsTricksMdl')
const AnimalsKeeper = require('../models/keepersAnimalsMdl')

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

module.exports.addAnimal = ({ body }, res, next) => {
  Animal.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "So we finally got a new animal." }))
    .catch(err => next(err))
}

module.exports.removeAnimal = ({ params: { id } }, res, next) => {
  // tricks and keepers throught the join table
  AnimalTrick.forge()
    .where({ animal_id: id })
    .destroy()
    .then(() => AnimalsKeeper.forge().where({ animal_id: id }).destroy())
    .then(() => Animal.forge({ id }).destroy())
    .then(() => res.status(202).json({ 'msg': 'animal removed' }))
    .catch(err => next(err))
}

module.exports.updateAnimal = ({ body }, res, next) => {
  Animal.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "updated animal" }))
    .catch(err => next(err))
}
