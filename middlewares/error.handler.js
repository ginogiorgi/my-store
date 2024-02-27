function logErrors(err, req, res, next) {
  console.log('Ejecutando logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Ejecutando errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export { logErrors, errorHandler };
