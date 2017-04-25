'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals, getAnimal, getAnimalTricks, getAnimalTrainers, getAnimalKeepers } = require('../controllers/animalsCtrl')
const { getKeepers, getKeeper, getKeepersAnimals } = require('../controllers/keepersCtrl')
const { getTrainers, getTrainer, getTrainerAnimals, getTrainerTricks } = require('../controllers/trainersCtrl')
const { getTrick, getTricks, getTrickAnimals, getTrickTrainers } = require('../controllers/tricksCtrl')
const { getTypes, getTypeId, getTypeAnimals, getTypeTrainers } = require('../controllers/typesCtrl')

router.get('/animals', getAnimals)
router.get('/animals/:id/tricks', getAnimalTricks)
router.get('/animals/:id/trainers', getAnimalTrainers)
router.get('/animals/:id/keepers', getAnimalKeepers)
router.get('/animals/:id', getAnimal)

router.get('/keepers', getKeepers)
router.get('/keepers/:id', getKeeper)
// router.get('/keepers/:id/animals', getKeepersAnimals)

router.get('/trainers', getTrainers)
router.get('/trainers/:id', getTrainer)
// router.get('/trainers/:id/animals', getTrainerAnimals)
// router.get('/trainers/:id/tricks', getTrainerTricks)

router.get('/tricks', getTricks)
router.get('/tricks/:id', getTrick)
// router.get('/tricks/:id/animals', getTrickAnimals)
// router.get('/tricks/:id/trainers', getTrickTrainers)

router.get('/types', getTypes)
// router.get('/types/:id', getTypeId)
// router.get('/types/:id/animals', getTypeAnimals)
// router.get('/types/:id/trainers', getTypeTrainers)

module.exports = router
