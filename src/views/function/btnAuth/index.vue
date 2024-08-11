<template>
    <div class="btn-auth">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.BtnAuth') }}</span>
            </div>
            <el-button type="primary" v-btn-auth="'btnAuth:btn1'">按钮一</el-button>
            <el-button type="primary" v-btn-auth="'btnAuth:btn2'">按钮二</el-button>
            <el-button type="primary" v-btn-auth>按钮三</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.btn-auth {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 140px);

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