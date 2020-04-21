
const Koa = require('koa')
const { connect } = require('./db')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const router = require('./routers/index');
const app = new Koa();

connect();
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, ()=>console.log('listen on 3001'));