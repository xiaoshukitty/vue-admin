<template>
    <div class="fule_login">
        <el-form ref="form" :model="signInForm">
            <el-form-item prop="userName"
                :rules="[{ required: true, message: $t('signInI18n.PleaseInputUsername'), trigger: 'blur' },]">
                <el-input v-model="signInForm.userName" :placeholder="$t('signInI18n.Username')"></el-input>
            </el-form-item>
            <el-form-item prop="phoneNumber"
                :rules="[{ required: true, message: $t('signInI18n.PleaseInputPhoneNumber'), trigger: 'blur' },]">
                <el-input v-model="signInForm.phoneNumber" :placeholder="$t('signInI18n.Mobile')"></el-input>
            </el-form-item>
            <el-form-item prop="phoneVerificationCode"
                :rules="[{ required: true, message: $t('signInI18n.PleaseInputSMSCode'), trigger: 'blur' },]">
                <div :class="codeShow ? 'flex_input2' : 'flex_input'">
                    <el-input v-model="signInForm.phoneVerificationCode" :placeholder="$t('signInI18n.SMSCode')"></el-input>
                    <el-button :disabled="codeShow" plain @click="getVerificationCode">{{ codeShow ?
                        codeNum + 's' + $t('signInI18n.ReacquireIn') : $t('signInI18n.GetSMSCode') }}</el-button>
                </div>
            </el-form-item>
            <el-form-item prop="password"
                :rules="[{ required: true, message: $t('signInI18n.PleaseInputPassword'), trigger: 'blur' },]">
                <el-input v-model="signInForm.password" :placeholder="$t('signInI18n.Password')"
                    :type="isShowPassword ? 'text' : 'password'" clearable></el-input>
                <div class="eye" @click="updateShowPassword(1)">
                    <img v-if="isShowPassword" src="@/assets/images/eye_show.png" alt="">
                    <img v-else src="@/assets/images/eye_hide.png" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="password"
                :rules="[{ required: true, message: $t('signInI18n.TheTwoPasswordsAreInconsistent'), trigger: 'blur' },]">
                <el-input v-model="signInForm.confirmPassword" :placeholder="$t('signInI18n.ConfirmPassword')"
                    :type="isShowConfirmPassword ? 'text' : 'password'"></el-input>
                <div class="eye" @click="updateShowPassword(2)">
                    <img v-if="isShowConfirmPassword" src="@/assets/images/eye_show.png" alt="">
                    <img v-else src="@/assets/images/eye_hide.png" alt="">
                </div>
            </el-form-item>
        </el-form>
        <div class="remember">
            <div class="remember_me">
                <el-checkbox v-model="checked" size="medium">{{ $t('signInI18n.IAgreeToThexxxPrivacyPolicy')
                }}</el-checkbox>
            </div>
        </div>
        <div class="btn">
            <el-button @click="submitForm('form')" type="primary">{{ $t('signInI18n.SigIn') }}</el-button>
            <el-button @click="goToBack" plain>{{ $t('signInI18n.BackSigIn') }}</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            signInForm: {
                userName: '',
                phoneNumber: '',
                phoneVerificationCode: '',
                password: '',
                confirmPassword: '',
            },
            codeShow: false,
            codeNum: 60,
            timer: null,
            isShowPassword: false,
            isShowConfirmPassword: false,
            checked: '',
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 获取手机验证码
        getVerificationCode() {
            this.codeShow = true;
            this.timer = setInterval(() => {
                if (this.codeNum > 0) {
                    this.codeNum--;
                } else {
                    clearInterval(this.timer);
                    this.codeShow = false
                }
            }, 1000);
        },
        updateShowPassword(val) {
            if (val == 1) {
                this.isShowPassword = !this.isShowPassword
            } else {
                this.isShowConfirmPassword = !this.isShowConfirmPassword
            }
        },
        goToBack() {
            this.$emit('toBack', 'login')
        }
    }
}
</script>

<style lang="less" scoped>
.fule_login {
    width: 400px;
    margin: 0 50px;

    /deep/ .el-input__inner {
        width: 400px;
    }

    .flex_input {
        display: flex;

        /deep/ .el-input__inner {
            width: 280px !important;
        }
    }

    .flex_input2 {
        display: flex;

        /deep/ .el-input__inner {
            width: 250px !important;
        }
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

    .btn {
        padding-bottom: 20px;
        .el-button {
            width: 100%;
            margin-top: 15px;
        }

        /deep/ .el-button {
            margin-left: 0;
        }
    }

}

/deep/ .el-input__suffix {
    margin-right: 25px;
}
</style>