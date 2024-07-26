import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 自动化引入路由
const moduleFn = require.context('./', false, /\.routers\.js/)
//找到所有 .routers.js 的路由文件
const routerList = moduleFn.keys().reduce((p, v) => {
  let module = moduleFn(v).default;
  if (Array.isArray(module)) {
    p.push(...module);
  } else {
    p.push(module);
  }
  return p;
}, [])

// console.log('routerList---', routerList)

const routes = [{
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      require: true, //需要验证的
    },
    component: () => import('../views/login')
  }, {
    path: '/',
    name: 'layout',
    meta: {
      title: '首页',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [{
      path: '/home',
      component: () => import('@/views/home/children.vue'),
      meta: {
        title: '首页',
        hidden: false,
        icon: 'HomeFilled',
      },
    }],
  },
  {
    path: '/lockscreen',
    name: 'lockscreen',
    meta: {
      title: '锁屏',
      path: '/views/lockscreen'
    },
    component: () => import('@/views/lockscreen'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      path: '/404'
    },
    component: () => import('../views/404/index.vue'),

  }, {
    path: '/linkedServer',
    name: 'linkedServer',
    meta: {
      title: '链接服务',
      path: '/linkedServer'
    },
    component: () => import('../views/linkedServer/index.vue'),

  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试文件',
      require: true,
    },
    component: () => import('../views/test')
  },
  ...routerList
]

// console.log('查看全部路由----', routes);

const router = new VueRouter({
  routes,
  //滚动行为(路由切换)
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     // 如果之前有保存滚动位置，则恢复到之前保存的位置
  //     return savedPosition;
  //   } else {
  //     // 否则，默认滚动到页面顶部
  //     return {
  //       x: 0,
  //       y: 0
  //     };
  //   }
  // }
})

export default router