<template>
  <div class="login">
    <div class="login_panel">
      <div class="flex">
        <div class='box'>
          <div class="i18n">
            <I18nComponents :status="'noHover'" />
          </div>
          <!--          <div class="title">{{ isAccountNumber ? $t('signInI18n.SigIn') : $t('loginI18n.LogIn') }}</div>-->
          <div class="title" v-if="isAccountNumber == 'login'">{{ $t('loginI18n.LogIn') }}</div>
          <div class="title" v-if="isAccountNumber == 'signIn'">{{ $t('signInI18n.SigIn') }}</div>
          <div class="title" v-if="isAccountNumber == 'phoneLogin'">{{ $t('phoneLoginI18n.PhoneLogin') }}</div>
          <div class="title" v-if="isAccountNumber == 'qrCodeLogin'">{{ $t('qrCodeI18m.QrCodeLogin') }}</div>
          <Login @skip="skip" :userInfo="userInfo" v-if="isAccountNumber == 'login'" />
          <!-- <transition name="fade"> -->
          <SigIn @toBack="toBack" @newUserInfo="newUserInfo" v-if="isAccountNumber == 'signIn'" />
          <PhoneLogin @toBack="toBack" v-if="isAccountNumber == 'phoneLogin'" />
          <QrCodeLogin @toBack="toBack" v-if="isAccountNumber == 'qrCodeLogin'" />
          <!-- </transition> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import I18nComponents from '@/components/i18nComponents'
import Login from './components/Login.vue'
import SigIn from './components/SignIn.vue'
import PhoneLogin from "@/views/login/components/PhoneLogin.vue";
import QrCodeLogin from "@/views/login/components/QrCodeLogin.vue";

export default {
  components: {
    I18nComponents,
    Login,
    SigIn,
    PhoneLogin,
    QrCodeLogin
  },
  data() {
    return {
      isAccountNumber: 'login',
      userInfo: {}
    }
  },
  mounted() {
    // 移除 Loading 效果
    const appContainer = document.querySelector('#app');
    const loadingContainer = document.querySelector('#loading-mask');
    loadingContainer && appContainer.removeChild(loadingContainer);
  },
  methods: {
    skip(val) {
      this.isAccountNumber = val;
    },
    toBack(val) {
      this.isAccountNumber = val;
    },
    newUserInfo(val) {
      console.log(val);
      this.userInfo = val
      this.isAccountNumber = 'login';
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
  background-size: cover;


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
        overflow: hidden;

        .title {
          font-size: 32px;
          font-weight: 700;
          padding: 5px 20px 20px;
        }
      }
    }

  }
}

/* 配置过度动画 */
// .fade-enter-active,
// .fade-leave-active {
//   transition: all .8s ease;
// }

// .slide-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

// .fade-enter,
// .fade-leave-to {
//   transform: translateX(10px);
//   opacity: 0;
// }</style>