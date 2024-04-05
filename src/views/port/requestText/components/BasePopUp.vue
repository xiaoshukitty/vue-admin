<template>
    <el-dialog :title="title" :visible.sync="dialogOrder" width="30%" :append-to-body="true" :close-on-click-modal="true">
        <div class="pop_up">
            <div class="container">
                <div class="w80">请输入用户名称</div>
                <div>
                    <el-input v-model="form.userName" placeholder="请输入姓名"></el-input>
                </div>
            </div>
            <div class="container">
                <div class="w80">请输入用户年龄</div>
                <div>
                    <el-input v-model="form.userAge" placeholder="请输入年龄"></el-input>
                </div>
            </div>
            <div class="btn">
                <el-button @click="operationUserInfo" type="primary">{{ isShow ? '添加' : '更新' }}</el-button>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import { addList, updataUserInfo } from '@/server/common'
export default {
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        updataInfoVisible: {
            type: Object,
            default: () => { }
        },
        visibleType: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            form: {
                userName: "",
                userAge: "",
                id: ""
            }
        }
    },
    watch: {
        updataInfoVisible(newValue) {
            const { name, age, id } = newValue;
            this.form = {
                userName: name,
                userAge: age,
                id: id
            }
        }
    },
    computed: {
        dialogOrder: {
            get() {
                console.log('dialogVisible',dialogVisible);
                return this.dialogVisible;
            },
            set(val) {
                this.$emit('update:visible', val);
            }
        },
        isShow() {
            return this.visibleType == 'add' ? true : false
        }
    },
    methods: {
        init() {
            this.form = {
                userName: "",
                userAge: "",
            }
        },
        operationUserInfo() {
            this.isShow ? this.addUserInfo() : this.updateUserInfo();
        },
        async addUserInfo() {
            let params = {
                age: this.form.userAge,
                name: this.form.userName,
            }
            const res = await addList(params)
            try {
                this.$message.success('添加用户成功')
                setTimeout(() => {
                    this.$emit('update:visible', false)
                    this.init();
                }, 500)
            } catch {
                throw new Error("No Data");
            }
        },
        async updateUserInfo() {
            console.log('更新');
            let params = {
                age: this.form.userAge,
                name: this.form.userName,
                id: this.form.id
            }
            const res = await updataUserInfo(params)
            try {
                this.$message.success('甜心用户数据成功')
                setTimeout(() => {
                    this.$emit('update:visible', false)
                }, 500)
            } catch {
                throw new Error("No Data");
            }
        }
    }
}
</script>
<style lang="less" scoped>
.pop_up {
    .container {
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .w80 {
            width: 100px;
            margin-right: 30px;
        }
    }

    .btn {
        margin-top: 20px;
        text-align: right;
    }
}

/deep/ .el-dialog__header {
    background-color: #f7f8fa;
}
</style>