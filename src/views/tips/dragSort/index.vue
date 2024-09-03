<template>
    <div class="drag_sort">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.DragSort') }}</span>
            </div>
            <el-button @click="diagSort">常用功能</el-button>
            <DragSortComponents :title="'拖动排序'" :sortDialog="sortDialog" @update:dialog="updataDialog" />
        </el-card>
    </div>
</template>

<script>
import DragSortComponents from './components/DragSortComponents.vue'
export default {
    data() {
        return {
            sortDialog: false,
        }
    },
    components: {
        DragSortComponents
    },
    methods: {
        diagSort() {
            this.sortDialog = true;
        },
        updataDialog(val) {
            this.sortDialog = val;
        }
    }
}
</script>

<style lang="less" scoped>
.drag_sort {
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