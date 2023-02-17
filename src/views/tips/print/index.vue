<template>
    <div class="print">
        <!--//需要打印的页面-->
        <div>需要打印的信息</div>
        <div>--------------------------------------------------------------</div>
        <div id="printMe" ref="printContent">
            <table cellspacing="0" style="
                    width: 595px;
                    font-size: 16px;
                    text-align: left;
                    border-collapse: collapse;
                    margin-bottom: 10px;
                  ">
                <caption align="top" style="text-align: left; padding-bottom: 10px">
                    标题
                </caption>
                <tr>
                    <td style="border: 1px solid black">内容</td>
                    <td style="border: 1px solid black">内容</td>
                </tr>
                <tr>
                    <td style="border: 1px solid black">内容</td>
                    <td style="border: 1px solid black">内容</td>
                </tr>
            </table>
        </div>
        <!--//通过按钮来调用-->
        <el-button type="primary" v-print="printObj">打印</el-button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            printObj: {
                id: "printMe",
                popTitle: "信息",
                extraCss: "",
                extraHead: "",
            },
        }
    },
    created() {

    },
    methods: {

    },
}
</script>
  
<style lang="less" scoped>
.container {
    padding: 100px 200px;

    .m5 {
        margin: 5px;
    }
}
</style>
<style>
/* 去掉页眉页脚 */
@page {
    size: auto;
    margin: 0mm;
  }
</style>
<!-- 打印內容不自动换行问题 -->
<style>
  .procedure{
      word-wrap:break-word;
   }
</style>