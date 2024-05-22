//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqUserInfo } from '@/api/user'
//引入类型
import type { loginForm, loginResponseDate } from '@/api/user/type'
//引入类型
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//引入路由（常量路由）
import { constantRoutes } from '@/router/routes'
//创建用户相关的小仓库
let useUserStore = defineStore('user', {
  //小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户登录的token
      menuRoutes: constantRoutes, //仓库存储生成的路由
      username: '', //用户名
      avatar: '', //头像
    }
  },
  //异步|逻辑的地方
  actions: {
    async userLogin(data: loginResponseDate) {
      const result = await reqLogin(data)
      //登录成功后，将token存入localStorage
      //登录失败后，提示错误信息
      if (result.code == 200) {
        this.token = result.data.token as string
        //本地存储token，持久化
        SET_TOKEN(result.data.token as string)
        //返回true表示登录成功
        return 'OK'
      } else {
        return Promise.reject(new Error(result.data.message as string))
      }
    },
    //获取用户信息的方法
    async userInfo() {
      //获取用户信息,并将路由和菜单权限更新到仓库中
      const result = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },
  },
  getters: {},
})
//暴露获取小仓库的方法
export default useUserStore
