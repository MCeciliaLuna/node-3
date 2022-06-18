//definir las funcionalidades de cada ruta
const User = require('../model/users')

const getUsers = (req,res) => {
  res.json({
    message: 'Recibió la data del controlador'
  })
}

const createUsers = async(req,res) => {
  const {nombre, dni, edad, email } = req.body;

  try {
    const newUser = new User({ //creación de un nuevo usuario
      nombre,
      dni,
      edad,
      email, //datos que tienen que coincidir con el nombre del modelo
    })
  
    await newUser.save()
  
    console.log(nombre,edad,dni,email);
    res.json({
      message: 'usuario creado exitosamente'
    })
  } catch (error) {
    console.error(error)
  }
}

const deleteUser = async(req, res) =>{
  const { id } = req.params //params manda por url  en POSTMAN y por body es vía body

  try {
    await User.findOneAndDelete(id)
  res.json({
    message: `usuario ${id} eliminado`
  }) //hay que corroborar que reciba el id
}
  catch (error) {
   console.error(error) 
  }
}

module.exports = { getUsers, createUsers }