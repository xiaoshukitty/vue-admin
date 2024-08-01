<template>
    <div v-if="visible" class="context-menu" :style="{ top: `${position.y}px`, left: `${position.x}px` }">
        <ul>
            <li v-for="item in enumList" :key="item.value" @click="handleMenuItemClick(item.lable)">
                <i :class="item.icon" style="font-size: 14px; margin-right: 5px; cursor: pointer;"></i>
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fieldsListEnum } from '@/components/ContextMenu/menu.js';
export default {
    props: {
        routerType: {
            type: String,
        },
    },
    data() {
        return {
            visible: false,
            position: { x: 0, y: 0 },
            enumList: []
        };
    },
    watch: {
        routerType(newValue, oldValue) {
            this.enumList = fieldsListEnum(newValue);
        }
    },
    methods: {
        showMenu(event) {
            event.preventDefault(); // 阻止默认右键菜单
            this.position = { x: event.clientX, y: event.clientY };
            this.visible = true;
        },
        hideMenu() {
            this.visible = false;
        },
        handleClickOutside(event) {
            // 如果点击发生在菜单组件外部，则关闭菜单
            if (!this.$el.contains(event.target)) {
                this.hideMenu();
            }
        },
        handleMenuItemClick(action) {
            this.$emit('menu-item', action);
            this.hideMenu();
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

<style scoped>
.context-menu {
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    z-index: 1000;
}

.context-menu ul {
    list-style: none;
    /* margin: 5px 0; */
    padding: 10px 0;
    background-color: #FFF;
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.context-menu li {
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
}

.context-menu li:hover {
    background-color: #ecf5ff;
    color: #66b1ff;
}
</style>