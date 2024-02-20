import { productsRouter } from './products.router.js';

function routerApi(app) {
  app.use('/products', productsRouter);
}

export { routerApi };
