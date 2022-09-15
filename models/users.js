const { Schema, model } = require('mongoose');

const user = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String
})

module.exports = model('User', user)