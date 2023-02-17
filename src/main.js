import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap'
Vue.use(ElementUI);
Vue.use(VueAMap);

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')