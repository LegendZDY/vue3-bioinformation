//对外暴露的路由配置

export const constantRoutes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: () => import('@/views/login/index.vue'), //路由组件
    meta: {
      title: '登录', //页面标题
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'layout',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/bioinfo',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '生物信息分析',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404', //页面标题
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由', //页面标题
    },
  },
]
