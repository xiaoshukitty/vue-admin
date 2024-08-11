<template>
    <div class="btn-auth">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.BtnAuth') }}</span>
            </div>
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