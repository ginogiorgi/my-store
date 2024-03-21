import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.listen(port, () => {
  console.log('Aplicacion ejecutandose en el puerto ' + port);
});
