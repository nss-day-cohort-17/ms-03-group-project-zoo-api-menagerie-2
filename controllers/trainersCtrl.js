'use strict'

const Trainer = require('../models/trainersMdl')

module.exports.getTrainer = ({ params: { id } }, res, next) => {
  Trainer.forge({ id })
    .fetch({ withRelated: ['type', 'trick'], require: true })
  .then(Trainer => res.status(200).json(Trainer))
  .catch(err => next(err))
}

module.exports.getTrainers = (req, res, next) => {
  Trainer.getAllTrainers()
  .then(Trainers => res.status(200).json(Trainers))
  .catch(err => next(err))
}
