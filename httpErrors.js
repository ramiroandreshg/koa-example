const ValidationError = message => {
  const err = new Error(message);
  err.status = 400;
  throw err;
};

const NotFoundError = message => {
  const err = new Error(message);
  err.status = 404;
  throw err;
};

module.exports = {
  ValidationError,
  NotFoundError
}
