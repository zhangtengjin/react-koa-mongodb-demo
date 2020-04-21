const KoaRouter = require('koa-router');
const todo = require('./todo');
const user = require('./user');

const router = new KoaRouter();
router.use('/todo', todo.routes(), todo.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;