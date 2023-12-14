import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 自动化引入路由
// const moduleFn = require.context('./', false, /\.routers\.js/)
// //找到所有 .routers.js 的路由文件
// const routerList = moduleFn.keys().reduce((p, v) => {
//   let module = moduleFn(v).default;
//   if (Array.isArray(module)) {
//     p.push(...module);
//   } else {
//     p.push(module);
//   }
//   return p;
// }, [])

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
  }, {
    path: '/tips',
    component: () => import('@/layout/index.vue'),
    name: 'tips',
    meta: {
      title: '组件',
      require: true,
    },
    redirect: '/tips/print', //访问一级路由直接重定向到二级路由的第一个
    children: [{
        path: '/tips/print',
        name: 'print',
        meta: {
          title: '打印'
        },
        component: () => import('../views/tips/print')
      },
      {
        path: '/tips/richText',
        name: 'richText',
        meta: {
          title: '富文本'
        },
        component: () => import('../views/tips/richText')
      },
      {
        path: '/tips/copy',
        name: 'copy',
        meta: {
          title: '复制'
        },
        component: () => import('../views/tips/copy')
      },
      {
        path: '/tips/barCode',
        name: 'barCode',
        meta: {
          title: '条形码'
        },
        component: () => import('../views/tips/barCode')
      },
      {
        path: '/tips/drag',
        name: 'drag',
        meta: {
          title: '原生拖拽'
        },
        component: () => import('../views/tips/drag')
      },
      {
        path: '/tips/vuedraggable',
        name: 'vuedraggable',
        meta: {
          title: '组件拖拽'
        },
        component: () => import('../views/tips/drag/vuedraggable')
      },
      {
        path: '/tips/dragSort',
        name: 'dragSort',
        meta: {
          title: '拖动排序'
        },
        component: () => import('../views/tips/dragSort')
      },
      {
        path: '/tips/verificationCode',
        name: 'verificationCode',
        meta: {
          title: '验证码'
        },
        component: () => import('../views/tips/verificationCode')
      },
      {
        path: '/tips/canvas',
        name: 'canvas',
        meta: {
          title: 'canvas画图'
        },
        component: () => import('../views/tips/canvas')
      },
      {
        path: '/tips/imgPreview',
        name: 'imgPreview',
        meta: {
          title: '图片预览'
        },
        component: () => import('../views/tips/imgPreview')
      },
      {
        path: '/tips/render',
        name: 'render',
        meta: {
          title: 'render函数测试'
        },
        component: () => import('../views/tips/render')
      },
      {
        path: '/tips/echarts',
        name: 'echarts',
        meta: {
          title: '图表'
        },
        component: () => import('../views/tips/echarts')
      },
      {
        path: '/tips/waterfallFlow',
        name: 'waterfallFlow',
        meta: {
          title: '瀑布流'
        },
        component: () => import('../views/tips/waterfallFlow')
      },
      {
        path: '/tips/tree',
        name: 'tree',
        meta: {
          title: '树形结构'
        },
        component: () => import('../views/tips/tree')
      },
      {
        path: '/tips/virtualList',
        name: 'virtualList',
        meta: {
          title: '不固定高度虚拟列表'
        },
        component: () => import('../views/tips/virtualList')
      },
      {
        path: '/tips/virtual',
        name: 'virtual',
        meta: {
          title: '固定高度虚拟列表'
        },
        component: () => import('../views/tips/virtual')

      },

    ]
  },
  {
    path: '/map',
    name: 'map',
    meta: {
      title: '地图',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/map/qqMap',
    children: [{
        path: '/map/elMap',
        name: 'elMap',
        meta: {
          title: '高德地图'
        },
        component: () => import('../views/map/elMap')
      },
      {
        path: '/map/qqMap',
        name: 'qqMap',
        meta: {
          title: 'QQ地图'
        },
        component: () => import('../views/map/qqMap')
      },
    ],
  }, {
    path: '/port',
    name: 'port',
    meta: {
      title: '接口',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/port/memorandum',
    children: [{
      path: '/port/memorandum',
      name: 'memorandum',
      meta: {
        title: '备忘录'
      },
      component: () => import('../views/port/memorandum')
    }, {
      path: '/port/requestText',
      name: 'requestText',
      meta: {
        title: '接口测试'
      },
      component: () => import('../views/port/requestText')
    }, ]
  },
  {
    path: '/function',
    name: 'function',
    meta: {
      title: '功能',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/function/customInstruction',
    children: [{
        path: '/function/customInstruction',
        name: 'customInstruction',
        meta: {
          title: '自定义指令'
        },
        component: () => import('../views/function/customInstruction')
      },
      {
        path: '/function/dateConversion',
        name: 'dateConversion',
        meta: {
          title: '时间转化'
        },
        component: () => import('../views/function/dateConversion')
      },
      {
        path: '/function/tableSearch',
        name: 'tableSearch',
        meta: {
          title: '后台常用模版'
        },
        component: () => import('../views/function/tableSearch')
      },
      {
        path: '/function/methods',
        name: 'methods',
        meta: {
          title: '常用的'
        },
        component: () => import('../views/function/methods'),
      },
      {
        path: '/function/vuex',
        name: 'vuex',
        meta: {
          title: 'vuex',
          require: true,
        },
        component: () => import('../views/function/vuex')
      },
    ]
  },
  {
    path: '/rests',
    name: 'rests',
    meta: {
      title: '其他',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/rests/lottery',
    children: [{
        path: '/rests/lottery',
        name: 'lottery',
        meta: {
          title: '抽奖',
        },
        component: () => import('../views/rests/lottery')
      },
      {
        path: '/rests/sliderVerification',
        name: 'sliderVerification',
        meta: {
          title: '滑块验证',
        },
        component: () => import('../views/rests/sliderVerification')
      },
      {
        path: '/rests/signature',
        name: 'signature',
        meta: {
          title: '签名',
        },
        component: () => import('../views/rests/signature')
      },
      {
        path: '/rests/videoDisplay',
        name: 'videoDisplay',
        meta: {
          title: '视频播放',
        },
        component: () => import('../views/rests/videoDisplay')
      }, ,
      {
        path: '/rests/share',
        name: 'share',
        meta: {
          title: '分享',
        },
        component: () => import('../views/rests/share')
      }, {
        path: '/rests/seamlessRolling',
        name: 'seamlessRolling',
        meta: {
          title: '无缝滚动',
        },
        component: () => import('../views/rests/seamlessRolling')
      }, {
        path: '/rests/notepad',
        name: 'notepad',
        meta: {
          title: '记事本',
        },
        component: () => import('../views/rests/notepad')
      },
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '设置',
      require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/setting/editHeadPortrait',
    children: [{
        path: '/setting/editHeadPortrait',
        name: 'editHeadPortrait',
        meta: {
          title: '修改头像',
        },
        component: () => import('../views/setting/editHeadPortrait')
      },
      {
        path: '/setting/updataPassword',
        name: 'updataPassword',
        meta: {
          title: '修改密码',
        },
        component: () => import('../views/setting/updataPassword')
      },
    ]
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
    component: () => import('../views/404/index.vue'),
    name: '404',
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
  // ...routerList
]

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