'use strict'

const Keeper = require('../models/KeepersMdl')

module.exports.getKeeper = ({ params: { id } }, res, next) => {
  Keeper.getSingleKeeper(id)
  .then(Keeper => res.status(200).json(Keeper))
  .catch(err => next(err))
}

module.exports.getKeepers = (req, res, next) => {
  Keeper.getAllKeepers()
  .then(Keepers => res.status(200).json(Keepers))
  .catch(err => next(err))
}
