<template>
    <div class="test">
        <h1>{{ myName }}</h1>
        <el-button class="m5" type="primary" size="small" @click="uploadVuex">mutations 修改 vuex 数据</el-button>
        <el-button class="m5" type="primary" size="small" @click="uploadAysncVuex">actions 异步 vuex 数据(静态)</el-button>

        <h1>{{ num }}</h1>
        <el-button class="m5" type="primary" size="small" @click="updateAdd">持久话存储</el-button>
    </div>
</template>
  
<script>
import {
    mapMutations,
    mapActions,
    mapState
} from "vuex";
export default {
    data() {
        return {

        }
    },
    created() {

    },
    computed: {
        // 方法一
        // getters 时时(计算属性) 获取 vuex 数据
        // myName() {
        //     return this.$store.getters.getMyName; //获取 vuex 中的数据
        // }

        // ------------------
        ...mapState(["myName", "num"]), // 方法二辅助函数
    },
    methods: {
        // mutations 修改
        uploadVuex() {
            this.$store.commit('setMyName', {
                newName: 'xiaoyu'
            })
        },
        // actions 异步修改(静态)
        uploadAysncVuex() {
            this.$store.dispatch('setAsyncMyNameStatic', {
                newName: 'xiaohuan'
            })
        },


        // 链接地址 https://blog.csdn.net/weixin_44705688/article/details/100153446
        //持久化存储
        ...mapMutations(['updateAdd'])
    },
}
</script>
  
<style lang="less" scoped>
.test {}
</style>
  