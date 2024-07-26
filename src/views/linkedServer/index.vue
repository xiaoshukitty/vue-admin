<template>
    <div class="linkdServer">
        <div class="server-img">
            <img src="../../assets/images/server.png" alt="">
        </div>
        <div class="server-title">
            欢迎体验 VUE-ADMIN
        </div>
        <div class="server-tips" v-if="isShow">
            <el-alert title="地址请求失败，请检查后重试！" type="error">
            </el-alert>
        </div>
        <div class="server-ipt">
            <el-input placeholder="http://127.0.0.1:3000" v-model="serverIpt">
                <template slot="prepend">API地址</template>
                <el-button slot="append" @click="verify">确定</el-button>
            </el-input>
        </div>
        <div class="server-text">
            如何搭建？<span> VUE-ADMIN-API 文档</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            serverIpt: '',
            isShow: false
        }
    },
    created() {
    },
    methods: {
        async verify() {
            if (!this.serverIpt) {
                this.$message.warning('请输入API地址');
                return;
            }
            try {
                const res = await axios.post(this.serverIpt + '/memo/getMemoList');
                this.isShow = false;
                setTimeout(() => {
                    Cookies.set("serverShow", '1');
                    console.log(Cookies.get('last_page_linkedServer'));
                    this.$router.push({
                        path: Cookies.get('last_page_linkedServer') // 解锁之后跳转到锁屏之前的页面
                    });
                }, 1000)

            } catch (err) {
                this.isShow = true;
                console.log('失败');
            }

        },
    }
}
</script>

<style lang="less" scoped>
.linkdServer {


    .server-img {
        margin: 100px auto 10px;
        width: 270px;
        height: 270px;

        img {
            width: 270px;
            height: 270px;
        }
    }

    .server-title {
        text-align: center;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .server-ipt,
    .server-tips {
        margin: 1.25rem auto;
        width: 500px;
    }

    .server-text {
        text-align: center;
        font-size: .875rem;
        line-height: 1.25rem;

        span {
            color: #41b584 !important;
            cursor: pointer;
        }
    }
}
</style>