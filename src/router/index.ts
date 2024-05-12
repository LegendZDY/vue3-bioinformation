//通过vue-router的createRouter方法创建路由实例，并传入配置对象
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

//创建路由实例
const router = createRouter({
  //配置路由规则
  history: createWebHashHistory(),
  routes: constantRoutes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
