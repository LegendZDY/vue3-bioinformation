//登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}

//登录接口返回数据类型

interface dataType {
  token: string
}

export interface loginResponseDate {
  code: number
  data: dataType
}

//获取用户信息接口返回数据类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}
export interface userResponseDate {
  code: number
  data: string
}
