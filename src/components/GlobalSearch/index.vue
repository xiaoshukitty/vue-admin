<template>
    <div class="global">
        <el-dialog :visible.sync="dialogVisible" width="30%" :show-close="false">
            <div class="globalSearch">
                <div class="search">
                    <el-input ref="search" placeholder="搜索文档" prefix-icon="el-icon-search" v-model="search">
                    </el-input>
                </div>
                <div class="content">
                    <div class="empty">没有搜索历史</div>
                </div>
            </div>
            <div class="footer">
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        isSearch: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            search: '',
        }
    },
    computed: {
        dialogVisible: {
            get() {
                return this.isSearch;
            },
            set(val) {
                this.$emit('update:visible', val);
            }
        },
    },
    watch: {
        //监听是否打开，自动聚焦
        dialogVisible(newValue, oldValue) {
            if (newValue) {
                this.$nextTick(() => {
                    this.$refs.search.focus();
                })
            }

        }
    },
    mounted() {

    },

}
</script>

<style lang="less" scoped>
.global {
    .globalSearch {
        padding: 30px 20px;

        .search {}

        .content {
            .empty {
                height: 80px;
                text-align: center;
                line-height: 80px;
                color: #909399;
                font-size: 16px;
            }
        }
    }

    .footer {
        height: 44px;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, .12);

    }

    ::v-deep .el-dialog__wrapper {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }

    ::v-deep .el-dialog__header {
        padding: 0 !important;
    }

    ::v-deep .el-dialog {
        border-radius: 8px;
        background: #fafafa;
        ;
    }

    ::v-deep .el-dialog__body {
        padding: 0 !important;
    }
}
</style>