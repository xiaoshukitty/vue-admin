<template>
  <div class="qr_codr_login">
    <div id="poster" class="poster">
      <div class="qrcode" id="qrcode" ref="qrCodeUrl"></div>
    </div>
    <div class="text">{{$t('qrCodeI18m.ScanningTheCodeToCompleteTheLogin')}}</div>
    <div class="btn">
      <el-button @click="goToBack" plain>{{ $t('qrCodeI18m.BackQrCodeLogin') }}</el-button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  name: "QrCodeLogin",
  data() {
    return {}
  },
  mounted() {
    this.generateQrCode()
  },
  methods: {
    generateQrCode() {
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
    },
    goToBack() {
      this.$emit('toBack', 'login')
    }
  }
}
</script>

<style lang="less" scoped>


.qr_codr_login {
  width: 400px;
  margin: 0 50px;

  .btn {
    padding-bottom: 20px;

    .el-button {
      width: 100%;
      margin-top: 15px;
    }

    /deep/ .el-button {
      margin-left: 0;
    }
  }

  .poster {
    margin: 20px 5px;
    display: flex;
    justify-content: center;
    .qrcode {
      width: 200px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .text{
    margin: 15px 0;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }

}
</style>