const { response } = require('express');
const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
  response.json({
    messaje: 'Conectado exitosamente'
  })
})

app.listen(port, () => {
  console.log('aplicación corriendo en puerto ' + port);
})