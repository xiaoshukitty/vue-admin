<template>
    <el-dialog :title="title" top="20vh" width="40%" append-to-body custom-class="scan_pay_code"
        :visible.sync="visibleSortDialog" :close-on-click-modal="false" @open="init">
        <div>
            <div class="container_top">
                <DragSortSetting :bottomShowList="ToSortList" :bottomShowIcon="'close'" @iconClick="handleIconClick" />
            </div>
            <div class="container">
                <div class="content">
                    <div v-for="(item, index) in AllFeatureList" :key="index">
                        <DragSortSetting :bottomShowList="item.children" :bottomShowTitle="item.title"
                            :bottomShowIcon="'add'" :parentIndex="index" @iconClick="handleIconClick" />
                    </div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import DragSortSetting from './DragSortSetting.vue'
import { AllFeatureList, ToSortList } from './icon'
export default {
    props: {
        sortDialog: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            AllFeatureList,
            ToSortList
        }
    },
    components: {
        DragSortSetting
    },
    created() {
        this.initIndexesMap(this.AllFeatureList)
    },
    computed: {
        visibleSortDialog: {
            get() {
                return this.sortDialog
            },
            set(val) {
                this.$emit('update:dialog', val)
            }
        }
    },
    methods: {
        handleIconClick(index, item, bottomShowIcon) {
            if (bottomShowIcon == 'close') {
                item.show = false;
                let { index, childIndex } = this.indexMap[item.id];
                this.AllFeatureList[index].children[childIndex].is_add = 0;
                console.log('this.AllFeatureList---', this.AllFeatureList);
                item.id = null;
            } else {
                if (this.ToSortList.length > 8) {
                    return this.$message.warning('最多八个')
                }
                item.is_add = 1;
                console.log('item', item);
                //  找到当前列表第一个为空的位置 追加
                let emptyIndex = this.ToSortList.findIndex(val => !val.show);
                let emptyItem = this.ToSortList[emptyIndex];

                if (emptyItem) {
                    emptyItem.show = true;
                    emptyItem.icon = item.icon;
                    emptyItem.title = item.title;
                    emptyItem.id = item.id;
                    emptyItem.pid = item.pid;
                }
            }
        },
        // 将所有菜单列表的对应id和它的的位置建立索引映射关系
        initIndexesMap(list) {
            let indexMap = {};
            let index = 0;
            let len = list.length;
            while (index < len) {
                let item = list[index];
                let childIndex = 0;
                if (item.children) {
                    let childLen = item.children.length;
                    while (childIndex < childLen) {
                        let childItem = item.children[childIndex];
                        indexMap[childItem.id] = {
                            index: index,
                            childIndex: childIndex
                        };
                        childIndex++;
                    }
                }
                index++;
            }
            this.indexMap = indexMap;
        },
        init() {

        },
        closeDialog() {
            this.$emit('update:dialog', false)
        }
    }
}
</script>

<style>
.container {
    height: calc(95vh - 277px);
    overflow-y: scroll;
}
</style>