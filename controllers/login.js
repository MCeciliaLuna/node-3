const bcrypt = require('bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');

const login = async(req,res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })

  if(!user){
    return res.status(404).json({
      message: "usuario inexistente"
    })
  }

  const token = jwt.sign({ user }, 'comision24i', { expiresIn: '1h' })

  const match = bcrypt.compareSync(password, user.password)

  if (match) {
    return res.status(200).json({
      message: "usuario logueado correctamente",
      token
    })
  } else {
   return res.status(404).json({
    message: "usuario o contraseña incorrectos"
   }) 
  }

  
}

module.exports = { login }