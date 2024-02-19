import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola! Soy un nuevo end-point');
});
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});
// ↓ ↓ ↓ Los endpoints especificos van antes que los dinámicos ↓ ↓ ↓
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1500,
  });
});
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (!limit || !offset) {
    res.send('No hay parametros');
  } else {
    res.json({
      limit,
      offset,
    });
  }
});
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});
app.listen(port, () => {
  console.log('Mi port: ', port);
});
