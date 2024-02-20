import express from 'express';
import { routerApi } from './routes/index.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola! Soy un nuevo end-point');
});
routerApi(app);

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (!limit || !offset) {
//     res.send('No hay parametros');
//   } else {
//     res.json({
//       limit,
//       offset,
//     });
//   }
// });
// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });
app.listen(port, () => {
  console.log('Mi port: ', port);
});
