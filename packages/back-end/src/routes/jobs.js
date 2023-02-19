const controllers = require('../controllers/jobs.controller')
const router = require('express').Router()

router.get('/', controllers.getJobs)

module.exports = router