<template>
    <div class="sliderVerification">
        <el-button type="primary" @click="verification">开始验证</el-button>
        <el-dialog :visible.sync="dialogVisible" width="21%" :before-close="handleClose" :show-close="false">
            <div class="sliderVerification_img">
                <slide-verify ref="slideblock" :w="310" :h="200" @again="onAgain" @fulfilled="onFulfilled"
                    @success="onSuccess" @fail="onFail" :imgs="puzzleImgList" @refresh="onRefresh" :accuracy="accuracy"
                    :slider-text="text"></slide-verify>
            </div>
        </el-dialog>
    </div>
</template>
   
<script>
export default {
    data() {
        return {
            puzzleImgList: [
                require('@/assets/images/avatar1.jpg'),
                require('@/assets/images/avatar2.jpg'),
            ],
            msg: "",
            text: "滑动完成验证",
            // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            accuracy: 1,
            dialogVisible: false,
        };
    },
    created() {
        this.lower();
    },
    methods: {
        verification() {
            this.dialogVisible = true;
        },
        // 验证成功，触发该方法
        onSuccess(times) {
            console.log('111');
            setTimeout(() => {
                this.dialogVisible = false;
                this.$notify({
                    message: '验证成功',
                    type: 'success'
                });
            }, 500)
        },
        onFail() {
            console.log("验证不通过");
            setTimeout(() => {
                this.$notify({
                    message: '验证失败,请重试！',
                    type: 'error'
                });
            }, 500)
        },
        onRefresh() {
            console.log("点击了刷新小图标");
        },
        onFulfilled() {
            console.log("刷新成功啦！");
        },
        onAgain() {
            console.log("检测到非人为操作的哦！");
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
            // 父组件直接可以调用刷新方法
            this.$refs.slideblock.reset();
        },
        handleClose() {
            this.dialogVisible=false;
        },
        lower() {
            console.log("我是home文件的方法");
        },

    }
}
</script>
<style lang="less" scoped>
.sliderVerification {
    padding: 20px;
    .sliderVerification_img {
        display: flex;
        justify-content: center;
    }
}

/deep/ .slide-verify-slider-mask {
    height: 40px !important;
    box-sizing: border-box;
}

/deep/ .container-success .slide-verify-slider-mask-item {
    height: 40px !important;
    box-sizing: border-box;
}

/deep/ .container-active .slide-verify-slider-mask-item {
    height: 40px !important;
    box-sizing: border-box;
}

/deep/ .el-dialog__header {
    padding: 0 !important;
}
</style>