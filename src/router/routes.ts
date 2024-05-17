//对外暴露的路由配置

export const constantRoutes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: () => import('@/views/login/index.vue'), //路由组件
    meta: {
      title: '登录', //页面标题
      hidden: true, //是否隐藏路由
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/bioinfo',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '生物信息分析',
          hidden: false,
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
      hidden: true, //是否隐藏路由
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由', //页面标题
      hidden: true, //是否隐藏路由
    },
  },
]
