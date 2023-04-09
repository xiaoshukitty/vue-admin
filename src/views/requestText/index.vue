<template>
    <div class="requestText">
        <!-- 查询 -->
        <div class="container">
            <div class="screen">
                <div class="screee_ipt">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                </div>
                <div class="screen_btn">
                    <el-button @click="getUserList" type="primary">搜索</el-button>
                    <el-button @click="addUserInfo" type="primary" plain>添加</el-button>
                    <el-link @click="reset" type="primary">重置</el-link>
                </div>
            </div>
            <div class="table">
                <el-table :data="userList" stripe style="width: 50vw" border v-loading="loading">
                    <el-table-column prop="name" label="姓名" align="center">
                    </el-table-column>
                    <el-table-column prop="age" label="年龄" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="{row}">
                            <el-link type="primary" class="mr30" @click="updatData(row)">更新</el-link>
                            <el-link type="primary" @click="delUserInfo(row)">删除</el-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="page">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" background :page-sizes="[10, 20, 30, 40]" :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper" :total="40">
                </el-pagination>
            </div>
        </div>
        <BasePopUp :dialogVisible="dialogVisible" :title="title" :updataInfoVisible="updataInfoVisible"
            :visibleType="visibleType" @update:visible="updateUserList" />
    </div>
</template>

<script>
import { userList, deleteUserInfo,getMemoList } from '@/server/common'
import BasePopUp from './components/BasePopUp.vue'
export default {
    name: "RequestText",
    data() {
        return {
            age1: '',
            name1: '',
            userList: [],
            form: {
                age: "",
                name: "",
            },
            pageInfo: {
                page: 1,
                pageSize: 10,
            },
            dialogVisible: false,
            title: "",
            updataInfoVisible: {},
            visibleType: "",
            loading: false,
            currentPage: 1
        }
    },
    components: {
        BasePopUp
    },
    created() {
        this.getUserList();
        this.getMemoList();
    },
    methods: {
        async getMemoList(){
            const res = await getMemoList();
            console.log('res0000',res);
        },
        async getUserList() {
            this.loading = true;
            let params = {
                age: this.form.age,
                name: this.form.name,
                page: this.pageInfo.page,
                pageSize: this.pageInfo.pageSize,

            }
            const res = await userList(params)
            try {
                this.userList = res.data
            } catch (err) {
                throw new Error("No Data");
            } finally {
                setTimeout(() => {
                    this.loading = false;
                }, 1000)
            }
        },
        reset() {
            this.form = {
                age: "",
                name: "",
            }
            this.getUserList();
        },
        addUserInfo() {
            this.dialogVisible = true;
            this.title = "添加用户信息";
            this.visibleType = 'add';
        },
        updateUserList(val) {
            this.dialogVisible = val;
            this.getUserList()
        },
        updatData(row) {
            this.dialogVisible = true;
            this.title = "修改用户信息";
            this.updataInfoVisible = row;
            this.visibleType = 'update';
        },
        delUserInfo({ id }) {
            this.$alert('是否删除这条用户信息', '用户信息', {
                confirmButtonText: '确定',
                callback: action => {
                    if (action == 'confirm') {
                        this.confirmDel(id);
                    }
                }
            });
        },
        async confirmDel(id) {
            let params = {
                id: id
            }
            const res = await deleteUserInfo(params)
            try {
                this.$message.success('删除数据成功')
                this.getUserList()
            } catch (err) {
                throw new Error("No Data");
            }
        },
        handleSizeChange() {

        },
        handleCurrentChange() {

        }
    }

}
</script>

<style lang="less" scoped>
.requestText {
    width: 50%;
    padding: 30px;

    .container {

        .screen {
            width: 50vw;
            padding: 30px;
            display: flex;
            justify-content: space-between;
            background-color: #e5e5e5;
            box-sizing: border-box;

            /deep/ .el-input {
                width: 200px;
                margin-right: 20px;
            }

            .screen_btn {
                .el-button {
                    margin-right: 20px;
                }
            }
        }

        .table {
            margin-top: 30px;
        }

        .page {
            margin-top: 20px;
            text-align: center;
        }
    }

    .mr30 {
        margin-right: 30px;
    }

}
</style>