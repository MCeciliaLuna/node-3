require('dotenv').config();
const mongoose = require('mongoose');


const connnectDB = async() => {
  const url = process.env.DB; 
  try {
    await mongoose.connect(url);
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.error(error)
  }
}

connnectDB()