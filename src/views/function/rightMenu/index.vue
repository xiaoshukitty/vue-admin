<template>
    <div class="right-menu">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.VideoDisplay') }}</span>
            </div>
            <div class="right-block" @contextmenu="showContextMenu">
                右键菜单
            </div>
        </el-card>
        <!-- 右键菜单 -->
        <ContextMenu ref="contextMenu" :routerType="routerType" @menu-item="handleMenuItem" />
    </div>
</template>

<script>import ContextMenu from '@/components/ContextMenu'
export default {
    name: 'rightMenu',
    components: {
        ContextMenu
    },
    data() {
        return {
            routerType: '',//传递给 contextMenu 组件用来辨别
        }
    },
    methods: {
        //右键菜单
        showContextMenu(event) {
            this.routerType = 'rightMenu'
            event.preventDefault(); // 阻止默认右键菜单
            // 显示右键菜单
            this.$refs.contextMenu.showMenu(event);
        },
        handleMenuItem(val) {
            this.$message.warning(val);
        }
    }
}
</script>

<style lang="less" scoped>
.right-menu {
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

        .right-block {
            width: 300px;
            height: 150px;
            line-height: 150px;
            text-align: center;
            background-color: #ecf8f3 !important;
            color: #41b584 !important;
            border: 1px solid #41b584 !important;
        }

    }
}
</style>