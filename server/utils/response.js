
/**
 * @param message 消息
 * @param data 返回数据
 */
setSuccessRes = (message, data) => {
  return {
    code: 1,
    message: message || '操作成功',
    data: data || null
  }
}

setFailedRes = (message, data) => {
  return {
    code: 0,
    message: message || '操作失败',
    data: data || null
  }
}
module.exports = { setSuccessRes, setFailedRes }
