<template>
    <div class="test">
        <h2>render函数测试</h2>
        <div>
            全局可用，集中管理，
            过多的判断可以使用 render函数
        </div>
        <!-- template(vue语法糖) => render() => 虚拟dom => 转化真实dom -->
        <customRender :type="type" :text="text" @refresh="refresh">
        </customRender>
    </div>
</template>
  
<script>
import customRender from './components/customRender.vue'
export default {
    data() {
        return {
            type: 'success',
            text: '成功按钮'
        }
    },
    created() {

    },
    methods: {
        refresh(type) {
            alert(type)
        }
    },
    components: {
        customRender
    }
}
</script>
  
<style lang="less" scoped>
.test {}
</style>
  