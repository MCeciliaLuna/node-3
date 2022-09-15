const bcrypt = require('bcrypt');
const User = require('../models/users')

const login = async(req,res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })

  // const result = bcrypt.compareSync(password)

    console.log(user)
  
    res.json({
      message: "Login concretado"
    })
}

module.exports = { login }