'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals, getAnimal } = require('../controllers/animalsCtrl')
const { getKeepers, getKeeper } = require('../controllers/keepersCtrl')
const { getTrainers, getTrainer } = require('../controllers/trainersCtrl')
const { getTrick, getTricks } = require('../controllers/tricksCtrl')
const { getTypes, getType } = require('../controllers/typesCtrl')

router.get('/animals', getAnimals)
router.get('/animals/:id', getAnimal)

router.get('/keepers', getKeepers)
router.get('/keepers/:id', getKeeper)

router.get('/trainers', getTrainers)
router.get('/trainers/:id', getTrainer)

router.get('/tricks', getTricks)
router.get('/tricks/:id', getTrick)

router.get('/types', getTypes)
router.get('/types/:id', getType)

module.exports = router
