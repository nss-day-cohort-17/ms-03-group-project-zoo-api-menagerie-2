'use strict'

const Trick = require('../models/tricksMdl')

module.exports.getTrick = ({ params: { id } }, res, next) => {
  Trick.getSingleTrick(id)
  .then(Trick => res.status(200).json(Trick))
  .catch(err => next(err))
}

module.exports.getTricks = (req, res, next) => {
  Trick.getAllTricks()
  .then(Tricks => res.status(200).json(Tricks))
  .catch(err => next(err))
}

module.exports.addTrick = ({ body }, res, next) => {
  Trick.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "So we finally got a new Trick." }))
    .catch(err => next(err))
}

module.exports.removeTrick = ({ params: { id } }, res, next) => {
  Trick.forge({ id })
    .destroy()
    .then(() => res.status(202).json({'msg': 'Trick removed'}))
    .catch(err => next(err))
}

module.exports.updateTrick = ({ body }, res, next) => {
  Trick.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "updated Trick" }))
    .catch(err => next(err))
}
