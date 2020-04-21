const KoaRouter = require('koa-router');
const { register, login } = require('../controller/user');
const user = new KoaRouter();

user.post('/register', register);
user.post('/login', login);

module.exports = user;