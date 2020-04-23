
const Koa = require('koa')
const { connect } = require('./db')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const router = require('./routers/index');
const { HttpException } = require('./utils/exception');
const app = new Koa();

connect();

/**
 * 自定义 middleware（异步函数）
 * 链式调用
 */
// app.use(async (ctx, next) => {
//     console.log('test1')
//     await next();
//     // await next(); // 两次调用 next
//     console.log('test4')
// }).use(async (ctx, next) => {
//     console.log('test3')
//     await next();
// })
// app.use(async (ctx, next) => {
//     console.log('test2')
//     await next()
// })

// 第一版本
// app.use(async (ctx, next) => {
//     console.log('1')
//     await next();
//     console.log('3')
// }).use(async (ctx, next) => {
//     await next();
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log('2')
//         resolve();
//       }, 400);
//     })
// })

// 第二版
// app.use(async (ctx, next) => {
//     console.log('1')
//     // await next();
//     await Promise.resolve(
//         new Promise(resolve => {
//             setTimeout(() => {
//                 console.log('2')
//                 resolve();
//             }, 4000)
//         })
//     )
//     console.log('3')
// })

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
app.on('error', (err, ctx) =>{
    console.error('server error', err)
});

/**
 * 自定义异常抛出
 */
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if (error instanceof HttpException) {
            ctx.body = {
                message: error.msg,
                code: error.code,
                data: error.data
            }
        }
    }
})

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, ()=>console.log('listen on 3001'));