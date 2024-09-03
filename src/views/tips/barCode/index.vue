<template>
    <div class="bar_code">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.BarCode') }}</span>
            </div>
            <barcode :value="barcodeNum" :options="barcode_option"></barcode>
        </el-card>
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
.bar_code {
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
}
</style>