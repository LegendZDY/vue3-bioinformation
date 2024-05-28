//路由鉴权，项目中路由能不能被访问的权限控制在这里写
import router from '@/router'

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to.meta.roles)
  // console.log(store.getters.roles)
  // if (to.meta.roles && !store.getters.roles.includes(to.meta.roles)) {
  //   next('/403')
  // } else {
  //   next()
  // }
  next()
})

//全局路由后置守卫
