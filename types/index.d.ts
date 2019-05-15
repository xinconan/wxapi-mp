declare class WxApi {
  constructor(appid: string, secret: string)
  getAccessToken(): object
  code2Session(code: string): object
  createQRCode(accessToken: string, path: string, width?: number): object
}

export default WxApi