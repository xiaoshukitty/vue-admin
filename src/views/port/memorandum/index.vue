<template>
    <div class="requestText">
        <!-- 查询 -->
        <div class="container">
            <div class="screen">
                <div class="screee_ipt">
                    <el-date-picker v-model="form.create_date" type="date" placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="screen_btn">
                    <el-button @click="getMemoList" type="primary">搜索</el-button>
                    <el-button @click="addUserInfo" type="primary" plain>添加</el-button>
                    <el-link @click="reset" type="primary">重置</el-link>
                </div>
            </div>
            <div class="table">
                <el-table :data="memorandumList" stripe style="width: 50vw" border v-loading="loading">
                    <el-table-column prop="create_date" label="日期" align="center">
                    </el-table-column>
                    <el-table-column prop="weather" label="天气" align="center">
                    </el-table-column>
                    <el-table-column prop="content" label="记录" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="{row}">
                            <el-link type="primary" class="mr30" @click="updatData(row)">更新</el-link>
                            <el-link type="primary" @click="delUserInfo(row)">删除</el-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <BasePopUp :dialogVisible="dialogVisible" :title="title" :updataInfoVisible="updataInfoVisible"
            :visibleType="visibleType" @update:visible="updateUserList" />
    </div>
</template>

<script>
import { delMemoList, getMemoList } from '@/server/common'
import BasePopUp from './components/BasePopUp.vue'
import { timestampConversion } from '@/utils/index'
export default {
    name: "RequestText",
    data() {
        return {
            memorandumList: [],
            form: {
                create_date: "",
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
        this.getMemoList();
    },
    methods: {
        async getMemoList() {
            let aaa = timestampConversion(this.form.create_date, 1);
            let params = {
                create_date: aaa,
            }
            const res = await getMemoList(params);
            try {
                this.memorandumList = res.data;
            } catch (err) {
                throw new Error('No Data')
            } finally {
                setTimeout(() => {
                    this.loading = false;
                }, 1000)
            }
        },
        reset() {
            this.form = {
                create_date: "",
            }
            this.getMemoList();
        },
        addUserInfo() {
            this.dialogVisible = true;
            this.title = "添加备忘录信息";
            this.visibleType = 'add';
        },
        updateUserList(val) {
            this.dialogVisible = val;
            this.getMemoList()
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
            const res = await delMemoList(params)
            try {
                this.$message.success('删除数据成功')
                this.getMemoList()
            } catch (err) {
                throw new Error("No Data");
            }
        },
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