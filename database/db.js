const mongoose = require('mongoose');
const connectDb = async() => {
  try {
    mongoose.connect('mongodb+srv://MCeciliaLuna:Cecilia1234@cluster0.o1phzs9.mongodb.net/?retryWrites=true&w=majority')
    console.log('Db conectada')
  } catch (error) {
    console.log(error)
  }
}

connectDb()