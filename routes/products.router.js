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
  const newProduct = service.create(req.body);

  res.status(201).json(newProduct);
});
productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.update(id, req.body);

  res.json(product);
});
productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);

  res.json(product);
});
export { productsRouter };
