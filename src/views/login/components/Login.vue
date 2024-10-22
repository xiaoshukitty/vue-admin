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
        <el-form-item class="yzm_box" prop="yzmIpt"
          :rules="[{ required: true, message: this.$t('loginI18n.PleaseEnterTheVerificationCode'), trigger: 'blur' },]">
          <div class="container_box">
            <div id="v_yzm" @click="change"></div>
            <el-input class="ipt" v-model="ruleForm.yzmIpt" size='small'></el-input>
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
        <el-button type="primary" :loading="loginLoading" @click="login('ruleForm')">{{
          !loginLoading ? $t('loginI18n.LogIn') : $t('loginI18n.BeLoggingIn')
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
//引入 jwt-decode 解析token
import { jwtDecode } from "jwt-decode";
import { userLogin } from '@/server/common'
import { Code } from '@/utils/verificationCode'
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
        yzmIpt: '',//输入框绑定的值
      },
      loginLoading: false,
      checked: true,
      isShow: false,
      yzmCode: '',//验证码
      picture: '',//图片

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
    document.addEventListener("keyup", this.keyDown);
  },
  mounted() {
    this.yzmCode = new Code('v_yzm');
    this.picture = this.yzmCode.options.code;
  },
  destroyed() {
    document.removeEventListener("keyup", this.enterKey);
  },
  methods: {
    keyDown(e) {
      if (e.keyCode === 13) {
        this.passVerification();
      }
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.passVerification();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async passVerification() {
      console.log('1', this.yzmCode.options.code);
      console.log('2', this.ruleForm.yzmIpt);
      if (this.ruleForm.yzmIpt == '') {
        this.$message.error(this.$t('loginI18n.TheVerificationCodeCannotBeEmpty'));
        return
      }
      if (this.yzmCode.options.code != this.ruleForm.yzmIpt) {
        this.$message.error(this.$t('loginI18n.VerificationCodeError'));
        return
      }
      if (!this.checked) {
        this.$message.error(this.$t('headerList.PleaseCheckRememberMe'));
        return
      }
      this.loginLoading = true;
      let params = {
        username: this.ruleForm.accountNumber,
        password: this.ruleForm.password
      }
      let redirect = this.$route.query.redirect;

      // 打包的时候放开，设置假的 token
      // @uncomment sessionStorage.setItem('TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAyNTQ3NjM1LCJleHAiOjE3MDI1NTEyMzV9.9rT1tptioYKHK9HhWHr_duAZ0An_BFaafRd01XBSojA');
      // @uncomment setTimeout(() => {
      // @uncomment   this.$router.push({ path: redirect || '/' })
      // @uncomment   this.$notify({
      // @uncomment     title: this.$t('headerList.LoginSuccessful'),
      // @uncomment     message: `Hi,${this.getTime()}`,
      // @uncomment     type: 'success'
      // @uncomment   });
      // @uncomment   this.loginLoading = false;
      // @uncomment }, 1000)
      // @uncomment return


      const result = await userLogin(params)
      console.log('result---', result);
      if (result.code == 200) {
        this.$store.commit('setToken', {
          token: result.token
        })
        localStorage.setItem('USERINFO', JSON.stringify({
          username: this.ruleForm.accountNumber,
          password: this.ruleForm.password
        }))
        sessionStorage.setItem('TOKEN', result.token);
        //获取token中时间戳过期时间
        const tokenInfo = jwtDecode(result.token);
        sessionStorage.setItem('TOKENINFO', JSON.stringify(tokenInfo));

        setTimeout(() => {
          // this.$router.push('./homePage')
          this.$router.push({ path: redirect || '/' })
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
            ["ERR_NETWORK", this.$t('headerList.ServerNotLinked')]
          ]);
          return responseCode.get(code)
        }
        this.$message.error(getResponseCode(result.code));
        this.loginLoading = false;
      }
    },
    updateShow() {
      this.isShow = !this.isShow;
    },
    toBack(val) {
      this.$emit('skip', val)
    },
    change() {
      this.picture = this.yzmCode.options.code.substring(
        this.yzmCode.options.code.length - 4
      );
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

  .yzm_box {
    .container_box {
      display: flex;

      /deep/.el-input__inner {
        width: 230px;
        height: 40px;
        margin-left: 30px;
      }
    }

    /deep/ .el-form-item__error {
      left: 170px;
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