//路由鉴权，项目中路由能不能被访问的权限控制在这里写
import router from '@/router'
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  // 访问某一个路由之前会触发的一个钩子
  // to: 即将要进入的目标  from: 当前导航正要离开的路由
  // next: 是一个函数，表示放行，如果调用 next() 则会继续向下执行，如果调用 next(false) 则会取消本次导航
  nprogress.start() //开启进度条
  next()
})

//全局路由后置守卫
router.afterEach((to, from) => {
  // console.log('全局路由后置守卫')
})

//第一个问题，任意路由切换实现进度条业务 ---nprogress