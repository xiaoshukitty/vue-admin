<template>
    <div class="drag_sort_setting">
        <div class="title">{{ bottomShowTitle }}</div>
        <draggable v-if="bottomShowIcon == 'close'" group="people" animation="500" :list="bottomShowList"
            class="draggable_list" @end="handleOnDragEnd">
            <div class="box" v-for="(item, index) in bottomShowList" :key="index"
                :style="{ opacity: item.show ? '1' : '0.6' }">
                <div style="display: flex;flex-direction: column; justify-content: center; align-items: center;"
                    v-show="item.show">
                    <div class="logo">
                        <div>{{ item.class }}</div>
                        <svg-icon :iconClass="item.icon" />
                        <i :class="iconComputed" @click="handleIconClick(index, item)" />
                    </div>
                    <div class="name">{{ item.title }}</div>
                </div>
                <div style="display: flex;flex-direction: column; justify-content: center; align-items: center;"
                    v-show="!item.show">
                    <div class="border "></div>
                    <span class="name" style="margin-top: 15px">待添加</span>
                </div>
            </div>
        </draggable>
        <div v-else class="iocn_list_bottom">
            <div class="content">
                <div class="box" v-for="(item, index) in bottomShowList" :key="index" v-show="item['is_add'] === 0">
                    <div class="logo">
                        <div>{{ item.class }}</div>
                        <svg-icon :iconClass="item.icon" />
                        <i :class="iconComputed" @click="handleIconClick(index, item)" />
                    </div>
                    <!-- <div>{{ item.name }}</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    props: {
        bottomShowList: {
            type: Array,
            default: () => []
        },
        bottomShowTitle: {
            type: String,
            default: ''
        },
        bottomShowIcon: {
            type: String,
            default: 'add'
        }
    },
    data() {
        return {

        }
    },
    components: {
        draggable
    },
    computed: {
        iconComputed() {
            return this.bottomShowIcon == 'add' ? "el-icon-circle-plus-outline icon" : "el-icon-circle-close icon"
        }
    },
    methods: {
        //拖拽结束事件
        handleOnDragEnd(added, removed) {
            let { newIndex, oldIndex } = added;

        },
        handleIconClick(index, item) {
            this.$emit("iconClick", index, item, this.bottomShowIcon);
        },
    }
}
</script>
<style lang="less" scoped>
.drag_sort_setting {
    .title {
        padding-bottom: 20px;
    }

    .draggable_list {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        padding: 20px;
        background-color: #e5e5e5;
        margin-bottom: 30px;

        .border {
            width: 40px;
            height: 40px;
            border-radius: 5px 5px 5px 5px;
            opacity: 0.8;
            border: 1px dashed #727698;
        }

        .logo {
            position: relative;
            cursor: pointer;

            .icon {
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);
                cursor: pointer;
            }
        }

        .name {
            font-size: 12px;
            margin-top: 12px;
        }
    }

    .iocn_list_bottom {
        margin-bottom: 30px;
    }

    .content {
        display: flex;

        .box {
            margin-right: 40px;

            .logo {
                position: relative;
                cursor: pointer;

                .icon {
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: translate(50%, -50%);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>