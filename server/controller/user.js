const { User } = require('../models/user');
const { setSuccessRes, setFailedRes } = require('../utils/response')
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
    const { username, password } = ctx.request.body;
    console.log('body', ctx.request.body)
    const res = await User.findOne({ username });
    if (res) {
        const passRes = await User.findOne({ username, password });
        if (passRes) {
            ctx.body = setSuccessRes("登录成功!");
        } else {
            ctx.body = setFailedRes("密码不正确!");
        }
    } else {
        ctx.body = setFailedRes('账号不存在，请先注册账号!');
    }
}
module.exports = { register, login };
