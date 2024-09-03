<template>
    <div class="canvas">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.Canvas') }}</span>
            </div>
            <h2 @click="qriously">
                vue-qriously生成二维码
            </h2>
            <div style="display: flex;">
                <canvas id="myCanvas" width="500" height="300"></canvas>
                <div class="poster_box">
                    <div id="poster" class="poster">
                        <!-- <div class="qrcode" id="qrcode"></div>  jq 生成二维码 -->
                        <div class="qrcode" id="qrcode" ref="qrCodeUrl"></div>
                    </div>
                    <el-button type="primary" @click="qrcode">截图</el-button>
                    <el-button type="primary" @click="downloadIamge">下载</el-button>
                </div>
            </div>
            <!-- 查看二维码 -->

            <div class="look_qrcode">
                <el-dialog title="扫码支付码" :visible.sync="lookQrcodeDialog" width="30%" :show-close="false">
                    <qriously :value="codeUrl" :size="240" />
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="lookQrcodeDialog = false">关 闭</el-button>
                    </span>
                </el-dialog>
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
            imgURLs: '',
            lookQrcodeDialog: false,
            codeUrl: 'bindCode=bobbobsbtvso'
        }
    },
    mounted() {
        this.xianDuan()
    },
    methods: {
        // 下载图片
        downloadIamge() {
            if (this.imgURLs == '') {
                return this.$message.warning('请先截图在下载')
            }
            var fileName = new Date().getTime() + ".png";
            downloadIamgeFun(this.imgURLs, fileName);
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
        // qriously 生成二维码
        qriously() {
            this.lookQrcodeDialog = true;
        },
        // 生成二维码
        qrcode() {
            // qrcodejs2插件 不需要去解决中文乱码，但是 qrcode插件 需要使用 toUtf8 方法去解决中文乱码问题
            var str = '优化qrcode中文乱码';
            document.getElementById("qrcode").innerHTML = ""; //解决点击按钮多次生成二维码的问题
            new QRCode(this.$refs.qrCodeUrl, {
                text: str, // 需要转换为二维码的内容
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
            /** jq 生成*/
            // var width = $("#qrcode").width();
            // var height = $("#qrcode").height();
            // var str = toUtf8("优化qrcode中文乱码");
            // setTimeout(() => {
            //     $("#qrcode").qrcode(
            //         {
            //             render: "canvas", //设置渲染方式
            //             width: width, //设置宽度,默认生成的二维码大小是 256×256
            //             height: height, //设置高度
            //             typeNumber: -1, //计算模式
            //             background: "#ffffff", //背景颜色
            //             foreground: "#000", //前景颜色
            //             correctLevel: 0,
            //             text: str, //设置二维码内容
            //         },
            //     );
            // }, 0);
            // this.capture()
        },
        // canvas 画图
        xianDuan() {
            // 解决 canvas 清晰度
            //  原始尺寸 = 样式尺寸 * 缩放比
            // devicePixelRatio 缩放比

            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            console.log('ctx', ctx);
            // ctx.moveTo(0, 0);      // moveTo(x,y) 定义线条开始坐标
            // ctx.lineTo(200, 0);  // lineTo(x,y) 定义线条结束坐标
            // ctx.lineTo(200,200)
            // ctx.lineTo(0,200)
            // ctx.lineTo(0,0)
            // ctx.arc(95,50,40,0,2*Math.PI);    // Math.PI圆周率π = 3.14 = 180  --- 圆

            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
            ctx.stroke();

            ctx.font = "30px Arial";       // 设置字体及大小
            ctx.fillText("Hello canvas", 10, 150);    // 实心文字
            ctx.strokeText("Hello canvas", 10, 180);  // 空心文字

            // ctx.fill();     // 有填充色
            ctx.stroke();  // 无填充色
        },
    }
}
</script>

<style lang="less" scoped>
.canvas {
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

        .poster_box {
            .poster {
                width: 400px;
                height: 400px;
                background-color: pink;
                position: relative;

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
        }
    }



}
</style>