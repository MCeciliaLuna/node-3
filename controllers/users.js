const User = require('../models/users');
const bcrypt = require('bcrypt');

const createUsers = async (req,res) => {
  const {email, nombre, apellido, password} = req.body

  const passwordEncripted = bcrypt.hashSync(password, 10);

  try {
    const newUser = new User({
      email,
      nombre,
      apellido,
      password: passwordEncripted,
    })

    await newUser.save();
    res.json({
      message: 'Usuario creado exitosamente'
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { createUsers }