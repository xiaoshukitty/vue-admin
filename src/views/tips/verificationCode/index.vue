<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.VerificationCode') }}</span>
            </div>
            验证码
            <div class="container_box">
                <div id="v_yzm" @click="change"></div>
                <el-input class="ipt" v-model="yzmIpt" size='small' @blur="changeBlur"></el-input>
            </div>
        </el-card>
    </div>
</template>

<script>
import { Code } from './verificationCode'
export default {
    data() {
        return {
            yzmCode: '',//验证码
            picture: '',//图片
            yzmIpt: '',//输入框绑定的值
        }
    },
    created() {

    },
    mounted() {
        this.yzmCode = new Code('v_yzm');
        this.picture = this.yzmCode.options.code;
    },
    methods: {
        change() {
            this.picture = this.yzmCode.options.code.substring(
                this.yzmCode.options.code.length - 4
            );
        },
        changeBlur() {
            let yzmNumber = this.yzmCode.options.code;
            if (yzmNumber != this.yzmIpt) {
                this.$message.warning('请输入正确的验证码');
                this.yzmIpt = '';
            } else {
                this.$message.success('验证码正确')
            }
        }
    },
}
</script>

<style lang="less" scoped>
.container {
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

        .container_box {
            display: flex;
            align-items: center;

            .ipt {
                width: 200px;
                margin: 20px;
            }
        }
    }

}
</style>