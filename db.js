// mock db operations and fake repository
let currentId = 0;
const db = [ { id: 0, name: 'test', lastname: 'user' } ];

const userExists = id => !!db.find(user => user.id === id);

const getUser = id => db.find(user => user.id === id); // pre-condition: userExists(id) === true

const getAll = () => db;

const getOne = id => getUser(id);

const add = user => {
  Object.assign(user, {id: ++currentId});
  db.push(user);
  return user;
};

const update = (id, user) => {
  const currentUser = getUser(id);
  return Object.assign(currentUser, user);
};

const remove = id => {
  const idx = db.findIndex(u => id === u.id);
  db.splice(idx, 1);
}

module.exports = {
  userExists,
  getOne,
  getAll,
  add,
  update,
  remove
};
