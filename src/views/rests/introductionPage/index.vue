<template>
    <div class="introduction">
        <el-card class="box-card">
            <div slot="header" class="clearfix" ref="clearfix">
                <span>{{ $t('headerList.Share') }}</span>
            </div>
            <div>
                <el-button type="primary" plain @click="introduction">{{$t('guide.Guide') }}</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        introduction() {
            this.$eventBus.$emit('guide', true);
        }
    }
}
</script>

<style scoped lang="less">
.introduction {
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