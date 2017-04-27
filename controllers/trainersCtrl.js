'use strict'

const Trainer = require('../models/trainersMdl')
const TrainerTricks = require('../models/trainersTricksMdl')
const TrainerTypes = require('../models/trainersTypesMdl')

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

module.exports.addTrainer = ({ body }, res, next) => {
  Trainer.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "So we finally got a new trainer." }))
    .catch(err => next(err))
}

module.exports.removeTrainer = ({ params: { id } }, res, next) => {
  // tricks and types through the join table
  TrainerTricks.forge().where({ trainer_id: id }).destroy()
    .then(() => TrainerTypes.where({ trainer_id: id }).destroy())
    .then(() => Trainer.forge({ id }).destroy())
    .then(() => res.status(202).json({ 'msg': 'trainer removed' }))
    .catch(err => next(err))
}

module.exports.updateTrainer = ({ body }, res, next) => {
  Trainer.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "updated trainer" }))
    .catch(err => next(err))
}
