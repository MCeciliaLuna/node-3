const express = require('express');
const router = express.Router();

const { createUsers } = require('../controllers/users')


router
.post('/', createUsers);

module.exports = router;