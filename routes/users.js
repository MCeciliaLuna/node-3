const express = require('express');
const router = express.Router(); //determinar la ruta principal de nuestras peticiones
const { getUsers, createUsers } = require('../controller/users')

router
 .get('/', getUsers)
 .post('/', createUsers)
 .delete('/:id', deleteUser) //los dos puntos setean el parametro de la petición

module.exports = router