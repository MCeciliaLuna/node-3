const { response } = require('express');
const express = require('express');
const app = express();
require('./database/db')
const user = require('./routes/users')

const port = 8000;

app.use(express.json());
app.use(express.urlencoded()); //dato como cuando queremos mandar una imagen codificada por ejemplo



app.get('/', (req, res) => {
  response.json({
    messaje: 'Conectado exitosamente'
  })
})

app.use('/user', user)

app.listen(port, () => {
  console.log('aplicación corriendo en puerto ' + port);
})