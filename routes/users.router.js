import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (!limit || !offset) {
    res.send('No hay parametros');
  } else {
    res.json({
      limit,
      offset,
    });
  }
});

export { usersRouter };
