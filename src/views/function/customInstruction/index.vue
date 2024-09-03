<template>
    <div class="customInstruction">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.CustomInstruction') }}</span>
            </div>
            <el-button type="primary" v-display-key="'1'">按钮一</el-button>
            <el-button type="primary" v-display-key="'2'">按钮二</el-button>
            <el-button type="primary" v-display-key="'3'">按钮三</el-button>
        </el-card>

    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.customInstruction {
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