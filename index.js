import express from 'express';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as path from 'path';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './README.md'));
});
app.listen(port, () => {
  console.log('Aplicacion ejecutandose en el puerto ' + port);
});
