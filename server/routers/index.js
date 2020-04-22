const KoaRouter = require('koa-router');
const user = require('./user');

const router = new KoaRouter();
router.use('/api/user', user.routes(), user.allowedMethods());

module.exports = router;