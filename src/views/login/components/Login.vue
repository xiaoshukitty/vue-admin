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
        <el-button type="primary" :loading="loginLoading" @click="login">{{
          $t('loginI18n.LogIn')
        }}
        </el-button>
      </div>
      <div class="other_btn">
        <el-button @click="toBack('phoneLogin')" plain>{{ $t('loginI18n.MobileSignIn') }}</el-button>
        <el-button @click="toBack('qrCodeLogin')" plain>{{ $t('loginI18n.QrCodeSignIn') }}</el-button>
        <el-button @click="toBack('signIn')" plain>{{ $t('loginI18n.SingIn') }}</el-button>
      </div>
      <div class="other_way">
        <span class="other_text">{{ $t('loginI18n.SignInWith') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/server/common'
export default {
  props: {
    userInfo: {
      type: Object
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
  created() {
    if (JSON.stringify(this.userInfo) != '{}') {
      let { username, password } = this.userInfo;
      this.ruleForm = {
        accountNumber: username,
        password: password,
      }
    }

  },
  methods: {
    async login() {
      if (!this.checked) {
        this.$message.error(this.$t('headerList.PleaseCheckRememberMe'));
        return
      }
      this.loginLoading = true;
      let params = {
        username: this.ruleForm.accountNumber,
        password: this.ruleForm.password
      }
      const reslut = await userLogin(params)
      if (reslut.code == 200) {
        this.$store.commit('setToken', {
          token: reslut.token
        })
        localStorage.setItem('USERINFO', JSON.stringify({
          username: this.ruleForm.accountNumber,
          password: this.ruleForm.password
        }))
        localStorage.setItem('TOKEN', reslut.token);
        setTimeout(() => {
          this.$router.push('./homePage')
          this.$notify({
            title: this.$t('headerList.LoginSuccessful'),
            message: `Hi,${this.getTime()}`,
            type: 'success'
          });
          this.loginLoading = false;
        }, 1000)
      } else {
        const getResponseCode = (code) => {
          let responseCode = new Map([
            [300, this.$t('headerList.UsernameError')],
            [400, this.$t('headerList.PasswordError')],
          ]);
          return responseCode.get(code)
        }
        this.$message.error(getResponseCode(reslut.code));
        this.loginLoading = false;
      }
    },
    updateShow() {
      this.isShow = !this.isShow;
    },
    toBack(val) {
      this.$emit('skip', val)
    },
    // 封装函数：获取 早上｜下午｜上午｜晚上
    getTime() {
      let message = ''
      let hours = new Date().getHours()
      if (hours <= 12) {
        message = this.$t('headerList.GoodMorning')
      } else if (hours < 18) {
        message = this.$t('headerList.GoodAfternoon')
      } else {
        message = this.$t('headerList.GoodEvening')
      }
      return message
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