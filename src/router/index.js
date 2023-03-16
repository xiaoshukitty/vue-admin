import Vue from 'vue'
import VueRouter from 'vue-router'
import tips from './tips.routers'
import map from './map.routers'
import commonCopy from './commonCopy.routers'
import methods from './methods.routers'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('../views/home')
  },
  {
    path: '/vuex',
    name: 'vuex',
    meta: {
      title: 'vuex'
    },
    component: () => import('../views/vuex')
  }, {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试文件'
    },
    component: () => import('../views/test')
  },
  ...tips,
  ...map,
  ...commonCopy,
  ...methods
]

const router = new VueRouter({
  routes,
  // mode: "history" 修改成 history 模式，不设置就是默认 hash 模式
})

export default router