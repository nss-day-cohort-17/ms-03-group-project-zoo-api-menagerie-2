'use strict'

const Keeper = require('../models/keepersMdl')
const AnimalsKeeper = require('../models/keepersAnimalsMdl')

module.exports.getKeeper = ({ params: { id } }, res, next) => {
  Keeper.forge({ id })
    .fetch({ withRelated: ['animal'], require: true })
    .then(Keeper => res.status(200).json(Keeper))
    .catch(err => next(err))
}

module.exports.getKeepers = (req, res, next) => {
  Keeper.getAllKeepers()
    .then(Keepers => res.status(200).json(Keepers))
    .catch(err => next(err))
}

module.exports.addKeeper = ({ body }, res, next) => {
  Keeper.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "Welcome to the keepers of the animals" }))
    .catch(err => next(err))
}

module.exports.removeKeeper = ({ params: { id } }, res, next) => {
  // animals through the join table
  AnimalsKeeper.forge().where({ keeper_id: id }).destroy()
    .then(() => Keeper.forge({ id }).destroy())
    .then(() => res.status(202).json({ 'msg': 'keeper removed' }))
    .catch(err => next(err))
}

module.exports.updateKeeper = ({ body }, res, next) => {
  Keeper.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "keeper updated" }))
    .catch(err => next(err))
}
