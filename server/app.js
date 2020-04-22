
const Koa = require('koa')
const { connect } = require('./db')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const router = require('./routers/index');
const app = new Koa();

connect();

/**
 * 自定义 middleware（异步函数）
 * 链式调用
 */
app.use(async (ctx, next) => {
    console.log('test1')
    await next();
}).use(async (ctx, next) => {
    console.log('test3')
    await next();
})
app.use(async (ctx, next) => {
    console.log('test2')
    await next()
    // await next(); // 两次调用 next
})

/**
 * 中间件错误捕获
 */
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        ctx.status = error.statusCode || error.status || 500
        ctx.body = error.message
        ctx.app.emit('error', error, ctx)
    }
})

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, ()=>console.log('listen on 3001'));