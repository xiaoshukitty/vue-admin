import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Print from 'vue-print-nb';
import VueAMap from 'vue-amap';
import Clipboard from 'clipboard'; //一键复制
import '@/config/directive.js'

Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(Print); //打印

Vue.prototype.Clipboard = Clipboard

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

router.beforeEach((to, from, next) => {
  // console.log('to',to);
  // console.log('from',from);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,
  render: h => h(App) //创建一个App的实例 h => 原生JS中createElement()
}).$mount('#app')

export default vue; //导出 vue 其他位置就能使用 vue