'use strict'

const Animal = require('../models/animalsMdl')

module.exports.getAnimal = ({ params: { id } }, res, next) => {
  console.log('id', id);
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
    .then(() => res.status(201).json({ "msg": "Welcome to the family, brah" }))
    .catch(err => next(err))
}

module.exports.removeAnimal = ({ params: { id } }, res, next) => {
  Animal.forge({ id })
    .destroy()
    .then(show => res.status(202).json(show))
    .catch(err => next(err))
}

module.exports.updateAnimal = ({ body }, res, next) => {
  Animal.forge(body)
    .save()
    .then(() => res.status(201).json({ "msg": "updated" }))
    .catch(err => next(err))
}

module.exports.updateProfile = (req, res) => {
  Animal.findOneById(email[0])
    .then((user) => {
      user.save({
          id: user.get('id'),
          email: user.get('email'),
          password: user.get('password'),
          name: user.get('name'),
          age: user.get('age'),
          phone: user.get('phone'),
          username: user.get('username'),
          bio: user.get('bio'),
          gender: user.get('gender'),
          genderPref: req.body.genderPref,
          pet: req.body.pet,
          smoker: req.body.smoker,
          language: req.body.language,
          tabspace: req.body.tabspace,
          editor: req.body.editor,
          os: req.body.os
        })
        .then((user) => {
          res.redirect('/')
        })
    })
}
