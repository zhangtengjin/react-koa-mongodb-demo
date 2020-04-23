// 不同异常抛出
class HttpException extends Error {
    constructor (msg = '服务器异常', code) {
        super();
        this.msg = msg
        this.code = 0
        this.data = null
    }
}

class ParamsException extends HttpException {
    constructor (msg, code = 3) {
        super()
        this.data = null
        this.code = code;
        this.msg = msg || '参数错误'
    }
}

module.exports = { HttpException, ParamsException }