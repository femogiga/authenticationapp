const { getUserById } = require('../controllers/userController.js');
const express = require('express');
const router = express.Router();

router.get('/:id', getUserById);

module.exports = router;
