import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/verificationCode',
    name: 'verificationCode',
    component: () => import('../views/verificationCode')
  },
  {
    path: '/elMap',
    name: 'elMap',
    component: () => import('../views/elMap')
  },
  {
    path: '/qqMap',
    name: 'qqMap',
    component: () => import('../views/qqMap')
  },
  {
    path: '/drag',
    name: 'drag',
    component: () => import('../views/drag')
  },
  {
    path: '/vuedraggable',
    name: 'vuedraggable',
    component: () => import('../views/drag/vuedraggable')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('../views/tree')
  },
  {
    path: '/virtualList',
    name: 'virtualList',
    component: () => import('../views/virtualList')
  },
  {
    path: '/virtual',
    name: 'virtual',
    component: () => import('../views/virtual')
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('../views/canvas')
  },
  {
    path: '/imgPreview',
    name: 'imgPreview',
    component: () => import('../views/imgPreview')
  },

]

const router = new VueRouter({
  routes,
  // mode: "history" 修改成 history 模式，不设置就是默认 hash 模式
})

export default router
