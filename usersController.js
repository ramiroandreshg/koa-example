const usersService = require('./usersService');

const handleError = (err, ctx) => {
  ctx.status = err.statusCode || err.status || 500;
  ctx.body = { error: err.message };
};

// controller logic to handle requests/response manipulation
const createUser = (ctx, next) => {
  try {
    const user = ctx.request.body;
    ctx.body = usersService.createUser(user);
    next();
  } catch (err) {
    handleError(err, ctx);
  }
};

const updateUser = (ctx, next) => {
  try {
    const user = ctx.request.body;
    const userId = parseInt(ctx.params.id);
    ctx.body = usersService.updateUser(userId, user);
    next();
  } catch (err) {
    handleError(err, ctx);
  }
};

const getUsers = (ctx, next) => {
  try {
    ctx.body = usersService.getUsers();
    next();
  } catch (err) {
    handleError(err, ctx);
  }
};

const getUser = (ctx, next) => {
  try {
    const userId = parseInt(ctx.params.id);
    ctx.body = usersService.getUser(userId);
    next();
  } catch (err) {
    handleError(err, ctx);
  }
};

const deleteUser = (ctx, next) => {
  try {
    const userId = parseInt(ctx.params.id);
    usersService.deleteUser(userId);
    ctx.body = null; // means 204 no-content on koa
    next();
  } catch (err) {
    handleError(err, ctx);
  }
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser
};
