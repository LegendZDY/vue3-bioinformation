//路由鉴权，项目中路由能不能被访问的权限控制在这里写
import router from '@/router'
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部的token
import useUserStore from '@/store/modules/user'
import pinia from '@/store'
import setting from './setting'
const userStore = useUserStore(pinia)
//全局路由前置守卫
router.beforeEach(async (to, from, next) => {
  document.title =
    `${setting.title} - ${to.meta.title}` || 'Vue3-Bioinformation'
  // 访问某一个路由之前会触发的一个钩子
  // to: 即将要进入的目标  from: 当前导航正要离开的路由
  // next: 是一个函数，表示放行，如果调用 next() 则会继续向下执行，如果调用 next(false) 则会取消本次导航
  nprogress.start() //开启进度条
  //获取token，判断用户是否登录
  const token = userStore.token
  //获取用户的名字
  const username = userStore.username
  if (token) {
    //如果用户已登录，则判断用户是否有访问权限
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        //如果没有用户信息，则获取用户信息
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          //token失效，退出登录并跳转到登录页面
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    //如果用户未登录，则跳转到登录页面
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  next()
})

//全局路由后置守卫
router.afterEach((to, from) => {
  // console.log('全局路由后置守卫')
})

//第一个问题，任意路由切换实现进度条业务 ---nprogress
//第二个问题，路由鉴权，路由组件访问权限
//用户未登录时，跳转到登录页面，登录成功后，跳转回原页面
//用户登录时，可以访问所有页面，但不能访问登录页面
