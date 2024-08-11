import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Print from 'vue-print-nb';
import VueAMap from 'vue-amap';
import Clipboard from 'clipboard'; //一键复制
import VueQriously from 'vue-qriously'; //生成二维码
// import VueI18n from 'vue-i18n' //国际化
import echarts from 'echarts' //echarts图表
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import particles from 'particles.js' //引入动画粒子
import VueLuckyCanvas from '@lucky-canvas/vue' //抽奖插件
import SlideVerify from 'vue-monoplasty-slide-verify'; //滑块验证
import VueVideoPlayer from 'vue-video-player' //视频播放
import scroll from 'vue-seamless-scroll' // 无缝滚动
import Cookies from 'js-cookie';
import i18n from './utils/lang';
import Router from 'vue-router'

import '@/config/directive.js'
import '@/icons/index' //导入 svg

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(Print); //打印
Vue.use(VueQriously);
// Vue.use(VueI18n)
Vue.use(particles)
Vue.use(VueLuckyCanvas)
Vue.use(SlideVerify)
Vue.use(VueVideoPlayer)
Vue.use(scroll)

//挂载到Vue实例上面
Vue.prototype.Clipboard = Clipboard
Vue.prototype.$echarts = echarts
Vue.prototype.$eventBus = new Vue() // $eventBus 挂在到

// 适配立即调用函数
// (function init(screenRatioByDesign = 16 / 9) {
//   let docEle = document.documentElement
//   function setHtmlFontSize() {
//     var screenRatio = docEle.clientWidth / docEle.clientHeight;
//     var fontSize = (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1) * docEle.clientWidth / 10;
//     docEle.style.fontSize = fontSize.toFixed(3) + "px";
//     console.log(docEle.style.fontSize);
//   }​
//   setHtmlFontSize()​ ;window.addEventListener('resize', setHtmlFontSize)
// })()

VueAMap.initAMapApiLoader({
  key: '077b6622679f6ecf9978a5067dc35ac0', // 高德地图申请的 key
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch',
    "AMap.CitySearch", 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder', 'AMap.Geolocation', 'AMap.MarkerClusterer','AMap.Driving','AMap.LngLat'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
window._AMapSecurityConfig = { // 不绑定部分功能无法使用
  securityJsCode: '06d43ab6caf053af237b0ffd10a124fb', //所申请的安全密钥
}

// 解决地图刷新显示不出来
const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))
// console.log('amapKeys---',amapKeys);
amapKeys.forEach(key => {
  // console.log(key)
  localStorage.removeItem(key)
})

// const i18n = new VueI18n({
//   locale: localStorage.getItem('lang') || 'zh-CN', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
//   messages: {
//     'zh-CN': require('./i18n/zh_CN.js'), // 本地资源文件，中文&英文，
//     'en-US': require('./i18n/en_US.js')
//   }
// });


//自定义进度样式
nprogress.configure({
  easing: "ease", // 动画方式
  speed: 1500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});


/**
 * 解决导航从“/…”取消到“/…”。准备去下个页面，但是还没有实际去到下个页面就取消去到了另一个页面，说明重定向了两次。
 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 定义白名单
const whiteListRouter = ['/port/memorandum', '/port/requestText', '/port/updatePic', '/port/chatWebSocket', '/port/xcxFoods'];
// 路由守卫
router.beforeEach((to, from, next) => {
  // 刚进来就开启进度条
  nprogress.start()
  console.log('路由', to.path);
  //判断是否是锁屏页面
  if (Cookies.get('locking') == '1' && to.path != '/lockscreen') {
    next({
      replace: true,
      path: '/lockscreen'
    })
    nprogress.done()
  }
  if (Cookies.get('locking') == '0' && to.name == 'lockscreen') {
    next();
  }

  //判断是不是白名单的路由
  if (whiteListRouter.includes(to.path)) {
    if (!Cookies.get('serverShow')) {
      next({
        replace: true,
        path: '/linkedServer'
      })
      Cookies.set("last_page_linkedServer", to.path); // 本地存储为开启服务器之前打开的页面以便开启后打开
      nprogress.done()
    } else {
      next()
    }
  }

  if (to.matched.length === 0) { //路由不匹配强制跳转4040
    next('/404')
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let token = sessionStorage.getItem('TOKEN')

  const whiteList = ['/login', '/404'] //设置白名单

  if (token) {
    if (to.path === '/login') {
      next({
        path: '/home'
      })
      // 强制跳转不会经过后置路由守卫，需要手动关闭进度条
      nprogress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({
        path: '/login',
      })
      // 强制跳转不会经过后置路由守卫，需要手动关闭进度条
      nprogress.done()
    }
  }
})
router.afterEach(() => {
  // 路由跳转完毕后关闭进度条
  nprogress.done()
})

Vue.config.productionTip = false

let vue = new Vue({
  router,
  i18n,
  store,
  render: h => h(App) //创建一个App的实例 h => 原生JS中createElement()
}).$mount('#app')


// 动态创建 html 结果来展示页面加载 loading （要写在 app 挂在完毕后）
const appContainer = document.querySelector('#app');
const loadingMask = document.createElement('div');
loadingMask.id = 'loading-mask';
loadingMask.innerHTML = `
  <div class="loading-wrapper">
    <span class="loading-dot loading-dot-spin">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>
  </div>
`
appContainer.appendChild(loadingMask);

export default vue; //导出 vue 其他位置就能使用 vue