//进行axios二次封装，统一处理请求头和错误处理
import axios from 'axios'
import { ElMessage } from 'element-plus'
//引入用户相关的仓库
import useUserStore from '@/store/modules/user'
//第一步：创建axios实例，使用create方法，可以配置基础的请求地址和超时时间
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
})

//第二步：请求拦截器，在请求发起前做一些处理，比如设置请求头
request.interceptors.request.use((config) => {
  //获取用户相关小仓库内部的token,登录成功后携带给服务器
  const userStore = useUserStore()
  const token = userStore.token

  if (token) {
    config.headers.token = token
  }
  // 设置请求头, 给服务器端携带公共参数
  // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  return config
})
//第三步：响应拦截器，在请求响应后做一些处理，比如错误处理
request.interceptors.response.use(
  (response) => {
    // 响应数据处理
    return response.data
  },
  (error) => {
    // 响应错误处理,处理http网络错误，超时，服务器错误等
    const message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token失效，请重新登录'
        break
      case 403:
        message = '没有权限访问'
        break
      case 404:
        message = '请求的资源不存在'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '请求失败，请稍后再试'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

//对外暴露
export default request
