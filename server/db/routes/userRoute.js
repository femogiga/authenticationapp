const express = require('express')
const {getUser, getByEmail} = require('../controllers/userController')
const router = express.Router()

router.get('/', getUser)
router.get('/email/:email',getByEmail)



module.exports= router
