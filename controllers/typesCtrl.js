'use strict'

const Type = require('../models/typesMdl')

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

module.exports.addType = ({ body }, res, next) => {
  Type.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "So, scientists finally discovered a new Type." }))
    .catch(err => next(err))
}

module.exports.removeType = ({ params: { id } }, res, next) => {
  Type.forge({ id })
    .destroy()
    .then(() => res.status(202).json({'msg': 'Type eradicated'}))
    .catch(err => next(err))
}

module.exports.updateType = ({ body }, res, next) => {
  Type.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "Improved Type" }))
    .catch(err => next(err))
}
