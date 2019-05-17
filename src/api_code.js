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
  return axios.post('https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode', params)
}

/**
 * 获取小程序码，适用于需要的码数量较少的业务场景。
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/wxacode.get.html
 * @param accessToken
 * @param path
 * @param width
 * @param autoColor
 * @param lineColor
 * @param isHyaline
 * @returns {AxiosPromise<any>}
 */
exports.getQRCode = function (accessToken, path, width = 430, autoColor=false, lineColor={"r":0,"g":0,"b":0}, isHyaline=false) {
  const params = {
    access_token: accessToken,
    path,
    width,
    auto_color: autoColor,
    line_color: lineColor,
    is_hyaline: isHyaline
  }
  return axios.post('https://api.weixin.qq.com/wxa/getwxacode', params)
}

/**
 * 获取小程序码，适用于需要的码数量极多的业务场景。
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/wxacode.getUnlimited.html
 * @param accessToken
 * @param scence
 * @param page
 * @param width
 * @param autoColor
 * @param lineColor
 * @param isHyaline
 * @returns {AxiosPromise<any>}
 */
exports.getUnlimited = function (accessToken, scence, page, width = 430, autoColor=false, lineColor={"r":0,"g":0,"b":0}, isHyaline=false) {
  const params = {
    access_token: accessToken,
    scene,
    path,
    width,
    auto_color: autoColor,
    line_color: lineColor,
    is_hyaline: isHyaline
  }
  return axios.post('https://api.weixin.qq.com/wxa/getwxacodeunlimit', params)
}