
class WxApi{
  constructor(appid, secret) {
    this.appid = appid
    this.secret = secret
  }
}

/**
 * 用于支持对象合并。将对象合并到WxApi.prototype上，使得能够支持扩展
 * Examples:
 * ```
 * WxApi.mixin(require('./src/api_auth'));
 * ```
 * @param {Object} obj 要合并的对象
 */
WxApi.mixin = function (obj) {
  for (let key in obj) {
    if (WxApi.prototype.hasOwnProperty(key)) {
      throw new Error('Don\'t allow override existed prototype method. method: '+ key);
    }
    WxApi.prototype[key] = obj[key];
  }
};

module.exports = WxApi;
