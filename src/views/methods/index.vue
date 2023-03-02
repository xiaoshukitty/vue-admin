<template>
    <div class="methods">
        <el-container>
            <el-header class="header_fixation">Header</el-header>
            <el-container>
                <el-aside class="aside_left" >
                    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo">
                        <div v-for="item in leftTitileList" :key="item.id">
                            <el-submenu :index="item.id" v-if="item.isFlag">
                                <template slot="title">
                                    <span>{{ item.title }}</span>
                                </template>
                                <div v-for="child in item.children" :key="child.id">
                                    <el-menu-item v-if="!child.isFlag" @click="handleSelect(child)" :index="child.id">{{
                                        child.title
                                    }}</el-menu-item>
                                    <el-submenu v-else :index="child.id">
                                        <template slot="title">{{ child.title }}</template>
                                        <el-menu-item v-for="childItem in child.children" :key="childItem.id"
                                            :index="childItem.id" @click="handleSelect(childItem)">{{ childItem.title
                                            }}</el-menu-item>
                                    </el-submenu>
                                </div>
                            </el-submenu>
                            <el-menu-item :index="item.id" v-else @click="handleSelect(item)">
                                <span>{{ item.title }}</span>
                            </el-menu-item>
                        </div>
                    </el-menu>
                </el-aside>
                <el-main class="main_router">
                    <!-- <router-view></router-view> -->
                    <Note ref="note" :activeIndex.sync="activeIndex" :judge="judge" @activeIndexFun="activeIndexFun"></Note>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
import { leftTitileList } from './utils'
import Note from './components/Note.vue'
export default {
    data() {
        return {
            leftTitileList,
            activeIndex: '1',
            judge: false,
        }
    },
    components: {
        Note
    }, 
    methods: {
        handleSelect(val) {
            if (val.id == this.activeIndex) {
                return
            }
            this.judge = true;
            this.activeIndex = val.id
        },
        activeIndexFun(val) {
            this.activeIndex = val;
        }
    },
}
</script>
  
<style lang="less" scoped>
body {
    margin: 0 !important;
}

.methods {

    .header_fixation {
        position: sticky;
        top: 0;
        left: 0;
        background-color: pink;
    }

    /deep/ .aside_left {
        width: 200px !important;
        overflow-x: auto;
        height: 100%;
        border-right: 1px solid #000;
    }

    /deep/ .el-menu-vertical-demo {
        overflow: auto;
        height: 829px;
        background-color: #fafafa;
    }
}
</style>
  