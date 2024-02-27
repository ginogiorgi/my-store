import express from 'express';
import { ProductService } from '../services/product.service.js';

const productsRouter = express.Router();
const service = new ProductService();

productsRouter.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});
// ↓ ↓ ↓ Los endpoints especificos van antes que los dinámicos ↓ ↓ ↓
productsRouter.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});
productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});
productsRouter.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
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
