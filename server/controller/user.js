const { User } = require('../models/user');
const { setSuccessRes, setFailedRes } = require('../utils/response')
const { HttpException, ParamsException } = require('../utils/exception');
async function register(ctx, next) {
    const { username } = ctx.request.body;
    const res = await User.findOne({ username });
    if (res) {
        ctx.body = setFailedRes('用户名已存在');
    } else {
        await User.create(ctx.request.body);
        ctx.body = setSuccessRes("注册成功");
    }
}

async function login(ctx) {
    // test 逻辑层错误打印
    // try {
    //     console.log('未定义', a)
    // } catch (error) {
    //     console.log(error)
    // }
    const { username, password } = ctx.request.body;
    const res = await User.findOne({ username });
    if (res) {
        const passRes = await User.findOne({ username, password });
        if (passRes) {
            ctx.cookies.set(
                'token', 1,
                {
                  domain: 'localhost',
                  path: '/',
                  httpOnly: false,
                  overwrite: false
                }
            )
            ctx.body = setSuccessRes("登录成功!");
        } else {
            const error = new ParamsException('密码不正确!')
            throw error;
        }
    } else {
        const error = new ParamsException('账号不存在，请先注册账号!')
        throw error;
    }
}
module.exports = { register, login };
