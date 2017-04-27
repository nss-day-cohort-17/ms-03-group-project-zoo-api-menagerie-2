'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals, getAnimal, addAnimal, removeAnimal, updateAnimal } = require('../controllers/animalsCtrl')
const { getKeepers, getKeeper, addKeeper, removeKeeper, updateKeeper } = require('../controllers/keepersCtrl')
const { getTrainers, getTrainer, addTrainer, removeTrainer, updateTrainer } = require('../controllers/trainersCtrl')
const { getTrick, getTricks, addTrick, removeTrick, updateTrick } = require('../controllers/tricksCtrl')
const { getTypes, getType, addType, removeType, updateType } = require('../controllers/typesCtrl')

router.get('/animals', getAnimals)
router.get('/animals/:id', getAnimal)
router.post('/animals/new', addAnimal)
router.delete('/animals/:id', removeAnimal)
router.patch('/animals/update', updateAnimal)

router.get('/keepers', getKeepers)
router.get('/keepers/:id', getKeeper)
router.post('/keepers/new', addKeeper)
router.delete('/keepers/:id', removeKeeper)
router.patch('/keepers/update', updateKeeper)

router.get('/trainers', getTrainers)
router.get('/trainers/:id', getTrainer)
router.post('/trainers/new', addTrainer)
router.delete('/trainers/:id', removeTrainer)
router.patch('/trainers/update', updateTrainer)

router.get('/tricks', getTricks)
router.get('/tricks/:id', getTrick)
router.post('/tricks/new', addTrick)
router.delete('/tricks/:id', removeTrick)
router.patch('/tricks/update', updateTrick)

router.get('/types', getTypes)
router.get('/types/:id', getType)
router.post('/types/new', addType)
router.delete('/types/:id', removeType)
router.patch('/types/update', updateType)

module.exports = router
