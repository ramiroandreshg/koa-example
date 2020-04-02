const db = require('./db');
const ValidationError = require('./httpErrors').ValidationError;
const NotFoundError = require('./httpErrors').NotFoundError;

// busines logic operations
const createUser = user => {
  if (db.userExists(user.id)) throw ValidationError('Cannot insert duplicate user id', user.id);
  return db.add(user);
};

const updateUser = (id, user) => {
  if (!db.userExists(id)) throw ValidationError('Cannot update inexistent user id', id);
  return db.update(id, user);
}
const getUsers = () => db.getAll();

const getUser = userId => {
  if (!db.userExists(userId)) throw NotFoundError(`Cannot find user id: ${userId}`);
  return db.getOne(userId);
} 

const deleteUser = userId => {
  if (!db.userExists(userId)) return;
  db.remove(userId);
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser
};
