<template>
  <div class="phone_login">
    <el-form ref="form" :model="phoneLoginForm">
      <el-form-item prop="phoneNumber"
                    :rules="[{ required: true, message: $t('phoneLoginI18n.PleaseInputPhoneNumber'), trigger: 'blur' },]">
        <el-input v-model="phoneLoginForm.phoneNumber" :placeholder="$t('phoneLoginI18n.MobilePhoneNumber')"></el-input>
      </el-form-item>
      <el-form-item prop="phoneVerificationCode"
                    :rules="[{ required: true, message: $t('phoneLoginI18n.PleaseInputSMSCode'), trigger: 'blur' },]">
        <div :class="codeShow ? 'flex_input2' : 'flex_input'">
          <el-input v-model="phoneLoginForm.phoneVerificationCode" :placeholder="$t('phoneLoginI18n.SMSCode')"></el-input>
          <el-button :disabled="codeShow" plain @click="getVerificationCode">{{ codeShow ?
              codeNum + 's' + $t('phoneLoginI18n.ReacquireIn') : $t('phoneLoginI18n.SMSCode') }}</el-button>
        </div>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button @click="submitForm('form')" type="primary">{{ $t('phoneLoginI18n.Login') }}</el-button>
      <el-button @click="goToBack" plain>{{ $t('phoneLoginI18n.BackPhoneLogin') }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneLogin",
  data() {
    return {
      phoneLoginForm: {
        phoneNumber: '',
        phoneVerificationCode: '',
      },
      codeShow: false,
      codeNum: 60,
      timer: null,
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setTimeout(() => {
            this.$router.push('./homePage')
            this.$message({
              type: 'success',
              message: this.$t('headerList.LoginSuccessful'),
            });
          }, 1000)
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
    goToBack() {
      this.$emit('toBack', 'login')
    }
  }
}
</script>

<style lang="less" scoped>
.phone_login {
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