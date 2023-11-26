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
import VueI18n from 'vue-i18n' //国际化
import echarts from 'echarts' //echarts图表
import nprogress from "nprogress";
import "nprogress/nprogress.css";


import '@/config/directive.js'
import '@/icons/index' //导入 svg

Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(Print); //打印
Vue.use(VueQriously);
Vue.use(VueI18n)


//挂载到Vue实例上面
Vue.prototype.Clipboard = Clipboard
Vue.prototype.$echarts = echarts

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
    "AMap.CitySearch", 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder', 'AMap.Geolocation', 'AMap.MarkerClusterer'
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

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh-CN', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'zh-CN': require('./i18n/zh_CN.js'), // 本地资源文件，中文&英文，
    'en-US': require('./i18n/en_US.js')
  }
});


//自定义进度样式
nprogress.configure({
  easing: "ease", // 动画方式
  speed: 1500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});


// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('to', to);
  // 刚进来就开启进度条
  nprogress.start()
  if (to.matched.length === 0) { //路由不匹配强制跳转4040
    next('/404')
  }
  // console.log('from', from);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let token
  const whiteList = ['/login', '404'] //设置白名单
  if (to.meta.require) { //页面是否需要验证
    if (token) {
      if (to.path === '/login') {
        next('/')
        // 强制跳转不会经过后置路由守卫，需要手动关闭进度条
        nprogress.done()
      } else {
        next()
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login')
        // 强制跳转不会经过后置路由守卫，需要手动关闭进度条
        nprogress.done()
      }
    }
  } else {
    next()
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

export default vue; //导出 vue 其他位置就能使用 vue