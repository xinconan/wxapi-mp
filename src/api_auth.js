const axios = require('axios')
/**
 * 获取登录凭证
 * @param code wx.login() 生成的
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/auth.code2Session.html
 */
exports.code2Session = function(code) {
  const params = {
    appid: this.appid,
    secret: this.secret,
    js_code: code,
    grant_type: 'authorization_code',
  }
  return axios.get('https://api.weixin.qq.com/sns/jscode2session', { params })
}

/**
 * 获取AccessToken
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/auth.getAccessToken.html
 */
exports.getAccessToken = function() {
  const params = {
    appid: this.appid,
    secret: this.secret,
    grant_type: 'client_credential',
  }
  return axios.get('https://api.weixin.qq.com/cgi-bin/token', { params })
}