const { authenticatedUser } = require('./oauth')

const router = require('express').Router()



router.post('/',authenticatedUser)


module.exports = router
