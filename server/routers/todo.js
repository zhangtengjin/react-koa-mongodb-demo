const KoaRouter = require('koa-router');
const { add, fetchList } = require('../controller/todo');
const todo = new KoaRouter();

todo.post('/add', add);
todo.get('/fetch', fetchList);

module.exports = todo;