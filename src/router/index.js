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

console.log('routerList---', routerList)

const routes = [{
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      require: true, //需要验证的
    },
    component: () => import('../views/home')
  },
  {
    path: '/vuex',
    name: 'vuex',
    meta: {
      title: 'vuex',
      require: true,
    },
    component: () => import('../views/vuex')
  }, {
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

const router = new VueRouter({
  routes,
  // mode: "history" 修改成 history 模式，不设置就是默认 hash 模式
})

export default router