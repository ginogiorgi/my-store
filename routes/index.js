import { productsRouter } from './products.router.js';
import { usersRouter } from './users.router.js';
import { categoriesRouter } from './categories.router.js';

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

export { routerApi };
