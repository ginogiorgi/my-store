import express from 'express';

const categoriesRouter = express.Router();

categoriesRouter.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

export { categoriesRouter };
