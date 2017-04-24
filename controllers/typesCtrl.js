'use strict'

const Type = require('../models/TypesMdl')

module.exports.getType = ({ params: { id } }, res, next) => {
  Type.getSingleType(id)
  .then(Type => res.status(200).json(Type))
  .catch(err => next(err))
}

module.exports.getTypes = (req, res, next) => {
  Type.getAllTypes()
  .then(Types => res.status(200).json(Types))
  .catch(err => next(err))
}
