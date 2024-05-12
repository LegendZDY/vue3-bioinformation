//对外暴露的路由配置

export const constantRoutes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: () => import('@/views/login/index.vue'), //路由组件
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
  },
]
