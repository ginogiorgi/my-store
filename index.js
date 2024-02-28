import express from 'express';
import { routerApi } from './routes/index.js';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from './middlewares/error.handler.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Aplicacion lanzada en el puerto ', port);
});
