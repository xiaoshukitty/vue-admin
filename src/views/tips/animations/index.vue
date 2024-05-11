<template>
    <div class="animations">
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>时间动画</span>
                </div>
                <DigitalAnimation />
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>其他</span>
                </div>
                <Load/>
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>其他</span>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import DigitalAnimation from './components/DigitalAnimation.vue'
import Load from '@/components/Load/index.vue'
export default {
    components: {
        DigitalAnimation,
        Load
    }
}
</script>

<style lang="less" scoped>
.animations {
    display: flex;
    padding: 20px;

    div {
        flex: 1;
        padding-right: 20px;
    }

    .el-card {
        height: 500px;
    }
}
</style>