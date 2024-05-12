import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponents from '@/components'
// 引入模板的全局样式
import '@/styles/index.scss'
// 引入路由对象
import router from '@/router'
//引入仓库
import pinia from '@/store'

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus语言包国际化配置
})
// 注册全局组件
app.use(globalComponents)
// 注册路由
app.use(router)
// 注册仓库
app.use(pinia)
// 注册中文语言包

// // 测试代码：测试假的接口能否使用
// import axios from 'axios'
// //登录接口
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })

// 挂载应用挂载到挂载点上
app.mount('#app')
