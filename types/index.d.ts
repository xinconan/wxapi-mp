declare class WxApi {
  constructor(appid: string, secret: string)
  getAccessToken(): object
  code2Session(code: string): object
  createQRCode(accessToken: string, path: string, width?: number): object
  getQRCode(accessToken: string, path: string, width?: number, autoColor?: boolean, lineColor?: object, isHyaline?: boolean): object
  getUnlimited(accessToken: string, scene: string, page?: string, width?: number, autoColor?: boolean, lineColor?: object, isHyaline?: boolean): object
}

export default WxApi