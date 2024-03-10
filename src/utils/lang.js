
import Vue from 'vue';
import VueI18n from 'vue-i18n' //
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'zh-CN', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
    messages: {
        'zh-CN': require('../i18n/zh_CN.js'), // 本地资源文件，中文&英文，
        'en-US': require('../i18n/en_US.js')
    }
});
export default i18n