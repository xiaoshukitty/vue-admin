<template>
    <div>
        <div class="fule_login">
            <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="accountNumber"
                    :rules="[{ required: true, message: this.$t('loginI18n.PleaseInputUsername'), trigger: 'blur' },]">
                    <el-input v-model="ruleForm.accountNumber" :placeholder="$t('loginI18n.UserName')"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="eye_form"
                    :rules="[{ required: true, message: this.$t('loginI18n.PleaseInputPassword'), trigger: 'blur' },]">
                    <el-input v-model="ruleForm.password" :placeholder="$t('loginI18n.PassWord')"
                        :type="isShow ? 'text' : 'password'"></el-input>
                    <div class="eye" @click="updateShow">
                        <img v-if="isShow" src="@/assets/images/eye_show.png" alt="">
                        <img v-else src="@/assets/images/eye_hide.png" alt="">
                    </div>
                </el-form-item>
            </el-form>
            <div class="remember">
                <div class="remember_me">
                    <el-checkbox v-model="checked" size="medium">{{ $t('loginI18n.RememberMe') }}</el-checkbox>
                </div>
                <div class="disappointment">{{ $t('loginI18n.ForgetPasswodr') }}?</div>
            </div>
            <div class="login_btn">
                <el-button type="primary" :loading="loginLoading" @click="login">{{ $t('loginI18n.LogIn')
                }}</el-button>
            </div>
            <div class="other_btn">
                <el-button plain>{{ $t('loginI18n.MobileSignIn') }}</el-button>
                <el-button plain>{{ $t('loginI18n.QrCodeSignIn') }}</el-button>
                <el-button @click="goToSingIn" plain>{{ $t('loginI18n.SingIn') }}</el-button>
            </div>
            <div class="other_way">
                <span class="other_text">{{ $t('loginI18n.SignInWith') }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAccountNumber: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ruleForm: {
                accountNumber: 'admin',
                password: '123456',
            },
            loginLoading: false,
            checked: false,
            isShow: false,
        }
    },
    methods: {
        login() {
            if (!this.checked) {

            }
            if (this.ruleForm.accountNumber != 'admin' || this.ruleForm.password != '123456') {
                this.$alert(this.$t('headerList.IncorrectAccountOrPassword') + '!', this.$t('headerList.ErrorPrompt'), {
                    confirmButtonText: this.$t('headerList.Ok'),
                    type: 'warning',
                    showClose: false,
                });
                return
            }
            this.loginLoading = true;
            setTimeout(() => {
                this.$router.push('./homePage')
                this.$message({
                    type: 'success',
                    message: this.$t('headerList.LoginSuccessful'),
                });
            }, 1000)
        },
        updateShow() {
            this.isShow = !this.isShow;
        },
        goToSingIn() {
            this.$emit('updateAccountNumber', true)
        }
    }
}
</script>

<style lang="less" scoped>
.fule_login {
    width: 400px;
    margin: 0 50px;

    .eye_form {
        position: relative;
    }

    .remember {
        display: flex;
        justify-content: space-between;

        .remember_me {
            font-size: 16px !important;
        }

        .el-checkbox__label {
            color: rgba(0, 0, 0, 0.88);
            font-size: 16px !important;
        }

        .disappointment {
            color: #1677ff;
            cursor: pointer;
        }
    }

    .login_btn {
        margin: 20px 0;

        .el-button {
            width: 100%;
        }
    }

    .other_btn {
        display: flex;

        .el-button {
            flex: 1;
        }
    }

    .other_way {
        display: flex;
        margin: 20px 0;

        .other_text {
            display: inline-block;
            padding: 0 10px;
            width: 150px;
            font-weight: 700;
        }
    }

    .other_way::after {
        position: relative;
        width: 50%;
        border-block-start: 1px solid transparent;
        border-block-start-color: #e5e5e5;
        border-block-end: 0;
        transform: translateY(50%);
        content: '';
    }

    .other_way::before {
        position: relative;
        width: 50%;
        border-block-start: 1px solid transparent;
        border-block-start-color: #e5e5e5;
        border-block-end: 0;
        transform: translateY(50%);
        content: '';
    }
}


/deep/ .el-input__inner {
    width: 400px;
}

.eye {
    display: flex;
    align-content: center;
    position: absolute;
    top: 10px;
    right: 10px;

    img {
        width: 20px;
    }
}
</style>