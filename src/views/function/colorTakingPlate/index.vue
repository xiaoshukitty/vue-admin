<template>
    <div class="colorTakingPlate">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.ColorTakingPlate') }}</span>
            </div>
            <div class="color-box">
                <div class="bg-img">
                    <img ref="clorImg" :src="imgURL" :alt="imgURL">
                </div>
                <div class="color-show">
                    <el-input id="copyText" placeholder="展示取的颜色" v-model="iptColor" style="width: 200px;" disabled>
                        <template slot="append">
                            <div @click="copyText(iptColor)" style="cursor: pointer;">
                                复制
                            </div>
                        </template>
                    </el-input>
                    <el-button style="margin: 20px 0; width: 100px;" plain @click="handleColor">点击取色</el-button>
                    <div class="box" :style="'backgroundColor:' + containerBox"></div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgURL: require('../../../assets/images/lockScreenWallpaper/75.jpeg'),
            iptColor: ''
        }
    },
    computed: {
        containerBox() {
            return this.iptColor
        }
    },
    methods: {
        async handleColor() {
            const dropper = new EyeDropper();
            try {
                const result = await dropper.open();
                this.iptColor = result.sRGBHex
            } catch (e) {
                console.log('user cancelled');
            }
        },
        //复制
        copyText(val) {
            const input = document.createElement('input');
            input.value = val;

            // 将输入框添加到页面，但不显示
            document.body.appendChild(input);
            input.select(); // 选择输入框的内容

            // 执行复制操作
            document.execCommand('copy');

            // 清除临时输入框
            document.body.removeChild(input);
            this.$message({
                message: "复制成功",
                type: "success",
            });
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

        .color-box {
            display: flex;

            .bg-img {
                width: 70%;

                img {
                    width: 100%;
                }
            }

            .color-show {
                margin-left: 20px;
                display: flex;
                flex-direction: column;

                .box {
                    box-sizing: border-box;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #ccc;
                }
            }

        }

    }
}
</style>