<template>
    <div class="userManagement">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.UserManagement') }}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.userManagement {
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