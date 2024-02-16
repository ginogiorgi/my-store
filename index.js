import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en sas');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola! Soy un nuevo end-point');
});
app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});
app.listen(port, () => {
  console.log('Mi port: ', port);
});
