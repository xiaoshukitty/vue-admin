<template>
    <div class="setting">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.UpdatePassword') }}</span>
            </div>
            <el-form ref="userForm" :model="userForm" :rules="rules" label-width="180px" style="width: 480px;">
                <el-form-item :label="$t('loginI18n.UserName') + ':'" prop="username">
                    <el-input disabled v-model="userForm.username"></el-input>
                </el-form-item>
                <el-form-item :label="$t('loginI18n.PassWord') + ':'" prop="password">
                    <el-input v-model="userForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item :label="$t('signInI18n.ConfirmPassword') + ':'" prop="confirmPassword">
                    <el-input v-model="userForm.confirmPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="edit('userForm')">{{ $t('headerList.Update') }}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { updatePassword } from '@/server/common'
export default {
    data() {
        var oldPasswordRules = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.userForm.confirmPassword !== '') {
                    this.$refs.userForm.validateField('confirmPassword');
                }
                callback();
            }
        };
        var passwordRules = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.userForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            userForm: {
                username: JSON.parse(localStorage.getItem('USERINFO')).username,
                confirmPassword: "",
                password: "",
            },
            rules: {
                password: [
                    { validator: oldPasswordRules, trigger: 'blur' }
                ],
                confirmPassword: [
                    { validator: passwordRules, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        edit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.updatePassword();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async updatePassword() {
            let params = {
                username: this.userForm.username,
                password: this.userForm.password,
            }
            let result = await updatePassword(params);
            if (result.code == 200) {
                this.$notify({
                    title: this.$t('headerList.PasswordChangedSuccessfully'),
                    type: 'success'
                });
                this.reset();
            }
        },
        reset() {
            this.userForm = {
                username: JSON.parse(localStorage.getItem('USERINFO')).username,
                confirmPassword: "",
                password: "",
            }
        }
    }
}
</script>

<style lang="less" scoped>
.setting {
    padding: 20px;


    .box-card {
        width: 100%;
        height: calc(100vh - 90px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

    }

    /deep/ .el-input__inner {
        // width: 240px;
    }
}
</style>