<template>
    <div class="bar_code">
        <barcode :value="barcodeNum" :options="barcode_option"></barcode>
    </div>
</template>
  
<script>

import barcode from "@xkeshi/vue-barcode";
export default {
    data() {
        return {
            barcodeNum: '123456789',
            barcode_option: {
                displayValue: true, //是否默认显示条形码数据
                background: '#fff', //条形码背景颜色
                height: '25px',
                fontSize: '12px',
                lineColor: '#606266',
            },
        }

    },
    components: {
        barcode,
    },
    created() {

    },
    methods: {

    },
}
</script>
  
<style lang="less" scoped>
.bar_code {}
</style>
  