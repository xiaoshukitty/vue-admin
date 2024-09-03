<template>
    <div class="share">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.Share') }}</span>
            </div>
            <div class="box">
                <div class="url">
                    <span>URL</span>
                    <el-input v-model="URLIpt" placeholder="请输入内容" @input="changeIpt" clearable></el-input>
                </div>
                <div class="qrCode">
                    <span>二维码</span>
                    <div class="poster_box">
                        <div id="poster" class="poster">
                            <div class="qrcode" id="qrcode" ref="qrCodeUrl"></div>
                        </div>
                        <div class="btn">
                            <el-button type="primary" @click="reset">重置</el-button>
                            <el-button type="primary" @click="empty">清空</el-button>
                            <el-button type="primary" @click="downloadIamge">下载</el-button>
                        </div>

                    </div>
                </div>
                <div class="operation"></div>
            </div>
        </el-card>
    </div>
</template>

<script>
import html2canvas from "html2canvas";
import QRCode from "qrcodejs2"
import { downloadIamgeFun, toUtf8 } from '@/utils'
export default {
    data() {
        return {
            URLIpt: '123456',
            imgURLs: '',
            lookQrcodeDialog: false,
        }
    },
    mounted() {
        this.qrcode();
    },
    methods: {
        empty() {
            this.URLIpt = null;
            this.qrcode();
        },
        reset() {
            this.URLIpt = '123456';
            this.qrcode();
        },
        changeIpt() {
            this.qrcode();
        },
        // 下载图片
        downloadIamge() {
            if (this.imgURLs == '') {
                return this.$message.warning('请先截图在下载')
            }
            var fileName = new Date().getTime() + ".png";
            downloadIamgeFun(this.imgURLs, fileName);
        },
        // 生成二维码
        qrcode() {
            // qrcodejs2插件 不需要去解决中文乱码，但是 qrcode插件 需要使用 toUtf8 方法去解决中文乱码问题
            document.getElementById("qrcode").innerHTML = ""; //解决点击按钮多次生成二维码的问题
            new QRCode(this.$refs.qrCodeUrl, {
                text: this.URLIpt, // 需要转换为二维码的内容
                width: 200,
                height: 200,
                colorDark: '#000000',
                colorLight: '#ffffff',
                errorCorrectionLevel: "L",//容错级别
                type: "image/png",//生成的二维码类型
                quality: 0.3,//二维码质量
                margin: 5,//二维码留白边距
                color: {
                    dark: "#666666",//前景色
                    light: "#fff"//背景色
                }
            });
            this.capture()
        },
        // 生成海报
        capture() {
            setTimeout(() => {
                let str = document.querySelector("#poster");
                html2canvas(str, {
                    scale: 2,
                    logging: false,
                    useCORS: true,
                    tainttest: true,
                }).then((canvas) => {
                    this.imgURLs = canvas.toDataURL();
                });
            }, 100);
        },
    }
}
</script>

<style lang="less" scoped>
.share {
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

    .box {
        .url {
            width: 300px;
        }

        span {
            display: block;
            margin-bottom: 8px;
        }

        .qrCode {
            margin-top: 20px;

            .poster_box {
                .poster {
                    padding: 20px;
                    width: 200px;
                    height: 200px;
                    position: relative;
                    border: 1px solid #eee;
                    border-radius: 5px;

                    .qrcode {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 200px;
                        height: 200px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .btn {
                    margin: 10px 0;
                }
            }
        }
    }

}
</style>