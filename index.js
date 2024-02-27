import express from 'express';
import { routerApi } from './routes/index.js';
import { errorHandler, logErrors } from './middlewares/error.handler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send(
    `
    <h1 style="color:blue;text-align:center">
    Hola mi server en express
    <h1/>
    <p style="color:green">
    Probando cosas!
    </p>
    `,
  );
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Aplicacion lanzada en el puerto ', port);
});
