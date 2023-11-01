<template>
    <div class="login">
        <div class="login_panel">
            <div class="flex">
                <div class='box'>
                    <div class="i18n">
                        <I18nComponents :status="'noHover'" />
                    </div>
                    <h2>{{ $t('loginI18n.LogIn') }}</h2>
                    <div class="fule_login">
                        <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item prop="accountNumber"
                                :rules="[{ required: true, message: this.$t('loginI18n.PleaseInputUsername'), trigger: 'blur' },]">
                                <el-input v-model="ruleForm.accountNumber"
                                    :placeholder="$t('loginI18n.UserName')"></el-input>
                            </el-form-item>
                            <el-form-item prop="password"
                                :rules="[{ required: true, message: this.$t('loginI18n.PleaseInputPassword'), trigger: 'blur' },]">
                                <el-input v-model="ruleForm.password" :placeholder="$t('loginI18n.PassWord')"></el-input>
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
                            <el-button plain>{{ $t('loginI18n.SingIn') }}</el-button>
                        </div>
                        <div class="other_way">
                            <span class="other_text">{{ $t('loginI18n.SignInWith') }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import I18nComponents from '@/components/i18nComponents'
export default {
    components: {
        I18nComponents
    },
    data() {
        return {
            ruleForm: {
                accountNumber: '',
                password: '',

            },
            loginLoading: false,
            checked: false,

        }
    },
    methods: {
        login() {
            this.loginLoading = true;
            setTimeout(() => {
                this.$router.push('./home')
            }, 1000)
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/images/bg.jpg');
    background-repeat: no-repeat;
    background-position: center;


    .login_panel {


        .i18n {
            display: flex;
            justify-content: flex-end;
        }

        .flex {
            display: flex;
            justify-content: flex-end;

            .box {
                background-color: rgba(255, 255, 255, 0.5);
                margin: 100px 200px;
                padding: 20px;

                h2 {
                    font-size: 32px;
                    font-weight: 700;
                }

                .fule_login {
                    width: 400px;
                    margin: 0 50px;

                    /deep/ .el-input__inner {
                        width: 400px;
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
            }
        }

    }
}
</style>