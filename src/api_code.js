/**
 * Created by XINCONAN(xinconan@gmail.com) on 2019/5/15.
 */
const {http:axios} = require('./utils')
const qs = require('querystring')

/**
 * 获取小程序二维码，适用于需要的码数量较少的业务场景。
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/wxacode.createQRCode.html
 * @param accessToken
 * @param path 扫码进入的小程序页面路径
 * @param width 二维码的宽度
 * @returns {AxiosPromise<any>}
 */
exports.createQRCode = function (accessToken, path, width = 430) {
  const params = {
    access_token: accessToken,
    path,
    width,
  }
  return axios.post('https://api.weixin.qq.com/sns/jscode2session', params)
}