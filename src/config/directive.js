import Vue from "vue"
import {
    checkArray
} from '@/common/array';
import store from '@/store/index'

// 自定义指令

// 按钮权限
Vue.directive('display-key', {
    //元素插入的时候 inserted
    inserted(el, binding) {
        console.log('binding---', el)
        let displayKey = binding.value;
        if (displayKey) {
            let hasPermission = checkArray(displayKey)
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el) //没有权限删除元素(有父元素删除该元素)
            }
        } else {
            throw new Error(`need key! Like v-display-key = "'displayKey'"`)
        }
    }
})

// 按钮权限
Vue.directive('btn-auth', {
    inserted(el, binding) {
        updateContent(el, binding)
    },
    update(el, binding) {
        updateContent(el, binding)
    },
})

const updateContent = (el, binding) => {
    let btn = binding.value;
    const authList = store.state.authList;
    if (btn) {
        if (!authList.includes(btn)) {
            // el.parentNode && el.parentNode.removeChild(el) //没有权限删除元素(有父元素删除该元素)
            el.style.display = 'none' //没有权限隐藏元素(有父元素隐藏该元素)
        } else {
            el.style.display = 'block' //没有权限隐藏元素(有父元素隐藏该元素)
        }
    } else {
        el.style.display = 'none' //没有权限隐藏元素(有父元素隐藏该元素)
        // throw new Error(`need key! Like v-btn-auth = "'btn'"`)
    }
}

//主题配置
Vue.directive('header-switch', {
    inserted(el, binding) {
        updateHeaderSwitch(el, binding)
    },
    update(el, binding) {
        updateHeaderSwitch(el, binding)
    },
})

// 修改主题配置
const updateHeaderSwitch = (el, binding) => {
    let themeShow = binding.value;
    const themeDataStore = store.state.themeDataStore;
    if (themeShow) {
        let themeValue = themeDataStore.includes(themeShow);
        if (!themeValue) {
            el.style.display = 'none' //没有权限隐藏元素(有父元素隐藏该元素)
        } else {
            el.style.display = 'block' //没有权限隐藏元素(有父元素隐藏该元素)
        }
    } else {
        el.style.display = 'none' //没有权限隐藏元素(有父元素隐藏该元素)
    }
}