import express from 'express';
import { faker } from '@faker-js/faker';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
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
productsRouter.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});
productsRouter.get(':id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 2',
    price: 1500,
  });
});
productsRouter.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'created',
    data: body,
  });
});
productsRouter.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: 'update',
    data: body,
    id,
  });
});
productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
});
export { productsRouter };
