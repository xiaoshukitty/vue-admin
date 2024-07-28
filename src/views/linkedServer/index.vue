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
            如何搭建？<span @click="dialogVisible = true"> VUE-ADMIN-API 文档</span>
        </div>
        <el-dialog title="链接服务" :visible.sync="dialogVisible" width="42%" :show-close="false">
            <div class="link-server-dialog">
                <div>
                    <!-- 1：下载项目 <a href="https://github.com/xiaoshukitty/vue-admin"></a> -->
                    1：下载项目 <span @click="goToGithub">地址跳转链接</span>
                </div>
                <div>
                    2：进入 node_server 目录、执行 npm install 安装依赖、执行 nodemon app.js 启动服务器
                </div>
                <div>
                    3：输入启动地址（参考：http://localhost:3000） 到API地址输入框中、点击确定按钮
                </div>
                <div>
                    4：如果API地址输入框中输入地址后，出现地址请求失败，请检查后重试！
                </div>
                <div>
                    5：如果API地址输入框中输入地址后，出现地址请求成功，则解锁成功！则返回到对应的页面
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            serverIpt: '',
            isShow: false,
            dialogVisible: false,
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
        //跳转到 github
        goToGithub(){
            window.open('https://github.com/xiaoshukitty/vue-admin','_blank')
        }
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

    .link-server-dialog {
        font-size: 14px;

        div {
            margin: 5px 0;
            white-space: pre-wrap;
            text-align: justify;
            max-width: 100%;
            span{
                cursor: pointer;
                color: #41b584 !important;
            }
        }
    }
}

/deep/ .el-dialog__body {
    padding-top: 10px !important;
}
</style>