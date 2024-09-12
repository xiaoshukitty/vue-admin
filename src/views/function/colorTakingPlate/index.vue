<template>
    <div class="colorTakingPlate">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.ColorTakingPlate') }}</span>
            </div>
            <el-button @click="handleColor">点击取色</el-button>
            <div>
                <img style="width: 400px;" ref="clorImg" src="../../assets/images/bg.jpg" alt="">
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        async handleColor() {
            const dropper = new EyeDropper();
            try {
                const result = await dropper.open();
                console.log(result);
                // box.style.backgroundColor = label.textContent = result.sRGBHex;
            } catch (e) {
                console.log('user cancelled');
            }
        }
    }
}
</script>

<style lang="less" scoped>
.colorTakingPlate {
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

    }
}
</style>