import Vue from "vue"
import {
    checkArray
} from '@/common/array'
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
       
    }
})