export default interface IResponse {
  code: number
  msg: string
  data?: any,
  userid?: string,
  access_token?: string,
}