
const Todo = require('../models/todo');
const successResponse = require('../utils/response');
const toSafeNumber = require('../utils/utils');

async function add(ctx, next) {
    const { userId, content, completed } = ctx.request.body;
    const res = await Todo.create({ userId, content, completed });
    if (res.length !== 0) {
        ctx.body = {
            failed: false,
            message: res
        }
    } else {
        ctx.body = {
            failed: true,
            message: '新增失败'
        }
    }
}

async function fetchList(ctx, next) {
    const { userId, current = 0, pageSize = 10 } = toSafeNumber(ctx.query, ['current', 'pageSize']);
    const total = await Todo.find({ userId });
    console.log(current, pageSize);
    let res = await Todo.find({ userId }).sort({ time: -1 }).skip((current) * pageSize).limit(pageSize);
    if (res instanceof Array && res.length >= 0) {
        ctx.body = successResponse({
            current,
            pageSize,
            total: total.length,
            message: "查询成功",
            content: res,
        });
    } else {
        ctx.body = {
            failed: false,
            message: '无list',
            content: []
        }
    }
}

module.exports = { add, fetchList }
