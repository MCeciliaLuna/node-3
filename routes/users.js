const express = require('express');
const router = express.Router(); //determinar la ruta principal de nuestras peticiones
const { getUsers, createUsers, deleteUser, updateUser, updateAllUser } = require('../controller/users')

router
 .get('/', getUsers)
 .post('/', createUsers)
 .delete('/:id', deleteUser) //los dos puntos setean el parametro de la petición
 .patch('/', updateUser)
 .put('/', updateAllUser) // es exactamente igual al patch pero pasándole todas las propiedades

module.exports = router