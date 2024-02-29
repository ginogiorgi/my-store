import express from 'express';
import { ProductService } from '../services/product.service.js';

const productsRouter = express.Router();
const service = new ProductService();

productsRouter.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
});
// ↓ ↓ ↓ Los endpoints especificos van antes que los dinámicos ↓ ↓ ↓
productsRouter.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});
productsRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});
productsRouter.post('/', async (req, res) => {
  const newProduct = await service.create(req.body);

  res.status(201).json(newProduct);
});
productsRouter.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.update(id, req.body);

    res.json(product);
  } catch (error) {
    next(error);
  }
});
productsRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);

    res.json(product);
  } catch (error) {
    next(error);
  }
});
export { productsRouter };
