const controllers = require('../controllers/parser.controller')
const router = require('express').Router()

router.get('/', controllers.startParsing)

module.exports = router