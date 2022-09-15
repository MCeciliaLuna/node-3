const mongoose = require('mongoose');
const connnectDB = async() => {
  try {
    await mongoose.connect('mongodb+srv://backandfrontRC24i:backandfrontRC24i@backandfrontrc24i.cor4n9l.mongodb.net/?retryWrites=true&w=majority');
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.error(error)
  }
}

connnectDB()