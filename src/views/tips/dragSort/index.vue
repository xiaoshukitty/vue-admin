<template>
    <div class="drag_sort">
        <el-button @click="diagSort">常用功能</el-button>
        <DragSortComponents :title="'拖动排序'" :sortDialog="sortDialog" @update:dialog="updataDialog" />
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

<style></style>