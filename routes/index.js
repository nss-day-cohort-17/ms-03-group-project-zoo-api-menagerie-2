'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./routes'))

router.get('/', function(req, res) {
  res.json({
    "title": "Menagerie API data",
    "animal-tricks": "<name>.herokuapp.com/api/v1/animals/:id/tricks",
    "animal-trainers": "<name>.herokuapp.com/api/v1/animals/:id/trainers",
    "animal-keepers": "<name>.herokuapp.com/api/v1/animals/:id/keepers",
    "keepers-animals": "<name>.herokuapp.com/api/v1/keepers/:id/animals",
    "trainers-animals": "<name>.herokuapp.com/api/v1/trainers/:id/animals"
    "trainers-tricks": "<name>.herokuapp.com/api/v1/trainers/:id/tricks"
    "tricks-animals": "<name>.herokuapp.com/api/v1/tricks/:id/animals"
    "tricks-trainers": "<name>.herokuapp.com/api/v1/tricks/:id/trainers"
    "types-animals": "<name>.herokuapp.com/api/v1/types/:id/animals"
    "types-trainers": "<name>.herokuapp.com/api/v1/types/:id/trainers"
  })
})

module.exports = router;
