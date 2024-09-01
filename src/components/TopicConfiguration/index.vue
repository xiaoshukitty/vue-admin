<template>
    <div class="TopicConfiguration">
        <el-drawer title="主题配置" :visible.sync="themeSwitch" :direction="direction">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
export default {
    props: {
        drawer: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        themeSwitch: {
            get() {
                return this.drawer
            },
            set(val) {
                this.$emit('update:drawer', val)
            }
        }
    },
    data() {
        return {
            direction: 'rtl',
        }
    },

}
</script>

<style></style>