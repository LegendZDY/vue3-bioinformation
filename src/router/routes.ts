//对外暴露的路由配置

export const constantRoutes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component: () => import('@/views/login/index.vue'), //路由组件
    meta: {
      title: '登录', //页面标题
      hidden: true, //是否隐藏路由
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: true,
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        name: 'Acl',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/roles',
        name: 'Roles',
        component: () => import('@/views/acl/roles/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Promotion',
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/layout/index.vue'),
    redirect: '/product/trademark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        name: 'Trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        name: 'Role',
        component: () => import('@/views/product/attr/index.vue'),
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'Calendar',
        },
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'Orange',
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
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由', //页面标题
      hidden: true, //是否隐藏路由
      icon: 'DataLine',
    },
  },
]
