<template>
    <div class="particles">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.Particles') }}</span>
            </div>
            <div id="particles"></div>
        </el-card>
    </div>

</template>

<script>

export default {
    mounted() {
        let particlesJson = require('../../../utils/particles.json');
        particlesJS('particles', particlesJson,);
        console.log('测试-----测试');
    }
}
</script>

<style lang="less" scoped>
.particles {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 210px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        #particles {
            // position: absolute;
            // width: calc(100% - 220px);
            // height: calc(100vh - 210px);
            // background-repeat: no-repeat;
            // background-size: cover;
            // background-position: 50% 50%;


        }
    }
}

/deep/ .particles-js-canvas-el {
    // width: calc(100% - 220px) !important;
    height: calc(100vh - 210px) !important;
}
</style>