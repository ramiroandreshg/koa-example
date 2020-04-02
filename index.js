const Koa = require('koa');
const Router = require('@koa/router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const users = require('./usersController');

const app = new Koa();
const router = new Router();

router.get('/', users.getUsers);
router.get('/:id', users.getUser);
router.post('/', users.createUser);
router.put('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);

app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(3000);
