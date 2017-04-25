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
