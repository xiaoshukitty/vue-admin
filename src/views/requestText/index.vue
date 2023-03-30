<template>
    <div class="requestText">
        <!-- 展示 -->
        <div class="show">
            <h2>展示</h2>
            <div v-for="(item, index) in infoList" :key="index">
                <div>姓名: {{ item.name }}</div>
                <div>年龄: {{ item.age }}</div>
            </div>
        </div>
        <!-- 查询 -->
        <div class="inquire">
            <h2>搜索</h2>
            <div class="flex">
                <el-input v-model="name" placeholder="请输入姓名"></el-input>
                <el-input v-model="age" placeholder="请输入年龄"></el-input>
                <el-button @click="search" type="primary">搜索</el-button>
            </div>
            <div v-for="(item, index) in searchList" :key="index">
                <div>姓名: {{ item.name }}</div>
                <div>年龄: {{ item.age }}</div>
            </div>
        </div>
        <!-- 添加 -->
        <div class="inquire">
            <h2>添加</h2>
            <div class="flex">
                <el-input v-model="name1" placeholder="请输入姓名"></el-input>
                <el-input v-model="age1" placeholder="请输入年龄"></el-input>
                <el-button @click="add" type="primary">添加</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import url from '@/server/url'
import { getJurisdiction, searchList,addList } from '@/server/common'
export default {
    name: "RequestText",
    data() {
        return {
            age: '',
            name: '',
            age1: '',
            name1: '',
            infoList: [],
            searchList: [],
        }
    },
    created() {
        this.getPost()
    },
    methods: {
        async getPost() {
            const res = await getJurisdiction(url.jurisdiction)
            try {
                this.infoList = res.data
            } catch (err) {
                throw new Error("No Data");
            }
        },
        async search() {
            let params = {
                age: this.age,
                name: this.name
            }
            const res = await searchList(params)
            try {
                this.searchList = res.data
            } catch (err) {
                throw new Error("No Data");
            }
        },
        async add() {
            let params = {
                age: this.age1,
                name: this.name1,
            }
            const res = await addList(params)
        },
    }

}
</script>

<style lang="less" scoped>
.requestText {
    .inquire {
        .flex {
            display: flex;
            align-items: center;

            /deep/ .el-input {
                width: 200px;
                margin-right: 20px;
            }
        }
    }
}
</style>